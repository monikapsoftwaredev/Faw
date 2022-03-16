 export const styles = {
    appbar:{
      backgroundColor:"#dbcfc9" , 
      position:'fixed',
      overflow:'hidden'
      
     
    } , 
    logo:{
      mr: 15,
      fontSize: '30px',
      fontWeight:'420', 
      color: '#2f2d29' , 
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
            color: "#2f2d29",
            
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
      color: '#2f2d29', 
      display: 'block ',
      disableRipple:'true' 
  
    }, 

    textMdNav :{
      fontSize: '15px' ,
      textTransform:'capitalize' , 
      fontWeight:'350', 
      pl:'10px'
    } , 

    

 
  
 
  }