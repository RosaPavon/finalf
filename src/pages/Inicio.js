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
import {Row, Col, Image } from "react-bootstrap"
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Recetasnolog from"./Recetasnolog"
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';




function Inicio(){
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
 

  //------------Mostrar Recetas --------------
 const [recetario, setRecetario]=useState([]) 

 const customIcons = {
  1: <SmileOutlined/>,
  2: <SmileOutlined />,
  3: <MehOutlined />,
  4: <FrownOutlined/>,
  5: <FrownOutlined/>,
 };

 //------------Receta ampliada----------------

  useEffect(()=>{    
    fetch(`${process.env.REACT_APP_API_URL}/crearreceta/recetario`, {
         headers: {
           "Content-Type": "application/json",
         }
       })
       .then(res => res.json())
       .then((datos)=>setRecetario(datos.contenido))
       },[])     
      
       
let rutas = recetario.map((cook, index)=>{        
        return(
          <Route path={"/" + cook.titulo}>
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
            <Link to="/">+ RECETAS</Link>
            
       </Card>
        </div>
          </Route>
        )
      })


      //Categorias ampliadas
  let categorias = recetario.map((cook, index)=>{        
        return(
          <Route path={"/" + cook.categoria}>
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
            <Link to="/">+ RECETAS</Link>
           
            
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
      <Link to={`/Entrantes`}>
      <Avatar size={64} src={entrantes} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/Entrantes`}>Entrantes</Link> 
    </div>
    <div>
    <Link to={`/Acompañamiento`}>
    <Avatar size={64} src={acompañamiento} /> 
    </Link>
    <br></br>
    <Link id="blancocategoria" to={`/Acompañamiento`}>Acompañamiento</Link>  
     </div>
    <div>
    <Link to={`/Arroz`}>
      <Avatar size={64} src={arroz} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/Arroz`}>Arroz</Link> 
    </div>
    <div>
    <Link to={`/Carnes%20y%20estofados`}>
    <Avatar size={64} src={carne} />   
    </Link>      
    <br></br>
    <Link id="blancocategoria" to={`/Carnes%20y%20estofados`}>Carne</Link>      
    </div>
    </Col>
    <Col>
    <Image src={ingredients} fluid id="especias" width="350" height="350" /> 
    </Col>
    <Col>
        <div>
        <br></br>
        <br></br>
        <Link to={`/Pasta%20y%20Pizzas`}>     
      <Avatar size={64} src={pizza} /> 
      </Link>   
      <br></br>
    <Link id="blancocategoria" to={`/Pasta%20y%20Pizzas`}>Pasta</Link>        
    </div>
    <div>
    <Link to={`/Pescado%20y%20Mariscos`}>  
    <Avatar size={64} src={pez} />
    </Link>  
    <br></br>
    <Link id="blancocategoria" to={`/Pescado%20y%20Mariscos`}>Pescados</Link>    
    </div>
    <div>
    <Link to={`/Verduras%20y%20Legumbres`}>      
      <Avatar size={64} src={verduras} /> 
      </Link> 
      <br></br>
    <Link id="blancocategoria" to={`/Verduras%20y%20Legumbres`}>Verduras</Link>      
    </div>
    <div>
    <Link to={`/Postres%20y%20helados`}>
    <Avatar size={64} src={postre} /> 
    </Link>      
    <br></br>
    <Link id="blancocategoria" to={`/Postres%20y%20helados`}>Postres</Link>     
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
   <Route exact path="/">
      <div className="catalogo">
      <Recetasnolog recetario={recetario}/>
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

export default Inicio