import React from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"


function Cabeceranologin(){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/logged/login">Cook And Cook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Recetas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    </NavDropdown>
    
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