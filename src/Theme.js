import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

    palette :{
        primary:{
            main :'#D3D3D3'
        },
        secondary:{
            main :'#FBFCF8'
        },
        error:{
            main :'#8d877c'
        },
        warning:{
            main :'#d4cbb9'
        },
         success:{
            main :'#bcb4a5'
        },
        overrides:{
            MuiButton:{
                text:{
                    color: '#2f2d29'
                }
            }
        }
        
    }
})
