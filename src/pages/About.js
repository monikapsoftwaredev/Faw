import * as React from 'react';
import{ Box  , Container , Card , CardMedia , Typography , Button , }from "@mui/material";


  

 const About = () => {          
    return ( 
        <Container maxWidth='xl' sx={{ height:'100vh' ,   bgcolor:"#FFFFFF"}} >
            
                 <Box   sx={{ maxHeight:'auto' , width:'100%'  ,bgcolor:'#f7f4f2' , display:'flex' , alignItems:'center' , justifyContent:'space-evenly' , py:'100px' }}>
                    <Box sx={{ maxHeight:'1300px' , width:'1100px' , py:'45px'   }}>

                        <Card sx={{ width:'710px',  bgcolor:"#eae1dc" ,  mx:'auto' ,borderRadius:'0' }}>
                            <CardMedia component="img" height="510px" image="../assets/mainContentPhotos/faw.jpg"/ >
                        
                        </Card>

                    </Box>
                    <Box sx={{ maxHeight:'900px' , width:'900px'   }}>
                        <Box sx={{py:'30px'}} >
                            <Typography  variant='h4' sx={{ fontWeight:'290'  }}>
                              Who We are ?
                            </Typography>
                        </Box>
                        <Box sx={{pb:'30px'}}>
                            <Typography variant='body1' sx={{ fontWeight:'300',  width:'600px' }}>
                               The FAW company has been operating on the Norwegian market since 2014 and specializes in the execution and assembly of kitchen furniture. 
                               We have cooperated with companies such as Ikea, Kvik, Sigdal, Rotpunkt, HTH. 
                               Our passion and experience, and your vision and ideas are the perfect combination, which results in a comfortable, functional and elegant kitchen. What constantly drives us to act is the satisfaction of our customers.
                            </Typography>
                        </Box>
                        <Box sx={{bgcolor:'dbcfc9' ,  width:'100%' , height:'auto' , display:'flex' , justifyContent:'flexStart' }}>
                                <Button variant="contained" sx={{bgcolor:'#dbcfc9', opacity:' 0.8' ,px:'50px' , borderRadius:'0'}} onClick={()=> console.log('clicked')} >
                                <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'300' , color:'#2f2d29' ,fontSize:' 1rem' ,  lineHeight:' 1.8'  ,  width:'160', mx:'auto'}} > 
                                    More
                                </Typography>
                                </Button>
                        </Box>
                    </Box>
                    
                </Box>  
                        
                <Box sx={{  maxWidth:'1500px', maxHeight:'500px' , bgcolor:'#eae1dc' , display:'flex' , alignItems:'center' , justifyContent:'center' , py:'100px'  }}>
                   <Box  sx={{py:'30px' ,px:'30px'   , width:'400px' , height:'300px'}} >
                        <Box sx={{   display:'flex' , alignItems:'center' , justifyContent:'center'}} >
                            <Typography  variant='h5' sx={{ fontWeight:'290', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'30px' ,px:'30px' ,  }}>
                              An original project
                            </Typography>
                        </Box>
                        <Box sx={{pb:'30px'}}  >
                            <Typography variant='body1' sx={{ fontWeight:'300',  width:'400px', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'40px'  ,px:'10px' }}>
                            We always create an original and unique project in 3D tailored to your needs.
                            </Typography>
                        </Box>  
                    </Box> 
                    <Box sx={{py:'30px' ,px:'30px'  , width:'400px' , height:'300px'}} >
                        <Box sx={{ display:'flex' , alignItems:'center' , justifyContent:'center'}} >
                            <Typography  variant='h5' sx={{ fontWeight:'290', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'30px' ,px:'30px'   }}>
                            Measurement
                            </Typography>
                        </Box>
                        <Box sx={{px:'30px'}}>
                            <Typography variant='body1' sx={{  fontWeight:'300',  width:'400px', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'40px',px:'10px'}}>
                              We adjust kitchen furniture to the dimensions of the room. It is especially important in designing kitchen interiors so that the entire space is fully developed and functional.
                            </Typography>
                        </Box>  
                    </Box>
                    <Box sx={{py:'30px' ,px:'30px' , width:'400px' , height:'300px'}} >
                        <Box sx={{   display:'flex' , alignItems:'center' , justifyContent:'center'}} >
                            <Typography  variant='h5' sx={{fontWeight:'290', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'30px' ,px:'30px'   }}>
                              Execution and assembly
                            </Typography>
                        </Box>
                        <Box sx={{pb:'30px'}}>
                            <Typography variant='body1' sx={{ fontWeight:'300',  width:'400px', display:'flex' , alignItems:'center' , justifyContent:'center' , py:'40px' ,px:'10px'}}>
                            The quality of our furniture is high and is of key importance to us, which is why we always pay attention to the smallest details. The final assembly of the kitchen is not only quick but also accurate thanks to the use of modern equipment from renowned brands.
                            </Typography>
                        </Box> 
                    </Box>    

                    
             
                </Box> 
              
        </Container>
       
     );
}
 
export default About ;
