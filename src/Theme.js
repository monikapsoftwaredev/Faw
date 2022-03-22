import { createTheme } from '@mui/material/styles';


export const theme = createTheme({

    palette :{
        primary:{
            main :'#dbcfc9'
        },
        secondary:{
            main :'#ebe2dd'
        },
        
        third:{
            main :'#f7f4f2'
        },
        fourth:{
            main :'#eae1dc'
        },
         text:{
            main :'#2f2d29'
        },
    } ,
     typography:{
        fontFamily:"Roboto" , 
        h2:{
            textTransform:'capitalize',
            fontSize:"1.1rem" ,
            fontWeight:300,
            
        }, 
        h4:{
            fontSize:'2.1rem',
            fontWeight:250, 
        },
        h5:{
            fontSize:'2.1rem',
            
            
        }, 
        h6:{
            
            fontWeight:0,
        },
    } ,
    spacing: 10 , 
    components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple
            variant:'contained' , 
            color:'primary'
          },
        },
    
    
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
              borderRadius: 0 ,
              textTransform:'toUppercase', 
              color:'text'
            },
            contained:{
              backgroundColor:'red !important',
              '&:hover':{
                backgroundColor:'yellow !important' , 
                opacity:' 0.7',
                color:'text' 
              }  
            }
          },
        },
        MuiCard:{
          styleOverrides:{
            root:{
              borderRadius: 0 ,
            }
          }
        }

    },
    
   
   
})



