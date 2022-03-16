import * as React from 'react';
import{ Box, Container , Typography} from '@mui/material';
import { styles } from '../styles/error';





const Error = () => {

  


    return (
        <Container maxWidth='xl' sx={styles.boxLg} >
        <Box sx={styles.boxMd}>
                    <Typography variant="h4" sx={styles.text}>
                     Sorry , but this side doesnt exist !
                    </Typography>
        </Box>
        </Container>
    );

  }

 
export default Error;