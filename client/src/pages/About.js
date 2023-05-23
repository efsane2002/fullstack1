import React from 'react'
import { Helmet } from 'react-helmet'



export default function About() {
  return (
    <>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <div style={{display:"flex",height:"100vh"}}>
        <div style={{paddingTop:"100px"}}>
           <img src='https://preview.colorlib.com/theme/robotics/img/about-img.png' style={{width:"700px"}}></img>
        </div>
        <div style={{with:"300px",height:"100vh",marginTop:"100px"}}>
          <h1 style={{fontSize:"40px"}}>Globally Connected by<br></br> Large Network</h1><br></br>
          <p>We are here to listen from you deliver exellence</p><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor.</p>
          <button style={{backgroundImage: '-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)', width:"140px", border:"none", height:"40px",color:"white",marginTop:"30px"}}>GET DETAILS</button>
        </div>
    </div>
    </>
  )
}
