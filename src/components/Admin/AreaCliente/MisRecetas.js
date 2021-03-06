import React from "react"
import { Avatar, Rate, Radio } from 'antd';
import { useState, useEffect} from "react";
import {Form, Modal, Alert, Col} from "react-bootstrap"
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


function MisRecetas(){
    var email = localStorage.getItem("emailToken")

  //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 
  //------------Mostrar Receta Cliente--------------
  const [recetasUsuario, setRecetasUsuario]=useState([])

  //------------Mostrar Datos receta--------------
  const [titulo, setTitulo]=useState("")
  const [ingredientes, setIngredientes]=useState("")
  const [pasos, setPasos]=useState("")
  const [imagen, setImagen]=useState("")

  //------------Modificar Datos receta--------------

 const [modfdificult, setModfDificult]=useState("")
 const [value, setValue] = useState(1)
 const [modftitulo, setModfTitulo] = useState("");
 const [modfingredientes, setModfIngredientes] = useState("");
 const [modfreceta, setModfReceta] = useState("");
 const [modffoto, setModfFoto] = useState("");
 const [feedbackReceta, setFeedbackReceta] = useState({ empty: true });

 //---------------Eliinar receta-------------------

 const [feedbackEliminar, setFeedbackEliminar]=useState({ empty: true })


 //Editar receta---------

 const editar = user => {
  setTitulo(user.titulo)
  setIngredientes(user.ingredientes)
  setPasos(user.receta)
  setImagen(user.foto)}

  function modificarReceta() {
    fetch(`${process.env.REACT_APP_API_URL}/crearreceta/editar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  
        name:name[0].usuario,
        email:email, 
        categoria: value, 
        dificult: modfdificult , 
        titulo:titulo,
        modftitulo:modftitulo, 
        ingredientes:modfingredientes,
        receta:modfreceta,
        foto:modffoto          
      }),
    })
      .then((res) => res.json())
      .then(function (datos) {
        setFeedbackReceta(datos)
        setTimeout(() => {
          setFeedbackReceta({ empty: true });
        }, 6000);
        setModfDificult("")
        setValue(1)
        setTitulo("")
        setIngredientes("")
        setPasos("")
        setImagen("")
        setTitulo("")
        setIngredientes("")
        setPasos("")
        setImagen("")
        window.location.reload()
      });
  }

//Mostrar nombre usuario-----------

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

//----------Mostrar las recetas------------

useEffect(()=>{    
     fetch(`${process.env.REACT_APP_API_URL}/crearreceta/misrecetas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:email}),
        })
        .then(res => res.json())
        .then((datos)=>setRecetasUsuario(datos.contenido))
        },[email]) 
      
 let recetas = recetasUsuario.map((user, index) => {      
            return (
              <ul>              
              <li className="colortext2" key={user.index}>
              <Avatar size={114} src={user.foto} />      
              <span className="lead">{user.titulo}</span>
             
              <button 
                className="btn btn-warning btn-sm float-right"
                 onClick={() => editar(user)}
               >
                Editar
              </button>
            </li>  
            </ul>                          
            )}); 
            
  const customIcons = {
    1: <SmileOutlined/>,
    2: <SmileOutlined />,
    3: <MehOutlined />,
    4: <FrownOutlined/>,
    5: <FrownOutlined/>,   }; 


    const changeDif=(value)=>{
       setModfDificult(value)
    }
      
    const onChange = e => {
      setValue(e.target.value);
    };


//Eliminar receta---------


function eliminarReceta() {
  fetch(`${process.env.REACT_APP_API_URL}/crearreceta/eliminar`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({titulo:titulo}),
  })
  .then(res => res.json())
  .then(function (datos) {
    setFeedbackEliminar(datos)
    setTimeout(() => {
    setFeedbackEliminar({ empty: true });
  }, 6000);
  setTitulo("")
  setIngredientes("")
  setPasos("")
  setImagen("")
  window.location.reload()
  });
}

  return(
      <>
         
               
        <div className="px-4 py-5 bg-grey space-y-6 sm:p-6">
        <div className="row g-3">              
      
       <div className="col-auto"> 
       <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3>        
  
       <h3 id="blanco">Mis recetas</h3>

       <h3 className="text-lg font-medium leading-6 text-gray-900"  >{recetas}</h3> 
       <hr></hr>
       <div>
          <h3 id="blanco">Modifica tu receta</h3>
          <h5 id="blanco">Categor??a</h5>
        <form className="row g-3 needs-validation" noValidate>
      
        
      <Radio.Group onChange={onChange} value={value} >      
      
      <Col >
      <Radio value={"Entrantes"} className="blancos">Entrantes  </Radio>
      <Radio value={"Acompa??amiento"} className="blancos">Acompa??amiento</Radio>
      <Radio value={"Arroz"} className="blancos">Arroz </Radio>           
      <Radio value={"Carnes y estofados"} className="blancos">Carnes y estofados</Radio>
      </Col>
      <Col>
      <Radio value={"Pasta y Pizzas"} className="blancos">Pasta y Pizzas</Radio>     
      <Radio value={"Verduras y Legumbres"} className="blancos">Verduras y Legumbres</Radio>
      <Radio value={"Pescado y Mariscos"} className="blancos">Pescado y Mariscos</Radio>
      <Radio value={"Postres y helados"} className="blancos">Postres y helados</Radio>    
      
     </Col>
    </Radio.Group>
  
  </form>
  </div>
  <br></br>
  <h5 id="blanco">Dificultad</h5>
    <span id="blanco">Baja  <Rate defaultValue={3} onChange={changeDif} character={({ index }) => customIcons[index + 1]} />  Alta</span>

  <br></br>
  <br></br>
          
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <h5 id="blanco">T??tulo</h5>
  <Form.Control type="text" placeholder={`${titulo}`}   onChange={(e) => setModfTitulo(e.target.value)}
    value={modftitulo} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  >
  <h5 id="blanco">Ingredientes</h5>
  <Form.Control as="textarea" rows={3}  placeholder={`${ingredientes}`}  onChange={(e) => setModfIngredientes(e.target.value)}
    value={modfingredientes}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
  <h5 id="blanco">Paso a paso</h5>
  <Form.Control as="textarea" rows={6} placeholder={`${pasos}`}onChange={(e) =>  setModfReceta(e.target.value)}
    value={modfreceta}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <h5 id="blanco">Cambia la imagen</h5>
  <Form.Control type="text" placeholder={`${imagen}`}  onChange={(e) => setModfFoto(e.target.value)}
    value={modffoto}/>      
  </Form.Group>
  </Form>
   <Modal.Footer>
      <Form.Group>
       {feedbackReceta.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbackReceta.logged ? "danger " : "success"}>
           {feedbackReceta.mensaje}
         </Alert>
       )}
     </Form.Group>
      <button 
                className="btn btn-warning btn-sm float-right"
                onClick={() => modificarReceta()}>
                Editar
              </button>
              <button 
className="btn btn-danger btn-sm float-right mx-2"
 onClick={() => eliminarReceta()}
>
Eliminar
</button> 
<Form.Group>
       {feedbackEliminar.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbackEliminar.logged ? "danger " : "success"}>
           {feedbackEliminar.mensaje}
         </Alert>
       )}
     </Form.Group>              
    </Modal.Footer>     
      </div>
      </div>          
      
    
  </div>


  </>
  )
}

export default MisRecetas
