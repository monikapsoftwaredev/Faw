import * as React from "react";
import {  Container , Typography , Button , Box ,Card ,CardMedia   } from "@mui/material";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CarpenterOutlinedIcon from '@mui/icons-material/CarpenterOutlined';
import HandymanIcon from '@mui/icons-material/Handyman';

import { useNavigate } from 'react-router-dom'




const Home = () => {

    const navigate = useNavigate(); 


    return ( 
        <Container maxWidth='xl' sx={{ maxHeight:'100vh'  ,  mt:'66px' }} >
        <Box sx={{ maxHeight:'auto' ,  width:'auto' ,  bgcolor:"#dbcfc9" , py:'60px'  , display:'flex' , alignItems:'center' , justifyContent:'center' }}> 
            <Box sx={{  maxWidth:'1100px',  borderRadius:'10' , display:"flex", alignItems:'center' , justifyContent:"center"  , mx:'auto' ,  my:'40px' , bgcolor:'#dbcfc9' }}>
                    <Box
                    component='img' 
                    sx={{maxHeight:'488px' , maxWidth:'800px' , paddingRight:'20px'  }} 
                    alt="kitchen"
                    src="../assets/kitchen3.jpg"  
                    />
                

                    <Box sx={{ maxHeight:"522px", px:'20px' , mx:'90px'}}> 
                        <Typography
                        component='div'
                        variant='h3'
                        sx={{color:'#2f2d29' , width:'320px' , height:'300px' ,fontWeight:'280' ,lineHeight:'1.8' ,  display:'flex' , alignItems:'center' , justifyContent:'center'}}
                        >
                            We will design and make Your dream Kitchen

                        </Typography>

                        
                    </Box>
            </Box>
        </Box>
        <Box   sx={{ maxHeight:'auto' , width:'auto' ,py:'80px' , bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-around' }}>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'50px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/kitchen1.jpg"/ >
                
                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9' ,px:'40px' }} onClick={()=> navigate('kitchen')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29'}} > 
                            Kitchen
                        </Typography>
                        </Button>
                    </Box>


                
                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'50px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/wordrobe.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9' ,px:'40px' }} onClick={()=>navigate('wordrobe')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'}} > 
                            Wordrobe
                        </Typography>
                        </Button>
                    </Box>



                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'50px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/bath.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9' ,px:'40px' }} onClick={()=>navigate('bathroom')}>
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'}} > 
                            Bathroom
                        </Typography>
                        </Button>
                    </Box>



                </Card>

           </Box>
        </Box>
        <Box   sx={{ maxHeight:'900' , width:'100%' ,py:'80px' ,   bgcolor:"#dbcfc9"  }}>
            <Box sx={{  maxHeight:'200px' , width:'auto'  , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                <Typography component='div' variant="h4" sx={{fontWeight:'280' ,  width:'700px' , pl:'160px'  , pb:'10px' , borderBottom:'2px solid  #e8e2de' }}>
                  We will draw Your Dream Kitchen
                </Typography>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-around' , py:'40px'}}>
                <Box sx={{ px:'50px' , py:'30px' ,  maxWidth:'210px' , display:'flex' , flexDirection:'column' , alignItems:'center', justifyItems:'center'  }}>
                    <Box>
                        <DesignServicesOutlinedIcon  sx={{color: '#635952' , fontSize:'110px', py:'40px' , px:'40px'  }} />
                    </Box>
                    <Box  sx={{  maxWidth:'150px' , display:'flex'  , alignItems:'center', justifyItems:'center'  }}>
                        <Typography component='div' variant="h6" sx={{fontWeight:'280' ,  width:'150px' }}>Design Kitchen</Typography>
                    </Box>
                </Box>
                <Box sx={{px:'50px' , py:'30px' ,  maxWidth:'210px' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyItems:'center', border:'2px solid #e8e2de'}}>
                    <Box>
                        <BorderColorOutlinedIcon fontSize='large' sx={{color: '#635952' , fontSize:'110px' , py:'40px' , px:'40px' }} />
                    </Box>
                    <Box  sx={{  maxWidth:'150px' , display:'flex'  , alignItems:'center', justifyItems:'center'  }}>
                        <Typography  component='div' variant="h6" sx={{fontWeight:'280' ,  width:'150px' }}>Signing Contract</Typography>
                    </Box>
                </Box>
                <Box sx={{  px:'50px' , py:'30px' ,  maxWidth:'210px' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyItems:'center'  , border:'2px solid #e8e2de'}}>
                    <Box>
                        <CarpenterOutlinedIcon fontSize='large' sx={{color: '#635952' , fontSize:'110px' , py:'40px' , px:'40px' }} />
                    </Box>
                    <Box  sx={{  maxWidth:'150px' , display:'flex'  , alignItems:'center', justifyItems:'center'  }}>
                        <Typography component='div' variant="h6" sx={{fontWeight:'280' ,  width:'150px' }} >Creating Kitchen</Typography> 
                    </Box>
                </Box>
            </Box>
        </Box>
        </Container>
     );
}
 
export default Home ;

// sx={{ position:'absolute' , bgcolor:"green", bottom:'0', right:'0', zIndex:'100' , mx:'auto' }} eae1dc


