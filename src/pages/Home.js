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
import texto from "../images/text.png"
import recetas from "../images/recetas.png"
import { useState, useEffect} from "react";
import {Card,  Avatar, Rate } from 'antd';
import {Row, Col, Image, Form, Alert} from "react-bootstrap"
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Recetas from"./Recetas"
import { Popconfirm } from 'antd';


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
const [confirmGuardar, setConfirmGuardar] = useState(false)
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
      }, 3000); 
  
    })},[confirmGuardar]) 

    //boton confirmacion para guardar receta

const text = '¿Quieres guardar esta receta?';

function confirm() {
 setConfirmGuardar(!confirmGuardar);
}


 
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
            <Link to="/logged/home" onClick={() => setTitulo("")}>+ RECETAS</Link>
            <div className="btn-group float-right" role="group" aria-label="Basic outlined example ">
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => guardar(cook) }>Guardar</button>
            </Popconfirm>
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => comentar(cook) }>Comentar</button>
            </div>
         
                   <hr></hr>
                  <div>
                    <Form.Group>
                    
       {feedback.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedback.error ? "danger " : "success"}>
           {feedback.mensaje}
         </Alert>
       )}
       {feedbackGuardar.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbackGuardar.error ? "danger " : "success"}>
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


      //Categorias ampliadas
  let categorias = recetario.map((cook, index)=>{        
        return(
          <Route path={"/logged/home/" + cook.categoria}>
          <div key={index}>  
            <Card 
            cover={
              <>
              <img 
              alt="example"
              src={cook.foto}
              width="50" height="40%"
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
            <Link to="/logged/home">+ RECETAS</Link>
            <div className="btn-group float-right" role="group" aria-label="Basic outlined example ">
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => guardar(cook) }>Guardar</button>
            </Popconfirm>
              <button type="button" className="btn btn-outline-warning float-right" onClick={() => comentar(cook) }>Comentar</button>
            </div>
         
                   <hr></hr>
                  <div>
                  <Form.Group>
                    
                    {feedback.empty ? (
                        <h1> </h1>
                    ) : (
                      <Alert variant={feedback.error ? "danger " : "success"}>
                        {feedback.mensaje}
                      </Alert>
                    )}
                    {feedbackGuardar.empty ? (
                        <h1> </h1>
                    ) : (
                      <Alert variant={feedbackGuardar.error ? "danger " : "success"}>
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
        <Image src={texto} fluid id="secciones" width="530" height="530" />

        <Row id="centrado"> 
        <Col></Col>
        <Col id="izquierda" >
        <div>
        <br></br>
        <br></br>
      <Link to={`/logged/home/Entrantes`}>
      <Avatar size={64} src={entrantes} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/logged/home/Entrantes`}>Entrantes</Link> 
    </div>
    <div>
    <Link to={`/logged/home/Acompañamiento`}>
    <Avatar size={64} src={acompañamiento} /> 
    </Link>
    <br></br>
    <Link id="blancocategoria" to={`/logged/home/Acompañamiento`}>Acompañamiento</Link>  
     </div>
    <div>
    <Link to={`/logged/home/Arroz`}>
      <Avatar size={64} src={arroz} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/logged/home/Arroz`}>Arroz</Link> 
    </div>
    <div>
    <Link to={`/logged/home/Carnes%20y%20estofados`}>
    <Avatar size={64} src={carne} />   
    </Link>      
    <br></br>
    <Link id="blancocategoria" to={`/logged/home/Carnes%20y%20estofados`}>Carne</Link>      
    </div>
    </Col>
    <Col>
    <Image src={ingredients} fluid id="especias" width="350" height="350" /> 
    </Col>
    <Col>
        <div>
        <br></br>
        <br></br>
        <Link to={`/logged/home/Pasta%20y%20Pizzas`}>     
      <Avatar size={64} src={pizza} /> 
      </Link>   
      <br></br>
    <Link id="blancocategoria" to={`/logged/home/Pasta%20y%20Pizzas`}>Pasta</Link>        
    </div>
    <div>
    <Link to={`/logged/home/Pescado%20y%20Mariscos`}>  
    <Avatar size={64} src={pez} />
    </Link>  
    <br></br>
    <Link id="blancocategoria" to={`/logged/home/Pescado%20y%20Mariscos`}>Pescados</Link>    
    </div>
    <div>
    <Link to={`/logged/home/Verduras%20y%20Legumbres`}>      
      <Avatar size={64} src={verduras} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/logged/home/Verduras%20y%20Legumbres`}>Verduras</Link>      
    </div>
    <div>
    <Link to={`/logged/home/Postres%20y%20helados`}>
    <Avatar size={64} src={postre} /> 
    </Link>      
    <br></br>
    <Link id="blancocategoria" to={`/logged/home/Postres%20y%20helados`}>Postres</Link>     
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
    <Col xs={8} md={8}>
   <Route exact path="/logged/home">
      <div className="catalogo">
      <Recetas recetario={recetario}/>
      </div>
      </Route>
      {rutas}
      {categorias}
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



   </div> 
         
  </BrowserRouter>
      
        </>
    )
}

export default Home