
import { theme } from "../../Theme";

export const styles = {
    boxLg:{
        maxHeight: "100%",
         maxWidth:'100%' ,  
        bgcolor:"white" ,
        
    } , 
    boxCont:{
        maxHeight:'1800px'  , 
        width:'100%'  ,
        bgcolor:"#f3f3f3" , 
        display:'flex' , 
        flexDirection:'column',
        alignItems:'center' , 
        justifyContent:'space-evenly' ,  
        mt:theme.spacing(13),
        pt:theme.spacing(8) ,
        pb:theme.spacing(20)     
    } , 

   
    boxMdOneLg:{
        maxHeight:'1000px'  , 
        width:'100%'  ,
        bgcolor:"white" , 
        alignItems:'center' , 
        justifyContent:'space-evenly' ,  
        mt:theme.spacing(13),
        py:theme.spacing(3),
        display:{
            xs:'none' ,  
            md:'flex'
          }
            
    } ,
    boxMdOneSm:{
        maxHeight:'auto'  , 
        width:'auto'  ,
        bgcolor:"white" , 
        flexDirection:'column' , 
        alignItems:'center' , 
        justifyContent:'center' ,  
        display:{
            xs:'flex' ,  
            md:'none'
        }   
    } , 
    boxMdTwoLg:{
        maxHeight:'1000px'  , 
        width:'100%'  ,
        bgcolor:"#f3f3f3" , 
        alignItems:'center' , 
        justifyContent:'space-evenly' ,  
        py:theme.spacing(3), 
        display:{
            xs:'none' ,  
            lg:'flex'
          }     
    } , 
    boxMdTwoSm:{
        maxHeight:'auto'  , 
        width:'auto'  ,
        bgcolor:"#ffffff" , 
        flexDirection:'column' , 
        alignItems:'center' , 
        justifyContent:'center' ,  
        py:theme.spacing(3) ,
        mt:theme.spacing(10) , 
        display:{
            xs:'flex' ,  
            md:'flex',
            lg:'none'
        } 
         
    //     [theme.breakpoints.down('sm')]: {
    //         backgroundColor:'purple',
    //       },
    //     [theme.breakpoints.up('sm')]: {
    //         backgroundColor: 'yellow',
    //       },
    //     [theme.breakpoints.down('md')]: {
    //         backgroundColor:'green',
    //       },
    //     [theme.breakpoints.up('md')]: {
    //         backgroundColor: 'red',
    //       },
    //     [theme.breakpoints.up('lg')]: {
    //         backgroundColor: 'blue',
    //       },
     } , 


    cardBox:{
        maxHeight:theme.spacing(130) , 
        maxWidth:theme.spacing(51) , 
        py:theme.spacing(6)  , 
       
       
    } , 

    card:{
       
        width:theme.spacing(71),  
        mx:'auto' ,
        borderRadius:'0'
        
    } , 
    

    textBox:{
        maxHeight:theme.spacing(70) , 
        maxWidth:theme.spacing(70)
    } ,
    
    titleLg:{
        fontWeight:400,
        
    }, 

    titleSm:{
            fontWeight:400,
            alignItems:'center' , 
            justifyContent:'center',
            display:{
                xs:'flex' ,  
                md:'none'
              }
            
    },
    text:{ 
            fontWeight:350 ,
            width:theme.spacing(50) , 
            lineHeight: '1.8 ' ,
            textTransform:'capitalize', 
            alignItems:'center' , 
            justifyContent:'space-around',
           
            
    } ,

    //     textSm:{ 
    //         fontWeight:350 ,
    //         width:theme.spacing(50) , 
    //         lineHeight: '1.8 ' ,
    //         textTransform:'capitalize', 
    //         alignItems:'center' , 
    //         justifyContent:'space-around',
    //         display:{
    //             xs:'flex' ,  
    //             md:'none'
    //         }
            
    // } ,

    buttonText:{ 
        opacity:' 0.8' ,
        px:theme.spacing(5) , 
        
    },

    
    
    buttonBox:{
        bgcolor:'transparent',  
        width:'auto' , 
        height:'auto' , 
        display:'flex' , 
        justifyContent:'flexStart', 
       
    } , 


    mediaButton3:{
        width:'180px' , 
        height:'40px' ,
        bgcolor:'white',
        opacity:' 0.9',  
        borderRadius:0 ,
        disableRipple:true , 
        border:'solid 1px #b9936e' ,
        //my:'20px' , 
        //mx:'20px' , 
        '&:hover':{
          bgcolor:'#f3f3f3', 
          border:'solid 2px #b9936e' ,
          opacity:' 0.9'
        } , 
         
    } ,

    buttonTitel:{
        textTransform:'capitalize' ,
        px:theme.spacing(2) ,
        color:theme.palette.text.main , 
        fontWeight:500, 
        fontSize:theme.spacing(2.5)
        
    } ,



    boxOfferLg:{
        // border:'solid 1px #b9936e' ,
        maxWidth:"100%", 
        maxHeight:theme.spacing(100) , 
        bgcolor:'white' , 
        alignItems:'baseline' , 
        justifyContent:'center' ,  
        mb:theme.spacing(20) , 
        py:theme.spacing(5), 
        zIndex:100, 
        display:{
            xs:'none' ,  
            md:'flex'
        }

    } , 

    boxOfferSm:{
        //border:'solid 1px #b9936e' ,
        maxWidth:'auto', 
        maxHeight:'auto' , 
        bgcolor:'white' , 
        flexDirection:'column' ,  
        alignItems:'center' , 
        justifyContent:'center' ,  
        mb:theme.spacing(20) , 
        py:theme.spacing(5), 
        zIndex:100, 
        display:{
            xs:'flex' ,  
            md:'none'
        } 

    } , 

    boxOfferMd:{
        
        maxWidth:"20%" , 
        maxHeight:'100%'  , 
        display:'flex', 
        flexDirection:'column' , 
        alignItems:'center', 
        justifyContent:'center', 
        pt:theme.spacing(10),
        pb:theme.spacing(2),
        px:theme.spacing(3) , 
       
       
    } , 
    boxOfferMdSm:{
        
        maxWidth:'auto' , 
        maxHeight:'auto'  ,  
        flexDirection:'column' , 
        alignItems:'center', 
        justifyContent:'center', 
        pt:theme.spacing(10),
        pb:theme.spacing(2),
        px:theme.spacing(3) ,
        display:{
            xs:'flex' ,  
            md:'none'
        }  
       
       
    } , 

    boxTitle:{
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center' , 
        pb:theme.spacing(4),
        '&.MuiTypography-h4':{
            display:'flex' ,  
            alignItems:'center' , 
            justifyContent:'center' , 
            py:theme.spacing(3),
            px:theme.spacing(3),
            pb:theme.spacing(4)
        } , 
    } , 
    boxDescription:{
        pb:theme.spacing(3),
        '& p':{
            width:theme.spacing(40), 
            display:'flex' , 
            alignItems:'center' , 
            justifyContent:'center' ,
            py:theme.spacing(8),
            px:theme.spacing(1)
        } ,

    }

    
}