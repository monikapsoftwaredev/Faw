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
import {navbarPages ,navbarPages2 , navbarPages3} from './navbarPages';
import { styles } from './navbarStyles';








 const Navbar = () =>{

    

  const navigate = useNavigate();
  console.log(navbarPages);
 
    
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  
  

  return (
    <AppBar elevation={0} sx={styles.appbar} >
      <Container maxWidth='xl' sx={styles.appbarcont}>
        <Toolbar disableGutters sx={{ ml:'20px', bgcolor:'transparent' , width:'100%', display:'flex' , alignItems:'center' , justifyContent:'space-around' }}>
       

          <Box sx={{ display: { xs: "flex", lg: "none" } }} >
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
              sx={{mr:'40px' , 
                display: { xs: 'flex', lg: 'none' },
              }}
            >
            
              {navbarPages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}  sx={{width:'380px ' ,} } >
                  <Typography textAlign="center" sx={{fontWeight:'300' }} onClick={()=> navigate(page.route.en)}>{page.title.en}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box >
              <Button >
              <Typography
                noWrap
                component="div"
                onClick={()=> navigate('/')}
                sx={ styles.logoSm}
              >
              Faw
            </Typography>
            </Button>
       </Box>
       
        <Box>
        <Button >
        <Typography
                noWrap
                component="div"
                onClick={()=> navigate('/')}
                sx={styles.logoMd}
            >
            Faw
            </Typography>
        </Button>
        </Box>
       <Box sx={{flexGrow:1 , display:{ xs:'none' , lg:'flex'} ,alignItems:'center ' , justifyContent:'center', pr:'60px' }}>
          <Box sx={{display:'flex ' , flexDirection:'row' , alignItems:'center ' , justifyContent:'center' }} >
              {navbarPages2.map((page) => (
                  <Button
                  disableRipple= {true}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={styles.buttonMdNav}
                  >
                  <Typography
                      noWrap
                      component="div"
                      onClick={()=> navigate(page.route.en)}
                      sx={styles.textMdNav}
                  >
                      {page.title.en} 
                  </Typography>
                  </Button>
              ))}

              </Box>
              <Box  >
              <Button >
              <Typography
                      noWrap
                      component="div"
                      onClick={()=> navigate('/')}
                      sx={ styles.logoLg}
                  >
                  Faw
                  </Typography>
              </Button>
              </Box>
              <Box sx={{  display:'flex ' , flexDirection:'row' , alignItems:'center ' , justifyContent:'center'}} >
              {navbarPages3.map((page) => (
                  <Button
                  disableRipple= {true}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={styles.buttonMdNav}
                  >
                  <Typography
                      noWrap
                      component="div"
                      onClick={()=> navigate(page.route.en)}
                      sx={styles.textMdNav}
                  >
                      {page.title.en} 
                  </Typography>
                  </Button>
              ))}

              </Box>
          </Box>  

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

