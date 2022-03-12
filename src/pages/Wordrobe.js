import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem } from '@mui/material';
import {wordrobePhotos}  from '../data/wordrobePhotos';




const Wordrobe = () => {

  const wordrobe = wordrobePhotos.map(photo => { 
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
    <Container maxWidth='xl' sx={{ height:'100vh'  ,  mt:'66px' ,py:'50px' ,   bgcolor:"white" , display:'flex' , flexWrap:'wrap' ,alignItems:'center', justifyContent:'space-evenly' }} >
      <Box sx={{ width:'1650px', height:'100%' }}>
            <ImageList variant="masonry" cols={4} gap={18}>
              {wordrobe} 
            </ImageList>
        </Box>
    </Container>
  );

  }

 
export default Wordrobe;