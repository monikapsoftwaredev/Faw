import * as React from 'react';
import {theme} from '../Theme';
import{ Box  , Container  }from "@mui/material";
import CommonCard from '../components/CommonCard/CommonCard';
import CommonText from "../components/CommonText/CommonText";
import {styles } from '../pages/styles/about';


  

 const About = () => {      
    return ( 
        <Container maxWidth='false' sx={styles.boxLg} >
             
                <Box sx={styles.boxMdOneLg}>
                        <Box sx={styles.cardBox}>
                            <CommonCard height="460px"  image="../assets/new/bacz.jpg"  alt="faw"   component="img" sx={styles.card} />
                        </Box>


                       <Box sx={styles.textBox}>
                                <Box sx={{py:theme.spacing(5)}} >
                                    <CommonText titel=' Faw history ' variant='h4' component='div' sx={styles.title} />
                                
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
                        </Box>
                            
                </Box> 
                <Box sx={styles.boxMdOneSm}>
                        <Box sx={styles.cardBox}>
                            <CommonCard height="460px"  image="../assets/mainContentPhotos/faw.jpg"  alt="faw"   component="img" sx={styles.card} />
                        </Box>


                       <Box sx={styles.textBox}>
                                <Box sx={{py:theme.spacing(5)}} >
                                    <CommonText titel=' Faw history ' variant='h4' component='div' sx={styles.title} />
                                
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
                        </Box>
                            
                </Box>
                <Box sx={styles.boxMdTwoLg}  >
                        
                            <Box sx={styles.textBox}>
                                    <Box sx={{py:theme.spacing(5)}} >
                                        <CommonText titel='What materials do we use ?' variant='h4' component='div' sx={styles.title} />
                                    
                                    </Box>
                                    <Box sx={{pb:theme.spacing(5)}}>
                                            <CommonText 
                                            titel='We have a wide and varied offer of fronts, kitchen worktops and accessories. We use the best and most durable materials and arrange them in the style of your choice. All materials and components that we use for the furniture production process come from reputable manufacturers that maintain high quality standards. The use of best products gives us the certainty that our furniture will please your eyes for many years.'  
                                            variant='body1'  
                                            component='div'   
                                            sx={styles.text}
                                            />
                                        
                                    </Box>
                            </Box>
                            <Box sx={styles.cardBox}>
                                <CommonCard height="460px"  image="../assets/new/baw.jpg"  alt="faw"   component="img" sx={styles.card} />
                            </Box> 
                </Box> 
                <Box sx={styles.boxMdTwoSm}  >
                        
                        <Box sx={styles.textBox}>
                                <Box sx={{py:theme.spacing(5)}} >
                                    <CommonText titel='What materials do we use ?' variant='h4' component='div' sx={styles.title} />
                                
                                </Box>
                                <Box sx={{pb:theme.spacing(5)}}>
                                        <CommonText 
                                        titel='We have a wide and varied offer of fronts, kitchen worktops and accessories. We use the best and most durable materials and arrange them in the style of your choice. All materials and components that we use for the furniture production process come from reputable manufacturers that maintain high quality standards. The use of best products gives us the certainty that our furniture will please your eyes for many years.'  
                                        variant='body1'  
                                        component='div'   
                                        sx={styles.text}
                                        />
                                    
                                </Box>
                        </Box>
                        <Box sx={styles.cardBox}>
                            <CommonCard height="460px"  image="../assets/new/baw.jpg"  alt="faw"   component="img" sx={styles.card} />
                        </Box> 
            </Box> 
                        
                <Box sx={styles.boxOfferLg}>
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
                   <Box  sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Project Designing' variant='h4' component='div' sx={{ fontWeight:290 }}/>
                          
                        </Box>
                        <Box sx={styles.boxDescription}  >
                            <CommonText titel='We always create an original and unique project in 3D tailored to your needs.' variant='body1' component='div' sx={{ fontWeight:300 }}/>
                        </Box>  
                    </Box> 
                    <Box sx={styles.boxOfferMd} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Execution and assembling' variant='h4' component='div' sx={{fontWeight:290 }}/>
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
                <Box sx={styles.boxOfferSm}>
                  <Box sx={styles.boxOfferMdSm} >
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
                   <Box  sx={styles.boxOfferMdSm} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Project Designing' variant='h4' component='div' sx={{ fontWeight:290 }}/>
                          
                        </Box>
                        <Box sx={styles.boxDescription}  >
                            <CommonText titel='We always create an original and unique project in 3D tailored to your needs.' variant='body1' component='div' sx={{ fontWeight:300 }}/>
                        </Box>  
                    </Box> 
                    <Box sx={styles.boxOfferMdSm} >
                        <Box sx={styles.boxTitle} >
                            <CommonText titel='Execution' variant='h4' component='div' sx={{fontWeight:290 }}/>
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
