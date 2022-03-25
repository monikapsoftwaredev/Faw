import { theme } from "../../Theme";

export const styles = {  

    sectionBoxLg:{
        height:theme.spacing(7) ,  
        width:'100%'  ,   
        bgcolor:theme.palette.primary.main, 
        display:'flex' , 
        flexDirection:'row', 
        alignItems:'center' , 
        justifyContent:'space-around' , 
        overflowY:'hidden',
        position:'absolute' , 
        bottom:'0' , 
        left:'0', 
      } , 
      sectionBoxMd1:{
        maxHeight:theme.spacing(35) ,  
        maxWidth:theme.spacing(50),  
        display:'flex' , 
        flexDirection:'row', 
        alignItems:'center' , 
        justifyContent:'center', 
        pl:theme.spacing(21), 
        
      } ,

      sectionBoxMd2:{
        maxHeight:theme.spacing(15) , 
        maxWidth:theme.spacing(50) ,    
        display:'flex' , 
        flexDirection:'row', 
        alignItems:'baseline'
      } ,

      buttonIcon:{
        borderRadius:theme.spacing(1), 
        '&:hover':{
          bgcolor:theme.palette.third.main, 
          opacity:' 0.7'  
        }
      } ,
      icon:{
        fontSize:theme.spacing(3) , 
        fontWeight:'200' ,  
        color:'#787774' 
      } ,

      company:{
        textTransform:'capitalize',
        fontWeight:'400' ,
        color:'#787774' ,
        fontSize:' 1rem' ,  
        lineHeight:' 1.5'
      }
  
}