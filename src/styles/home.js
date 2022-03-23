import { theme } from "../Theme";

  export const styles = {
    headerBoxLg:{
      maxHeight:'auto',
      width:'auto' ,
      bgcolor:theme.palette.secondary.main,
      py:theme.spacing(4)  ,
      display:'flex', 
      alignItems:'center',
      justifyContent:'center'
    } , 
    headerBoxMd:{
      maxWidth:theme.spacing(150) ,
      borderRadius:0 ,
      display:"flex",
      alignItems:'center' , 
      justifyContent:"center"  , 
      mx:'auto' ,  
      my:theme.spacing(4)  , 
      bgcolor:theme.palette.secondary.main
    } , 

    headerTextBox:{
      maxHeight:theme.spacing(52) , 
      px:theme.spacing(2)  , 
      mx:theme.spacing(9) ,  
      '&.MuiTypography-4':{
        width:theme.spacing(32) , 
        height:theme.spacing(30) , 
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center',
        pl:'auto'
      } ,
    },
    
     
    sectionOneBoxLg:{
      maxHeight:'auto' , 
      width:'auto'  , 
      bgcolor:theme.palette.third.main , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:theme.spacing(8) 
    } ,

    sectionOneBoxMd:{
       
      maxHeight:theme.spacing(90) , 
      width:'auto' ,
      py:theme.spacing(9),
      position:'relative'

    } ,
    card:{
      bgcolor:theme.palette.primary.main ,
      maxWidth:theme.spacing(31),  
      mx:'auto' ,  
      position:'relative', 

    } ,

    mediaBox:{
        bgcolor:'transparent',  
        position:'absolute' ,  
        bottom:'0', 
        right:'0', 
        zIndex:theme.spacing(10), 
        width:'100%' , 
        height:'50%' ,                                        
        display:'flex' , 
        justifyContent:'center' , 
        alignItems:'center' , 
        
    } ,


    mediaButton:{
      bgcolor:theme.palette.primary.main,
      opacity:' 0.8',
        
      borderRadius:0 ,
      disableRipple:true ,  
      '&:hover':{
        bgcolor:theme.palette.third.main, 
        opacity:' 0.7'
      } , 
    } ,

    text:{
      textTransform:'capitalize' ,
      px:'20px' ,
      color:theme.palette.text.main , 
      
    } ,

    sectionTwoBoxLg:{ 
      maxHeight:theme.spacing(120),
      bgcolor:theme.palette.secondary.main ,
      width:'100%' , 
      display:'flex' , 
      flexDirection:"column" ,
      alignItems:'center' , 
      justifyContent:'center' , 
      py:theme.spacing(5)   
    } ,

    sectionTwoBoxMd:{
      maxHeight:theme.spacing(30), 
      width:'auto'  , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'center',
      pt:theme.spacing(5),
      '&.MuiTypography-h4':{  
        width:theme.spacing(8) , 
        py:theme.spacing(6),

      }
    },

    sectionTwoPhotoContainerLg:{
      maxHeight:theme.spacing(90) , 
      width:'100%'  , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:theme.spacing(6)
    } ,
  

    
   

    sectionTwoPhotoContainerMd:{
      px:theme.spacing(5) , 
      py:theme.spacing(4), 
      maxWidth:theme.spacing(30) , 
      display:'flex' , 
      flexDirection:'column' , 
      alignItems:'center', 
      justifyItems:'center' ,  
      position:'relative' ,
    },

    sectionTwoImgBox:{
      height:theme.spacing(31) , 
      maxWidth:theme.spacing(30), 
      backgroundSize:' cover ', 
      backgroundRepeat:'noRepeat' ,
      backgroundPosition:' center' , 
      width:' 100%' ,
      objectFit:' cover'   
    } ,

    sectionTwoTextBox:{
      maxWidth:theme.spacing(16), 
      display:'flex'  , 
      alignItems:'center', 
      justifyItems:'center'  , 
      mx:'auto'  ,
      bgcolor:theme.palette.primary.main , 
      opacity:' 0.7', 
      px:theme.spacing(4),
      py:theme.spacing(6),  
      position:'absolute' ,  
      bottom:'16%', 
      zIndex:'10' , 
      '&.MuiTypography-6':{ 
        width:theme.spacing(16), 
        color:theme.palette.text.main  ,
        py:theme.spacing(0.5), 
        mx:'auto' ,
        fontSize:' 1rem' ,  
        lineHeight:' 1.5', 
      }    
    } ,
    sectionTreeBoxLg:{
      maxHeight:'auto' , 
      width:'auto'  , 
      bgcolor:theme.palette.third.main , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:theme.spacing(10)  
    } ,

    sectionTreeBoxMd:{
      maxHeight:theme.spacing(90) , 
      width:theme.spacing(40) ,
      '&.MuiPaper-rounded':{
        maxWidth:theme.spacing(51),  
        bgcolor:theme.palette.fourth.main ,  
        mx:'auto' ,
        borderRadius:'0'
      }  
    } , 

    sectionTreeTextBox:{
      maxHeight:'900px' , 
      width:'auto',  
      '&.MuiTypography-h4':{
        fontWeight:'290'
      } ,
      '& p':{
        fontWeight:'300',  
        width:'400px',
        lineHeight: '1.8 ' ,
      } , 
    }, 

    sectionTreeButtonBox:{
      bgcolor:'transparent' ,  
      width:'100%' , 
      height:'auto' , 
      display:'flex' , 
      justifyContent:'flexStart'
    },
    buttonText:{
        bgcolor:'#dbcfc9', 
        opacity:' 0.8' ,
        px:'50px' , 
        borderRadius:'0',
        textTransform:'capitalize',
        '&:hover':{
          bgcolor:'#f7f4f2', 
          opacity:' 0.7'
        }

    }, 

    sectionTreeCard:{
      maxWidth:'510px',  
      bgcolor:"#eae1dc" , 
      mx:'auto' ,
      borderRadius:'0' ,  
      position:'relative', 

    } ,
    sectionFourBoxLg:{
      maxHeight:'900px', 
      width:'100%' , 
      py:'40px' , 
      bgcolor:'#ebe2dd'   , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly', 
      pb:'120px'
    } ,

    sectionFourBoxMd:{
      height:'410px' , 
      width:'360px', 
      my:'30px' ,  
      bgcolor:'#ebe2dd' , 
      px:'10px' ,  
      pt:'20px',
      
    } , 
     
    sectionFourIconBox:{
      display:'flex' ,  
      flexDirection:'column' ,  
      alignItems:'center' , 
      justifyContent:'center' , 
      mb:'30px'
    }, 

    sectionFourIcon:{
      fontSize:'95px' , 
      fontWeight:'200' ,  
      color:'#787774', 
      pb:'30px'
    } , 

    sectionFourTextBox:{
       pb:'50px' , 
      '&.MuiTypography-h4':{
        textTransform:'uppercase' , 
        color:'#2f2d29'  , 
        px:'30px' , 
        pt:'20px' , 
        pb:'20px'
      }
    }, 
    sectionFourInfoBox:{
      display:'flex' ,
      flexDirection:'column' , 
      alignItems:'center' , 
      justifyContent:'center' , 
     '&.MuiTypography-h5':{
       textTransform:'capitalize' , 
       color:'#2f2d29' , 
      
       px:'30px' , 
       py:'5px',
      },
     '&.MuiTypography-h6':{
      textTransform:'capitalize' , 
      color:'#2f2d29' , 
      
      px:'30px' , 
      py:'5px' , 
      mx:'auto'
      } , 

    },

   
  }

 