'use client'

import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateNonce, generateRandomness, jwtToAddress } from '@mysten/sui/zklogin';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { SuiClient } from '@mysten/sui/client';
import { jwtDecode } from 'jwt-decode';
import { getExtendedEphemeralPublicKey } from "@mysten/sui/zklogin";
import axios from 'axios';
import AnimatedButton from '../../components/ui/Button';
import { GoogleIcon } from '../../assets/icons';

interface JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

interface ZkLoginSessionData {
  ephemeralKeyPair: string;
  randomness: string;
  maxEpoch: number;
}

interface ZkProofResult {
  proof: any; // Replace with proper type from @mysten/sui/zklogin if available
  ephemeralKeyPair: Ed25519Keypair;
  maxEpoch: number;
  jwt: string;
}

const REDIRECT_URI = 'https://localhost:5173/auth/callback/';
const CLIENT_ID = '1077253589644-vs9mrd60a0v10b50mlq6u1ok0qdk7js3.apps.googleusercontent.com';
const FULLNODE_URL = 'https://fullnode.devnet.sui.io';
const PROVER_URL = 'https://prover-dev.mystenlabs.com/v1';

function ZkLoginButton() {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Helper to store session data
  const storeSessionData = useCallback((data: ZkLoginSessionData) => {
    try {
      sessionStorage.setItem('zklogin-keypair', data.ephemeralKeyPair);
      sessionStorage.setItem('zklogin-randomness', data.randomness);
      sessionStorage.setItem('zklogin-maxEpoch', data.maxEpoch.toString());
    } catch (e) {
      console.error('Failed to store session data:', e);
      throw new Error('Session storage unavailable');
    }
  }, []);

  // Helper to retrieve session data
  const getSessionData = useCallback((): ZkLoginSessionData | null => {
    try {
      const ephemeralKeyPairHex = sessionStorage.getItem('zklogin-keypair');
      const randomness = sessionStorage.getItem('zklogin-randomness');
      const maxEpoch = sessionStorage.getItem('zklogin-maxEpoch');

      if (!ephemeralKeyPairHex || !randomness || !maxEpoch) {
        return null;
      }

      return {
        ephemeralKeyPair: ephemeralKeyPairHex,
        randomness,
        maxEpoch: Number(maxEpoch),
      };
    } catch (e) {
      console.error('Failed to retrieve session data:', e);
      return null;
    }
  }, []);


  // Step 1: Generate ZkLogin nonce and setup ephemeral key
  const generateZkLoginNonce = useCallback(async (): Promise<{
    nonce: string;
    ephemeralKeyPair: Ed25519Keypair;
    randomness: string;
    maxEpoch: number;
  }> => {
    setIsLoading(true);
    setError(null);

    try {
      const suiClient = new SuiClient({ url: FULLNODE_URL });
      const { epoch } = await suiClient.getLatestSuiSystemState();

      const maxEpoch = Number(epoch) + 2;
      const ephemeralKeyPair = new Ed25519Keypair();
      const randomness = generateRandomness();
      const ephemeralPublicKey = ephemeralKeyPair.getPublicKey();
      const nonce = generateNonce(ephemeralPublicKey, maxEpoch, randomness);

      storeSessionData({
        ephemeralKeyPair: Array.from(ephemeralKeyPair.getSecretKey()).join(','),
        randomness,
        maxEpoch
      });

      return { nonce, ephemeralKeyPair, randomness, maxEpoch };
    } catch (error) {
      console.error('Failed to generate ZkLogin nonce:', error);
      setError('Failed to initialize login session');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [storeSessionData]);

  // Step 2: Initiate OAuth flow
  const initiateOAuthFlow = useCallback(async () => {
    try {
      const { nonce } = await generateZkLoginNonce();

      const params = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: window.location.origin + REDIRECT_URI,
        response_type: 'id_token',
        scope: 'openid',
        nonce: nonce,
      });

      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    } catch (error) {
      console.error('OAuth initiation failed:', error);
      setError('Failed to initiate login process');
    }
  }, [generateZkLoginNonce]);

  // Step 3: Handle OAuth callback and generate user address
  const handleOAuthCallback = useCallback((): string | null => {
    setIsLoading(true);
    setError(null);

    try {
      const urlParams = new URLSearchParams(window.location.hash.substring(1));
      const idToken = urlParams.get('id_token');

      if (!idToken) {
        setError('No ID token found in URL');
        return null;
      }

      const sessionData = getSessionData();
      if (!sessionData) {
        setError('Session data not found');
        return null;
      }

      const decodedJwt = jwtDecode<JwtPayload>(idToken);
      if (!decodedJwt.sub) {
        setError('Invalid JWT: missing sub claim');
        return null;
      }

      const zkLoginUserAddress = jwtToAddress(idToken, sessionData.randomness);
      console.log(zkLoginUserAddress);
      
      setUserAddress(zkLoginUserAddress);

      // Clean up URL
      window.history.pushState({}, document.title, window.location.pathname);

      return zkLoginUserAddress;
    } catch (error) {
      console.error('Failed to handle OAuth callback:', error);
      setError('Failed to process login response');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [getSessionData]);

  // Step 4: Fetch ZK Proof
  const fetchZkProof = useCallback(async (jwt: string): Promise<ZkProofResult> => {
    setIsLoading(true);
    setError(null);

    try {
      const sessionData = getSessionData();
      if (!sessionData) {
        throw new Error('Session data not found');
      }

      const secretKeyBytes = new Uint8Array(
        sessionData.ephemeralKeyPair.split(',').map(Number)
      );
      const ephemeralKeyPair = Ed25519Keypair.fromSecretKey(secretKeyBytes);

      const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(ephemeralKeyPair.getPublicKey());

      const response = await axios.post(
        PROVER_URL,
        {
          jwt,
          extendedEphemeralPublicKey,
          maxEpoch: sessionData.maxEpoch,
          jwtRandomness: sessionData.randomness,
          keyClaimName: "sub",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return {
        proof: response.data,
        ephemeralKeyPair,
        maxEpoch: sessionData.maxEpoch,
        jwt,
      };
    } catch (error) {
      console.error('Failed to fetch ZK proof:', error);
      setError('Failed to generate zero-knowledge proof');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [getSessionData]);

  // Step 5: Complete zkLogin flow
  const completeZkLoginFlow = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Handle callback if we have an ID token in the URL
      if (window.location.hash.includes('id_token')) {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        const idToken = urlParams.get('id_token');

        if (!idToken) {
          throw new Error('No ID token found');
        }

        const address = handleOAuthCallback();
        if (!address) {
          throw new Error('Failed to process login');
        }

        const zkProof = await fetchZkProof(idToken);
        // Here you would typically assemble the signature and proceed with authentication
        console.log('ZK Proof obtained:', zkProof);

        // Navigate to authenticated area
        navigate('/events');
      } else {
        // Start new login flow
        await initiateOAuthFlow();
      }
    } catch (error) {
      console.error('ZKLogin flow failed:', error);
      setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  }, [handleOAuthCallback, fetchZkProof, initiateOAuthFlow, navigate]);

  // Check for OAuth callback on component mount
  useEffect(() => {
    if (window.location.hash.includes('id_token')) {
      completeZkLoginFlow();
    }
  }, [completeZkLoginFlow]);

  return (
    <div className="zk-login-container w-full">
      {error && <div className="error-message">{error}</div>}

      {!userAddress ? (
        <AnimatedButton
          icon={<GoogleIcon />}
          disabled={isLoading}
          variant="secondary"
          onClick={initiateOAuthFlow}
          className="login-button w-full shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
        >
          {isLoading ? 'Loading...' : 'Continue with Google'}
        </AnimatedButton>

      ) : (
        <div className="user-info">
          <p>Connected as: {truncateAddress(userAddress)}</p>
          <button
            onClick={completeZkLoginFlow}
            disabled={isLoading}
            className="complete-button"
          >
            {isLoading ? 'Processing...' : 'Complete Setup'}
          </button>
        </div>
      )}
    </div>
  );
}

// Helper function to truncate address for display
function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default ZkLoginButton;