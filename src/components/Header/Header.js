import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/kpmg-logo.png'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>
        <img src={logo} style={{width:100}} className={"img-fluid"} alt="KPMG" />
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}