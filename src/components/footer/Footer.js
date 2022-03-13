import * as React from "react";
import { useNavigate } from "react-router-dom";
import {  Typography , Button , Box  } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';




const Fotter = () => {

    const navigate = useNavigate();   


    return ( 
       
        <Box sx={{ height:'70px' ,  width:'100%'  ,   bgcolor:" #dbcfc9" , display:'flex' , flexDirection:'row', alignItems:'center' , justifyContent:'space-around' , overflowY:'hidden' }}>
                    
                    
                                <Box sx={{bgcolor:'dbcfc9' }}>
                                        <Box sx={{maxHeight:'150px' , maxWidth:'300px' }}>
                                                <Typography>
                                                &copy;Copyright 2022
                                               </Typography>
                                        </Box>

                                </Box> 



                                {/*//////////////////////////////////////////////////////////////////////// */}  

                                <Box sx={{maxHeight:'350px' , maxWidth:'500px',  display:'flex' , flexDirection:'row', alignItems:'center' , justifyContent:'center', pl:'210px' }}>  
                                            <Box>
                                                <Button variant="text" sx={{ borderRadius:'0'}} onClick={()=> console.log(' Facebook')}  >
                                                <FacebookIcon sx={{fontSize:'35px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button variant="text" sx={{ borderRadius:'0'}} onClick={()=> console.log('Instagram')} >
                                                    <InstagramIcon sx={{fontSize:'35px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button variant="text" sx={{ borderRadius:'0' }} onClick={()=> console.log(' Youtube')}>
                                                    <YouTubeIcon sx={{fontSize:'35px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                </Box> 
                                {/*//////////////////////////////////////////////////////////////////////// */}
                                <Box  sx={{maxHeight:'150px' , maxWidth:'500px' ,    display:'flex' , flexDirection:'row', alignItems:'baseline'}}>
                                            
                                            <Box>
                                                <Typography>
                                                Created by :
                                                </Typography>
                                            </Box>       
                                            
                                            <Box>
                                                <Button variant="text" sx={{bgcolor:'transparent' , borderRadius:'0'}} onClick={()=> console.log(' M&P Design')} >
                                                    <Typography varient='h2' sx={{ textTransform:'capitalize'  ,fontWeight:'400' ,   color:'#787774' ,fontSize:' 1rem' ,  lineHeight:' 1.5'}} > 
                                                    M&P Webdesign & Development
                                                    </Typography>
                                                </Button>      
                                            </Box>
                                        
                                </Box>  

                        
                                        
                 </Box>       
       
       
           
       
                
     );
}
 
export default Fotter ;