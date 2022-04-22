import { theme } from "../../Theme";
 

export const styles = {

  headerTextBox:{
    display:'flex' , 
    alignItems:'center' , 
    justifyContent:'center', 
    height:theme.spacing(40) ,
    width:'auto',
    bgcolor:theme.palette.light.main ,
    position:'absolute',
    overflow:'hidden' , 
    zIndex:200 , 
    right:0 ,
    left:0,
    opacity:'0.8',
    [theme.breakpoints.down('sm')]: {
      height:'auto' ,
      width:'auto',
      top:'14% ' ,
      right:0 ,
      opacity:'0.8',
    },
    [theme.breakpoints.up('sm')]: {
      height:'auto' ,
      width:'auto',
      top:'15%',
      right:0  ,
      opacity:'0.8',
    },
    [theme.breakpoints.up('md')]: {
       height:theme.spacing(12) ,
       top:'14%'  , 
        opacity:'0.8',
    },

    [theme.breakpoints.up('md')]: {
        opacity:'0.8',
        top:'14.5%', 
        right:0
      },
    [theme.breakpoints.up('lg')]: {
        opacity:'0.8',
        top:'23%',
        right:0 
      },

  
    
  },

  photo:{
    overflow:'hidden' ,
    zIndex:100 , 
    top:0 , 
    right:'0', 
    opacity:'0,9' , 
    [theme.breakpoints.down('sm')]: {
      height: "100vh", 
      maxWidth:'100%', 
      
    },
    [theme.breakpoints.down('md')]: {
      height: "100vh", 
      maxWidth:'100%', 
      
    },
    [theme.breakpoints.up('md')]: {
      height: "100vh", 
      maxWidth:'100%', 
      
    },
    [theme.breakpoints.up('lg')]: {
      height: "100vh", 
      width:'100%', 
      
    },
  }, 

  headerText:{
    color:theme.palette.dark.main,
    fontWeight:500, 
    [theme.breakpoints.down('sm')]: {
      fontSize:'1.4rem ',
      py:theme.spacing(6), 
      px:'10px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:'1.6rem ',
      py:'60px', 
      px:'10px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'2rem ',
      py:'60px', 
      px:'10px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'2.5rem ',
      py:'60px', 
      px:'10px'
    },
  },

 

  cardBoxLg:{
    zIndex:280 , 
    maxHeight:"auto", 
    width:'100%', 
    bgcolor:'transparent', 
    display:'flex', 
    alignItems:'center ', 
    justifyContent:'center', 
    py:'30px'
  },

  cardBoxMd:{
    display:'flex' , 
    flexDirection:'row' , 
    alignItems:'center' , 
    justifyContent:'center' 
  } , 

  cardBoxSm:{
    width:'100%' , 
    [theme.breakpoints.down('sm')]: {
      display:'flex' , 
      flexDirection:'column' ,
      alignItems:'center' , 
      justifyContent:'center' ,
      
    },
    [theme.breakpoints.down('md')]: {
      display:'flex' , 
      flexDirection:'column' ,
      alignItems:'center' , 
      justifyContent:'center' ,
     
    },
    [theme.breakpoints.up('md')]: {
      display:'flex' , 
      flexDirection:'column' ,
      alignItems:'center' , 
      justifyContent:'center' ,
      
    },
    [theme.breakpoints.up('lg')]: {
      display:'flex' , 
      flexDirection:'row' ,
      alignItems:'center' , 
      justifyContent:'space-between' ,
    
     
    },
  } , 

  sectionOneBoxMd:{
    height:theme.spacing(60) , 
    width:'auto' ,
    position:'relative',
    pt:'110px',
    px:'46px',
  
   
  } ,
  cardStyles:{
    bgcolor:'white',
    width:theme.spacing(38),
    p:theme.spacing(1.5) , 
    border:'solid 1px #b9936e' , 
  }, 
  mediaboxS:{
    position:'absolute' ,  
    bottom:'0', 
    right:'0', 
    zIndex:theme.spacing(10), 
    width:'100%' , 
    height:'50%' ,                                        
    display:'flex' , 
    justifyContent:'center' , 
    alignItems:'center' , 
    my:theme.spacing(1) , 
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
  width:'250px',
  height:'60px' , 
  border:'solid 2px #b9936e' ,
  bgcolor:'#f3f3f3',
  opacity:' 0.9',  
  borderRadius:0 ,
  disableRipple:true ,  
  '&:hover':{
    bgcolor:'white', 
    border:'solid 4px #b9936e' ,
    opacity:' 0.9'
  } ,
   
} ,

mediaButton2:{
  width:'180px' , 
  height:'40px' ,
  bgcolor:'white',
  opacity:' 0.9',  
  borderRadius:0 ,
  disableRipple:true , 
  border:'solid 1px #b9936e' ,
  //my:'20px' , 
  mx:'20px' , 
  '&:hover':{
    bgcolor:'#f3f3f3', 
    border:'solid 2px #b9936e' ,
    opacity:' 0.9'
  } ,
} ,  

mediaButton3:{
  width:'auto' , 
  height:'40px' ,
  bgcolor:'white',
  opacity:' 0.9',  
  borderRadius:0 ,
  disableRipple:true , 
  border:'solid 1px #b9936e' ,
  '&:hover':{
    bgcolor:'#f3f3f3', 
    border:'solid 2px #b9936e' ,
    opacity:' 0.9'
  } , 
   
} ,

text:{
  color:' #b9936e',
  px:theme.spacing(2) ,
  //color:theme.palette.text.main , 
  fontWeight:500, 
  fontSize:theme.spacing(2.5),
  color:' #b9936e',
  [theme.breakpoints.down('sm')]: {
    fontWeight:500, 
    fontSize:theme.spacing(2),
  },
  [theme.breakpoints.down('md')]: {
    fontWeight:500, 
    fontSize:theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    fontWeight:500, 
    fontSize:theme.spacing(2.5),
  },
  
} ,

sectionOneBoxLgu:{
  maxHeight:'auto' ,
  bgcolor:'#f3f3f3', 
  maxWidth:'100%'  ,
  position :'relative',
  zIndex:100,
  
  
  [theme.breakpoints.down('sm')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' , 
    bgcolor:'#f3f3f3', 
    py:'80px',

    
  },
  [theme.breakpoints.up('sm')]: {
    display:'flex' ,
    alignItems:'center' , 
    justifyContent:'center' ,
  },

  [theme.breakpoints.up('md')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' ,
  },
  [theme.breakpoints.down('lg')]: {
     
    flexDirection:'row' , 
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
   
  },
  [theme.breakpoints.up('lg')]: {
   
    flexDirection:'row' ,  
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
   
  },
 
  
} ,

sectionOneBoxLgd:{
  maxHeight:'auto' ,
  //bgcolor:'red', 
  maxWidth:'100%'  ,
  position :'relative',
  zIndex:100,
  
  [theme.breakpoints.down('sm')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' , 
    bgcolor:'transparent', 
   

    
  },
  [theme.breakpoints.up('sm')]: {
    display:'flex' ,
    alignItems:'center' , 
    justifyContent:'center' ,
    py:'50px',
  },

  [theme.breakpoints.up('md')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' ,
   
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection:'row' , 
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
   
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection:'row' ,  
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
    pb:'100px'
   
  },
 
  
} ,
headerBox:{
  [theme.breakpoints.down('sm')]: {
      
  },
  [theme.breakpoints.up('sm')]: {
    
  },

  [theme.breakpoints.up('md')]: {
    
  },
  [theme.breakpoints.down('lg')]: {
    
  },
  [theme.breakpoints.up('lg')]: {
   ml:'90px'
  },
},


sectionOneBoxLgn:{
  maxHeight:'auto' , 
  maxWidth:'100%'  ,
  position :'relative',
  zIndex:100,
  
  
  [theme.breakpoints.down('sm')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' , 
    bgcolor:'red', 
    mb:'220px', 
    mt:'20px'
    

    
  },
  [theme.breakpoints.up('sm')]: {
    display:'flex' ,
    alignItems:'center' , 
    justifyContent:'center' ,
    //py:'180px',
    //pt:'50px',
    pb:'100px',
    //bgcolor:'yellow'
  },

  [theme.breakpoints.up('md')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' ,
   
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection:'row' , 
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
    pb:'240px', 
    mb:'50px'
   
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection:'row' ,  
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
    pb:'240px', 
    mb:'50px'
   
  },
},

headerBoxLgn:{
  width:'1200px' ,
  opacity:'0.9', 
  [theme.breakpoints.down('sm')]: {
    maxHeight:'auto',
    width:'auto' ,
    opacity:'0.9', 
    mx:'0px' ,
    pb:'50px',
    flexDirection:'column' ,
    display:'flex' ,  
    alignItems:'center' , 
    justifyContent:'center' ,
   

    
  }, 
  [theme.breakpoints.up('sm')]: {
    maxHeight:'auto',
    width:'auto' ,
    opacity:'0.9', 
    mx:'20px' ,
    pb:'50px',
    flexDirection:'column' ,
    display:'flex' ,  
    alignItems:'center' , 
    justifyContent:'center' ,

    
  }, 
  
  [theme.breakpoints.up('md')]: {
    maxHeight:'auto',
    width:'auto' ,
    opacity:'0.9', 
    mx:'50px' ,
    pb:'50px',
    flexDirection:'column' ,
    display:'flex' ,  
    alignItems:'center' , 
    justifyContent:'center' ,

    
  }, 
  [theme.breakpoints.up('lg')]: {
    maxHeight:'auto',
    width:'1200px' ,
    opacity:'0.9', 
    mx:'50px' ,
    flexDirection:'row' ,
    display:'flex' ,  
    alignItems:'center' , 
    justifyContent:'space-evenly' ,

    
  }, 
  
 
  
} ,

headerBoxLgn1:{
   maxHeight:'500px',  
   maxWidth:'500px',
 
  
} ,

headerPhoto:{
  bgcolor:'white',
  [theme.breakpoints.down('sm')]: {
    height:'460px' ,  
    width:'380px' , 
    my:'20px',
    
  },
  [theme.breakpoints.up('sm')]: {
    height:'460px' ,  
    width:'380px' , 
    my:'40px',
    
  },
  [theme.breakpoints.up('md')]: {
    height:'460px' ,  
    width:'380px' , 
    my:'50px',
    
  },
  [theme.breakpoints.up('lg')]: {
    height:'460px' ,  
    width:'380px' ,
    
   
    
  },
},



headerTitelBox:{
  bgcolor:'green',
  display:'flex' , 
  alignItems:'center' , 
  justifyContent:'center',
  [theme.breakpoints.down('sm')]: {
    height:'360px' ,  
    width:'300px' , 
    
  },
  [theme.breakpoints.up('sm')]: {
    maxHeight:'360px' ,  
    maxWidth:'300px' , 
    
    
  },
  [theme.breakpoints.up('md')]: {
    maxHeight:'360px' ,  
    maxWidth:'300px' , 
    my:'50px',
    
    
  },
  [theme.breakpoints.up('lg')]: {
    height:'360px' ,  
    width:'300px' ,
    my:'50px',
   
    
  },
},

headerTitel:{
  bgcolor:'yellow', 
  [theme.breakpoints.down('sm')]: {
    height:'auto' ,  
    width:'auto' , 
   
    
  },
  [theme.breakpoints.up('sm')]: {
    maxHeight:'auto' ,  
    maxWidth:'auto' , 
    my:'70px',
    
  },
  [theme.breakpoints.up('md')]: {
    height:'auto' ,  
    width:'auto' , 
    my:'50px',
    
  },
  [theme.breakpoints.up('lg')]: {
    height:'auto' ,  
    width:'auto' ,
    mx:'50px',
    
   
    
  },
},


sectionThreeBoxLg:{
  maxHeight:'auto',
  pb:'50px',
  
},

sectionThreeButtonBox:{  
  maxWidth:'100%',
  height:'auto' ,  
  mt:'60px', 
  mx:'50px',
  
  display:'flex' , 
  alignItems:'center' , 
  justifyContent:'center' ,
  
  
 
},

sectionOneBoxInfoOne:{
  maxHeight:'1000px' ,  
  width:'auto'  , 
  zIndex:100,
  
} ,

sectionThreeBoxMd:{
  maxHeight:theme.spacing(90) , 
  width:theme.spacing(40) ,
  p:'30px',
  mr:'30px',
  '&.MuiPaper-rounded':{
    maxWidth:theme.spacing(51),  
    mx:'auto' ,
    borderRadius:'0', 
   
   
   
  }  
} ,


sectionThreeTitelBox:{
  height:"450px" ,
  maxWidth:"400px",  
  p:'30px' , 
  //pr:'60px', 
  display:'flex' , 
  alignItems:'center ' , 
  justifyContent:'center', 
  bgcolor:'#f3f3f3',
  border:'solid 1px #b9936e' ,
  
},

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
// sectionThreeTextBox:{
//   maxHeight:'auto' , 
//   maxWidth:'500px',
//   bgcolor:'green',
//   //px:'100px' ,// to usunac z duzej wersji
//   //ml:'90px' ,//to usunac z malej wersji
//   //mt:'50px' ,// to usunac z duzej wersji, 
//   //display:'flex' ,
//   //flexDirection:'column' ,
//   //alignItems:'center' , 
//   //justifyContent:'center',
//   //mt:'50px',

//   [theme.breakpoints.down('sm')]: {
//     width:'500px',
//     display:'flex' ,
//     flexDirection:'column' ,
//     alignItems:'center' , 
//     justifyContent:'center'

   
//   },
//   [theme.breakpoints.up('sm')]: {
//     display:'flex' , 
//     flexDirection:'column' ,
//     alignItems:'center' , 
//     justifyContent:'center' ,
//     bgcolor:'transparent', 
//   },
  
//   [theme.breakpoints.down('md')]: {
//     display:'flex' , 
//     flexDirection:'column' , 
//     alignItems:'center' , 
//     justifyContent:'center' , 
//     bgcolor:theme.palette.basic.main, 
//   },
//   [theme.breakpoints.up('md')]: {
//     display:'flex' , 
//     flexDirection:'column' , 
//     alignItems:'center' , 
//     justifyContent:'center' ,
//     bgcolor:'transparent', 
//   },
//   [theme.breakpoints.down('lg')]: {
//     display:'flex' , 
//     flexDirection:'row' , 
//     alignItems:'center' , 
//     justifyContent:'space-evenly' ,
//     bgcolor:'transparent',  
//   },
  
 
// },

sectionThreeTitel:{
  py:'30px' ,
  [theme.breakpoints.down('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1.4rem'
    } ,
    width:theme.spacing(38),
    px:'30px'
  },
  [theme.breakpoints.up('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1.4rem'
    } ,
    width:theme.spacing(38),
    px:'30px'
    
  },
  [theme.breakpoints.up('md')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1.6rem'
    } ,
    width:theme.spacing(38),
    px:'30px'
    
  },
},

