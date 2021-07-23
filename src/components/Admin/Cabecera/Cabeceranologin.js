import React from "react"
import {Nav, Navbar,Image} from "react-bootstrap"
import logo from "../../../images/logo.png"
import {Link} from 'react-router-dom'





function Cabeceranologin(){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
        <Link to={`/`}>
        <Image src={logo} fluid   width="95" height="104"/>

      </Link> 
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"> 
    
    </Nav>
    <Nav>
      <Nav.Link href="/logged/login">Identifícate</Nav.Link>

      </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Cabeceranologin