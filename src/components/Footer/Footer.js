import * as React from "react";
import { theme } from "../../Theme";
import { useNavigate } from "react-router-dom";
import {Box  } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CommonText from "../CommonText/CommonText";
import CommonButton  from '../CommonButton/CommonButton';
import{ styles} from './footerStyles'


const Fotter = () => {

    const navigate = useNavigate();   


    return ( 
        <Box sx={styles.sectionBoxLg}>
                            <Box sx={styles.sectionBoxLgOne}>
                                           
                                            <Box sx={styles.sectionBoxMd1}>  
                                                        <Box  sx={{px:'30px'}}>
                                                            <CommonButton variant="text"  disableRipple={true}  sx={styles.buttonIcon} onClick={()=> console.log(' Facebook')}  >
                                                            <FacebookIcon sx={styles.icon}/>
                                                            </CommonButton>
                                                        </Box>
                                                        <Box sx={{px:'30px'}}>
                                                            <CommonButton variant="text"  disableRipple={true}  sx={styles.buttonIcon} onClick={()=> console.log('Instagram')} >
                                                                <InstagramIcon sx={styles.icon}/>
                                                            </CommonButton>
                                                        </Box>
                                                        <Box sx={{px:'30px'}}>
                                                            <CommonButton variant="text"  disableRipple={true} sx={styles.buttonIcon} onClick={()=> console.log(' Youtube')}>
                                                                <YouTubeIcon sx={styles.icon}/>
                                                            </CommonButton>
                                                        </Box>
                                            </Box> 
                                            
                                           

                                    
                                                    
                            </Box> 
                            <Box sx={styles.sectionBoxLgTwo}>
                                                                 
                                            <Box sx={styles.sectionBoxMd2}>
                                            
                                                    <Box sx={styles.copyRightBox}>
                                                            <CommonText titel='&copy;Copyright 2022 ' variant='body1' />
                                                    </Box>
                                            
                                                    <Box sx={styles.companyBox} >
                                                        <Box sx={styles.createdBox}>
                                                            <CommonText titel=' Created by :' variant='body1' />
                                                        </Box>       
                                                        
                                                        <Box >
                                                            <CommonButton variant="text"  onClick={()=> console.log('M&D Webdesign & Development')} >
                                                                <CommonText titel='M&P Webdesign & Development' varient='h2' sx={styles.company} /> 
                                                            </CommonButton>      
                                                        </Box>
                                                    </Box>         
                                                    
                                            </Box>  

                                    
                                                    
                            </Box>       
             
       
        </Box> 
           
       
                
     );
}
 
export default Fotter ;