import React from "react"
import { Route, Switch } from "react-router"
import {Container, Row} from "react-bootstrap"
import Cabecera from "../components/Admin/Cabecera"


function LayoutBasic(props){
    const { routes } = props
    return(
        <>
        <Cabecera/>
        <Container>
            <Row>
                <LoadRoutesBasic routes={routes} />
            </Row>
            <Row>
                .......Footer......
            </Row>
        </Container>
        </>
    )
}

function LoadRoutesBasic({routes}){
    //console.log(routes)
    return (
        <Switch>
            {routes.map((route, index)=>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}//aqui si ponemos component porque solo se va a renderizar uno, no mediante rutas
            />
            ))}
        </Switch>

    )  
    
}

export default LayoutBasic