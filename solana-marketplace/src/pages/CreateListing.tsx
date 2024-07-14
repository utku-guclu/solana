import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { createListing } from "../utils/solana";

const CreateListing: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { publicKey, signTransaction } = useWallet();

  const clearFields = () => {
    setTitle("");
    setPrice("");
    setImageUrl("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!publicKey) {
      alert("Please connect your wallet first");
      return;
    }
    try {
      const txId = await createListing(title, parseFloat(price), publicKey);
      console.log("Listing created with transaction ID:", txId);
      // Handle success (e.g., show a success message, redirect to the listing page)
    } catch (error) {
      console.error("Error creating listing:", error);
      // Handle error (e.g., show an error message)
    }

    clearFields();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Listing
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Price (SOL)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Listing
        </Button>
      </form>
    </Container>
  );
};

export default CreateListing;
