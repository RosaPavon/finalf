import React from "react"
import { Route } from "react-router"
import {Container, Nav, Row} from "react-bootstrap"

function LayoutBasic(props){
    const { routes } = props
    return(
        <Container>
        <h2>Menu Sider basic</h2>
        <Container>
               <Nav className="justify-content-center">
              <Nav.Item>
              <Nav>Home</Nav>
              </Nav.Item>
              </Nav>
            <Row>
                <LoadRoutersBasic routes={routes} />
            </Row>
            <Row>
                .......Footer......
            </Row>
        </Container>
        </Container>
    )
}

function LoadRoutersBasic({routes}){
    //console.log(routes)
    return routes.map((route, index)=>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}//aqui si ponemos component porque solo se va a renderizar uno, no mediante rutas
            />
    ))
    
}

export default LayoutBasic