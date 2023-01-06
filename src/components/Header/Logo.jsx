import React from 'react';
import { Box, Typography } from '@mui/material';

function Logo() {
  return (
    <Box sx={{ pb: '14px' }}>
      <Typography
        variant='h1'
        color={'primary'}
        fontFamily={'"Allison", "cursive'}
      >
        Cats & friends
      </Typography>
    </Box>
  );
}

export default Logo;
