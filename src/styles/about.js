export const styles = {
    boxLg:{
        maxHeight:'auto' ,   
        bgcolor:"#ffffff" 
    } , 

    boxMd:{
        maxHeight:'auto'  , 
        width:'100%'  ,
        bgcolor:'#f7f4f2' , 
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'space-evenly' , 
        py:'100px' ,   
    } , 

    cardBox:{
        maxHeight:'1300px' , 
        width:'1100px' , 
        py:'45px'  , 
        pt:'100px',   
    } , 

    card:{
        width:'710px',  
        bgcolor:"#eae1dc" ,  
        mx:'auto' ,
        borderRadius:'0'
        
    } , 
    

    textBox:{
        maxHeight:'900px' , 
        width:'900px'
    } , 

    title:{
            fontWeight:'290',
            
        },
    text:{
            fontWeight:'350',  
            width:'600px' , 
            lineHeight: '1.8 ' , 
            letterSpacing:' 0.1em'
        } , 
    
    
    buttonBox:{
        bgcolor:'dbcfc9' ,  
        width:'auto' , 
        height:'auto' , 
        display:'flex' , 
        justifyContent:'flexStart', 
       

        '&.MuiButton-contained':{
            bgcolor:'#dbcfc9', 
            opacity:' 0.8' ,
            px:'50px' , 
            borderRadius:'0', 
            weight:'100px',
            height:'auto' ,
           
        } , 

        '& p':{
            textTransform:'capitalize'  ,
            fontWeight:'300 !important' , 
            color:'#2f2d29' ,
            fontSize:' 1rem' ,  
            lineHeight:' 1.8'  ,  
            width:'160',
           
        }
    } , 


    boxOfferLg:{
        maxWidth:'1500px', 
        maxHeight:'500px' , 
        bgcolor:'#eae1dc' , 
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center' , 
        py:'100px' 
    } , 

    boxOfferMd:{
        py:'30px' ,
        px:'30px'   , 
        width:'400px' , 
        height:'300px'   
    } , 

    boxTitle:{
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center' , 
        '&.MuiTypohraphy-h4':{
            display:'flex' ,  
            alignItems:'center' , 
            justifyContent:'center' , 
            py:'30px' ,
            px:'30px' ,
        } , 
    } , 
    boxDescription:{
        pb:'30px',
        '& p':{
            width:'400px', 
            display:'flex' , 
            alignItems:'center' , 
            justifyContent:'center' ,
            py:'80px'  ,
            px:'10px'
        } ,

    }

    
}