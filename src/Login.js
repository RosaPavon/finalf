import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from "react";


function Login(props) {//si no ponemos props no recibe el usuario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState({ empty: true });
    
    
    function enviar() {
      console.log("llamada1")
      fetch("http://localhost:3001/login", {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => res.json(), props.setUsuarioEmail(email), setEmail(""), setPassword(""))
        .then(function (datos) {
          if(datos.logged){
          setFeedback(datos);          
          console.log(datos)
          setTimeout(() => {
          setFeedback({ empty: true });                
          }, 6000); 
          }else{
            props.setUsuarioEmail("")
          }

                           
        }).then(()=>{
          console.log("Llamada2")
          if(feedback.logged){
            fetch("http://localhost:3001/usuario",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: props.usuarioEmail}),
          })
          .then ((res) => res.json())
          .then((datos)=>props.setUsuario(datos.user), props.setUsuarioEmail("")
        )//esto modifica el usuario de app         

          }  
        
    })
  }

  
    return (
      
          <Row>
        <Col></Col>
        <Col>
          <Form action="/login" method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>          
            <Button variant="primary" onClick={() => enviar()}>
              Enviar
            </Button>
            <Form.Group>
              {feedback.empty ? (
                <h1> </h1>
              ) : (
                <Alert variant={feedback.logged ? "success" : "danger"}>
                  {feedback.mensaje}
                </Alert>
              )}
            </Form.Group>
          </Form>
          <p>Si aún no estas registrado <Link to={`/registrate`}>Regístrate</Link></p>
          <Link to={`/areacliente`}>areacleinte</Link>
        </Col>
        <Col></Col>
      </Row>
    
   
    );

}

export default Login;