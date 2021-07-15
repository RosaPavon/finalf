import React from "react"
import { Form, Alert} from "react-bootstrap";
import { Avatar, Popover } from 'antd';
import { useState, useEffect} from "react";
import {logout} from "../../../api/auth"


function ModificarCliente(){
    var email = localStorage.getItem("emailToken")

    //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 
  const [nombre, setNombre] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [feedback, setFeedback] = useState({ empty: true });
  const [emailFeedback, setEmailFeedback] = useState({ empty: true });
  const [newImage, setNewImage] = useState("");
  const [imagenFeedback, setImagenFeedback] = useState({ empty: true });


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
      
 let nombreUsuario = name.map((user, index) => {      
            return (                             
              <li className="list-group-item" key={user._id}>
              <Avatar size={44} src={user.imagen} />  
              <span className="lead">      {user.usuario}</span>    
              <span className="lead">---------------------{user.email}</span> 
            </li>              
            )}); 

            
    let imagenUsuario=name.map((user, index) => {      
      return (                             
        <li key={user._id}>
        <div className="row g-3">              
       <div className="col-auto">

       <input type="text" readOnly className="form-control-plaintext" id="avatar" value="Cambia tu Avatar" />
       <Avatar size={114} src={user.imagen} />  

       </div>
       <div className="col-auto">
            <Form.Control
              type="text"
              placeholder="Escribe url nuevo Avatar"
              onChange={(e) => setNewImage(e.target.value)}
              value={newImage} />              
       </div>
       <div className="col-auto">
       <button type="submit" className="btn btn-warning btn-block"
       onClick={() => enviarNewImg()}
       >Modificar</button>
        <Form.Group>
       {imagenFeedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={imagenFeedback.error ? "danger " : "success"}>
           {imagenFeedback.mensaje}
         </Alert>
       )}
     </Form.Group>
       </div>
       </div>
      </li>                   
      )});

      
       const content = (
         <div>
           <p>Lógate con tu nuevo email</p>
         </div>
      );
        const logoutUser=()=>{
          logout()
          window.location.reload()
        }

    //----------------Editar Usuario-----------------
    
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
              window.location.reload()    
              });        
        }
//---------------Editar email usuario--------------------

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
              }, 10000);
              logoutUser()   
              window.location.href = "/logged/login"    
              });        
        }
  
  //--------------Editar avatar--------------------------

  function enviarNewImg() {
    fetch("http://localhost:3001/usuarios/imageedit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imagen: newImage, email:email}),
    })
      .then((res) => res.json())
      .then(function (datos) {
        setImagenFeedback(datos)
        setTimeout(() => {
        setImagenFeedback({ empty: true });
        }, 6000);   
        window.location.reload()    
        });        
  }

  return(
      <>
         
       <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3> 
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
       <br></br>

       <div className="row g-3">
       <div className="col-auto">
       <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Cambia tu Email"/>
       </div>
    
       <div className="col-auto">
            <Form.Control
              type="text"
              placeholder="Escribe tu nuevo Email"
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail} />
          
       </div>
   
       <div className="col-auto">
       
       <Popover placement="right" content={content} trigger="click">
       <button type="submit" className="btn btn-warning btn-block"
       onClick={() => enviarNewEml()}
       >Modificar</button>
       </Popover>
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
            <br></br>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <h3 className="text-lg font-medium leading-6 text-gray-900"  >{imagenUsuario}</h3> 
              </span>
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