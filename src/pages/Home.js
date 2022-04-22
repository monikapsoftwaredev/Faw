import * as React from "react";
import { useNavigate } from "react-router-dom";
import {   Container,  Box , Typography } from "@mui/material";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommonCard from '../components/CommonCard/CommonCard';
import CommonText from "../components/CommonText/CommonText";
import CommonButton  from '../components/CommonButton/CommonButton';
import CommonCardSm from '../components/CommonCardSm/CommonCardSm';
import{ styles} from './styles/home';











  


const Home = () => {


  const navigate = useNavigate(); 
  
 
  return ( 
           
             <Container maxWidth="false"  >
                <Box> 
                    <Box > 
                        <Box > 
                                   <Box  sx={{ zIndex:100 , position:'relative' }} >
                                        <Box
                                        component='img' 
                                        sx={styles.photo}
                                        alt="kitchen"
                                        src="../assets/new/kitchenf.jpg"  
                                        />
                                   </Box>
                                  

                                    <Box >
                                       
                                       <Box  sx={styles.headerTextBox} >
                                         <CommonText titel='Unique and Quality made Furniture' variant='h2' component='div' sx={styles.headerText} />
                                       </Box>
                                        
                                    </Box>
                            
                        </Box>
                    </Box>
                    <Box >
                     <Box sx={styles.cardBoxLg}  >
                         <Box sx={styles.cardBoxMd}>
                             <Box sx={styles.cardBoxSm}>
                                 <Box   sx={styles.sectionOneBoxMd}>
                                     <CommonCardSm  component="img" height="460px"  image="../assets/new/baf.jpg"  sx={styles.cardStyles}/>
                                     <Box sx={styles.mediaboxS}>
                                             <CommonButton variant="contained" size='medium' sx={styles.mediaButton} onClick={()=> navigate('kitchen')} >
                                                 <CommonText titel='Kitchen' variant='h2' component='div' sx={styles.text}/> 
                                             </CommonButton>
                                     </Box>  
                                 </Box>
                                 <Box   sx={styles.sectionOneBoxMd}>
                                     <CommonCardSm  component="img" height="460px" image="../assets/new/bskor.jpg"  sx={styles.cardStyles}/>
                                     <Box sx={styles.mediaboxS}>
                                             <CommonButton variant="contained"   size='medium'  sx={styles.mediaButton} onClick={()=> navigate('wardrobe')} >
                                                 <CommonText titel='Korridor' variant='h2' component='div' sx={styles.text}/> 
                                             </CommonButton>
                                     </Box>  
                                 </Box>
                                 <Box   sx={styles.sectionOneBoxMd}>
                                     <CommonCardSm  component="img" height="460px"  image="../assets/new/bag.jpg" sx={styles.cardStyles}/>
                                     <Box sx={styles.mediaboxS}>
                                             <CommonButton variant="contained"  size='medium'  sx={styles.mediaButton} onClick={()=> navigate('bathroom')} >
                                                 <CommonText titel='Wordrobe' variant='h2' component='div' sx={styles.text}/> 
                                             </CommonButton>
                                     </Box>  
                                 </Box>
                             </Box>                       
                          </Box>
                     </Box>  
                   </Box> 
                   {/* bgcolor:'#f3f3f3', display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column', py:'100px' */}
                   <Box sx={styles.sectionOneBoxLgu}>
                        <Box  sx={ styles.headerBoxLgn} >
                          <Box sx={{pt:'10px'}}>
                            <Box component="img" src="../assets/new/advice.jpg" sx={styles.headerPhoto}/>
                          </Box> 
                            <Box  sx={ styles.headerBoxLgn1} >
                        
                                <CommonText titel='Unique and Quality made Furniture'  variant='h4' sx={styles.sectionThreeTitel} />
                            
                        
                                <CommonText titel='We create unique kitchen furniture tailored to your needs. We offer our clients a comprehensive service, which includes furniture design, measurement, execution and professional assembly.'  variant='body1' sx={styles.sectionThreeDesc} />
                            
                                <Box sx={styles.sectionThreeButtonBox}>
                                    <CommonButton variant="contained" size='medium'  sx={styles.mediaButton2} onClick={()=> console.log('clicked')} >
                                        <CommonText titel='More' component='div' variant='h2' sx={styles.text} /> 
                                    </CommonButton>
                                </Box>        
                            </Box>
                        </Box>

                  </Box> 
                        
                   
                    <Box sx={styles.sectionOneBoxLgd}>
                        <Box  sx={ styles.headerBoxLgn} >
                             <Box sx={styles.headerBox}>
                                <Box sx={styles.headerTitelBox}>
                                <CommonText titel='Our Mission'  variant='h4'sx={styles.headerTitel} />  
                                </Box>
                              </Box>
                                   
                                <Box  sx={ styles.headerBoxLgn1} >
                                        <Box sx={styles.sectionThreeDesc}>
                                            <CommonText titel=' We always create an original and unique project in 3D with a focus on details, materials and new solutions.  '  variant='body1'  sx={{ fontWeight:300}} />
                                            <CommonText titel=' We help you create your unique kitchen from design to assembly.'  variant='body1'  sx={{ fontWeight:300}} />
                                        </Box>
                                        <Box sx={styles.sectionThreeButtonBox}>
                                            <CommonButton variant="contained" size='medium'  sx={styles.mediaButton2} onClick={()=> console.log('clicked')} >
                                                <CommonText titel='More' component='div' variant='h2' sx={styles.text} /> 
                                            </CommonButton>
                                        </Box>
                                </Box>
                            
                                
                                

                        </Box>
                    </Box> 

                    
                   
                   
                 
                   
                   <Box sx={styles.sectionOneBoxInfoTwo}>
                            <Box sx={{ pl:'20px' }} >
                                <Typography variant='h4' sx={styles.sectionTreeTextBoxIn}>
                                   Arrange a free design meeting now  
                                </Typography>
                            </Box>
                            
                        
                                    
                            <Box sx={styles.headerBoxLgn1}>
                                <CommonButton variant="contained" size='medium'  sx={styles.mediaButton3} onClick={()=> console.log('clicked')} >
                                    <CommonText titel='Book meeting' component='div' variant='h2' sx={styles.text} /> 
                                </CommonButton>
                            </Box>
                            
                   </Box>  
                                  
                                
                   <Box sx={styles.sectionOneBoxLgn}>
                        <Box sx={styles.sectionFourBoxLg}>
                   {/* {/* Contact section nr 1 */ }
                             <Box sx={styles.sectionFourBoxMd}>
                                 <Box sx={styles.sectionFourIconBox}>
                                     <PhoneOutlinedIcon  sx={styles.sectionFourIcon} />
                                     <Box sx={styles.sectionFourTextBox}>
                                         <CommonText titel='Phone' variant='h4' component='div' sx={{ fontWeight:350}} />
                                     </Box>
                                 </Box>
                                 <Box sx={styles.sectionFourInfoBox} >
                                     <Box>
                                         <CommonText titel='Faw Office' variant='h5' component='div' sx={{ fontWeight:200 }} />
                                     </Box> 
                                             
                                     <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                         <CommonText titel='966xxxxxx' variant='h6' component='div'  sx={{ fontWeight:200 }} />
                                     </Box>
                                           
                                     <Box  sx={{ mx:'auto' , pl:'7px'  }}> 
                                         <CommonText titel='456xxxxxx' variant='h6'  component='div' sx={{ fontWeight:200 }} />
                                     </Box>
                                 </Box>
                                     
                             </Box>

                             {/* Contact section nr 2 */ }
                             <Box sx={styles.sectionFourBoxMd}>
                                 <Box sx={styles.sectionFourIconBox}>
                                         < LocationOnIcon sx={styles.sectionFourIcon} />
                                         <Box sx={styles.sectionFourTextBox} >
                                             <CommonText titel ='Address' variant='h4' component='div'  sx={{ fontWeight:350  }}/>
                                         </Box>
                                 </Box> 
                                 <Box sx={{display:'flex', flexDirection:'column'  }} >   
                                         <Box  sx={styles.sectionFourInfoBox}>
                                             <Box>
                                                 <CommonText titel='Faw ' variant='h5' component='div'  sx={{ fontWeight:200 }}/>
                                             </Box>
                                             <Box>
                                                 <CommonText titel='xxxxxxxxxxxxx' variant='h5' component='div'  sx={{ fontWeight:200 }}/>
                                             </Box>
                                             <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                                 <CommonText titel='Lillesxxxxxxx' variant='h6' component='div'  sx={{ fontWeight:200 }}/>
                                                 <CommonText titel='1914 xxxxxxxxx' variant='h6' component='div' sx={{ fontWeight:200 }}/>
                                                 <CommonText titel='NOxxxxxxxxxxxxx' variant='h6' component='div' sx={{ fontWeight:200}}/>
                                             </Box>
                                         </Box>
                                 </Box>
                             </Box> 

                           {/* Contact section nr 3 */ }
                             <Box sx={styles.sectionFourBoxMd}>
                                 <Box sx={styles.sectionFourIconBox}>
                                     <MailOutlineIcon  sx={styles.sectionFourIcon} />
                                     <Box sx={styles.sectionFourTextBox}>
                                         <CommonText titel='Email' variant='h4'component='div'  sx={{ fontWeight:350  }}/>
                                     </Box>
                                 </Box>     
                                 <Box sx={{display:'flex' ,flexDirection:'column'}}>
                                     <Box sx={styles.sectionFourInfoBox}>
                                         <Box>
                                           <CommonText titel='Faw office' variant='h5' component='div' sx={{ fontWeight:200}}/>
                                         </Box>
                                     
                                         <Box sx={{ mx:'auto' , pl:'7px' }}>
                                             <CommonText titel='fawxxxxxxx@gmail.com'  variant='h6' component='div'  sx={{ fontWeight: 200  }} />
                                         </Box>
                                     </Box> 
                                 </Box>
                             </Box> 
                         
                       </Box> 
                   
               </Box>        

                    
                  
              </Box>  
                      
                
                
                
        </Container>
  )   
 
}
export default Home;

                                          

                                            
                    
                                   
                            




                                          
                           

                                            
                            




                                            
                            

                            
                    


                                
                                    


                    
            
                                  
                                
                                        
                                

                                        
                            
                            
                                        
                                
                            
                                    
                                        
        



