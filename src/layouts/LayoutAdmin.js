import React from "react"
import { Route, Switch } from "react-router"
import {Container, Row} from "react-bootstrap"
import Cabecera from "../components/Admin/Cabecera"
import AdminSingnin from '../pages/Admin/Signin'
import { Redirect } from "react-router-dom"



function LayoutAdmin(props){
    //console.log(props)
    const { routes } = props
    
    const user=null

    if (!user){
        return(
            <>
            <Route path="/logged/login" component={AdminSingnin}/>
            <Redirect to="/logged/login"/>
            </>
        )


    }
    //console.log(props)
    return(
        <>
        <Cabecera/>
        <Container>
            <Row>
                <LoadRoutes routes={routes} />
            </Row>
            <Row>
                .......Footer......
            </Row>
        </Container>
       </>
    )
}

function LoadRoutes({routes}){
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

export default LayoutAdmin