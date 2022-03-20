import React from 'react';
import Container from "@mui/material/Container";



const BasicContainer = ({ children, maxWidth ,  height , width }) => {
    return ( 
        
        <Container  
          maxWidth= {maxWidth} 
          height= {height} 
          width= {width}
        >
              
            {children}

        </Container>
        
       
       
     );
}
 
export default BasicContainer ;