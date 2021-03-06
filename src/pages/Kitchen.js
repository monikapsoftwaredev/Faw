import * as React from 'react';
import{ Box, Container , ImageList , ImageListItem , Typography} from '@mui/material';
import { photoList }  from '../data/photoList';
import {styles} from '../styles/kitchen'






  const Kitchen = () => {

      return (
        <Container maxWidth='false' height= "100vh" width='70vh' sx={styles.boxLg} >
            <Box sx={styles.imageListBox}>
              <ImageList variant="masonry" cols={3} gap={80}>
                {photoList.map((p) => (
                  <ImageListItem key={p.img}>
                    <img
                      src={`${p.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${p.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={p.title}
                      loading="lazy"
                      
                    />
                    <Box sx={ styles.textBox}>
                          <Typography variant='h6'component='span'  >
                          {p.desc}
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