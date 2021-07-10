import { Form, Button, Alert} from "react-bootstrap";
import { useState} from "react";
import { Modal} from "react-bootstrap"
import { Tabs } from 'antd';



function Registro() {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reppassword, setrepPassword] = useState("");
    const [feedback, setFeedback] = useState({ empty: true });

    const { TabPane } = Tabs;

  function callback(key) {
     console.log(key);
   }

    function registrar() {
        fetch("http://localhost:3001/usuarios/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuario: usuario, email: email.toLocaleLowerCase(), password: password , reppassword:reppassword}),
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
            setrepPassword("")


            
          });
        
      }

    return (
      <>
      <Modal.Dialog>
      <Tabs onChange={callback} type="card">
      <TabPane tab="Entrar" key="1">
      <Modal.Body>    
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
      <Form.Label>Contraseña</Form.Label>
      <Form.Control
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
         />
      </Form.Group>              
     </Modal.Body>
     <Modal.Footer>
     <Form.Group>
       {feedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedback.logged ? "danger " : "success"}>
           {feedback.mensaje}
         </Alert>
       )}
     </Form.Group>
     <Button variant="primary" 
     onClick={() => registrar()}>
        Entrar
     </Button>    
           
    </Modal.Footer>
      
    </TabPane>
    <TabPane tab="Regístrate" key="2">
    <Modal.Body>       
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
    <Form.Label>Contraseña</Form.Label>
    <Form.Control
      type="password"
      placeholder="Contraseña"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />
    </Form.Group>     
    <Form.Group controlId="formBasicrepPassword">
    <Form.Label>Repite la contraseña</Form.Label>
    <Form.Control
      type="password"
      placeholder="Repite la Contraseña"
      onChange={(e) => setrepPassword(e.target.value)}
      value={reppassword}
      />
    </Form.Group>
     </Modal.Body>
     <Modal.Footer>
     <Form.Group>
       {feedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedback.logged ? "danger " : "success"}>
           {feedback.mensaje}
         </Alert>
       )}
     </Form.Group>
     <Button variant="primary" 
     onClick={() => registrar()}>
        Enviar
     </Button>    
           
    </Modal.Footer>
    </TabPane>    
    </Tabs>     
    </Modal.Dialog>
      </>
    
    );

}

export default Registro;


