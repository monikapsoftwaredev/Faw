
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";


const Home = () => {
    return ( 
        <Container maxWidth='xl' sx={{ maxHeight:'100vh' , bgcolor: "" ,  mt:'120px'  }} >
        <Box sx={{ maxHeight:'900px' ,  width:'auto'  , bgcolor: "#eae1dc"  , py:'10px'}}> 
            <Box sx={{  maxWidth:'950px'  , borderRadius:'1' , display:"flex", alignItems:'center' , justifyContent:"center"  , mx:'auto' ,  my:'40px' }}>
                    <Box
                    component='img' 
                    sx={{maxHeight:'488px' , maxWidth:'700px' , paddingLeft:'20px'  }} 
                    alt="kitchen"
                    src="../assets/kitchen3.jpg"  
                    />
                

                    <Box sx={{ maxHeight:"522px", px:'70px' , mx:'90px'}}> 
                        <Typography
                        component='div'
                        variant='h5'
                        sx={{color:'#2f2d29'}}
                        >
                            We will design Your dream Kitchen

                        </Typography>
                        
                    </Box>
            </Box>
        </Box>
        </Container>
     );
}
 
export default Home ;

