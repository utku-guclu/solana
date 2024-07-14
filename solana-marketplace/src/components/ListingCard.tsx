import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  price,
  imageUrl,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price} SOL
        </Typography>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
