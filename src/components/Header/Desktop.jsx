import React from 'react';
import { Box, Toolbar, Menu, Container, Button, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Colors } from '../../styles';
import ActionButtons from './ActionButtons';
import Logo from './Logo';

function Desctop() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container>
      <Toolbar disableGutters>
        <Logo />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'flex' },
            justifyContent: 'center',
          }}
        >
          <Button
            key='home'
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: Colors.shaft, display: 'block' }}
          >
            Home
          </Button>
          <Button
            key='volonteer'
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: Colors.shaft, display: 'block' }}
          >
            Volonteer
          </Button>
          <Button
            id='demo-customized-button'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            variant='contained'
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              bgcolor: Colors.white,
              color: Colors.shaft,
              my: 2,
              ':hover': {
                bgcolor: Colors.white,
              },
            }}
          >
            Stories
          </Button>
          <Menu
            id='demo-customized-menu'
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Blog
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Podcast
            </MenuItem>
          </Menu>
          <Button
            key='login'
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: Colors.shaft, display: 'block' }}
          >
            Login
          </Button>
        </Box>
        <ActionButtons />
      </Toolbar>
    </Container>
  );
}

export default Desctop;
