import * as React from 'react';
import{ Box  , Container , Card , CardMedia , Typography , Button , }from "@mui/material";
import {styles } from '../styles/about';


  

 const About = () => {          
    return ( 
        <Container maxWidth='xl' sx={styles.boxLg} >
            
                 <Box   sx={styles.boxMd}>
                    <Box sx={styles.cardBox}>

                        <Card sx={styles.card}>
                            <CardMedia component="img" height="510px" image="../assets/mainContentPhotos/faw.jpg"/ >
                        
                        </Card>

                    </Box>
                    <Box sx={styles.textBox}>
                        <Box sx={{py:'50px'}} >
                            <Typography  variant='h3'sx={styles.title} >
                              Who We are ?
                            </Typography>
                        </Box>
                        <Box sx={{pb:'50px'}}>
                            <Typography variant='body1' sx={styles.text} >
                               The FAW company has been operating on the Norwegian market since 2014 and specializes in the execution and assembly of kitchen furniture. 
                               We have cooperated with companies such as Ikea, Kvik, Sigdal, Rotpunkt, HTH. 
                               Our passion and experience, and your vision and ideas are the perfect combination, which results in a comfortable, functional and elegant kitchen. What constantly drives us to act is the satisfaction of our customers.
                            </Typography>
                        </Box>
                        <Box sx={ styles.buttonBox}>
                                <Button variant="contained" disableRipple= {true} sx={ styles.buttonBox} onClick={()=> console.log('clicked')} >
                                <Typography varient='h2'  > 
                                    More
                                </Typography>
                                </Button>
                        </Box>
                    </Box>
                    
                </Box>  
                        
                <Box sx={styles.boxOfferLg}>
                   <Box  sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <Typography  variant='h4'  sx={{ fontWeight:'290' }}>
                              An original project
                            </Typography>
                        </Box>
                        <Box sx={styles.boxDescription}  >
                            <Typography variant='body1' sx={{ fontWeight:'300' }}>
                            We always create an original and unique project in 3D tailored to your needs.
                            </Typography>
                        </Box>  
                    </Box> 
                    <Box sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <Typography  variant='h4' sx={{ fontWeight:'290'}}>
                              Measurement
                            </Typography>
                        </Box>
                        <Box sx={styles.boxDescription} >
                            <Typography variant='body1' sx={{  fontWeight:'300'}}>
                              We adjust kitchen furniture to the dimensions of the room. It is especially important in designing kitchen interiors so that the entire space is fully developed and functional.
                            </Typography>
                        </Box>  
                    </Box>
                    <Box sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <Typography  variant='h4' sx={{fontWeight:'290' }}>
                              Execution and assembly
                            </Typography>
                        </Box>
                        <Box sx={styles.boxDescription}>
                            <Typography variant='body1' sx={{ fontWeight:'300'}}>
                            The quality of our furniture is high and is of key importance to us, which is why we always pay attention to the smallest details. The final assembly of the kitchen is not only quick but also accurate thanks to the use of modern equipment from renowned brands.
                            </Typography>
                        </Box> 
                    </Box>    

                    
             
                </Box> 
              
        </Container>
       
     );
}
 
export default About ;
