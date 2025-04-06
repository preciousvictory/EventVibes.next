import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

export interface JwtPayload {
    iss?: string;
    sub?: string;
    aud?: string[] | string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
  }
  
  export interface ZkLoginSessionData {
    ephemeralKeyPair: string;
    randomness: string;
    maxEpoch: number;
  }
  
  export interface ZkProofResult {
    proof: any; // Replace with proper type from @mysten/sui/zklogin if available
    ephemeralKeyPair: Ed25519Keypair;
    maxEpoch: number;
    jwt: string;
  }

  export interface SaltRequest {
    token: string;
  }
  
  export interface SaltResponse {
    salt: string;
  }
  
  export interface ApiError {
    error: string;
  }