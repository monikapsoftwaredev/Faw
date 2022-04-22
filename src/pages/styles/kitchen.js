import { theme } from "../../Theme";

export const styles ={
    boxLg :{
        maxHeight:'auto'  ,  
        mt:theme.spacing(7) ,
        py:theme.spacing(7) ,   
        bgcolor:"#F3F3F3" , 
        display:'flex' , 
        flexWrap:'wrap' ,
        alignItems:'center', 
        justifyContent:'space-evenly' ,
        mb:theme.spacing(20) , 
        

    },
    imageListBox :{
        width:theme.spacing(165), 
        height:'auto' 
    },
    textBox :{ 
        border:'solid 1px #b9936e' , 
        width:'auto', 
        height:'auto',
        bgcolor:'white' ,  
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