import { theme } from '../../Theme';
 
 export const styles = {

  commonContainer:{
    backgroundColor:'transparent',
    opacity:0.9 ,
  } , 
    appbar:{
      background: 'linear-gradient(#f2f3f4 , #ffffff ) ' , 
      px:theme.spacing(1) ,
      mb:theme.spacing(3) ,
      //opacity:0.8 ,
      position:'fixed',
      overflow:'hidden' ,
      zIndex:300 , 
      display:'flex' , 
      alignItems:'center',
      justifyContent:'center'  ,
      '&:hover' :{
        bgcolor:'#f2f3f4'
      }
     
    } , 
    appbarcont:{
      width:'100%' , 
      py:theme.spacing(1),
      display:'flex' , 
      alignItems:'center',
      justifyContent:'center'  , 
      mt:'20px'
      
      
    } ,

    logoLg:{
      display:'none',
      [theme.breakpoints.up("md")]:{
        display:'flex', 
        fontSize: theme.spacing(4),
        fontWeight:600, 
        color:'	#b9936e',
        px: theme.spacing(6) , 
        textTransform:'lowercase' , 
      } 
    } , 

    logoMd:{
      //bgcolor:'red', 
      fontSize: theme.spacing(4),
      fontWeight:600, 
      color:'	#b9936e',
      px: theme.spacing(2) , 
      textTransform:'none' , 
      display:{
        xs:'none' , 
        md:'flex' , 
        lg:'none'
      }
    } , 

    logoSm:{
      //bgcolor:'black', 
     fontSize: theme.spacing(4),
      fontWeight:600, 
      color:'	#b9936e',
      px: theme.spacing(2) ,
      textTransform:'none' , 
      display:{
        xs:'flex' , 
        md:'none' , 
       
      }
     

    } ,

   
    text:{
        "&.MuiButton-text": {
            color:theme.palette.text.main,
            
          }, 
          flexGrow: 1, 
            display: { 
              xs: 'flex',
              md: 'none'
            }
    },
    menu:{
      backgroundColor:'green' , 
         flexGrow: 1, 
         display: {
              xs: 'block',
              lg: 'none' 
          }
          
    },
  

    boxMdNav:{
          flexGrow: 1, 
            display: { 
              xs: 'none',
              lg: 'flex'
            }
    } ,
    
    buttonMdNav:{
      my: 2, 
      mx: 4  , 
      color:theme.palette.text.main, 
      disableRipple:'true' , 
      
  
    }, 

    textMdNav :{
      fontSize: theme.spacing(2) ,
      textTransform:'none' , 
      fontWeight:500, 
      pl:theme.spacing(1),
      flexGrow: 1, 
            display: { 
              xs: 'none',
              lg: 'flex'
            }
    } , 

    

 
  
 
  }