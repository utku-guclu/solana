import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  listing: {
    id: string;
    title: string;
    price: number;
  };
  onPurchase: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PurchaseModal: React.FC<PurchaseModalProps> = ({
  open,
  onClose,
  listing,
  onPurchase,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="purchase-modal-title"
      aria-describedby="purchase-modal-description"
    >
      <Box sx={style}>
        <Typography id="purchase-modal-title" variant="h6" component="h2">
          Confirm Purchase
        </Typography>
        <Typography id="purchase-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to purchase "{listing.title}" for{" "}
          {listing.price} SOL?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={onPurchase} variant="contained">
            Confirm Purchase
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PurchaseModal;
