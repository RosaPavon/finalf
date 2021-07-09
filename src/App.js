import "./App.css";
import "./App.scss";
import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './config/routes'

/* import Login from './Login'
import Registro from './Registro'
import AreaCliente from './AreaCliente'
import Cabecera from './Cabecera' */


function App() {

  //const [usuario, setUsuario] = useState ({})//aqui tenemos guardado el usuario que hemos recibido
/*   const [usuarioEmail, setUsuarioEmail] = useState("")//aqui tenemos el email cuando se logen */


  return (
    <>
    <BrowserRouter>
    <Switch>
      {/* Este es el bucle que nos va a renderizar todas las rutas que acabemos creando */}
      {routes.map((route, index)=>(
        <RouteWithSubRoutes key={index} {...route}/>

      ))}
    </Switch>
    </BrowserRouter> 
    </>
  )
}

function RouteWithSubRoutes(route){
  //console.log(route)
  return(
    <Route
    path={route.path}
    exact={route.exact}
    /* Ahora ponemos render en vez de component para que pueda redenrizar varias cosas */
    render={props => <route.component  routes={route.router} {...props}/>}
    />
  )
}

export default App;

