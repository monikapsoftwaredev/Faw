import * as React from 'react';
import Typography from '@mui/material/Typography';




 function CommonText({titel, variant, component , sx}) {
    return ( 
    
    <Typography variant={variant}  component={component}  sx={sx} >
        
        {titel}

    </Typography>
       
     );
}
export default CommonText
 
