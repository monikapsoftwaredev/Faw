import { createTheme } from '@mui/material/styles';


export const theme = createTheme({

    palette :{
        
        basic:{
            main :'#ffffff'
        },
        
        primary:{
            main :'#f3f3f3'
        },
         text:{
            main : '#212121'
        },
        gold:{
          main:'#b9936e'
        }, 
        dark:{
         main:'#b9936e'
       } ,
       light:{
         main:'#f1f1f4'
       } 

    } ,
     typography:{
      fontFamily: [
        'Cinzel',
        'Raleway',
        'Cormorant'
      ].join(','), 
        h2:{
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
       
    } ,
    spacing: 10 , 
    components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple
            variant:'contained' , 
            color:'primary.main'
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
              textTransform:'none', 
              color:'text.main'
            },
            contained:{
              backgroundColor:'primary.main !important',
              '&:hover':{
               // backgroundColor:'yellow !important' , 
                opacity:' 0.9',
                color:'' 
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



