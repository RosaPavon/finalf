import {Nav} from "react-bootstrap";


function Cabecera() {
  

    return (
      <>
  <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
  <Nav.Link href="/areacliente">Area Cliente</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
  <Nav.Link href="/login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
  <Nav.Link href="/registrate">Registro</Nav.Link>
  </Nav.Item>
  </Nav>   
    </>    
    );

}
export default Cabecera;


