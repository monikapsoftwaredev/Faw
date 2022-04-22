import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


 function CommonCard ({ height ,width , image , alt ,component , sx}){
  return (
         <Card>
            <CardMedia
            component={component}
            height={height}
            width={width}
            image={image}
            alt={alt}
            sx={sx} 
            />
           
        </Card>
  );
}
export default CommonCard