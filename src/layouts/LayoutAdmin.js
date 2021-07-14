import React from "react"
import { Route, Switch } from "react-router"
import {Container, Row} from "react-bootstrap"
import Cabecera from "../components/Admin/Cabecera/Cabecera"
import Cabeceranologin from "../components/Admin/Cabecera/Cabeceranologin"
import AdminSingnin from '../pages/Admin/Signin'
import { Redirect } from "react-router-dom"
import CrearContexto from "../hooks/useAuth"


function LayoutAdmin(props){
    //console.log(props)
    const { routes } = props
   
    const {user} = CrearContexto();
    //console.log(user)

    if (!user){
        return(
            <>
            <Cabeceranologin/>
            <Route path="/logged/login" component={AdminSingnin}/>
            <Redirect to="/logged/login"/>
            </>
        )    }

    if(user){
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
    return null
    
  
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