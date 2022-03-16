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
import { styles } from './navbarStyles';







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
  //  #eae1dc  #f6f1ef  #dbcfc9 #F4EBE6  #EBE2DD

  
  

  return (
    <AppBar sx={styles.appbar} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box>
         <Button >
            <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={()=> navigate('/')}
                sx={ styles.logo}
            >
            Faw
            </Typography>
          </Button>
          </Box>

          <Box sx={styles.box}>
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
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={styles.menu}>
                  <Typography textAlign="center" sx={{fontWeight:'300'}} onClick={()=> navigate(page.route.en)}>{page.title.en}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box  sx={styles.box} >
          <Button sx={styles.text}>
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
          <Box sx={styles.boxMdNav}>
            {navbarPages.map((page) => (
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

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;