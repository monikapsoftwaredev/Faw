import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const Kitchen = () => {

    const navigate = useNavigate();
    return (
      <Box  sx={{marginTop:'200px' ,  marginLeft:'200px'}}>
        <Card sx={{ maxWidth: 345, pt:'20px' ,px:'10px' ,   backgroundColor:'#eae1dc' , mt:'150px' }}>
              <CardMedia
                component="img"
                height="210"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1TkE4fc_rhiNk8Exwc78E8rwSQegd5F84w&usqp=CAU"
              />
              
              <CardActions>
                <Button 
                 variant='text'
                 size="large"
                 onClick= { () => navigate("/")}
                 sx={{ mx:'auto' , my:'10'  , color:'#2f2d29'}}
                 
                 >
                < Typography 
                 varient='h6'
                 sx={{
                   textTransform:'capitalize' , 
                   mx:'2', 
                   my:'2',
                   px:'30px' , 
                   
                   }}>
                   Kitchen
                </Typography>
                </Button>
               </CardActions>
        </Card>
           
    </Box>
        
        
  );
}
 
export default Kitchen;