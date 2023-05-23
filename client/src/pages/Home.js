import React from 'react'
import Design from "./index.module.css"
import Products from './Products'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import New from './New'
import Latest from './Latest'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <div className={Design.box}>
    <div className={Design.img}>
        <h1 style={{fontSize:"55px",color:"white",fontWeight:"normal",position:"relative",left:"30px",top:"50px"}}>Improved<br></br>
Production level<br></br>
with Robotics</h1>
<p style={{color:"white",position:"relative",left:"30px",top:"50px"}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
    </div>
    </div>
    <Products></Products>
    <About></About>
    <Services></Services>
    <Blog></Blog>
    <New></New>
    <Latest></Latest>
    <Footer></Footer>
    </>
  )
}
