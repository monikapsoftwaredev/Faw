import * as React from 'react';
import{ Box, Container , Typography} from '@mui/material';





const Bathroom = () => {

  


    return (
        <Container maxWidth='xl' sx={{ height:'100vh'  ,  mt:'66px' ,py:'50px' ,   bgcolor:"#FFFFFF" , display:'flex' , flexWrap:'wrap' ,alignItems:'center', justifyContent:'space-evenly' }} >
        <Box sx={{ width:'1650px', height:'100%' , display:'flex' , alignItems:'center',  justifyContent:'space-evenly'  }}>
                    <Typography variant="h5">
                     Sorry , but the gallery is currently empty
                    </Typography>
        </Box>
        </Container>
    );

  }

 
export default Bathroom;