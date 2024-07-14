import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const UserDashboard: React.FC = () => {
  // Mock data for user's listings
  const userListings = [
    { id: "1", title: "My NFT 1", price: 1.5 },
    { id: "2", title: "My NFT 2", price: 2.0 },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your Listings:
      </Typography>
      <List>
        {userListings.map((listing) => (
          <ListItem key={listing.id}>
            <ListItemText
              primary={listing.title}
              secondary={`Price: ${listing.price} SOL`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserDashboard;
