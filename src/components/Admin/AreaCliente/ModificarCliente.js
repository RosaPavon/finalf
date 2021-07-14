import React from "react"
import { Form} from "react-bootstrap";
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
      
    let nombreUsuario = name.map((user, index) => {      
            return (                             
                <p key={user._id}>{user.usuario}</p>                
            )});

    //----------------Editar Usuario-----------------
    function EditarUsuario() {
        const [nombre, setNombre] = useState("");
        const [usuarioemail, setUsuarioemail] = useState("");
        const [feedback, setFeedback] = useState({ empty: true });
    
        function enviarNewInf() {
            fetch("http://localhost:3001/crearreceta/crearNuevaReceta", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ usuario: nombre}),
            })
              .then((res) => res.json())
              .then(function (datos) {
                setFeedback(datos)
                setTimeout(() => {
                setFeedback({ empty: true });
                }, 6000);       
                });        
          }}
        

    return(
        <>
     <ul className="list-group">       {
                name.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.usuario}</span>    
                  </li>
                ))
            }
          </ul>
            
{/*             <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3>
 */}        <div className="mt-5 md:mt-0 md:col-span-2">
        <div action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">            
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="row g-3">              
         <div className="col-auto">
         <input type="text" readOnly className="form-control-plaintext" id="usuario" value="Cambia tu Usuario" />
         </div>
         <div className="col-auto">
         <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pon un título resultón"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo} />
            
         </div>
         <div className="col-auto">
         <button type="submit" className="btn btn-warning btn-block"
         
         >Modificar</button>
         </div>
         </div>
         <div className="row g-3">
         <div className="col-auto">
         <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Cambia tu Email"/>
         </div>
         <div className="col-auto">
         <input type="text" className="form-control" id="inputEmail" placeholder="Escribe tu nuevo Email"/>
         </div>
         <div className="col-auto">
         <button type="submit" className="btn btn-primary mb-3">Modificar</button>
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