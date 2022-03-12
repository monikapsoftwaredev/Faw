import React from 'react';
import Container from "@mui/material/Container";



const BasicContainer = ({ children, maxWidth , backgroundColour , height , width }) => {
    return ( 
        
        <Container  
          maxWidth= {maxWidth} 
          backgroundColour= {backgroundColour} 
          height= {height} 
          width= {width}
        >
              
            {children}

        </Container>
        
       
       
     );
}
 
export default BasicContainer ;