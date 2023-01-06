import React from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '../../styles';
import ActionButtons from './ActionButtons';
import Logo from './Logo';

function Mobile() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '30px',
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => setIsDrawerOpen(true)}
              color={Colors.shaft}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                p={2}
                width='250px'
                height='100vh'
                role='presentation'
                textAlign='center'
                backgroundColor={Colors.dark}
                color={Colors.light}
              >
                <List>
                  <ListItemButton>
                    <ListItemText>Home</ListItemText>
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText>Volonteer</ListItemText>
                  </ListItemButton>
                  <Accordion
                    sx={{
                      backgroundColor: Colors.dark,
                      color: Colors.light,
                      boxShadow: 0,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon sx={{ color: Colors.light }} />
                      }
                      aria-controls='panel2a-content'
                      id='panel3a-header'
                    >
                      <Typography>Stories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider />
                      <AccordionSummary>
                        <Typography>Blog</Typography>
                      </AccordionSummary>
                      <Divider />
                      <AccordionSummary>
                        <Typography>Podcast</Typography>
                      </AccordionSummary>
                    </AccordionDetails>
                  </Accordion>
                  <Divider />
                  <ListItemButton>
                    <ListItemText>Login</ListItemText>
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText>Contact us</ListItemText>
                  </ListItemButton>
                  <Divider />
                </List>
              </Box>
            </Drawer>
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              <Logo />
            </Toolbar>
          </Box>
        </Toolbar>
      </Container>
      <ActionButtons />
    </>
  );
}

export default Mobile;
