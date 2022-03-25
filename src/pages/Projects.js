import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem } from '@mui/material';
import { photos }  from '../data/completedProjectsList';
import { styles } from '../pages/styles/projects';




const Projects = () => {

  const kitchenPhoto = photos.map(photo => { 
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
        <Box sx={styles.imageListBox}>
             <ImageList variant="masonry" cols={2} gap={8}>
                 {kitchenPhoto}
             </ImageList>
        </Box>
    </Container>
  );

  }

 
export default Projects;

//#EBE2DD #ebe2dd

/* {kitchenPhoto?(
              <Box> 
                      <ImageList variant="masonry" cols={2} gap={8}>
                      {kitchenPhoto}
                      </ImageList>
              </Box>
              ) :
              ( <Box> Loading....</Box>)
              }
    */