sectionThreeDesc:{
  //mb:'20px' , 
  py:'40px', 
  pl:'30px',
  display:'flex',
  alignItems:'center', 
  justifyContent:'center',
  flexDirection:'column',
  [theme.breakpoints.down('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1rem'
    } ,
    width:theme.spacing(40),
   
  },
  [theme.breakpoints.up('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1.4rem'
    } ,
    width:theme.spacing(40),
    
  },
  [theme.breakpoints.up('md')]: {
    '&.MuiTypography-h4':{
      fontWeight:500,
      fontSize:'1.8rem'
    } ,
    width:theme.spacing(38),
    
  },
},


sectionTreeTextBoxIn:{
  bgcolor:'transparent' , 
  maxHeight:theme.spacing(90) , 
  width:'1400px',
  py:'20px' ,
  px:'60px' , 
  display:'flex' , 
  alignItems:'center' , 
  justifyContent:'center' ,
  '&.MuiTypography-h4':{
    fontWeight:400
  } ,
  '& p':{
    fontWeight:300,  
    width:theme.spacing(40),
    lineHeight: '1.8 ' ,
  } , 
  [theme.breakpoints.down('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:300,
      fontSize:'1.4rem',
      py:'60px' ,
      px:'60px' ,
     
    } ,
    maxWidth:theme.spacing(40),
   
  },
  [theme.breakpoints.up('sm')]: {
    '&.MuiTypography-h4':{
      fontWeight:400,
      fontSize:'1.4rem'
    } ,
    width:theme.spacing(60),
    
  },
  [theme.breakpoints.up('md')]: {
    '&.MuiTypography-h4':{
      fontWeight:400,
      fontSize:'1.8rem'
    } ,
    width:theme.spacing(140),
    
  },
}, 



