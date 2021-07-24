
import React from "react"
import { Tabs } from 'antd';
import {Container} from "react-bootstrap"
import ModificarCliente from "../../components/Admin/AreaCliente/ModificarCliente"
import NuevaReceta from "../../components/Admin/AreaCliente/NuevaReceta" 
import MisRecetas from "../../components/Admin/AreaCliente/MisRecetas" 
import RecetasGuardadas from "../../components/Admin/AreaCliente/RecetasGuardadas" 
import Comentarios from "../../components/Admin/AreaCliente/Comentarios" 


  
function Admin(){ 

    const { TabPane } = Tabs;

    return(
        <>
        <div id="homeclient">
        <Container >
        
         <Tabs tabPosition={"left"} id="blanco" >
          <TabPane tab="Usuario" key="1">
          <ModificarCliente />
          </TabPane>
          <TabPane tab="Mis Recetas" key="2" >
            <MisRecetas/>
          </TabPane>
          <TabPane tab="Nueva receta" key="3">
            <NuevaReceta/>
          </TabPane>
          <TabPane tab="Recetas guardadas" key="4">
            <RecetasGuardadas/>
          </TabPane>
          <TabPane tab="Comentarios" key="5">
            <Comentarios/>
          </TabPane>
        </Tabs> 
      
        </Container>  
        </div> 
        </>
        )
}

export default Admin