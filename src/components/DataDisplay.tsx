import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface DataDisplayProps {
  title: string;
  data: any;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ title, data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Box
          component="pre"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            padding: 2,
            borderRadius: 1,
            overflow: "auto",
            fontSize: "0.875rem",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DataDisplay;
