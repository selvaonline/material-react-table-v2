import { Box } from '@mui/material';
import React from 'react';

// LED Button-like component
const LedButton = ({ isOn }) => {
  const ledStyle = {
    display: 'inline-block',
    width: '20px',
    height: '10px',
    borderRadius: '5px', // Adjust for rounded corners
    background: isOn ? '#635DFF' : '#ccc', // LED "on" color
    boxShadow: isOn ? '0 0 8px #635DFF' : 'none', // Glow effect for "on" state
    transition: 'all 0.3s ease',
    margin: '0 5px', // Center in cell, adjust as needed
  };

  return <div style={ledStyle} />;
};

// Usage in a column definition
{
  accessorKey: 'ledIndicator',
  header: 'LED Indicator',
  Cell: ({ cell: { value } }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LedButton isOn={value === 'Active'} /> // Replace 'Active' with your condition
    </Box>
  ),
}
