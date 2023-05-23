import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function Latest() {
  return (
    <div style={{height:"100vh"}}>
        <div>
            <h1 style={{width:"450px",margin:'0 auto', fontSize:"35PX"}}>Latest News from our Blog</h1>
            <p style={{width:"375px",margin:"10px auto"}}>Who are in extremely love with eco friendly system.</p>
        </div>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:"50px",width:"80%"}}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <img src='https://preview.colorlib.com/theme/robotics/img/b1.jpg' style={{width:"500px"}}></img>
            <div style={{position:"relative",right:"180px"}}><button style={{backgroundImage: "-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)",width:"70px",height:"30px",border:"none",color:"white",margin:"5px",cursor:"pointer"}}>Travel</button><button style={{backgroundImage: "-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)",width:"70px",height:"30px",border:"none",color:"white",cursor:"pointer"}}>Life Style</button></div>
            <h2 style={{position:"relative",right:"40px"}}>Portable latest Fashion for young women</h2>
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <p style={{textAlign:"start",color:"black",marginTop:"10px"}}>31st January, 2018</p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img src='https://preview.colorlib.com/theme/robotics/img/b2.jpg' style={{width:"500px"}}></img>
            <div style={{position:"relative",right:"180px"}}><button style={{backgroundImage: "-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)",width:"70px",height:"30px",border:"none",color:"white",margin:"5px",cursor:"pointer"}}>Travel</button><button style={{backgroundImage: "-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)",width:"70px",height:"30px",border:"none",color:"white",cursor:"pointer"}}>Life Style</button></div>
            <h2 style={{position:"relative",right:"40px"}}>Portable latest Fashion for young women</h2>
            <p style={{textAlign:"start"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <p style={{textAlign:"start",color:"black",marginTop:"10px"}}>31st January, 2018</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
