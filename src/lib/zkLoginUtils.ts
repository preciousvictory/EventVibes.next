// src/utils/zkLoginUtils.ts
import { ZkLoginSessionData } from '../types';

export const storeSessionData = (data: ZkLoginSessionData) => { 
  try {
    sessionStorage.setItem('zklogin-keypair', data.ephemeralKeyPair); 
    sessionStorage.setItem('zklogin-randomness', data.randomness);
    sessionStorage.setItem('zklogin-maxEpoch', data.maxEpoch.toString());
  } catch (e) {
    console.error('Failed to store session data:', e);
    throw new Error('Session storage unavailable');
  }
};

export const getSessionData = (): ZkLoginSessionData | null => {
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
};