import { BASE_URL } from "./baseURL";
import axios from "axios";

//get all
export const getAllRobotics = async(name)=>{
    let Robotics;
    let URL;
    if (!name) {
        URL = BASE_URL+'/robotic';
    }
    else{
        URL = BASE_URL+`/robotic/?name=${name}`
    }
    await axios.get(URL)
    .then(res =>{ 
        Robotics = res.data;
    })

    return Robotics
}
//get by id
export const getRoboticsByID = async(id)=>{
    let Robotic;
    await axios.get(`${BASE_URL}/robotic/${id}`)
    .then(res =>{ 
        Robotic = res.data;
    })

    return Robotic
}
//delete
export const deleteRoboticsByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/robotic/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postRobotics = (payload)=>{
    axios.post(`${BASE_URL}/robotic`,payload)
}
//edit
export const editRoboticsByID = (id,payload)=>{
    axios.put(`${BASE_URL}/robotic/${id}`,payload)
}