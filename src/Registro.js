import { Form, Button, Row, Col, Alert} from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState} from "react";


function Registro() {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState({ empty: true });

    function registrar() {
        fetch("http://localhost:3001/usuarios/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuario: usuario, email: email, password: password }),
        })
          .then((res) => res.json())
          .then(function (datos) {
            setFeedback(datos)
            setTimeout(() => {
            setFeedback({ empty: true });
            }, 6000);
            setUsuario("")
            setEmail("")
            setPassword("")
            
          });
        
      }

    return (
      <>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <h2>Regístrate</h2>
            <Form.Group controlId="formBasicUsers">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu usuario"
                onChange={(e) => setUsuario(e.target.value)}
                value={usuario}               
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}               
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
               />
            </Form.Group>          
            <Button variant="primary" 
            onClick={() => registrar()}>
              Enviar
            </Button>
           
            <Form.Group>
              {feedback.empty ? (
                <h1> </h1>
              ) : (
                <Alert variant={feedback.logged ? "danger " : "success"}>
                  {feedback.mensaje}
                </Alert>
              )}
            </Form.Group>
          </Form>
          <Link to={`/login`}>Accede</Link>
        </Col>
        <Col></Col>
      </Row>
     </>
    
    );

}

export default Registro;


