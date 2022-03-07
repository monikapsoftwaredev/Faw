import * as React from "react";
import {  Container , Typography , Button , Box ,Card ,CardMedia   } from "@mui/material";


import { useNavigate } from 'react-router-dom'

  //eae5e3  dbcfc9


const Home = () => {

    const navigate = useNavigate(); 


    return ( 
        <Container maxWidth='xl' sx={{ maxHeight:'100vh'  ,  mt:'66px' }} >
        <Box sx={{ maxHeight:'auto' ,  width:'auto' ,  bgcolor:"#dbcfc9" , py:'40px'  , display:'flex' , alignItems:'center' , justifyContent:'center' }}> 
            <Box sx={{  maxWidth:'1500px',  borderRadius:'10' , display:"flex", alignItems:'center' , justifyContent:"center"  , mx:'auto' ,  my:'40px' , bgcolor:'#dbcfc9' ,  border:'2px solid #a8a49e '}}>
                    <Box
                    component='img' 
                    sx={{maxHeight:'488px' , maxWidth:'800px' , paddingRight:'20px'   }} 
                    alt="kitchen"
                    src="../assets/kitchen3.jpg"  
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
        <Box   sx={{ maxHeight:'auto' , width:'auto'  , bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-around' , py:'50px' }}>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative' }}>
                    <CardMedia component="img" height="300px" image="../assets/kitchen1.jpg"/ >
                
                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9', opacity:' 0.8' ,px:'40px' }} onClick={()=> navigate('kitchen')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29' }} > 
                            Kitchen
                        </Typography>
                        </Button>
                    </Box>


                
                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/wordrobe.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9',  opacity:' 0.8' ,px:'40px' }} onClick={()=>navigate('wordrobe')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'}} > 
                            Wordrobe
                        </Typography>
                        </Button>
                    </Box>



                </Card>

            </Box>
            <Box sx={{ maxHeight:'900px' , width:'auto' ,py:'90px'  }}>

                <Card sx={{ maxWidth:'310px',  bgcolor:"#eae1dc" , mx:'auto' ,borderRadius:'0' ,  position:'relative'}}>
                    <CardMedia component="img" height="300px" image="../assets/bath.jpg"/ >

                    <Box sx={{bgcolor:'transparent',  position:'absolute' ,  bottom:'0', right:'0', zIndex:'100', width:'100%' , height:'30%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9' ,  opacity:' 0.8' ,px:'40px' }} onClick={()=>navigate('bathroom')}>
                        <Typography varient='h2' sx={{ textTransform:'capitalize' ,fontWeight:'300', color:'#2f2d29'  }} > 
                            Bathroom
                        </Typography>
                        </Button>
                    </Box>

                                                                           

                </Card>                  
  


           </Box>
        </Box>
        <Box sx={{ maxHeight:'900' , width:'100%' ,pt:'50px' ,   bgcolor:"#dbcfc9"  }}>
            <Box sx={{  maxHeight:'200px' , width:'auto'  , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                <Typography component='div' variant="h4" sx={{fontWeight:'280' ,  width:'700px' , pl:'160px'  , pb:'10px'}}>
                  We will draw Your Dream Kitchen
                </Typography>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-around' , py:'30px'}}>
                <Box sx={{  px:'50px' , py:'30px' , maxWidth:'300px' , display:'flex' , flexDirection:'column' , alignItems:'center', justifyItems:'center' ,  position:'relative' }}>
                    <Box>
                            <Box component='img' 
                            sx={{height:'310px' , maxWidth:'300px'  , backgroundSize:' cover ', backgroundRepeat:'noRepeat' ,backgroundPosition:' center' , width:' 100%' ,objectFit:' cover'   }} 
                            alt="design"
                            src="../assets/design6.jpg" />
                    </Box>
                    <Box  sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9' , opacity:' 0.7', px:'20px',   position:'absolute' ,  bottom:'16%', zIndex:'100' , borderRadius:'4px'  }}>
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
                                src="../assets/hand.jpg" />
                    </Box>
                    <Box sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9' , opacity:' 0.7' ,px:'20px',   position:'absolute' ,  bottom:'16%', zIndex:'100' , borderRadius:'4px'  }}>
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
                                src="../assets/assemb6.jpg" />
                    </Box>
                    <Box  sx={{  maxWidth:'160' , display:'flex'  , alignItems:'center', justifyItems:'center'  , mx:'auto'  ,bgcolor:'#dbcfc9', opacity:' 0.7' , px:'20px',   position:'absolute' ,  bottom:'16%', zIndex:'100' , borderRadius:'4px'  }}>
                        <Typography component='div' variant="h6" sx={{fontWeight:'300' ,  width:'160', color:'#2f2d29' , py:'5px', mx:'auto'  ,fontSize:' 1rem' ,  lineHeight:' 1.5'}}>
                            Your Kitchen
                        </Typography> 
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box   sx={{ maxHeight:'auto' , width:'auto'  , bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-evenly' , py:'140px' }}>
            <Box sx={{ maxHeight:'900px' , width:'400px'   }}>

                <Card sx={{ maxWidth:'510px',  bgcolor:"#eae1dc" ,  mx:'auto' ,borderRadius:'0' }}>
                    <CardMedia component="img" height="510px" image="../assets/advice.jpg"/ >
                
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
                        <Button variant="contained" sx={{bgcolor:'#dbcfc9', opacity:' 0.8' ,px:'50px' }} onClick={()=> console.log('clicked')} >
                        <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29' ,fontSize:' 1rem' ,  lineHeight:' 1.5'}} > 
                            More
                        </Typography>
                        </Button>
                </Box>
            </Box>
            

                                                                           

               

           
        </Box>
        </Container>
     );
}
 
export default Home ;




