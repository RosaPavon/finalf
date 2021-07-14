import React from "react"
import Registro from "./Registro"
import {getAccessToken} from "../../api/auth"
import { Redirect } from "react-router-dom"

function Singnin(){

if(getAccessToken()){
    return <Redirect to="/logged/"/>

}
    return(
        <>
        <h2>Estamos en Singnin</h2>
        <Registro />
        </>
    )
}

export default Singnin