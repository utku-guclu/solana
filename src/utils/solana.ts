// src/utils/solana.ts
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export async function requestAirdrop(
  publicKey: PublicKey,
  connection: Connection,
) {
  try {
    const airdropSignature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropSignature);
    console.log("Airdrop successful");
  } catch (error) {
    console.error("Error requesting airdrop:", error);
    throw error;
  }
}
