import React from "react"
import {Row, Col, Image} from "react-bootstrap"
import {Route} from 'react-router-dom'
import Receta from"./Recetas/Receta"
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useState, useEffect} from "react";
import {Card, Rate } from 'antd';
import {Link,BrowserRouter  } from 'react-router-dom'
import categarroz from "../../../images/categarroz.png"

function Arroz(){

  
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
            <Route path={"/logged/home/arroz/" + cook.titulo}>
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
              <Link to="/logged/home/arroz">+ recetas</Link>
             
         </Card>
          </div>
            </Route>
         )
        })   
    
 
      return(
          <>
    <BrowserRouter>
          <div id="homehome">
        <Image src={categarroz} fluid id="secciones" width="350" height="350" />
  
      <Row>
      <Col xs={2} md={2}>      
      </Col>
      <Col xs={10} md={8}>
     <Route exact path="/logged/home/arroz">
        <div className="catalogo">
        <Receta recetario={recetario}/>
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

export default Arroz