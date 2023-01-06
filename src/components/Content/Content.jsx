import React from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { itemData } from './data';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Colors } from '../../styles';

function Content() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  const laptop = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Waiting for their owners
        </Typography>
      </Box>

      <Box sx={{ mx: 3, mb: 8 }}>
        <ImageList
          variant='masonry'
          cols={tablet ? 1 : laptop ? 2 : 3}
          gap={14}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`../../images/${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                sx={{
                  color: Colors.dove_gray,
                  opacity: 0.4,
                  ':hover': {
                    color: Colors.dove_gray,
                    opacity: 0.8,
                    bgcolor: Colors.shaft,
                  },
                }}
                actionIcon={
                  <IconButton
                    sx={{
                      color: Colors.dove_gray,
                      opacity: 0.8,
                      ':hover': {
                        color: Colors.primary,
                      },
                    }}
                    aria-label={`info about ${item.title}`}
                  >
                    <FavoriteIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default Content;
