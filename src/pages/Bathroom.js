import * as React from 'react';
import{ Box, Container , Typography} from '@mui/material';
import { styles } from '../pages/styles/bathroom';





const Bathroom = () => {

  


    return (
        <Container maxWidth='xl' sx={styles.boxLg} >
        <Box sx={styles.boxMd}>
                    <Typography variant="h4" sx={styles.text}>
                     Sorry , but the gallery is currently empty
                    </Typography>
        </Box>
        </Container>
    );

  }

 
export default Bathroom;