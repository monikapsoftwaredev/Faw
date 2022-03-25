
import { theme } from "../../Theme";

export const styles = {

    boxLg:{
        height:'100vh'  ,  
        mt:theme.spacing(7),
        py:theme.spacing(5),   
        bgcolor:"#FFFFFF" , 
        display:'flex' , 
        flexWrap:'wrap' ,
        alignItems:'center', 
        justifyContent:'space-evenly' 
    } , 

    boxMd:{
        width:theme.spacing(165), 
        height:'100%' , 
        display:'flex' , 
        alignItems:'center',  
        justifyContent:'space-evenly'
    } , 

    text:{
        fontWeight:300 ,
    }, 
}