import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem';
import {navbarPages} from './navbarPages';







const Navbar = () => {

    

  const navigate = useNavigate();
  console.log(navbarPages);
 
    
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //, mt:'150px'
  //  #eae1dc

  const Styles = {
      appbar:{
        backgroundColor:"#eae1dc" , 
        position:'fixed',
       
      } , 
      logo:{
        mr: 15,
        fontSize: '23px',
        color: '#2f2d29' , 
            display: {
                xs: 'none',
                md: 'flex'
             } 
         } , 
      box:{
           flexGrow: 1, 
           display: {
                xs: 'flex',
                md: 'none' 
            }
        } , 
    text:{
        "&.MuiButton-text": {
            color: "#2f2d29"
          }
    }, 
   
    
   
    }

  

  return (
    <AppBar sx={Styles.appbar} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{color:'blue'}}>
         <Button sx={{color:'red'}} >
            <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={()=> navigate('/')}
                sx={ Styles.logo}
            >
            Faw
            </Typography>
          </Button>
          </Box>

          <Box sx={Styles.box}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
              {navbarPages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={Styles.menu}>
                  <Typography textAlign="center" onClick={()=> navigate(page.route.en)}>{page.title.en}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box  sx={Styles.box} >
          <Button sx={Styles.text}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={()=> navigate('/')}
                
            >
                Faw
            </Typography>
          </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navbarPages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2  , color: '#2f2d29', display: 'block' }}
                
              >
              <Typography
                noWrap
                component="div"
                onClick={()=> navigate(page.route.en)}
                sx={{ fontSize: '15px' , textTransform:'capitalize' }}
              >
                 {page.title.en} 
              </Typography>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;