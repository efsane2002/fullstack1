import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useRoboticContext } from "../context/RoboticContext";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import style from "./index.module.css"
import { Navigate } from "react-router-dom";
import { deleteRoboticsByID, getAllRobotics } from "../api/request";
import Detail from "./Detail";
import { Helmet } from "react-helmet";

const Products = () => {
  const[robotics,setRobotics] = useRoboticContext();
 const navigate=useNavigate()
  useEffect(()=>{
    getAllRobotics().then(res=>{
      setRobotics(res);
    })
  },[setRobotics])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRoboticsByID(id);
        setRobotics(robotics.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 function handleClick(){
    navigate("/detail")
 }
  return (
    <>
    <Helmet>
      <title>Product page</title>
    </Helmet>
    <h1 style={{width:"500px",paddingTop:"100px", margin:"0 auto"}}>Featured Robotics Products to Show</h1>
    <p style={{width:"350px", margin:"10px auto"}} >Who are in extremely love with eco friendly system.</p>
    <div style={{ width: "80%", margin: "50px auto", height:"80vh"}}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllRobotics(e.target.value).then(res=>{
          setRobotics(res);
        })
     }} style={{marginBottom:'15px'}} id="outlined-basic" label="Search Robotics" variant="outlined" />
      </div>
      <Grid  container spacing={2}>
        {robotics && robotics.map((robotic)=>{
          return <Grid key={robotic._id} item lg={3} md={6} sm={12}>
          <Card
            hoverable
            cover={
              <img
                style={{
                  height: "300px",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt="example"
                src={robotic.imageURL}
              />
            }
          >
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <Typography style={{marginBottom:'7px'}}><Link to={`/robotic/${robotic._id}`}>{robotic.name}</Link></Typography>
            <Typography style={{marginBottom:'7px'}}>{robotic.paragraf}</Typography>
            </div>
            <Button onClick={()=>handleDelete(robotic._id)} variant="contained" color="error" style={{height:"30px"}}>Delete</Button>
          </div>
          <button onClick={()=>handleClick()} style={{ marginLeft:"25px",marginTop:"40px",width:"160px", height:"40px",border:"none",backgroundColor:"white"}} className={style.btn2}>WIEW DETAILS</button>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
    </>
  );
};

export default Products;