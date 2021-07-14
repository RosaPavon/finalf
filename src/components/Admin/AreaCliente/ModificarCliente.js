import React from "react"
import { Form, Alert} from "react-bootstrap";
import { Avatar } from 'antd';
import { useState, useEffect} from "react";

function ModificarCliente(){
    var email = localStorage.getItem("emailToken")

    //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 

    useEffect(()=>{    
     fetch("http://localhost:3001/usuarios/misdatos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:email}),
        })
        .then(res => res.json())
        .then((datos)=>setName(datos.contenido))
        },[email]) 
      
/*    let nombreUsuario = name.map((user, index) => {      
            return (                             
              <li className="list-group-item" key={user._id}>
              <span className="lead">{user.usuario}</span>    
              <span className="lead">---------------------{user.email}</span>    

            </li>              
            )});  */

    //----------------Editar Usuario-----------------
    
      const [nombre, setNombre] = useState("");
      const [newEmail, setNewEmail] = useState("");
      const [feedback, setFeedback] = useState({ empty: true });
      const [emailFeedback, setEmailFeedback] = useState({ empty: true });

  
      function enviarNewInf() {
          fetch("http://localhost:3001/usuarios/editar", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ usuario: nombre, email:email}),
          })
            .then((res) => res.json())
            .then(function (datos) {
              setFeedback(datos)
              setTimeout(() => {
              setFeedback({ empty: true });
              }, 6000);   
              window.location.href = "/logged"    
              });        
        }

        function enviarNewEml() {
          fetch("http://localhost:3001/usuarios/emailedit", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newemail: newEmail, email:email}),
          })
            .then((res) => res.json())
            .then(function (datos) {
              setEmailFeedback(datos)
              setTimeout(() => {
              setEmailFeedback({ empty: true });
              }, 6000);   
              window.location.href = "/logged"    
              });        
        }
      

  return(
      <>
         
       {/* <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3> */}
        <div className="mt-5 md:mt-0 md:col-span-2">
      <div action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">            
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div className="row g-3">              
       <div className="col-auto">
       <input type="text" readOnly className="form-control-plaintext" id="usuario" value="Cambia tu Usuario" />
       </div>
       <div className="col-auto">
            <Form.Control
              type="text"
              placeholder="Escribe tu nuevo Usuario"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre} />
          
       </div>
       <div className="col-auto">
       <button type="submit" className="btn btn-warning btn-block"
       onClick={() => enviarNewInf()}
       >Modificar</button>
       <Form.Group>
       {feedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedback.logged ? "danger " : "success"}>
           {feedback.mensaje}
         </Alert>
       )}
     </Form.Group>
       </div>
       </div>
       <div className="row g-3">
       <div className="col-auto">
       <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Cambia tu Email"/>
       </div>
       <div className="col-auto">
       <div className="col-auto">
            <Form.Control
              type="text"
              placeholder="Escribe tu nuevo Email"
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail} />
          
       </div>
       </div>
       <div className="col-auto">
       <button type="submit" className="btn btn-warning btn-block"
       onClick={() => enviarNewEml()}
       >Modificar</button>
       <Form.Group>
       {emailFeedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={emailFeedback.error ? "danger " : "success"}>
           {emailFeedback.mensaje}
         </Alert>
       )}
     </Form.Group>
       </div>
       </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <Avatar size={104} src="https://image.flaticon.com/icons/png/512/33/33771.png" />
              </span>
              <button type="submit" className="btn btn-primary mb-3">Modificar</button>
            </div>
          </div>         
        </div>          
      </div>
    </div>
  </div>


  </>
  )
}

export default ModificarCliente