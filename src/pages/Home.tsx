import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Crypto Explorer
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Your gateway to the world of cryptocurrencies and blockchain
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/dashboard"
          >
            Explore Dashboard
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
