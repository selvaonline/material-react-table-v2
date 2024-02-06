import { Box } from '@mui/material';
import React from 'react';

// LED Button-like component
const LedButton = ({ isOn }) => {
  const ledStyle = {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    background: isOn ? '#4FB959' : '#ccc',
    boxShadow: isOn
      ? '0 0 5px #4FB959, 0 0 10px #4FB959, 0 0 15px #4FB959, 0 0 20px #4FB959'
      : 'none',
    transition: 'all 0.3s ease',
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
      <LedButton isOn={value} />
    </Box>
  ),
}
