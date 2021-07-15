import React from "react"
import { Avatar} from 'antd';
import { useState, useEffect} from "react";


function MisRecetas(){
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
              <li className="list-group-item" key={user._id}>
              <Avatar size={44} src={user.imagen} />  
              <span className="lead">{user.usuario}</span>    
              <span className="lead">---------------------{user.email}</span> 
            </li>              
            )}); 

            

  return(
      <>
         
       <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3> 
        <div className="mt-5 md:mt-0 md:col-span-2">
      <div action="#" method="POST"></div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">            
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div className="row g-3">              
       <div className="col-auto">
       </div>
       
       <div className="col-auto">       
       
       </div>
       </div>
       <br></br>

       <div className="row g-3">
       <div className="col-auto">
       </div>  
 
   
       <div className="col-auto">

       </div>
       </div>
          <div>
            <br></br>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              </span>
            </div>
          </div>         
        </div>          
      </div>
    
  </div>


  </>
  )
}

export default MisRecetas