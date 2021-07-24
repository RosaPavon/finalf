import React from "react"
import { useState, useEffect} from "react";
import { Avatar,Card} from 'antd';


function Comentarios(){
    var email = localStorage.getItem("emailToken")

    //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 

  //--------------Mostrar usuario--------------
  

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
              <li className="colortext2" key={user._id}>
              <Avatar size={44} src={user.imagen} />  
              <span className="lead">      {user.usuario}</span>    
            </li>               
            )}); 


 //--------------Mostrar comentarios---------

 const [coment, setComent]=useState([])

 
useEffect(()=>{    
    fetch("http://localhost:3001/comentarios/comentariosUsers", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ email:email}),
       })
       .then(res => res.json())
       .then((datos)=>setComent(datos.contenido))
       },[email]) 

     
 let comentarios = coment.map((user, index) => {      
           return ( 
             <>
            <h6 id="color">{user.titulo}</h6>  
            <ul>              
              <li className="colortext2" key={user.index}>
              <Avatar size={34} src={user.imagenComentario} />      
             <span className="lead">{user.usuarioComentario}</span>
             <h6 id="blanco">{user.comentario}</h6>           
              </li>   
              </ul>           

                   </> 
           )});  


  return(
      <>
         
                
        <div className="px-4 py-5 bg-grey space-y-6 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3> 

        <div className="row g-3">              
       <div className="col-auto">
       </div>
       
       <div className="col-auto">       
       <h3 className="text-lg font-medium leading-6 text-gray-900"  >{comentarios}</h3> 
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
      


  </>
  )
}


export default Comentarios