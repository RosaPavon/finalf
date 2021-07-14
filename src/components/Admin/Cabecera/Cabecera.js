import React from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {logout} from "../../../api/auth"


function Cabecera(){

    const logoutUser=()=>{
        logout()
        window.location.reload()

    }

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Cook And Cook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Recetas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    </NavDropdown>

    </Nav>
    <Nav>
      <Nav.Link href="/logged">Area Cliente</Nav.Link>

      <Nav.Link onClick={logoutUser}>Cerrar Sesión</Nav.Link>

      </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Cabecera