import React from "react";
import { Box } from "@mui/material";

const ShimmerEffect = () => {
  return (
    <Box sx={{ width: "100%", height: "500px", position: "relative" }}>
      {/* Repeat the below Box for as many rows as you want to simulate */}
      <Box
        sx={{
          bgcolor: "#f0f0f0",
          height: "48px",
          margin: "8px 0",
          overflow: "hidden",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #e0e0e0, transparent)",
            animation: "shimmer 2s infinite",
          },
        }}
      />
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </Box>
  );
};
export default ShimmerEffect;
