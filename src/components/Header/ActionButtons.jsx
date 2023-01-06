import React from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DividerLine from '@mui/joy/Divider';
import { Colors } from '../../styles';

function ActionButtons() {
  const theme = useTheme();
  const isDesctop = useMediaQuery(theme.breakpoints.up('md'));

  let boxStyle = isDesctop
    ? {
        flexGrow: 0,
        display: 'flex',
        justifyContent: 'flex-end',
      }
    : {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'fixed',
        bottom: 0,
        bgcolor: Colors.shaft,
        width: '100%',
        zIndex: 1,
        borderTop: `1px solid ${Colors.border}`,
      };

  let styleColor = isDesctop
    ? {
        color: Colors.dove_gray,
        ':hover': {
          color: Colors.primary,
        },
      }
    : {
        color: Colors.primary,
        ':hover': {
          color: Colors.dove_gray,
        },
      };

  let styleDividerLine = isDesctop
    ? { bgcolor: Colors.dove_gray, mx: 1 }
    : { bgcolor: Colors.primary };
  return (
    <>
      <Box sx={boxStyle}>
        <IconButton aria-label='favorite-icon' sx={styleColor}>
          <FavoriteIcon />
        </IconButton>
        <DividerLine sx={styleDividerLine} orientation='vertical' />
        <IconButton aria-label='person-icon' sx={styleColor}>
          <PersonIcon />
        </IconButton>
        <DividerLine sx={styleDividerLine} orientation='vertical' />
        <IconButton aria-label='notification-icon' sx={styleColor}>
          <NotificationsIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default ActionButtons;
