import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import ListingCard from "../components/ListingCard";

// Mock data for listings
const mockListings = [
  {
    id: "1",
    title: "NFT 1",
    price: 1.5,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "NFT 2",
    price: 2.0,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "NFT 3",
    price: 1.8,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Solana Marketplace
      </Typography>
      <Typography variant="body1" gutterBottom>
        Browse and purchase unique digital assets on the Solana blockchain.
      </Typography>
      <Grid container spacing={3}>
        {mockListings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <ListingCard {...listing} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
