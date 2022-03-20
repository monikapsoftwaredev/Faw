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
    } , shape:{
        borderRadius: 0 , 
    } , 
    spacing: 10 , 
    overrides:{
        MuiButton:{
          root:{
            bgcolor:'green',
            disableRipple : true,
            color:"text" , 
             
            },
            '&:hover':{
              bgcolor:"third"
            }
        }
    }
})
