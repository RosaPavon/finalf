
import React from "react"
import { Tabs } from 'antd';
import {Container} from "react-bootstrap"
import ModificarCliente from "../../components/Admin/AreaCliente/ModificarCliente"

 
  
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
            Content of Tab 2
          </TabPane>
          <TabPane tab="Nueva receta" key="3">
            Content of Tab 3
          </TabPane>
          <TabPane tab="Recetas guardadas" key="4">
            Content of Tab 4
          </TabPane>
        </Tabs> 
      
        </Container>   
        </>
        )
}

export default Admin