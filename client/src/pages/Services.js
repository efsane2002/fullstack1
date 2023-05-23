import React from 'react'
import { Helmet } from 'react-helmet'

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
        <div style={{display:"flex",height:"100vh", width:"80%"}}>
       
        <div style={{with:"300px",height:"100vh"}}>
            <p>BRAND NEW APP TO BLOW YOUR MIND</p><br></br>
          <h1 style={{fontSize:"40px"}}>We’ve made a life <br></br>that will change you</h1><br></br>
          <p>We are here to listen from you deliver exellence</p><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor.</p>
          <button style={{backgroundImage: '-webkit-linear-gradient(0deg, #828fff 0%, #d496ff 100%)', width:"140px", border:"none", height:"40px",color:"white",marginTop:"30px"}}>GET DETAILS</button>
        </div>
        <div>
           <img src='https://preview.colorlib.com/theme/robotics/img/video-bg.jpg.webp' style={{width:"600px"}}></img>
        </div>
    </div>
    </div>
  )
}
