'use client'

import { useCallback, useState } from 'react';
import AnimatedButton from '../../components/ui/Button';
import { GoogleIcon } from '../../assets/icons';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { SuiClient } from '@mysten/sui/client';
import { generateNonce, generateRandomness } from '@mysten/sui/zklogin';
import { storeSessionData } from '../../lib/zkLoginUtils';

export default function ZkLoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI || '/auth/callback';
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const FULLNODE_URL = process.env.NEXT_PUBLIC_FULLNODE_URL;

  if (!REDIRECT_URI || !CLIENT_ID || !FULLNODE_URL) {
    throw new Error("Missing required environment variables");
  }

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

      console.log(nonce);
      

      storeSessionData({
        ephemeralKeyPair: ephemeralKeyPair.getSecretKey(),
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
  }, []);

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

  return (
    <div className="zk-login-container w-full">
      {error && <div className="error-message">{error}</div>}

      <AnimatedButton
        icon={<GoogleIcon />}
        disabled={isLoading}
        variant="secondary"
        onClick={initiateOAuthFlow}
        className="login-button w-full shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
      >
        {isLoading ? 'Loading...' : 'Continue with Google'}
      </AnimatedButton>
    </div>
  );
}