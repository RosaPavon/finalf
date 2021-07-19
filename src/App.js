import "./App.css";
import React from "react"
import { useState, useEffect} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import jwtDecode from "jwt-decode";
import {getAccessToken, getRefreshToken,logout} from "./api/auth.js"
import Cabeceranologin from "./components/Admin/Cabecera/Cabeceranologin";
import Signin from "./pages/Admin/Signin"
import Inicio from "./pages/Inicio"
import Admin from "./pages/Admin/Admin";
import Cabecera from "./components/Admin/Cabecera/Cabecera";
import Home from "./pages/Home";


function App() {

  const accessToken = getAccessToken();

  const [user, setUser] = useState({    
    user: null,
    login:false
  })

  useEffect(()=>{ 
  if (!accessToken) {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
        logout();
        setUser({
          user: null,
          login:false
        });
      } 
    } else {
      setUser({
        user: jwtDecode(accessToken),
        login:true
      });
    }},[accessToken])

  if(!user.login){
    return (
      <>
      <BrowserRouter>
      <Cabeceranologin/>
      <Route exact path="/logged/login">
      <Signin/>
      </Route>
      <Route exact path="/">
      <Inicio/>
      </Route>
      </BrowserRouter>
      </>
    )

  }else{
  return (
    <>
     <BrowserRouter>
      <Cabecera/>
      <Route exact path="/logged/user">
      <Admin/>
      </Route>
      <Route exact path="/logged/home">
      <Home/>
      </Route> 
      </BrowserRouter>    
    </>
  )}
}


export default App;

