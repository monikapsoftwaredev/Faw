import * as React from "react";
import { theme } from "../Theme";
import { useNavigate } from "react-router-dom";
import {  Container , Typography , Box } from "@mui/material";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommonCard from '../components/CommonCard/CommonCard';
import CommonCardSm from '../components/CommonCard/CommonCardSm';
import CommonText from "../components/CommonText/CommonText";
import CommonButton  from '../components/CommonButton/CommonButton';
import{ styles} from '../styles/home'
import { bgcolor } from "@mui/system";








  


const Home = () => {

    const buttonStyles = {
        
        maxWidth:'800px',
        maxHeight:'488px',
        
    }
    const cardStyles = {
        bgcolor:'yellow',
        maxWidth:theme.spacing(31),  
        mx:'auto' ,  
      
    }

   
    

    const mediaboxS = {
        bgcolor:'transparent',  
        position:'absolute' ,  
        bottom:'0', 
        right:'0', 
        zIndex:theme.spacing(10), 
        width:'100%' , 
        height:'50%' ,                                        
        display:'flex' , 
        justifyContent:'center' , 
        alignItems:'center' , 
        my:theme.spacing(1) , 
    }

    const navigate = useNavigate(); 


  return ( 
            <Container maxWidth='xl' sx={{ maxHeight:'auto'  ,  mt:'66px' }} >

                {/* Header section */ }

                <Box sx={styles.headerBoxLg}> 
                    <Box sx={styles.headerBoxMd}>

                        <CommonCard 
                        component='img' 
                        sx={buttonStyles} 
                        alt="kitchen"
                        image="../assets/mainContentPhotos/kitchen3.jpg" 
                        /> 
                    

                        <Box sx={styles.headerTextBox}> 
                            <CommonText titel='We will design your kitchen' variant='h4' component='div'/>
                        </Box>

                    </Box>
                </Box>


                {/*  Services presentation , section1  */ }

                <Box   sx={styles.sectionOneBoxLg}>

                    <Box   sx={styles.sectionOneBoxMd}>
                        <CommonCardSm  component="img" height="300px"  image="../assets/mainContentPhotos/kitchen1.jpg"  sx={cardStyles}/>
                        <Box sx={mediaboxS}>
                                <CommonButton variant="contained" size='medium' sx={styles.mediaButton} onClick={()=> navigate('kitchen')} >
                                    <CommonText titel='Kitchen' variant='h2' component='div' sx={styles.text}/> 
                                          
                                </CommonButton>
                        </Box>  
                           
                      
                    </Box>

                    <Box   sx={styles.sectionOneBoxMd}>
                        <CommonCardSm  component="img" height="300px"  image="../assets/mainContentPhotos/wardrobe.jpg"  sx={cardStyles}/>
                        <Box sx={mediaboxS}>
                                <CommonButton variant="contained"   size='medium'  sx={styles.mediaButton} onClick={()=> navigate('wardrobe')} >
                                    <CommonText titel='Wardrobe' variant='h2' component='div' sx={styles.text}/> 
                                          
                                </CommonButton>
                        </Box>  
                           

                    </Box>

                    <Box   sx={styles.sectionOneBoxMd}>
                        <CommonCardSm  component="img" height="300px"   image="../assets/mainContentPhotos/bath.jpg"  sx={cardStyles}/>
                        <Box sx={mediaboxS}>
                                <CommonButton variant="contained"  size='medium'  sx={styles.mediaButton} onClick={()=> navigate('bathroom')} >
                                    <CommonText titel='Bathroom' variant='h2' component='div' sx={styles.text}/> 
                                          
                                </CommonButton>
                        </Box>  
                           

                    </Box>
                    
                </Box>

                {/* Service process creation section*/ }
                <Box sx={styles.sectionTwoBoxLg}>
                    <Box sx={styles.sectionTwoBoxMd}>
                            <Typography component='div' variant="h4" >
                               We always create an original and unique project in 3D 
                            </Typography>
                    </Box>

                    <Box sx={styles.sectionTwoPhotoContainerLg} >

                        <Box   sx={styles.sectionOneBoxMd}>
                            <CommonCardSm  component="img" height="300px"  image="../assets/mainContentPhotos/design6.jpg" sx={cardStyles}/>
                            <Box sx={mediaboxS}>
                                    <CommonButton variant="contained"size="medium" sx={styles.mediaButton} onClick={()=> ('#')} >
                                        <CommonText titel='Design Kitchen' variant='h2' component='div' sx={styles.text}/> 
                                            
                                    </CommonButton>
                            </Box>  
                            

                        </Box>


                        <Box   sx={styles.sectionOneBoxMd}>
                            <CommonCardSm  component="img" height="300px"  image="../assets/mainContentPhotos/hand.jpg" sx={cardStyles}/>
                            <Box sx={mediaboxS}>
                                    <CommonButton variant="contained"size="medium" sx={styles.mediaButton} onClick={()=> ('#')} >
                                        <CommonText titel='Signing Contract' variant='h2' component='div' sx={styles.text}/> 
                                            
                                    </CommonButton>
                            </Box>  
                            

                        </Box>


                        <Box   sx={styles.sectionOneBoxMd}>
                            <CommonCardSm  component="img" height="300px"  image="../assets/mainContentPhotos/design6.jpg" sx={cardStyles}/>
                            <Box sx={mediaboxS}>
                                    <CommonButton variant="contained" size="medium" sx={styles.mediaButton} onClick={()=> ('#')} >
                                        <CommonText titel=' Your Kitchen ' variant='h2' component='div' sx={styles.text}/> 

                                            
                                    </CommonButton>
                            </Box>  
                            

                        </Box>

                            {/* <Box sx={styles.sectionOneBoxMd}>

                                <Card sx={styles.card}>
                                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/design6.jpg"/ >
                                
                                    <Box sx={styles.mediaBox}>
                                        <Button variant="contained" ' disable='true sx={styles.mediaButton} onClick={()=> ('#')} >
                                                <Typography variant='h2' sx={styles.text}> 
                                                    Design Kitchen
                                                </Typography>
                                        </Button>
                                    </Box>


                                
                                </Card>

                            </Box> */}
                            {/* <Box sx={styles.sectionOneBoxMd}>

                                <Card sx={styles.card}>
                                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/hand.jpg" image="../assets/mainContentPhotos/design6.jpg" />

                                    <Box sx={styles.mediaBox }>
                                        <Button variant="contained"   disable='true' sx={styles.mediaButton} onClick={()=>('#')} >
                                        <Typography variant='h2' sx={styles.text} > 
                                            Signing Contract
                                        </Typography>
                                        </Button>
                                    </Box>



                                </Card>

                            </Box>
                            <Box sx={styles.sectionOneBoxMd}>

                                <Card sx={styles.card}>
                                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/assemb6.jpg"/ >

                                    <Box sx={styles.mediaBox}>
                                        <Button variant="contained"  disable='true' sx={styles.mediaButton} onClick={()=>navigate('#')}>
                                        <Typography variant='h2' sx={styles.text} > 
                                            Your Kitchen
                                        </Typography>
                                        </Button>
                                    </Box>

                                </Card>  
                        
                        </Box> */}
                    </Box>
                </Box>

            
                {/* Advice , inspiration , tips ,section3*/ }

                <Box   sx={styles.sectionTreeBoxLg}>
                    <Box sx={styles.sectionTreeBoxMd}>
                      {/* 
                        <Card sx={styles.sectionTreeCard}>
                            <CardMedia component="img" height="510px" image="../assets/mainContentPhotos/advice.jpg"/ >
                        
                        </Card> */}

                        <CommonCard component="img" height="510px" image="../assets/mainContentPhotos/advice.jpg" sx={styles.sectionTreeCard}/>

                    </Box>
                    <Box sx={styles.sectionTreeTextBox}>
                        <Box sx={{py:'30px'}} >
                            {/* <Typography  variant='h4' sx={{ fontWeight:'290'  }}>
                               Unique and Quality made Furniture
                            </Typography> */}
                            <CommonText titel='Unique and Quality made Furniture'  variant='h4'  sx={{ fontWeight:'290'  }}  />
                        </Box>
                        <Box sx={{pb:'30px' , pt:'10px'}}>
                            {/* <Typography variant='body1' sx={{ fontWeight:'300',  width:'500px' }}>
                            We create unique kitchen furniture tailored to your needs. We offer our clients a comprehensive service, which includes furniture design, measurement, execution and professional assembly.
                            </Typography> */}
                             <CommonText titel='We create unique kitchen furniture tailored to your needs. We offer our clients a comprehensive service, which includes furniture design, measurement, execution and professional assembly.'  variant='body1'  sx={{ fontWeight:'300',  width:'500px' }} />

                        </Box>
                        <Box sx={styles.sectionTreeButtonBox}>
                                {/* <Button variant="contained" sx={styles.buttonText} onClick={()=> console.log('clicked')} >
                                <Typography component='div' variant='h2' sx={{ fontWeight:'300' , fontSize:'1rem'}}   > 
                                    More
                                </Typography>
                                </Button> */}
                               <CommonButton variant="contained" sx={styles.buttonText} onClick={()=> console.log('clicked')} >
                                    <CommonText titel='More' component='div' variant='h2' sx={{ fontWeight:'300' , fontSize:'1rem'}} /> 
                                    
                              </CommonButton>


                        </Box>
                    </Box>
                    
                </Box>
            
                {/* Contact section* #ebe2dd #e2d8d3 */ }
                
                <Box sx={styles.sectionFourBoxLg}>

                        {/* Contact section nr 1 */ }
                        <Box sx={styles.sectionFourBoxMd}>
                            <Box sx={styles.sectionFourIconBox}>
                                <PhoneOutlinedIcon  sx={styles.sectionFourIcon} />
                                <Box sx={styles.sectionFourTextBox}>
                                    <CommonText titel='Phone' variant='h4' sx={{ fontWeight:'350'}} />
                                </Box>
                            </Box>
                            <Box sx={styles.sectionFourInfoBox} >
                                <Box>
                                    <CommonText titel='Faw Office' variant='h5'sx={{ fontWeight:'200' }} />
                                </Box> 
                                        
                                <Box  sx={{ mx:'auto' , pl:'7px' }}>  
                                    <CommonText titel='966xxxxxx' variant='h6' sx={{ fontWeight:'200' }} />
                                </Box>
                                       
                                <Box  sx={{ mx:'auto' , pl:'7px'  }}> 
                                    <CommonText titel='456xxxxxx' variant='h6'sx={{ fontWeight:'200' }} />
                                </Box>
                            </Box>
                                 
                        </Box>
                                   
                                  
                                
                                        
                                

                        {/* Contact section nr 2 */ }
                        <Box sx={styles.sectionFourBoxMd}>
                            <Box sx={styles.sectionFourIconBox}>
                                    < LocationOnIcon sx={styles.sectionFourIcon} />
                                    <Box sx={styles.sectionFourTextBox} >
                                        <CommonText titel ='Address' variant='h4' sx={{ fontWeight:'350'  }}/>
                                    </Box>
                            </Box> 
                            <Box sx={{display:'flex', flexDirection:'column'  }} >   
                                    <Box  sx={styles.sectionFourInfoBox}>
                                        <Box>
                                            <CommonText titel='Faw xxxxxxxxxxxxx' variant='h5' sx={{ fontWeight:'200' }}/>
                                        </Box>
                                        <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                            <CommonText titel='Lillesxxxxxxx' variant='h6' sx={{ fontWeight:'200' }}/>
                                            <CommonText titel='1914 xxxxxxxxx' variant='h6' sx={{ fontWeight:'200' }}/>
                                            <CommonText titel='NOxxxxxxxxxxxxx' variant='h6' sx={{ fontWeight:'200'}}/>
                                        </Box>
                                    </Box>
                            </Box>
                        </Box> 
                                        
                            
                            
                    
                        {/* Contact section nr 3 */ }
                        <Box sx={styles.sectionFourBoxMd}>
                            <Box sx={styles.sectionFourIconBox}>
                                <MailOutlineIcon  sx={styles.sectionFourIcon} />
                                <Box sx={styles.sectionFourTextBox}>
                                    <CommonText titel='Email' variant='h4' sx={{ fontWeight:'350'  }}/>
                                </Box>
                            </Box>     
                            <Box sx={{display:'flex' ,flexDirection:'column'}}>
                                <Box sx={styles.sectionFourInfoBox}>
                                    <Box>
                                      <CommonText titel='Faw office' variant='h5' sx={{ fontWeight:'200'}}/>
                                    </Box>
                                
                                    <Box sx={{ mx:'auto' , pl:'7px' }}>
                                        <CommonText titel='fawxxxxxxx@gmail.com'  variant='h6' sx={{ fontWeight:'200'  }} />
                                    </Box>
                                </Box> 
                            </Box>
                        </Box>      
                    </Box>
                                        
                                
                            
                                    
                                        
                                

                    
            </Container>
     );
}
 
export default Home ;




