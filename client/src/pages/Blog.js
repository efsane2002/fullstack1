import React from 'react';
import style from "./index.module.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CallEndIcon from '@mui/icons-material/CallEnd';
import PowerIcon from '@mui/icons-material/Power';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Helmet } from 'react-helmet';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog page</title>
      </Helmet>
        <div className={style.div1}>
            <h1 style={{width:"500px",color:"white",margin:"0px auto",paddingTop:"70px"}}>Some Features that Made us Unique</h1>
            <p style={{width:"350px",color:"white",margin:"0px auto",paddingTop:"30px"}} >Who are in extremely love with eco friendly system.</p>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:"40px"}}>
      <Grid container spacing={3} style={{width:"80%", margin:"0 auto"}}>
        <Grid item xs={12} lg={4} md={6}>
          <Item style={{height:"200px"}} className={style.item1}>
          <div style={{textAlign:"start"}}><PersonIcon style={{marginRight:"10px"}}/><span>Expert Technicians</span></div>
         <p style={{textAlign:"start"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Item style={{height:"200px"}} className={style.item1}>
          <div style={{textAlign:"start"}}><MedicalInformationIcon  style={{marginRight:"10px"}}/><span>Professional Service</span></div>
            <p style={{textAlign:"start"}} >Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Item style={{height:"200px"}} className={style.item1}>
          <div style={{textAlign:"start"}}><CallEndIcon style={{marginRight:"10px"}}/><span>Great Support</span></div>
           <p style={{textAlign:"start"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{width:"80%", margin:"0 auto"}}>
        <Grid item xs={12} lg={4} md={6}>
          <Item style={{height:"200px"}} className={style.item1} >
          <div style={{textAlign:"start"}}><PowerIcon style={{marginRight:"10px"}}/><span>Technical Skills</span></div>
        <p style={{textAlign:"start"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4} md={6} >
          <Item style={{height:"200px"}} className={style.item1} >
          <div style={{textAlign:"start"}}><DiamondIcon style={{marginRight:"10px"}}/><span>Highly Recomended</span></div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Item style={{height:"200px"}} className={style.item1}>
           <div style={{textAlign:"start"}}><ChatBubbleOutlineIcon style={{marginRight:"10px"}}/><span>Positive Reviews</span></div>
           <p style={{textAlign:"start"}}>Usage of the Internet is becoming more common due to rapid advancement of technology and power</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    </div>
  )
}
