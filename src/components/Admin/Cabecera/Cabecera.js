import React from "react"
import {Nav, Navbar, Image} from "react-bootstrap"
import {logout} from "../../../api/auth"
import logo from "../../../images/logo.png"

import { useState, useEffect} from "react";
import { Avatar } from 'antd';

function Cabecera(){
    var email = localStorage.getItem("emailToken")

    const [name, setName]=useState([]) 

    useEffect(()=>{    

        fetch(`${process.env.REACT_APP_API_URL}/usuarios/misdatos`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ email:email}),
           })
           .then(res => res.json())
           .then((datos)=>setName(datos.contenido))
           },[email])

    const logoutUser=()=>{
        logout()
        window.location.href = "/";

        
    }
    let imagenUsuario=name.map((user, index) => {      
        return (                             
          <li key={user._id}>
         <Avatar size={24} src={user.imagen} />         
        </li>                   
        )});

    return(
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Image href="/logged/home" src={logo} fluid   width="95" height="104"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/logged/home">Home</Nav.Link>


    </Nav>
    <Nav>
    <h3 className="text-lg font-medium leading-6 text-gray-900"  >{imagenUsuario}</h3> 

      <Nav.Link href="/logged/user">Area Cliente</Nav.Link>

      <Nav.Link onClick={logoutUser}>Cerrar Sesión</Nav.Link>

      </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Cabecera