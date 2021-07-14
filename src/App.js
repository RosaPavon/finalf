import "./App.css";
import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './config/routes'
import AuthProvider from "./providers/AuthProvider";


function App() {

  
  return (
    <>
    <AuthProvider >
    <BrowserRouter>
    <Switch>
      {/* Este es el bucle que nos va a renderizar todas las rutas que acabemos creando */}
      {routes.map((route, index)=>(
        <RouteWithSubRoutes key={index} {...route}/>

      ))}
    </Switch>
    </BrowserRouter> 
    </AuthProvider>
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

