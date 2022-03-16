
  export const styles = {
    headerBoxLg:{
      maxHeight:'auto',
      width:'auto' ,
      bgcolor:"#ebe2dd" ,
      py:'40px'  ,
      display:'flex', 
      alignItems:'center',
      justifyContent:'center'
    } , 
    headerBoxMd:{
      maxWidth:'1500px',
      borderRadius:'10' ,
      display:"flex",
      alignItems:'center' , 
      justifyContent:"center"  , 
      mx:'auto' ,  
      my:'40px' , 
      bgcolor:'#ebe2dd'
    } , 

    headerTextBox:{
      maxHeight:"522px", 
      px:'20px'  , 
      mx:'90px' , 
      '&.MuiTypography-4':{
        width:'320px' , 
        height:'300px' ,
        lineHeight:'1.8' ,  
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center',
        pl:'auto'
      } ,
    },
    
     
    sectionOneBoxLg:{
      maxHeight:'auto' , 
      width:'auto'  , 
      bgcolor:'#f7f4f2' , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:'50px' 
    } ,

    sectionOneBoxMd:{
      maxHeight:'900px' , 
      width:'auto' ,
      py:'90px'
    } ,
    card:{
      maxWidth:'310px',  
      bgcolor:"#eae1dc" , 
      mx:'auto' ,
      borderRadius:'0' ,  
      position:'relative', 

    } ,

    mediaBox:{
      bgcolor:'transparent',  
      position:'absolute' ,  
      bottom:'0', 
      right:'0', 
      zIndex:'100', 
      width:'100%' , 
      height:'30%' ,                                        
      display:'flex' , 
      justifyContent:'center' , 
      alignItems:'center' 
    } ,


    mediaButton:{
      bgcolor:'#dbcfc9', 
      opacity:' 0.8',
      px:'40px' ,   
      borderRadius:'0' ,
      '&:hover':{
        bgcolor:'#f7f4f2', 
        opacity:' 0.7'
      } , 
    } ,

    text:{
      textTransform:'capitalize' ,
      px:'30px' ,
      color:'#2f2d29'   
    } ,

    sectionTwoBoxLg:{
      maxHeight:'900px' , 
      width:'100%' ,
      pt:'50px' ,   
      bgcolor:"#ebe2dd"   
    } ,

    sectionTwoBoxMd:{
      maxHeight:'200px' , 
      width:'auto'  , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'center',
      '&.MuiTypography-h4':{  
        width:'800px'  , 
        py:'30px' 
      }
    },
    sectionTwoPhotoContainerLg:{
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:'90px'   
    } ,

    sectionTwoPhotoContainerMd:{
      px:'50px' , 
      py:'30px' , 
      maxWidth:'300px' , 
      display:'flex' , 
      flexDirection:'column' , 
      alignItems:'center', 
      justifyItems:'center' ,  
      position:'relative' ,
    },

    sectionTwoImgBox:{
      height:'310px' , 
      maxWidth:'300px'  , 
      backgroundSize:' cover ', 
      backgroundRepeat:'noRepeat' ,
      backgroundPosition:' center' , 
      width:' 100%' ,
      objectFit:' cover'   
    } ,

    sectionTwoTextBox:{
      maxWidth:'160' , 
      display:'flex'  , 
      alignItems:'center', 
      justifyItems:'center'  , 
      mx:'auto'  ,
      bgcolor:'#dbcfc9' , 
      opacity:' 0.7', 
      px:'40px',
      py:'6px',  
      position:'absolute' ,  
      bottom:'16%', 
      zIndex:'10' , 
      '&.MuiTypography-6':{ 
        width:'160', 
        color:'#2f2d29'  , 
        py:'5px', 
        mx:'auto' ,
        fontSize:' 1rem' ,  
        lineHeight:' 1.5', 
      }    
    } ,
    sectionTreeBoxLg:{
      maxHeight:'auto' , 
      width:'auto'  , 
      bgcolor:'#f7f4f2' , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      py:'100px'   
    } ,

    sectionTreeBoxMd:{
      maxHeight:'900px' , 
      width:'400px' ,
      '&.MuiPaper-rounded':{
        maxWidth:'510px',  
        bgcolor:"#eae1dc" ,  
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
      '&.MuiTypography-body1':{
        fontWeight:'300',  
        width:'400px'
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
      py:'10px' , 
      bgcolor:'#ebe2dd'   , 
      display:'flex' , 
      alignItems:'center' , 
      justifyContent:'space-evenly'
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
      mb:'20px'
    }, 

    sectionFourIcon:{
      fontSize:'65px' , 
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
       fontWeight:'250', 
       px:'30px' , 
       py:'5px',
      },
     '&.MuiTypography-h6':{
      textTransform:'capitalize' , 
      color:'#2f2d29' , 
      fontWeight:'300', 
      px:'30px' , 
      py:'5px' , 
      mx:'auto'
      } , 

    },

   
  }

 