import React from 'react';
import { Grid, Box, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Colors } from '../../styles';

const Footer = () => {
  return (
    <Box sx={{ m: 3, p: 3, bgcolor: Colors.shaft, color: Colors.dove_gray }}>
      <Grid
        container
        spacing={6}
        sx={{ pb: 4 }}
        justifyContent='space-evenly'
        alignSelf={'center'}
      >
        <Grid item md={12} lg={6}>
          <Typography sx={{ textTransform: 'uppercase', mb: 1.5 }}>
            About Us
          </Typography>
          <Typography variant='caption2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box sx={{ my: 1.5 }}>
            <FacebookIcon
              sx={{
                mr: 1,
                ':hover': {
                  color: Colors.primary,
                },
              }}
            />
            <TwitterIcon
              sx={{
                mr: 1,
                ':hover': {
                  color: Colors.primary,
                },
              }}
            />
            <InstagramIcon
              sx={{
                mr: 1,
                ':hover': {
                  color: Colors.primary,
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={{ textTransform: 'uppercase', mb: 1.5 }}>
            Information
          </Typography>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              Lorem ipsum
            </Link>
          </Box>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              Privacy & Policy
            </Link>
          </Box>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              Terms & Conditions
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={{ textTransform: 'uppercase', mb: 1.5 }}>
            My Account
          </Typography>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              Invites and projects
            </Link>
          </Box>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              Favourite animals
            </Link>
          </Box>
          <Box>
            <Link
              href='/'
              color='inherit'
              sx={{ textDecoration: 'none', lineHeight: 2 }}
            >
              My account
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
