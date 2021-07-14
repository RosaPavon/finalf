import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


function CrearContexto(){
    return  useContext(AuthContext)    
}

export default CrearContexto


