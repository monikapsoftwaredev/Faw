import { theme } from "../../Theme";

export const styles ={
    boxLg :{
        maxHeight:'100%'  ,  
        mt:theme.spacing(7) ,
        py:theme.spacing(5) ,   
        bgcolor:"white" , 
        display:'flex' , 
        flexWrap:'wrap' ,
        alignItems:'center', 
        justifyContent:'space-evenly' 
    },
    imageListBox :{
        width:theme.spacing(165), 
        height:'auto' 
    },
    textBox :{ 
        width:'auto', 
        height:'auto',
        bgcolor:'#f4ebe6' ,  
        display:'flex' ,
        alignItems:'center', 
        justifyContent:'center' , 
        py:'auto' , 
        '& span':{
            fontWeight:300 ,
            width:theme.spacing(20), 
            height:theme.spacing(15) , 
            display:'flex' , 
            alignItems:'center'  , 
            justifyContent:'center',  
            
        }
            
    },
    
    


}