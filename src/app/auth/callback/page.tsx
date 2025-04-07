'use client'

import { useCallback, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { getExtendedEphemeralPublicKey, jwtToAddress } from '@mysten/sui/zklogin';
import axios from 'axios';
import { ZkProofResult } from '../../../types';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { getSessionData } from '../../../lib/zkLoginUtils';
import { useRouter } from 'next/navigation';

export default function ZkLoginCallback() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userAddress, setUserAddress] = useState<string | null>(null);
    const router = useRouter();

    const FULLNODE_URL = process.env.NEXT_PUBLIC_FULLNODE_URL;
    const PROVER_URL = process.env.NEXT_PUBLIC_PROVER_URL;

    if (!FULLNODE_URL || !PROVER_URL) {
        throw new Error("Missing required environment variables");
    }

    // Step 3: Handle OAuth callback and generate user address
    const handleOAuthCallback = useCallback(async () => {
        try {
            const urlParams = new URLSearchParams(window.location.hash.substring(1));
            const idToken = urlParams.get('id_token');
            if (!idToken) throw new Error('No ID token found');

            const sessionData = getSessionData();
            if (!sessionData) throw new Error('Session data not found');

            // const jwtPayload = jwtDecode(id_token);

            const decodedJwt = jwtDecode(idToken);
            if (!decodedJwt.sub) throw new Error('Missing sub claim');

            const zkLoginUserAddress = jwtToAddress(idToken, sessionData.randomness);
            // console.log(zkLoginUserAddress);

            setUserAddress(zkLoginUserAddress);
            if (userAddress !== null) {
              localStorage.setItem('zkLoginUserAddress', userAddress);
            }

            return zkLoginUserAddress
        } catch (error) {
            console.error('Callback failed:', error);
            setError(error instanceof Error ? error.message : 'Login failed');
            return null;
        }
    }, []);

    const getSalt = async (token: string): Promise<string> => {
        try {
          const response = await axios.post('/api/get-salt', { token }, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000
          });
      
          if (!response.data?.salt) {
            throw new Error('Invalid salt response');
          }
      
          return response.data.salt;
        } catch (error) {
          console.error('Error fetching salt:', error);
          throw new Error(
            axios.isAxiosError(error) 
              ? error.response?.data?.error || error.message || 'Failed to fetch salt'
              : 'Network error'
          );
        }
      };

    // Step 4: Fetch ZK Proof
    const fetchZkProof = useCallback(async (jwt: string): Promise<ZkProofResult> => {
        try {
          const sessionData = getSessionData();
          if (!sessionData) throw new Error('Session data not found');
      
          const ephemeralKeyPair = Ed25519Keypair.fromSecretKey(sessionData.ephemeralKeyPair);
          const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(ephemeralKeyPair.getPublicKey());
      
          const salt = await getSalt(jwt);
      
          // Add proper authentication headers
          const response = await axios.post(
            process.env.NEXT_PUBLIC_PROVER_URL!,
            {
              jwt,
              extendedEphemeralPublicKey,
              maxEpoch: sessionData.maxEpoch,
              jwtRandomness: sessionData.randomness,
              salt,
              keyClaimName: "sub",
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.PROVER_API_KEY}`,
              },
              timeout: 30000
            }
          );
      
          return {
            proof: response.data,
            ephemeralKeyPair,
            maxEpoch: sessionData.maxEpoch,
            jwt,
          };
        } catch (error) {
          console.error('Full ZK proof fetch error:', error);
          throw new Error(
            axios.isAxiosError(error)
              ? `Prover error: ${error.response?.data?.error || error.message}`
              : 'Failed to generate zero-knowledge proof'
          );
        }
      }, []);
      
    // Step 5: Complete zkLogin flow
    const completeZkLoginFlow = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (window.location.hash.includes('id_token')) {
                const address = await handleOAuthCallback();
                if (!address) throw new Error('Failed to process login');

                const urlParams = new URLSearchParams(window.location.hash.substring(1));
                const idToken = urlParams.get('id_token');
                if (!idToken) throw new Error('No ID token found');

                const zkProof = await fetchZkProof(idToken);
                console.log('ZK Proof obtained:', zkProof);
                router.push('/events');
            } else {
                router.push('/login');
            }
        } catch (error) {
            console.error('ZKLogin flow failed:', error);
            setError(error instanceof Error ? error.message : 'Login failed');
        } finally {
            setIsLoading(false);
        }
    }, [handleOAuthCallback, fetchZkProof, router]);

    useEffect(() => {
        if (window.location.hash.includes('id_token')) {
            completeZkLoginFlow();
        }
    }, [completeZkLoginFlow]);

    if (isLoading) {
        return <div>Processing login...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return null;
}

