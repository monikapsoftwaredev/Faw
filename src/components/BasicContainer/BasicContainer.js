import React from 'react';
import Container from "@mui/material/Container";



const BasicContainer = ({ children, maxWidth ,  height , width , sx }) => {
    return ( 
        
        <Container  
          maxWidth= {maxWidth} 
          height= {height} 
          width= {width}
          sx={sx}
        >
              
            {children}

        </Container>
        
       
       
     );
}
 
export default BasicContainer ;