
import React from "react"
import { Tabs } from 'antd';
import {Container} from "react-bootstrap"
import ModificarCliente from "../../components/Admin/AreaCliente/ModificarCliente"
import NuevaReceta from "../../components/Admin/AreaCliente/NuevaReceta" 
import MisRecetas from "../../components/Admin/AreaCliente/MisRecetas" 
import RecetasGuardadas from "../../components/Admin/AreaCliente/RecetasGuardadas" 

  
function Admin(){ 

    const { TabPane } = Tabs;

    return(
        <>
        <h2>Estamos en Admin</h2> 
        <Container>
        
         <Tabs tabPosition={"left"}>
          <TabPane tab="Usuario" key="1">
          <ModificarCliente/>
          </TabPane>
          <TabPane tab="Mis Recetas" key="2">
            <MisRecetas/>
          </TabPane>
          <TabPane tab="Nueva receta" key="3">
            <NuevaReceta/>
          </TabPane>
          <TabPane tab="Recetas guardadas" key="4">
            <RecetasGuardadas/>
          </TabPane>
        </Tabs> 
      
        </Container>   
        </>
        )
}

export default Admin