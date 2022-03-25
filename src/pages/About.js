import * as React from 'react';
import {theme} from '../Theme';
import{ Box  , Container  }from "@mui/material";
import CommonCard from '../components/CommonCard/CommonCard';
import CommonText from "../components/CommonText/CommonText";
import CommonButton  from '../components/CommonButton/CommonButton';
import {styles } from '../pages/styles/about';


  

 const About = () => {      
    return ( 
        <Container maxWidth='xl' sx={styles.boxLg} >
            
                 <Box   sx={styles.boxMd}>
                    <Box sx={styles.cardBox}>

                        <CommonCard height="510px"  image="../assets/mainContentPhotos/faw.jpg"  alt="faw"   component="img" sx={styles.card} />

                    </Box>
                    <Box sx={styles.textBox}>
                        <Box sx={{py:theme.spacing(5)}} >
                            <CommonText titel=' Who We are ?' variant='h4' component='div' sx={styles.title} />
                           
                        </Box>
                        <Box sx={{pb:theme.spacing(5)}}>
                                <CommonText 
                                titel='The FAW company has been operating on the Norwegian market since 2014 and specializes in the execution and assembly of kitchen furniture. 
                                We have cooperated with companies such as Ikea, Kvik, Sigdal, Rotpunkt, HTH. 
                                Our passion and experience, and your vision and ideas are the perfect combination, which results in a comfortable, functional and elegant kitchen. What constantly drives us to act is the satisfaction of our customers.' 
                                variant='body1'  
                                component='div'   
                                sx={styles.text} 
                                />
                              
                        </Box>
                        <Box sx={ styles.buttonBox}> 
                               <CommonButton variant='contained' size='medium'  sx={styles.buttonBox} onClick={()=> console.log('clicked')} >
                                  <CommonText  titel='More' variant='h2' component='div' sx={{ fontWeight:300 , fontSize:'1rem'}} /> 
                                </CommonButton>
                        </Box>
                    </Box>
                    
                </Box>  
                        
                <Box sx={styles.boxOfferLg}>
              
                   <Box  sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='An original project' variant='h4' component='div' sx={{ fontWeight:290 }}/>
                          
                        </Box>
                        <Box sx={styles.boxDescription}  >
                            <CommonText titel='We always create an original and unique project in 3D tailored to your needs.' variant='body1' component='div' sx={{ fontWeight:300 }}/>
                        </Box>  
                    </Box> 
               
                    <Box sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Measurement' variant='h4' component='div' sx={{ fontWeight:290}}/>
                        </Box>
                        <Box sx={styles.boxDescription} >
                            <CommonText 
                             titel='We adjust kitchen furniture to the dimensions of the room. It is especially important in designing kitchen interiors so that the entire space is fully developed and functional.'
                             variant='body1' 
                             component='div' 
                             sx={{  fontWeight:300}} 
                            />  
                        </Box>  
                    </Box>
                    <Box sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Execution and assembly' variant='h4' component='div' sx={{fontWeight:290 }}/>
                        </Box>
                        <Box sx={styles.boxDescription}>
                            <CommonText titel='The quality of our furniture is high and is of key importance to us, which is why we always pay attention to the smallest details. The final assembly of the kitchen is not only quick but also accurate thanks to the use of modern equipment from renowned brands.'
                              variant='body1'
                              component='div'
                              sx={{ fontWeight:300}}
                            />
                        </Box> 
                    </Box>    

                    
             
                </Box> 
              
        </Container>
       
     );
}
 
export default About ;
