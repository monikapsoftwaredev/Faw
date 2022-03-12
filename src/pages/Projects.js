import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem } from '@mui/material';
import {photos}  from '../data/complitedProjectsList';




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
    <Container maxWidth='xl' sx={{ maxHeight:'auto'  ,  mt:'66px' ,py:'50px' ,   bgcolor:"white" , display:'flex' , flexWrap:'wrap' ,alignItems:'center', justifyContent:'space-evenly' }} >
      <Box sx={{ width:'1650px', height:'auto' }}>
            <ImageList variant="masonry" cols={2} gap={8}>
              {kitchenPhoto} 
            </ImageList>
        </Box>
    </Container>
  );

  }

 
export default Projects;

//#EBE2DD #ebe2dd