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
import {  Avatar } from 'antd';
import {Row, Col, Image} from "react-bootstrap"
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Recetas from"./Recetas"



function Home(){
  //------------Mostrar Recetas --------------
 const [recetario, setRecetario]=useState([]) 


   
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
                <h2>{cook.titulo}</h2>
                <img src={cook.foto} alt={cook.titulo}/>
                <p>{cook.receta}</p>
                <Link to="/logged/home">+ recetas</Link>
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
      


   </div>       
  </BrowserRouter>
      
        </>
    )
}

export default Home