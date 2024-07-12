// client/src/navbar/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const theme = useTheme();
  // Checks if screen width is less than or equal to 'sm'(small)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='nav-container'>
      <AppBar position="fixed" sx={{ top: 0, bgcolor: '#263238', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: '16px', paddingRight: '16px' }}>
          {/* Logo */}
          <Typography variant="h6" component="div">
            <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1.1rem' }}>Shulunge & Company</Button> {/* Increased font size */}
          </Typography>
          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Desktop Menu */}
          {!isMobile && (
            <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/services">Services</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button> {/* Linked to Contact page */}
            </div>
          )}
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>About</MenuItem>
            <MenuItem component={Link} to="/services" onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem> {/* Linked to Contact page */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;