import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useData } from "../context/DataContext"; // Custom hook to fetch cryptocurrency and blockchain data
import { useConnection, useWallet } from "@solana/wallet-adapter-react"; // Solana wallet connection hooks
import { LAMPORTS_PER_SOL } from "@solana/web3.js"; // Solana constant for lamports to SOL conversion
import { requestAirdrop } from "../utils/solana"; // Custom function to request airdrop on Solana network
import Chart from "../components/Chart"; // Custom Chart component to display data

const Dashboard: React.FC = () => {
  // Fetch data from the custom DataContext
  const { coinData, blockchainData, loading, error } = useData();
  // Solana connection and wallet public key
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  // State to store balance in SOL
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // State to store balance history for charting
  const [balanceHistory, setBalanceHistory] = useState<
    { time: number; balance: number }[]
  >([]);

  // Function to update the wallet balance
  const updateBalance = useCallback(async () => {
    if (publicKey) {
      // Fetch balance in lamports and convert to SOL
      const balance = await connection.getBalance(publicKey);
      const newBalance = balance / LAMPORTS_PER_SOL;
      setBalance(newBalance);
      // Add the new balance to balance history
      setBalanceHistory((prev) => [
        ...prev,
        { time: Date.now(), balance: newBalance },
      ]);
    }
  }, [publicKey, connection]);

  // Effect to update balance on component mount and every minute
  useEffect(() => {
    if (publicKey) {
      updateBalance();
      const interval = setInterval(updateBalance, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [publicKey, updateBalance]);

  // Function to handle airdrop request
  const handleAirdrop = async () => {
    if (publicKey) {
      try {
        setIsLoading(true);
        await requestAirdrop(publicKey, connection); // Request airdrop
        await updateBalance(); // Update balance after airdrop
        alert("Airdrop successful!"); // Show success message
      } catch (error) {
        // Handle error during airdrop request
        if (
          error instanceof Error &&
          error.message.includes("You have requested too many airdrops")
        ) {
          alert(
            "You have requested too many airdrops. Please wait 24 hours before trying again.",
          );
        } else {
          alert("Failed to request airdrop. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  // Format coin data for charting
  const formatCoinData =
    coinData?.map((coin) => ({
      name: coin.symbol,
      price: parseFloat(coin.priceUsd),
      marketCap: parseFloat(coin.marketCapUsd) / 1e9, // Convert to billions
    })) || [];

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Crypto & Blockchain Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  <u> Wallet Information</u>
                </Typography>
                {publicKey ? (
                  <>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "100%",
                      }}
                    >
                      <strong>Address:</strong>
                      {publicKey.toBase58()}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Balance:</strong>{" "}
                      {balance !== null ? `${balance} SOL` : "Loading..."}
                    </Typography>
                    {isLoading || loading ? (
                      <CircularProgress />
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAirdrop}
                      >
                        Request Airdrop
                      </Button>
                    )}
                  </>
                ) : (
                  <Typography color="textSecondary">
                    Please connect your wallet
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  <u> Bitcoin Network Statistics</u>
                </Typography>
                {blockchainData && (
                  <Box>
                    <Typography variant="body1" gutterBottom>
                      <strong>Market Price:</strong> $
                      {blockchainData.market_price_usd.toFixed(2)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Hash Rate:</strong>{" "}
                      {blockchainData.hash_rate.toFixed(2)} GH/s
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Total BTC in circulation:</strong>{" "}
                      {blockchainData.totalbc / 100000000}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Difficulty:</strong> {blockchainData.difficulty}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Estimated Transaction Volume:</strong> $
                      {blockchainData.estimated_transaction_volume_usd.toFixed(
                        2,
                      )}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={1}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Wallet Balance History
                </Typography>
                {publicKey ? (
                  <Chart
                    data={balanceHistory}
                    xDataKey="time"
                    yDataKey="balance"
                    xTickFormatter={(unixTime) =>
                      new Date(unixTime).toLocaleTimeString()
                    }
                    yTickFormatter={(value) => `${value.toFixed(2)} SOL`}
                  />
                ) : (
                  <Typography color="textSecondary">
                    Please connect your wallet
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={1}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Top Cryptocurrencies
                </Typography>
                <Chart
                  data={formatCoinData}
                  xDataKey="name"
                  yDataKey="price"
                  yTickFormatter={(value) => `$${value.toFixed(2)}`}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
