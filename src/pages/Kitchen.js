import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem , Typography} from '@mui/material';
import { photoList }  from '../data/photoList';






  const Kitchen = () => {

      return (
        <Container maxWidth='false' height= "100vh" width='70vh' sx={{ maxHeight:'100%'  ,  mt:'66px' ,py:'50px' ,   bgcolor:"white" , display:'flex' , flexWrap:'wrap' ,alignItems:'center', justifyContent:'space-evenly' }} >
            <Box sx={{ width:'3650px', height:'auto' , }}>
              <ImageList variant="masonry" cols={3} gap={30}>
                {photoList.map((p) => (
                  <ImageListItem key={p.img}>
                    <img
                      src={`${p.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${p.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={p.title}
                      loading="lazy"
                    />
                    <Box sx={{ width:'auto', height:'auto', bgcolor:'#f4ebe6' ,  display:'flex' ,alignItems:'center', justifyContent:'center' , py:'auto'}}>
                          <Typography variant='h6'  sx={{ width:'300px', height:'250px' , pt:'100px' }}>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </Typography>
                    </Box>
                  </ImageListItem>
                ))}
               
              </ImageList>
             
          </Box>
        </Container>
    );

  }
  
  export default Kitchen;

  //#EBE2DD  #f6f1ef #ebe2dd