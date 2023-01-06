import React from 'react';
import { Typography, Box, CardMedia, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import bannerCat from '../../images/banner-cat1.png';
import theme, { Colors } from '../../styles';

//import Button from '../Button/Button';

const Banner = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex' },
          flexDirection: { xs: 'column', sm: 'row' },
          my: 3.5,
          bgcolor: Colors.body_bg,
          alignItems: 'center',
        }}
      >
        <CardMedia
          sx={{
            maxWidth: '50%',
            height: 'auto',
          }}
          component='img'
          objectfit='cover'
          image={bannerCat}
          alt='Paella dish'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            margin: { xs: 6.5, sm: 6.5, md: 3.5, lg: 3.5, xl: 3.5 },
          }}
        >
          <Typography variant='h6' sx={{ my: '15px' }}>
            Our motto
          </Typography>
          <Typography variant='h2' sx={{ my: '15px' }}>
            Help animals
          </Typography>
          <Typography variant='body2' sx={{ my: '15px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <ThemeProvider theme={theme}>
            <Button variant='flat'>Donate</Button>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
