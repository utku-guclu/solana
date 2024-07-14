import React, { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";

import { requestAirdrop } from "./utils/solana";

const TestnetTester: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (publicKey) {
      updateBalance();
    }
  }, [publicKey, connection]);

  const updateBalance = async () => {
    if (publicKey) {
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }
  };

  const handleAirdrop = async () => {
    if (publicKey) {
      await requestAirdrop(publicKey, connection);
      await updateBalance();
    }
  };

  const handleTestTransaction = async () => {
    if (publicKey) {
      await testTransaction(publicKey, connection);
      await updateBalance();
    }
  };

  const testTransaction = async (publicKey: PublicKey, connection: any) => {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey, // Sending to the same address
        lamports: 1 * LAMPORTS_PER_SOL, // 1 SOL
      }),
    );

    await sendTransaction(transaction, connection);
  };

  if (!publicKey) {
    return <div>Please connect your wallet</div>;
  }

  return (
    <div>
      <h2>Testnet Tester</h2>
      <p>Your balance: {balance !== null ? `${balance} SOL` : "Loading..."}</p>
      <button onClick={handleAirdrop}>Request Airdrop</button>
      <button onClick={handleTestTransaction}>Test Transaction</button>
    </div>
  );
};

export default TestnetTester;
