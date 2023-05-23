import { createContext, useContext, useState } from "react";

const RoboticContext = createContext();

export const RoboticContextProvider = ({children})=>{
    const[robotic,setRobotic] = useState([]);

    return(
        <RoboticContext.Provider value={[robotic,setRobotic]}>
            {children}
        </RoboticContext.Provider>
    )
}

export const useRoboticContext = ()=> useContext(RoboticContext)