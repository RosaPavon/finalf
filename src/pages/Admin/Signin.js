import React from "react"
import Registro from "./Registro"
import {getAccessToken} from "../../api/auth"
import { Redirect } from "react-router-dom"

function Singnin(){

if(getAccessToken()){
    return <Redirect to="/logged/"/>
}
    return(
        <div id="homelogin">      
        <Registro />    
        </div>
       
    )
}

export default Singnin