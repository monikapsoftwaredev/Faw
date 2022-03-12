import * as React from "react";
import { useNavigate } from "react-router-dom";
import {  Container , Typography , Button , Box ,Card ,CardMedia } from "@mui/material";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';






  //eae5e3  dbcfc9 #ebe2dd////maxWidth='xl' sx={{ maxHeight:'100vh'  ,  mt:'66px' }}


const Home = () => {

    const navigate = useNavigate(); 


    return ( 
        <Container maxWidth='xl' sx={{ maxHeight:'auto'  ,  mt:'66px' }} >

        {/* Header section */ }

        <Box sx={{ maxHeight:'auto' ,  width:'auto' ,  bgcolor:"#ebe2dd" , py:'40px'  , display:'flex' , alignItems:'center' , justifyContent:'center' }}> 
            <Box sx={{  maxWidth:'1500px',  borderRadius:'10' , display:"flex", alignItems:'center' , justifyContent:"center"  , mx:'auto' ,  my:'40px' , bgcolor:'#ebe2dd' }}>
                    <Box
                    component='img' 
                    sx={{maxHeight:'488px' , maxWidth:'800px' , paddingRight:'20px'   }} 
                    alt="kitchen"
                    src="../assets/mainContentPhotos/kitchen3.jpg"  
                    />
                

                    <Box sx={{ maxHeight:"522px", px:'20px' , mx:'90px'}}> 
                        <Typography
                        component='div'
                        variant='h4'
                        sx={{color:'#2f2d29' , width:'320px' , height:'300px' ,fontWeight:'300' ,lineHeight:'1.8' ,  display:'flex' , alignItems:'center' , justifyContent:'center'}}
                        >
                            We will design and make Your dream Kitchen

                        </Typography>

                        
                    </Box>
            </Box>
        </Box>

        {/*  Services presentation section  */ }

        <Box   sx={{ maxHeight:'auto' , width:'auto'  , bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-evenly' , py:'50px' }}>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative' }}>
                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/kitchen1.jpg"/ >
                
                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9', opacity:' 0.8' ,px:'40px' ,   borderRadius:'0' }} onClick={()=> navigate('kitchen')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29' }} > 
                            Kitchen
                        </Typography>
                        </Button>
                    </Box>


                
                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/wordrobe.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9',  opacity:' 0.8' ,px:'40px' ,   borderRadius:'0' }} onClick={()=>navigate('wordrobe')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'}} > 
                            Wordrobe
                        </Typography>
                        </Button>
                    </Box>



                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/mainContentPhotos/bath.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9' ,  opacity:' 0.8' ,px:'40px' ,   borderRadius:'0' }} onClick={()=>navigate('bathroom')}>
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'  }} > 
                            Bathroom
                        </Typography>
                        </Button>
                    </Box>

                                                                           

                </Card>                  
  


           </Box>
        </Box>

        {/* Service process creation section*/ }

        <Box sx={{ maxHeight:'900' , width:'100%' ,pt:'50px' ,   bgcolor:"#ebe2dd"  }}>
            <Box sx={{  maxHeight:'200px' , width:'auto'  , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                <Typography component='div' variant="h4" sx={{fontWeight:'280' ,  width:'700px' , pl:'160px'  , pb:'10px'}}>
                  We will draw Your Dream Kitchen
                </Typography>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-evenly' , py:'30px'}}>
                <Box sx={{  px:'50px' , py:'30px' , maxWidth:'300px' , display:'flex' , flexDirection:'column' , alignItems:'center', justifyItems:'center' ,  position:'relative' }}>
                    <Box>
                            <Box component='img' 
                            sx={{height:'310px' , maxWidth:'300px'  , backgroundSize:' cover ', backgroundRepeat:'noRepeat' ,backgroundPosition:' center' , width:' 100%' ,objectFit:' cover'   }} 
                            alt="design"
                            src="../assets/mainContentPhotos/design6.jpg" />
                    </Box>
                    <Box  sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9' , opacity:' 0.7', px:'20px',  position:'absolute' ,  bottom:'16%', zIndex:'10'   }}>
                        <Typography component='div' variant="h6" sx={{fontWeight:'300' ,  width:'160', color:'#2f2d29'  , py:'5px', mx:'auto' ,fontSize:' 1rem' ,  lineHeight:' 1.5' }}>
                            Design Kitchen
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{px:'50px' , py:'30px' ,  maxWidth:'300px' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyItems:'center' , position:'relative'}}>
                    <Box>
                        <Box component='img' 
                               sx={{height:'310px' , maxWidth:'300px'  , backgroundSize:' cover ', backgroundRepeat:'noRepeat' ,backgroundPosition:' center' , width:' 100%' ,objectFit:' cover'   }} 
                                alt="hand"
                                src="../assets/mainContentPhotos/hand.jpg" />
                    </Box>
                    <Box sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9' , opacity:' 0.7' ,px:'20px',   position:'absolute' ,  bottom:'16%', zIndex:'10'  }}>
                        <Typography  component='div' variant="h6" sx={{fontWeight:'300' ,  width:'160', color:'#2f2d29' , py:'5px', mx:'auto'  ,fontSize:' 1rem' ,  lineHeight:' 1.5' }}>
                            Signing Contract
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{px:'50px' , py:'30px' ,  maxWidth:'300px' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyItems:'center' , position:'relative'}}>
                    <Box>
                        <Box component='img'
                               sx={{height:'310px' , maxWidth:'300px'  , backgroundSize:' cover ', backgroundRepeat:'noRepeat' ,backgroundPosition:' center' , width:' 100%' ,objectFit:' cover'   }} 
                                alt="kitchen"
                                src="../assets/mainContentPhotos/assemb6.jpg" />
                    </Box>
                    <Box  sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9', opacity:' 0.7' , px:'20px',   position:'absolute' ,  bottom:'16%', zIndex:'10' , }}>
                        <Typography component='div' variant="h6" sx={{fontWeight:'300' ,  width:'160', color:'#2f2d29' , py:'5px', mx:'auto'  ,fontSize:' 1rem' ,  lineHeight:' 1.5'}}>
                            Your Kitchen
                        </Typography> 
                    </Box>
                </Box>
            </Box>
        </Box>

        {/* Advice , inspiration , tips section*/ }

        <Box   sx={{ maxHeight:'auto' , width:'auto'  , bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-evenly' , py:'100px' }}>
            <Box sx={{ maxHeight:'900px' , width:'400px'   }}>

                <Card sx={{ maxWidth:'510px',  bgcolor:"#eae1dc" ,  mx:'auto' ,borderRadius:'0' }}>
                    <CardMedia component="img" height="510px" image="../assets/mainContentPhotos/advice.jpg"/ >
                
                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto'   }}>
                <Box sx={{py:'30px'}} >
                    <Typography  variant='h4' sx={{ fontWeight:'290'  }}>
                        Do You need advice, inspiration or tips ?
                    </Typography>
                </Box>
                <Box sx={{pb:'30px'}}>
                    <Typography variant='body1' sx={{ fontWeight:'300',  width:'400px' }}>
                        Thanks to our experience and our expertise with great pleasure, 
                        We will help You to find the best solution for your new kitchen.
                    </Typography>
                </Box>
                <Box sx={{bgcolor:'dbcfc9' ,  width:'100%' , height:'auto' , display:'flex' , justifyContent:'flexStart' }}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9', opacity:' 0.8' ,px:'50px' , borderRadius:'0'}} onClick={()=> console.log('clicked')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29' ,fontSize:' 1rem' ,  lineHeight:' 1.5'  ,  width:'160', mx:'auto'}} > 
                            More
                        </Typography>
                        </Button>
                </Box>
            </Box>
            
        </Box>
         {/* Contact section* #ebe2dd #e2d8d3 */ }
         
        <Box sx={{ maxHeight:'900px', width:'100%' , py:'10px' , bgcolor:'#ebe2dd'   , display:'flex' , alignItems:'center' , justifyContent:'space-evenly' }}>

                {/* Contact section nr 1 */ }
                <Box sx={{height:'410px' , width:'360px', my:'30px' ,  bgcolor:'#ebe2dd'  , px:'10px' ,  pt:'20px', }}>
                    <Box sx={{display:'flex' ,  flexDirection:'column' ,  alignItems:'center' , justifyContent:'center' , mb:'20px'}}>
                        <PhoneOutlinedIcon  sx={{fontSize:'65px' , fontWeight:'200' ,  color:'#787774'}} />
                        <Box >
                            <Typography variant='h4' sx={{textTransform:'uppercase' , color:'#2f2d29' , fontWeight:'350' , px:'30px' , pt:'20px' , pb:'30px' }}>
                            Phone
                            </Typography>
                       </Box>
                        
                    </Box>     
                   
                    <Box sx={{display:'flex' ,flexDirection:'column' , alignItems:'center' , justifyContent:'center' , }} >
                        <Box>
                                <Typography  variant='h5' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'250', px:'30px' , py:'5px' }}>
                                Faw office 
                                </Typography>
                        </Box> 
                        <Box  sx={{ mx:'auto' , pl:'7px' }}>  
                                <Typography  variant='h6' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                   966xxxxxx
                                </Typography>
                        </Box>
                        <Box  sx={{ mx:'auto' , pl:'7px' }}> 
                                <Typography  variant='h6' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                   456xxxxxx
                                </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Contact section nr 2 */ }
                <Box sx={{height:'410px' , width:'360px', my:'30px' ,  bgcolor:'#ebe2dd'  , px:'10px' ,  pt:'20px'}}>
                   <Box sx={{display:'flex' ,flexDirection:'column'  , alignItems:'center' , justifyContent:'center' , mb:'20px'}}>
                        < LocationOnIcon sx={{fontSize:'65px' , fontWeight:'200' ,  color:'#787774'}} />
                        <Box>
                                <Typography variant='h4' sx={{textTransform:'uppercase' , color:'#2f2d29' , fontWeight:'350' , px:'30px' , pt:'20px' , pb:'30px' }}>
                                  Adress
                                </Typography>
                        </Box>
                        
                    </Box> 
                     <Box   sx={{display:'flex', flexDirection:'column'  }} >   
                         <Box  sx={{display:'flex' ,flexDirection:'column' , alignItems:'center' , justifyContent:'center' , }}>
                                <Typography  variant='h5' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'250', px:'30px' , py:'5px' }}>
                                Faw xxxxxxxxxxxxx
                                </Typography>
                        </Box> 
                        <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                <Typography  variant='h6' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                Lillesxxxxxxx
                                </Typography>
                                <Typography  variant='h6' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                1914 xxxxxxxxx
                                </Typography>
                                <Typography  variant='h6' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                NOxxxxxxxxxxxxx
                                </Typography>
                        </Box>
                    </Box>
                    
                </Box> 
            
                {/* Contact section nr 3 */ }
                <Box sx={{height:'410px' , width:'360px',my:'30px'  ,   bgcolor:'#ebe2dd'  , px:'10px'  , pt:'20px'}}>
                    <Box  sx={{display:'flex' ,flexDirection:'column'  , alignItems:'center' , justifyContent:'center' , mb:'20px' }}>
                      
                        <MailOutlineIcon  sx={{fontSize:'65px' , fontWeight:'200' ,  color:'#787774'}} />
                        <Box>
                            <Typography variant='h4' sx={{textTransform:'uppercase' , color:'#2f2d29' , fontWeight:'350' , px:'30px' , pt:'20px' , pb:'30px' }}>
                            Email
                            </Typography>
                        </Box>
                        
                    </Box>     
                       
                    <Box sx={{display:'flex' ,flexDirection:'column'  }}>
                        <Box sx={{display:'flex' ,flexDirection:'column' , alignItems:'center' , justifyContent:'center' , }}>
                                <Typography  variant='h5' sx={{textTransform:'capitalize' , color:'#2f2d29' , fontWeight:'250', px:'30px' , py:'5px' }}>
                                Faw office 
                                </Typography>
                        </Box> 
                        <Box  sx={{ mx:'auto' , pl:'7px' }}>
                                <Typography  variant='h6' sx={{textTransform:'lowercase' , color:'#2f2d29' , fontWeight:'300', px:'30px' , py:'5px' , mx:'auto' }}>
                                fawxxxxxxx@gmail.com
                                </Typography>
                        </Box>
                    </Box>

                </Box>      
            </Box>
              {/* Media section nr 3 dbcfc9 EBE2DD 
               <Box   sx={{ maxHeight:'400px', width:'100%'  ,   bgcolor:"#dbcfc9"   }}>
                    <Box   sx={{ height:'auto', width:'100%' , pt:'60px' , display:'flex' , alignItems:'center' , justifyContent:'center'  }}>  
                            <Box>
                                <Button variant="text" sx={{ px:'30px' , borderRadius:'0'}} onClick={()=> console.log(' Facebook')}  >
                                   <FacebookIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                </Button>
                            </Box>
                            <Box>
                                <Button variant="text" sx={{ px:'30px' , borderRadius:'0'}} onClick={()=> console.log('Instagram')} >
                                    <InstagramIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                </Button>
                            </Box>
                            <Box>
                                <Button variant="text" sx={{ px:'30px' , borderRadius:'0' , border:'3px solid green'}} onClick={()=> console.log(' Youtube')}>
                                    <YouTubeIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                </Button>
                            </Box>
                    </Box> 
               
                    <Box sx={{bgcolor:'dbcfc9' ,  width:'100%' , height:'auto' , display:'flex' , justifyContent:'space-around' }}>
                                <Box  sx={{maxHeight:'auto', maxWidth:'auto' , py:'30px' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                                    <Typography>
                                    &copy;Copyright 2022
                                    </Typography>
                                </Box>
                                <Box  sx={{maxHeight:'auto', maxWidth:'auto' , py:'10px' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                                    
                                    <Box>
                                        <Typography>
                                        Created by :
                                        </Typography>
                                    </Box>       
                                    
                                    <Box>
                                        <Button variant="text" sx={{bgcolor:'transparent' , px:'10px' , borderRadius:'0'}} onClick={()=> console.log(' M&P Design')} >
                                            <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'400' ,   color:'#787774' ,fontSize:' 1rem' ,  lineHeight:' 1.5'}} > 
                                            M&P Webdesign & Development
                                            </Typography>
                                        </Button>      
                                    </Box>
                                
                                </Box>         
                    </Box>  

            </Box> */ }
     </Container>
     );
}
 
export default Home ;




