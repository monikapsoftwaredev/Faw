import { theme } from '../../Theme';
 
 export const styles = {
    appbar:{
      backgroundColor:theme.palette.primary.main , 
      opacity:0.6 ,
      position:'fixed',
      overflow:'hidden'
      
     
    } , 
    logo:{
      mr:theme.spacing(1.5),
      fontSize: theme.spacing(3),
      fontWeight:420, 
      color:theme.palette.text.main, 
      textTransform:'capitalize' , 
          display: {
              xs: 'none',
              md: 'flex'
           } 
       } , 
    box:{
         flexGrow: 1, 
         display: {
              xs: 'flex',
              md: 'none' 
          }
    } , 

    text:{
        "&.MuiButton-text": {
            color:theme.palette.text.main,
            
          }
    },

    boxMdNav:{
          flexGrow: 1,
            display: { 
              xs: 'none',
              md: 'flex'
            }
    } ,
    
    buttonMdNav:{
      my: 2, 
      mr: 2  , 
      color:theme.palette.text.main, 
      display: 'block ',
      disableRipple:'true' 
  
    }, 

    textMdNav :{
      fontSize: theme.spacing(1.5) ,
      textTransform:'capitalize' , 
      fontWeight:350, 
      pl:theme.spacing(1)
    } , 

    

 
  
 
  }