sectionOneBoxInfoTwo:{
  maxHeight:'1000px' ,  
  width:'auto'  , 
  display:'flex' , 
  flexDirection:'column',
  alignItems:'center' , 
  justifyContent:'center' , 
  position :'relative', 
  py:'150px',
  bgcolor:'#f3f3f3',
  mx:'auto' , 
  pb:'250px',
  [theme.breakpoints.down('sm')]: {
    py:'100px',
  },
  [theme.breakpoints.up('sm')]: {
    py:'80px',
  },
  [theme.breakpoints.up('md')]: {
    
  },
  [theme.breakpoints.up('lg')]: {
    py:'150px',
  },
}, 
  



sectionOneBoxLg:{
  maxHeight:'auto' ,
  bgcolor:'white',  
  maxWidth:'100%'  ,
  position :'relative',
  zIndex:100,
  mb:'140px',
  
  [theme.breakpoints.down('sm')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' , 
    bgcolor:'transparent', 

    
  },
  [theme.breakpoints.up('sm')]: {
    display:'flex' ,
    alignItems:'center' , 
    justifyContent:'center' ,
  },

  [theme.breakpoints.up('md')]: {
    display:'flex' ,
    flexDirection:'column',
    alignItems:'center' , 
    justifyContent:'center' ,
    
  },
  [theme.breakpoints.down('lg')]: {
     
    flexDirection:'row' , 
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
   
  },
  [theme.breakpoints.up('lg')]: {
   
    flexDirection:'row' ,  
    alignItems:'center' , 
    justifyContent:'space-evenly'  ,
   
  },
 
  
} ,

 sectionFourBoxLg:{
  width:'80%' ,  
  zIndex:'100',
  position:'relative',

  [theme.breakpoints.down('sm')]: {
   display:'flex' , 
   flexDirection:'column', 
   alignItems:'center' , 
   justifyContent:'space-evenly',
   bgcolor:'blue',
   maxHeight:'auto',
   my:theme.spacing(2) ,
  },
  [theme.breakpoints.up('sm')]: {
    display:'flex' , 
    flexDirection:'column', 
    alignItems:'center' , 
    justifyContent:'space-evenly',
    
    maxHeight:'auto',
    mt:theme.spacing(2) , 
   },
   [theme.breakpoints.up('md')]: {
    display:'flex' , 
    flexDirection:'column', 
    alignItems:'center' , 
    justifyContent:'space-evenly',
    
    maxHeight:'auto',
    my:theme.spacing(2) , 
   },
   [theme.breakpoints.up('lg')]: {
    display:'flex' , 
    flexDirection:'row', 
    alignItems:'center' , 
    justifyContent:'space-evenly',
    maxHeight:'auto',
   }
  
} ,


