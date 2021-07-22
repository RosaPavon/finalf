import React from "react"
import cookandcook from "../images/cookandcook.png"
import categoriasw from "../images/categoriasw.png"
import ingredients from "../images/ingredients.png"
import arroz from "../images/arroz.png"
import acompañamiento from "../images/acompañamiento.png"
import carne from "../images/carne.png"
import entrantes from "../images/entrantes.png"
import pez from "../images/pez.png"
import pizza from "../images/pizza.png"
import postre from "../images/postre.png"
import verduras from "../images/verduras.png"
import text from "../images/text.png"
import recetas from "../images/recetas.png"
import { useState, useEffect} from "react";
import {Card,  Avatar, Rate } from 'antd';
import {Row, Col, Image, Form, Alert} from "react-bootstrap"
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Recetas from"./Recetas"
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';




function Home(){
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
 

  //------------Mostrar Recetas --------------
 const [recetario, setRecetario]=useState([]) 

 const customIcons = {
  1: <SmileOutlined/>,
  2: <SmileOutlined />,
  3: <MehOutlined />,
  4: <FrownOutlined/>,
  5: <FrownOutlined/>,
 };

 //---------------Comentarios--------------

 const [comentario, setComentario] = useState(false)
 const [newComent, setNewcoment] = useState("")
 const [titulo, setTitulo] = useState("")
 const [feedback, setFeedback] = useState({ empty: true });


 const comentar = (props) => {  
  setComentario(!comentario)
  setTitulo(props)
   }

function nuevoComentario() {
  fetch("http://localhost:3001/comentarios/nuevoComentario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      comentario:newComent, 
      imagenComentario:name[0].imagen, 
      usuarioComentario:name[0].usuario,
      titulo:titulo.titulo,
      email:titulo.email        
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      setFeedback(datos)
      setTimeout(() => {
      setFeedback({ empty: true });
      }, 6000); 
      setNewcoment("")
      setComentario(!comentario)
      setTitulo("")
  
    });  
  } 

//-------------Guardar receta---------------
const [recetaGuardada, setRecetaGuardada] = useState("")
const [feedbackGuardar, setFeedbackGuardar] = useState({ empty: true });



