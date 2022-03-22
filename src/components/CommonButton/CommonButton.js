import * as React from 'react';
import Button from '@mui/material/Button';





  export default function CommonButton ({children, variant, color ,disable , disableRipple , size , sx}) {
    return ( 
        <Button variant={variant} color={color} disable={disable} disableRipple={disableRipple} size={size}  sx={sx} onClick={()=>('#')} >

          {children}
            
        </Button>
     );
}