sectionFourBoxMd:{
  height:theme.spacing(55) , 
  width:'100%' , 
  px:theme.spacing(2) ,
  //mb:theme.spacing(4),
  //bgcolor:'blue' , 

  [theme.breakpoints.down('sm')]: {
   display:'flex' , 
   flexDirection:'column', 
   alignItems:'center', 
   justifyContent:'center', 
   bgcolor:'yellow' , 
   mb:theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
   display:'flex' , 
   flexDirection:'column', 
   alignItems:'center', 
   justifyContent:'center', 
    
  },
  [theme.breakpoints.up('md')]: {
    display:'flex' , 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'center', 
    
  },
  [theme.breakpoints.up('lg')]: {
    display:'flex' , 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'center', 
    //mx:'100px', 
    bgcolor:'green'
    
  },
  
  
} ,

   
sectionFourIconBox:{
  display:'flex' ,  
  flexDirection:'column' ,  
  alignItems:'center' , 
  justifyContent:'center' , 
  //mb:theme.spacing(3) , 
}, 

sectionFourIcon:{
  fontSize:theme.spacing(9) , 
  fontWeight:200 , 
  color:'#b9936e', 
  pb:theme.spacing(3),
} , 

sectionFourTextBox:{
   pb:theme.spacing(5), 
  '&.MuiTypography-h4':{
    textTransform:'uppercase' , 
    color:theme.palette.text.main  , 
    px:theme.spacing(3) , 
    pt:theme.spacing(2) , 
    pb:theme.spacing(2) , 
  }
}, 
sectionFourInfoBox:{
  display:'flex' ,
  flexDirection:'column' , 
  alignItems:'center' , 
  justifyContent:'center' , 
 '&.MuiTypography-h5':{
   textTransform:'capitalize' , 
   color:'#b9936e',
   px:theme.spacing(3) , 
   py:'5px',
  },
 '&.MuiTypography-h6':{
  textTransform:'capitalize' , 
  color:theme.palette.text.main, 
  px:theme.spacing(3), 
  py:'5px' , 
  mx:'auto'
  } , 

},

}
 
