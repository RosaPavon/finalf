
import { Form, Button, Row, Col, } from "react-bootstrap";
import { Link } from 'react-router-dom'
import CrearRecetas from './CrearRecetas'

function AreaCliente(props) {


 

    return (
      <>
      <Row>
        <Col></Col>
        <Col>
        <Form>
            <h2>Área de cliente</h2>
            <Form.Group controlId="formBasicUsers">
              <Form.Label>{props.usuarioEmail}</Form.Label>
              <Form.Control 
                type="text"
                placeholder="usuario"                                              
              />
            </Form.Group>            
            <Button variant="primary">
              Modificar
            </Button>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="email"                           
              />
            </Form.Group>
            <Button variant="primary">
              Modificar
            </Button> 
          </Form>
          <Link to={`/login`}>Accede</Link>
        </Col>
        <Col></Col>
      </Row>
       <CrearRecetas/>
    </>
    );
}


export default AreaCliente;