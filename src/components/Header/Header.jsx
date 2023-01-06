import React from 'react';
import { AppBar, useMediaQuery, useTheme } from '@mui/material';
import { Colors } from '../../styles';
import '@fontsource/allison';
import Desctop from './Desktop';
import Mobile from './Mobile';

function Header() {
  const theme = useTheme();
  const isDesctop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <AppBar
      position='static'
      sx={{ bgcolor: Colors.white, boxShadow: Colors.light }}
    >
      {isDesctop ? <Desctop /> : <Mobile />}
    </AppBar>
  );
}
export default Header;
