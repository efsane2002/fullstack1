import React from 'react'
import style from "./index.module.css"

export default function New() {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around", width:"80%", alignItems:"center", height:"300px"}} className={style.divimg}>
            <img src='https://preview.colorlib.com/theme/robotics/img/l1.png.webp'></img>
            <img src='https://preview.colorlib.com/theme/robotics/img/l2.png.webp'></img>
            <img src='https://preview.colorlib.com/theme/robotics/img/l3.png'></img>
            <img src='https://preview.colorlib.com/theme/robotics/img/l4.png.webp'></img>
            <img src='https://preview.colorlib.com/theme/robotics/img/l5.png.webp'></img>
        </div>
    </div>
  )
}
