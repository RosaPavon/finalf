import { Form, Alert} from "react-bootstrap";
import { useState} from "react";
import { Modal} from "react-bootstrap"
import { Tabs } from 'antd';
import {ACCESS_TOKEN, REFRESH_TOKEN, EMAILTOKEN} from '../../utils/constans'




function Registro() {

  //Registrar Usuario
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reppassword, setrepPassword] = useState("");
    const [feedback, setFeedback] = useState({ empty: true });
    const imagen="https://image.flaticon.com/icons/png/512/33/33771.png"

    const { TabPane } = Tabs;

    function registrar() {
        fetch(`${process.env.REACT_APP_API_URL}/usuarios/registro`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuario: usuario, email: email.toLocaleLowerCase(), password: password , reppassword:reppassword, imagen:imagen}),
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

       //Login Usuario

       const [emaillogin, setEmaillogin] = useState("");
       const [passwordlogin, setPasswordlogin] = useState("");
       const [feedbacklogin, setFeedbacklogin] = useState({ empty: true });


       function login() {
        fetch(`${process.env.REACT_APP_API_URL}/login/login`, {
          method: "POST", 
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emaillogin, password: passwordlogin }),
        })
          .then((res) => res.json(), setEmaillogin(""), setPasswordlogin(""))
          .then(function (datos) {
          setFeedbacklogin(datos);          
          setFeedbacklogin(datos)
          console.log(datos)
          if(datos.logged){
            const { accessToken, refreshToken, emailToken } = datos;
            localStorage.setItem(EMAILTOKEN, emailToken)
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken)
            console.log(datos)
            ;
            /* setTimeout(() => {
            setFeedbacklogin({ empty: true });
            }, 6000); */
            window.location.href = "/logged/home";
          }
                  
          })
    }

  
    return (
      <>
    {/* ----------Login---------------- */}
   <div>
   <br></br>
        <br></br>
      <Modal.Dialog >
      <Tabs type="card" className="colortext" >
      <TabPane tab="Entrar" key="1" >
      <Modal.Body >    
      <Form.Group controlId="formBasicEmaillogin"  >
      <Form.Label>Email</Form.Label>
      <Form.Control  
        type="email"
        placeholder="Introduce tu email"
        onChange={(e) => setEmaillogin(e.target.value)}
        value={emaillogin}               
      />
      </Form.Group>
      <Form.Group controlId="formBasicPasswordlogin">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control 
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPasswordlogin(e.target.value)}
        value={passwordlogin}
         />
      </Form.Group>              
     </Modal.Body>
     <Modal.Footer>
     <Form.Group>
       {feedbacklogin.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbacklogin.logged ? "success" : "danger "}>
           {feedbacklogin.mensaje}
         </Alert>
       )}
     </Form.Group>      
     <button type="button" className="btn btn-outline-warning float-right" onClick={() => login()}>Entrar</button>
     </Modal.Footer>


    {/* ----------Registros---------------- */}


      
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
     <button type="button" className="btn btn-outline-warning float-right" onClick={() => registrar()}>Enviar</button> 
    </Modal.Footer>
    </TabPane>    
    </Tabs>     
    </Modal.Dialog>
    </div>
    <br></br>
        <br></br>  <br></br>
        <br></br>
        <br></br>
        <br></br>
      

      </>
    
    );

}

export default Registro;


