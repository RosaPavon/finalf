import React from "react"
import { Avatar} from 'antd';
import { useState, useEffect} from "react";


function RecetasGuardadas(){
    var email = localStorage.getItem("emailToken")

    //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 
  
  useEffect(()=>{    
     fetch(`${process.env.REACT_APP_API_URL}/usuarios/misdatos`, {
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

 //-----------------Mostrar Recetas guardadas------------    
 
 const [guardada, setGuardada]=useState([])
 const [masinfo, setMasinfo] = useState(false)



 const ampliar = user => {  
  setMasinfo(!masinfo)
   }


useEffect(()=>{    
  fetch(`${process.env.REACT_APP_API_URL}/admin/recetasguardadas`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ email:email}),
     })
     .then(res => res.json())
     .then((datos)=>setGuardada(datos.contenido))
     },[email]) 
   
let recetaGuardadas = guardada.map((user, index) => {      
         return (
           <>    
            <ul>              
              <li className="colortext2" key={user.index}>
              <Avatar size={114} src={user.foto} />      
              <span className="lead">{user.titulo}</span>
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => ampliar(user) }>Más info</button>
            </li>  
            {
              masinfo ? (
                <>
                <div className="mb-3">
                <br></br>    
                <span className="lead" id="blanco2">{user.ingredientes}</span>
                <hr></hr>
                <span className="lead" id="blanco2">{user.receta}</span>                       
                </div>
                </>
              ) : (
                <p> </p>
              )
            }
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
     
        
     <div className="catalogo">  
     <h3 className="text-lg font-medium leading-6 text-gray-900">{recetaGuardadas}</h3>
     
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

export default RecetasGuardadas