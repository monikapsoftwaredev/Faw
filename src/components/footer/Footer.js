import * as React from "react";
import { useNavigate } from "react-router-dom";
import {  Typography , Button , Box  } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import{ styles} from './footerStyles'




const Fotter = () => {

    const navigate = useNavigate();   


    return ( 
       
        <Box sx={styles.sectionBoxLg}>
                    
                    
                                <Box sx={{ bgcolor:" #dbcfc9"  }}>
                                        <Box sx={{maxHeight:'150px' , maxWidth:'300px' }}>
                                                <Typography>
                                                &copy;Copyright 2022
                                               </Typography>
                                        </Box>

                                </Box> 



                                {/*//////////////////////////////////////////////////////////////////////// */}  

                                <Box sx={styles.sectionBoxMd1}>  
                                            <Box  sx={{px:'30px'}}>
                                                <Button variant="text"  disableRipple={true}  sx={styles.buttonIcon} onClick={()=> console.log(' Facebook')}  >
                                                   <FacebookIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                            <Box sx={{px:'30px'}}>
                                                <Button variant="text"  disableRipple={true}  sx={styles.buttonIcon} onClick={()=> console.log('Instagram')} >
                                                    <InstagramIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                            <Box sx={{px:'30px'}}>
                                                <Button variant="text"  disableRipple={true} sx={styles.buttonIcon} onClick={()=> console.log(' Youtube')}>
                                                    <YouTubeIcon sx={{fontSize:'30px' , fontWeight:'200' ,  color:'#787774'}}/>
                                                </Button>
                                            </Box>
                                </Box> 
                                {/*//////////////////////////////////////////////////////////////////////// */}
                                <Box sx={styles.sectionBoxMd2}>
                                            
                                            <Box>
                                                <Typography>
                                                Created by :
                                                </Typography>
                                            </Box>       
                                            
                                            <Box>
                                                <Button variant="text" sx={{bgcolor:'transparent' , borderRadius:'0'}} onClick={()=> console.log('M&D Webdesign & Development')} >
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