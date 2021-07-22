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
import Acompañamiento from "./components/Admin/Paginas/Acompañamiento"
import Arroz from "./components/Admin/Paginas/Arroz"
import Carnes from "./components/Admin/Paginas/Carnes"
import Entrantes from "./components/Admin/Paginas/Entrantes"
import Pasta from "./components/Admin/Paginas/Pasta"
import Pescado from "./components/Admin/Paginas/Pescado"
import Postres from "./components/Admin/Paginas/Postres"
import Verduras from "./components/Admin/Paginas/Verduras"



function App () {
  var email = localStorage.getItem("emailToken")

  //------------Mostrar Nombre Cliente--------------
const [name, setName]=useState({}) 

  useEffect(()=>{    
   fetch("http://localhost:3001/usuarios/misdatos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email}),
      })
      .then(res => res.json())
      .then((datos)=>setName(datos.contenido))
      },[email]) 
    


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
      <Route exact path="/logged/home/acompañamiento">
      <Acompañamiento/>
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
      <Home name={name}/>
      </Route> 
      <Route exact path="/logged/home/arroz">
      <Arroz/>
      </Route>
      </BrowserRouter>    
    </>
  )}
}


export default App;

