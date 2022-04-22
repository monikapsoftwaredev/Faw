import { theme } from "../../Theme";

export const styles = {  

    sectionBoxLg:{
        width:'100%'  ,   
        bgcolor:'#f2f3f4',
        position:'absolute' , 
        bottom:'0' , 
        left:'0',
        zIndex:100,
        [theme.breakpoints.down('sm')]: {
          height:'200px',
          mt:'40px'
        },
        [theme.breakpoints.up('sm')]: {
          height:'auto',
        },
        [theme.breakpoints.up('md')]: {
          height:'auto'
        },
        [theme.breakpoints.up('lg')]: {
          height:'250px',
          pt:'20px'

         
        },
     } , 

     sectionBoxLgOne:{
      bgcolor:'#f2f3f4',
      display:'flex' , 
      flexDirection:'row', 
      alignItems:'center' , 
      justifyContent:'space-evenly' , 
      overflowY:'hidden',

      [theme.breakpoints.down('sm')]: {
        height:'auto',
        py:'20px',
      },
      [theme.breakpoints.up('sm')]: {
        height:'auto',
        py:'20px',
      },
      [theme.breakpoints.up('md')]: {
        height:'auto',
        py:'20px',
      },
      [theme.breakpoints.up('lg')]: {
        height:'auto',
        pt:'20px',
        
      },
   } , 

      sectionBoxLgTwo:{
        [theme.breakpoints.down('sm')]: {
          height:'auto',
        },
        [theme.breakpoints.up('sm')]: {
          height:'auto',
        },
        [theme.breakpoints.up('md')]: {
          height:'auto',
          
        },
        [theme.breakpoints.up('lg')]: {
          height:'auto',
        },
    } , 

      sectionBoxMd1:{
        bgcolor:'#f2f3f4',
        [theme.breakpoints.down('sm')]: {
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center', 
          justifyContent:'space-evenly', 
          
         },
         [theme.breakpoints.up('sm')]: {
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center', 
          justifyContent:'space-evenly',
           
         },
        
      } ,

      sectionBoxMd2:{
        maxHeight:theme.spacing(15) , 
        [theme.breakpoints.down('sm')]: {
          flexWrap:'wrap',
          py:'20px',
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent:'space-between',
          px:'10px'
         },
         [theme.breakpoints.up('sm')]: {
          flexWrap:'wrap',
          py:'40px',
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent:'space-between',
          px:'10px'
           
         },
         [theme.breakpoints.up('md')]: {
          flexWrap:'wrap',
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent:'space-between',
         
           
         },
         [theme.breakpoints.up('lg')]: {
          flexWrap:'wrap',
          py:'40px',
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent:'space-between',
          px:'80px'
           
         }, 
      } ,

      copyRightBox:{
        maxHeight:'170px' ,
        maxWidth:'300px',
         [theme.breakpoints.up('md')]: {
          flexWrap:'nowrap' ,
          width:'280px',
          height:'64px',
          display:'flex' , 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent:'space-around',
           
         },
        
      },

      buttonIcon:{
        borderRadius:theme.spacing(1), 
        color:'green',
        '&:hover':{
          color:'#b9936e',  
        }
      } ,
      icon:{
        fontSize:theme.spacing(4) , 
        fontWeight:100 ,  
        color:'#787774', 
        opacity:' 0.8' ,
        '&:hover':{
          color:'#b9936e',   
        }
      } ,

      company:{
        textTransform:'capitalize',
        fontWeight:'400' ,
        color:'#b9936e' ,
        fontSize:' 1rem' ,  
        lineHeight:' 1.5'
      }, 

      companyBox:{
         [theme.breakpoints.up('lg')]: {
          display:'flex',
          flexDirection:'row' ,
          alignItems:'center',
          justifyContent:'center'         
         }, 
      },

      createdBox:{
       
        [theme.breakpoints.down('sm')]: {
          ml:'65px',
         },
         [theme.breakpoints.up('sm')]: {
          ml:'65px',
         },
      }

      
  
}