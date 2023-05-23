import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#959bff",opacity:'0.5',position:"fixed",zIndex:"99"}}>
        <Toolbar>
        <img src='https://preview.colorlib.com/theme/robotics/img/logo.png' style={{marginRight:"100px"}}></img>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <div style={{marginLeft:"300px"}}>
            <Link to="/" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}}>home</Link>
            <Link to="/about" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}}>About</Link>
            <Link to="/blog" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Blog</Link>
            <Link to="/products" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Products</Link>
            <Link to="/service" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Services</Link>
            <Link to="/dropdrown" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}}>DropDrown</Link>
            <Link to="/contact" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Contact</Link>
            <Link to="/detail" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Detail</Link>
            <Link to="/add" element="" style={{textDecoration:"none",color:"white",fontSize:"16px",marginRight:"15px"}} >Add</Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}