const guardar = (props) => {  
  setRecetaGuardada(props)
  }

  useEffect(()=>{    
    fetch("http://localhost:3001/admin/guardarReceta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email:email, 
      categoria: recetaGuardada.categoria, 
      dificultad: recetaGuardada.dificultad , 
      titulo:recetaGuardada.titulo,                   
      ingredientes:recetaGuardada.ingredientes,
      receta:recetaGuardada.receta,
      foto:recetaGuardada.foto      
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      setFeedbackGuardar(datos)
      setTimeout(() => {
      setFeedbackGuardar({ empty: true });
      }, 6000); 
  
    })},[recetaGuardada, email]) 


 
 //------------Receta ampliada----------------

  useEffect(()=>{    
    fetch("http://localhost:3001/crearreceta/recetario", {
         headers: {
           "Content-Type": "application/json",
         }
       })
       .then(res => res.json())
       .then((datos)=>setRecetario(datos.contenido))
       },[])       
      let rutas = recetario.map((cook, index)=>{        
        return(
          <Route path={"/logged/home/" + cook.titulo}>
          <div key={index}>  
            <Card 
            cover={
              <>
              <img 
              alt="example"
              src={cook.foto}
              width="10" height="600"
              id="card"
              />
              </>
            }
           >
            <h3>{cook.titulo}</h3>
            <h5>Receta realizada por: {cook.usuario}</h5>
            <h6>Categoría: {cook.categoria}</h6>
            <span>Dificultad: Baja  <Rate defaultValue={cook.dificultad}  character={({ index }) => customIcons[index + 1]} />  Alta</span>

            <hr></hr>

            <h5>Ingredientes: {cook.ingredientes}</h5>
            <hr></hr>
            <h5>Paso a paso</h5>
            <p>{cook.receta}</p>
            <Link to="/logged/home" onClick={() => setTitulo("")}>+ recetas</Link>
            <div className="btn-group float-right" role="group" aria-label="Basic outlined example ">
              <button type="button" className="btn btn-outline-warning float-right">♥</button>
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => guardar(cook) }>Guardar</button>
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => comentar(cook) }>Comentar</button>
            </div>
         
                   <hr></hr>
                  <div>
                    <Form.Group>
                    
       {feedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedback.logged ? "danger " : "success"}>
           {feedback.mensaje}
         </Alert>
       )}
       {feedbackGuardar.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbackGuardar.logged ? "danger " : "success"}>
           {feedbackGuardar.mensaje}
         </Alert>
       )}
     </Form.Group>   
     </div>{
              comentario ? (
                <>
                <div className="mb-3">
                  <p><Avatar size={44} src={name[0].imagen} /> {name[0].usuario}</p>
                  <textarea className="form-control" id="FormControlTextarea1" rows="3" onChange={(e) => setNewcoment(e.target.value)}
                      value={newComent}></textarea>
                  <br></br>
                  <button 
                      className="btn btn-warning btn-sm float-right"                      
                      onClick={() => nuevoComentario()}
                      >Comentar
                    </button>                                     
                </div>
                </>
              ) : (
                <p> </p>
              )
            }
            
       </Card>
        </div>
          </Route>
        )
      })

  
  
  
  

    return(
        <>
  <BrowserRouter>
        <div id="homehome">
        <br></br>
        <Image src={cookandcook} fluid  id="secciones"/>
        <br></br>
        <br></br>
        <Image src={categoriasw} fluid id="secciones" width="350" height="350" />
        <Image src={text} fluid id="secciones" width="530" height="530" />
        <Row id="centrado"> 
        <Col></Col>
        <Col id="izquierda" >
        <div>
        <br></br>
      <Avatar size={64} src={entrantes} /> 
      <h5 id="blanco">Entrantes</h5>  
    </div>
    <div>
    <Avatar size={64} src={acompañamiento} /> 
    <h5 id="blanco">Acompañamiento</h5>  
     </div>
    <div>
      <Avatar size={64} src={arroz} /> 
      <h5 id="blanco">Arroz</h5>  
    </div>
    <div>
    <Avatar size={64} src={carne} />   
    <h5 id="blanco">Carnes</h5>      
    </div>
    </Col>
    <Col>
    <Image src={ingredients} fluid id="especias" width="350" height="350" /> 
    </Col>
    <Col>
        <div>
        <br></br>
      <Avatar size={64} src={pizza} /> 
      <h5 id="blanco">Pasta</h5>       
    </div>
    <div>
    <Avatar size={64} src={pez} />
    <h5 id="blanco">Pescados</h5>       
    </div>
    <div>
      <Avatar size={64} src={verduras} /> 
      <h5 id="blanco">Verduras</h5>       
    </div>
    <div>
    <Avatar size={64} src={postre} />  
    <h5 id="blanco">Postres</h5>      
    </div>
    </Col>
    <Col></Col>
    </Row>
    <br></br>
    <br></br>
    <Image src={recetas} fluid id="secciones" width="350" height="350" />


  <Row>
    <Col xs={2} md={2}>      
    </Col>
    <Col xs={10} md={8}>
   <Route exact path="/logged/home">
      <div className="catalogo">
      <Recetas recetario={recetario}/>
      </div>
      </Route>
      {rutas}
      </Col>
    <Col xs={4} md={2}>
      
    </Col>
  </Row> 
      
<br></br>
<br></br>

<br></br>

<br></br>

<br></br>

<br></br>

<br></br>

<br></br>
<br></br>

<br></br>

<br></br>

<br></br>



   </div>       
  </BrowserRouter>
      
        </>
    )
}

export default Home