import { theme } from "../../Theme";

export const styles = {
    boxLg:{
        maxHeight:'auto' ,   
        bgcolor:"#ffffff" 
    } , 

    boxMd:{
        maxHeight:'auto'  , 
        width:'100%'  ,
        bgcolor:theme.palette.third.main , 
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'space-evenly' , 
        py:theme.spacing(10) ,   
    } , 

    cardBox:{
        maxHeight:theme.spacing(130) , 
        maxWidth:theme.spacing(71) , 
        py:theme.spacing(4.5)  , 
        pt:theme.spacing(10),   
    } , 

    card:{
        width:theme.spacing(71),  
        bgcolor:theme.palette.fourth.main ,  
        mx:'auto' ,
        borderRadius:'0'
        
    } , 
    

    textBox:{
        maxHeight:theme.spacing(90) , 
        maxWidth:theme.spacing(70)
    } , 

    title:{
            fontWeight:290,
            
    },
    text:{ 
            fontWeight:350 ,
            width:theme.spacing(60) , 
            lineHeight: '1.8 ' , 
            
    } , 

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
        '&.MuiButton-contained':{
            bgcolor:theme.palette.primary.main, 
            opacity:' 0.8' ,
            px:theme.spacing(5) , 
            borderRadius:'0', 
            width:theme.spacing(10),
            height:'auto' ,
            '&:hover':{
                bgcolor:theme.palette.third.main
            }
        
        }, 
         '& p':{
                textTransform:'capitalize'  ,
                fontWeight: 300  , 
                color:theme.palette.text.main ,
                fontSize:' 1rem' ,  
                lineHeight:' 1.8'  ,  
                width:theme.spacing(16),
            
            }
    } , 


    boxOfferLg:{
        maxWidth:theme.spacing(150), 
        maxHeight:theme.spacing(80) , 
        bgcolor:theme.palette.fourth.main , 
        display:'flex' , 
        alignItems:'start' , 
        justifyContent:'center' ,  
        mb:theme.spacing(7) , 
        pb:theme.spacing(5)
    } , 

    boxOfferMd:{
        maxWidth:theme.spacing(45) , 
        maxHeight:'100%'  , 
        display:'flex', 
        flexDirection:'column' , 
        alignItems:'center', 
        justifyContent:'center', 
        pt:theme.spacing(17),
        pb:theme.spacing(5),
        px:theme.spacing(3)
       
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