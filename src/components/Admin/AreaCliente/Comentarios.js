import React from "react"
import { useState, useEffect} from "react";
import { Avatar} from 'antd';


function Comentarios(){
    var email = localStorage.getItem("emailToken")

    //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 

  //--------------Mostrar comentarios--------------
  const [coment, setComent]=useState([])

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


 //--------------Mostrar comentarios---------
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

       console.log(coment) 
     
 let comentarios = coment.map((user, index) => {      
           return (
             <ul>
                 <h6>{user.titulo}</h6>              
             <li className="list-group-item" key={user.index}>
             <Avatar size={14} src={user.imagenComentario} />      
             <span className="lead">{user.usuarioComentario}</span>
             <p>{user.comentario}</p>
         
           </li>  
           </ul>                          
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
      </div>
    
  </div>


  </>
  )
}

/*     var email = localStorage.getItem("emailToken")
 const [comentarioUsuario, setComentarioUsuario]=useState([])
console.log(props.name.usuario) */


 
  /* return( */
     /*  <> */
{/*  <h3 className="text-lg font-medium leading-6 text-gray-900"  >{comentarios}</h3> */}  



{/*   </>
  )
} */}

export default Comentarios