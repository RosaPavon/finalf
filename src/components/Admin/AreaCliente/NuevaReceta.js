import React from "react"
import { Avatar} from 'antd';
import { useState, useEffect} from "react";
import {Form, Button, Modal, Alert} from "react-bootstrap"
import { Rate, Radio } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

function NuevaReceta(){
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
              <span className="lead"> {user.usuario}</span>    
            </li>              
            )}); 

 //----------------Crear receta---------------
 const [dificult, setDificult]=useState("")
 const [value, setValue] = useState(1)
 const [titulo, setTitulo] = useState("");
 const [ingredientes, setIngredientes] = useState("");
 const [receta, setReceta] = useState("");
 const [foto, setFoto] = useState("");
 const [feedbackReceta, setFeedbackReceta] = useState({ empty: true });
 
  const customIcons = {
    1: <SmileOutlined/>,
    2: <SmileOutlined />,
    3: <MehOutlined />,
    4: <FrownOutlined/>,
    5: <FrownOutlined/>,
   };

    const changeDif=(value)=>{
       setDificult(value)
    }
      
    const onChange = e => {
      setValue(e.target.value);
    };

    function nuevaReceta() {
      fetch("http://localhost:3001/crearreceta/crearNuevaReceta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          name:name[0].usuario,
          email:email, 
          categoria: value, 
          dificult: dificult , 
          titulo:titulo, 
          ingredientes:ingredientes,
          receta:receta,
          foto:foto          
        }),
      })
        .then((res) => res.json())
        .then(function (datos) {
          setFeedbackReceta(datos)
          setTimeout(() => {
            setFeedbackReceta({ empty: true });
          }, 6000);
          setDificult("")
          setValue(1)
          setTitulo("")
          setIngredientes("")
          setReceta("")
          setFoto("")
          window.location.reload()
        });      
    }
  
  return(
      <>
        <h3 className="text-lg font-medium leading-6 text-gray-900"  >{nombreUsuario}</h3> 
        <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">            
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <h3>Crea tu receta</h3>
          <h5>Categoría</h5>
        <form className="row g-3 needs-validation" noValidate>
        
      <Radio.Group onChange={onChange} value={value}>      
      
      <Radio value={"Entrantes"}>Entrantes</Radio>
      <Radio value={"Acompañamiento"}>Acompañamiento</Radio>
      <Radio value={"Arroz"}>Arroz </Radio>
           
      <Radio value={"Carnes y estofados"}>Carnes y estofados</Radio>
      <Radio value={"Pasta y Pizzas"}>Pasta y Pizzas</Radio>
     
      <Radio value={"Verduras y Legumbres"}>Verduras y Legumbres</Radio>
      <Radio value={"Pescado y Mariscos"}>Pescado y Mariscos</Radio>
      <Radio value={"Postres y helados"}>Postres y helados</Radio>    
     
    </Radio.Group>  
  
  </form>
  </div>
  <br></br>
  <h5>Dificultad</h5>
    <span>Baja  <Rate defaultValue={3} onChange={changeDif} character={({ index }) => customIcons[index + 1]} />  Alta</span>

  <br></br>
  <br></br>
          
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <h5>Título</h5>
  <Form.Control type="text" placeholder="Pon un título resultón"  onChange={(e) => setTitulo(e.target.value)}
    value={titulo}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  >
  <h5>Ingredientes</h5>
  <Form.Control as="textarea" rows={3}  onChange={(e) => setIngredientes(e.target.value)}placeholder={`ejemplo:\n-100g harina \n-2 claras de huevo \n-150g de carne`}
    value={ingredientes} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
  <h5>Paso a paso</h5>
  <Form.Control as="textarea" rows={6}  onChange={(e) => setReceta(e.target.value)}
  placeholder={`ejemplo:\nPaso 1->prepara los ingredientes \nPaso 2-> precalienta el horno a 180º\nPaso 3->Corta la cebolla y los ajos\nPaso 4->pon el agua a hervir\nPaso 5->añade sal y aceite al agua`}
    value={receta} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
  <h5>Pon una imagen</h5>
  <Form.Control type="text" placeholder="www.ejemploimagen.es"  onChange={(e) => setFoto(e.target.value)}
    value={foto}/>
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
     <Button variant="primary" 
     onClick={() => nuevaReceta()}>
        Crear
     </Button>               
    </Modal.Footer>              
        </div>          
      </div>    
  </div> 
  </>
  )
}

export default NuevaReceta