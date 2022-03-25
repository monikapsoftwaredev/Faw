import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem } from '@mui/material';
import {wardrobePhotos}  from '../data/wardrobePhotos';
import { styles } from  '../pages/styles/wardrobe';




const Wardrobe = () => {

  const wardrobe = wardrobePhotos.map(photo => { 
    return (
      <ImageListItem key={photo.id}>
          <img
            src={`${photo.path}?w=248&fit=crop&auto=format`}
            srcSet={`${photo.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={photo.title}
            loading="lazy"
           
          />
          
    </ImageListItem>
    )
  });


return (
    <Container maxWidth='xl' sx={styles.boxLg} >
      <Box sx={ styles.boxMd }>
                <ImageList variant="masonry" cols={3} gap={40}>
                  {wardrobe} 
                </ImageList>
      </Box>
    </Container>
  );

  }

 
export default Wardrobe;