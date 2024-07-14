import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const ListingDetails: React.FC = () => {
  // Update the useParams call
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app, we'd fetch this data based on the id
  const listing = {
    id,
    title: "Sample NFT",
    price: 1.5,
    imageUrl: "https://via.placeholder.com/300",
    description: "This is a sample NFT listing.",
  };

  const handlePurchase = () => {
    // Here we'll add the logic to purchase the NFT
    console.log("Purchasing NFT:", listing.id);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {listing.title}
      </Typography>
      <img
        src={listing.imageUrl}
        alt={listing.title}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography variant="body1" paragraph>
        {listing.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Price: {listing.price} SOL
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePurchase}>
        Purchase
      </Button>
    </Container>
  );
};

export default ListingDetails;
