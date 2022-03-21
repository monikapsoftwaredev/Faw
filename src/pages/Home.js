import * as React from "react";
import { useNavigate } from "react-router-dom";
import {  Container , Typography , Button , Box ,Card ,CardMedia } from "@mui/material";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import{ styles} from '../styles/home'







  


const Home = () => {
  

    const navigate = useNavigate(); 


  return ( 
            <Container maxWidth='xl' sx={{ maxHeight:'auto'  ,  mt:'66px' }} >

                {/* Header section */ }

                <Box sx={styles.headerBoxLg}> 
                    <Box sx={styles.headerBoxMd}>
                            <Box
                            component='img' 
                            sx={{maxHeight:'488px' , maxWidth:'800px', paddingLeft:'80px'    }} 
                            alt="kitchen"
                            src="../assets/mainContentPhotos/kitchen3.jpg"  
                            />
                        

                            <Box sx={styles.headerTextBox}> 
                                <Typography
                                component='div'
                                variant='h4'
                                >
                                    We will design and make Your dream Kitchen

                                </Typography>

                                
                            </Box>
                    </Box>
                </Box>

                {/*  Services presentation , section1  */ }

                <Box   sx={styles.sectionOneBoxLg}>
                    <Box   sx={styles.sectionOneBoxMd}>

                        <Card sx={styles.card}>
                            <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/kitchen1.jpg"/ >
                        
                            <Box sx={styles.mediaBox}>
                                <Button variant="contained" sx={styles.mediaButton}  onClick={()=> navigate('kitchen')} >
                                        <Typography variant='h2' sx={styles.text}> 
                                            Kitchen
                                        </Typography>
                                </Button>
                            </Box>


                        
                        </Card>

                    </Box>
                    <Box sx={styles.sectionOneBoxMd}>

                        <Card sx={styles.card}>
                            <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/wardrobe.jpg" />

                            <Box sx={styles.mediaBox }>
                                <Button variant="contained"  sx={styles.mediaButton} onClick={()=>navigate('wardrobe')} >
                                <Typography variant='h2' sx={styles.text} > 
                                    Wardrobe
                                </Typography>
                                </Button>
                            </Box>



                        </Card>

                    </Box>
                    <Box sx={styles.sectionOneBoxMd}>

                        <Card sx={styles.card}>
                            <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/bath.jpg"/ >

                            <Box sx={styles.mediaBox}>
                                <Button variant="contained"  sx={styles.mediaButton} onClick={()=>navigate('bathroom')}>
                                <Typography variant='h2' sx={styles.text} > 
                                    Bathroom
                                </Typography>
                                </Button>
                            </Box>

                                                                                

                        </Card>                  
        


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
                        <Box sx={styles.sectionOneBoxMd}>

                            <Card sx={styles.card}>
                                <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/design6.jpg"/ >
                            
                                <Box sx={styles.mediaBox}>
                                    <Button variant="contained"  disable='true' sx={styles.mediaButton} onClick={()=> ('#')} >
                                            <Typography variant='h2' sx={styles.text}> 
                                                Design Kitchen
                                            </Typography>
                                    </Button>
                                </Box>


                            
                            </Card>

                        </Box>
                        <Box sx={styles.sectionOneBoxMd}>

                            <Card sx={styles.card}>
                                <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/hand.jpg" />

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
                    
                    </Box>
                    </Box>
                </Box>

            
                {/* Advice , inspiration , tips ,section3*/ }

                <Box   sx={styles.sectionTreeBoxLg}>
                    <Box sx={styles.sectionTreeBoxMd}>

                        <Card sx={styles.sectionTreeCard}>
                            <CardMedia component="img" height="510px" image="../assets/mainContentPhotos/advice.jpg"/ >
                        
                        </Card>

                    </Box>
                    <Box sx={styles.sectionTreeTextBox}>
                        <Box sx={{py:'30px'}} >
                            <Typography  variant='h4' sx={{ fontWeight:'290'  }}>
                               Unique and Quality made Furniture
                            </Typography>
                        </Box>
                        <Box sx={{pb:'30px' , pt:'10px'}}>
                            <Typography variant='body1' sx={{ fontWeight:'300',  width:'500px' }}>
                            We create unique kitchen furniture tailored to your needs. We offer our clients a comprehensive service, which includes furniture design, measurement, execution and professional assembly.
                            </Typography>
                        </Box>
                        <Box sx={styles.sectionTreeButtonBox}>
                                <Button variant="contained" sx={styles.buttonText} onClick={()=> console.log('clicked')} >
                                <Typography component='div' variant='h2' sx={{ fontWeight:'300' , fontSize:'1rem'}}   > 
                                    More
                                </Typography>
                                </Button>
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
                                    <Typography variant='h4' sx={{ fontWeight:'350'}} >
                                    Phone
                                    </Typography>
                            </Box>
                                
                            </Box>     
                        
                            <Box sx={styles.sectionFourInfoBox} >
                                <Box>
                                        <Typography  variant='h5'sx={{ fontWeight:'200' }}  >
                                        Faw office 
                                        </Typography>
                                </Box> 
                                <Box  sx={{ mx:'auto' , pl:'7px' }}>  
                                        <Typography  variant='h6' sx={{ fontWeight:'200' }} >
                                        966xxxxxx
                                        </Typography>
                                </Box>
                                <Box  sx={{ mx:'auto' , pl:'7px'  }}> 
                                        <Typography  variant='h6'sx={{ fontWeight:'200' }} >
                                        456xxxxxx
                                        </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Contact section nr 2 */ }
                        <Box sx={styles.sectionFourBoxMd}>
                        <Box sx={styles.sectionFourIconBox}>
                                < LocationOnIcon sx={styles.sectionFourIcon} />
                                <Box sx={styles.sectionFourTextBox} >
                                        <Typography variant='h4' sx={{ fontWeight:'350'  }}>
                                        Address
                                        </Typography>
                                </Box>
                                
                            </Box> 
                            <Box   sx={{display:'flex', flexDirection:'column'  }} >   
                                <Box  sx={styles.sectionFourInfoBox}>
                                        <Typography  variant='h5' sx={{ fontWeight:'200' }}>
                                        Faw xxxxxxxxxxxxx
                                        </Typography>
                                </Box> 
                                <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                        <Typography  variant='h6' sx={{ fontWeight:'200' }}>
                                        Lillesxxxxxxx
                                        </Typography>
                                        <Typography  variant='h6' sx={{ fontWeight:'200' }}>
                                        1914 xxxxxxxxx
                                        </Typography>
                                        <Typography  variant='h6' sx={{ fontWeight:'200'}}>
                                        NOxxxxxxxxxxxxx
                                        </Typography>
                                </Box>
                            </Box>
                            
                        </Box> 
                    
                        {/* Contact section nr 3 */ }
                        <Box sx={styles.sectionFourBoxMd}>
                            <Box  sx={styles.sectionFourIconBox}>
                            <MailOutlineIcon  sx={styles.sectionFourIcon} />
                                <Box sx={styles.sectionFourTextBox}>
                                    <Typography variant='h4' sx={{ fontWeight:'350'  }}>
                                    Email
                                    </Typography>
                                </Box>
                                
                            </Box>     
                            
                            <Box sx={{display:'flex' ,flexDirection:'column'  }}>
                                <Box sx={styles.sectionFourInfoBox}>
                                        <Typography  variant='h5' sx={{ fontWeight:'200'  }}>
                                        Faw office 
                                        </Typography>
                                </Box> 
                                <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                        <Typography  variant='h6'sx={{ fontWeight:'200'  }} >
                                        fawxxxxxxx@gmail.com
                                        </Typography>
                                </Box>
                            </Box>

                        </Box>      
                    </Box>
                    
            </Container>
     );
}
 
export default Home ;




