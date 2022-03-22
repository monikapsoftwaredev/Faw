import * as React from 'react';
import{Box,Card ,CardMedia} from '@mui/material';


 function CommonCardSm ({ children ,height , image , alt ,component , sx}){
  return (
         
           <Card >
              <CardMedia
              component={component}
              height={height}
              image={image}
              alt={alt}
              sx={sx}
              />
            
              {children}  
           </Card>
           
        
  );
}
export default CommonCardSm