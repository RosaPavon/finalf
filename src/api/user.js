import React from "react"
import { useState, useEffect} from "react";
import jwtDecode from "jwt-decode";
import {getAccessToken,getRefreshToken, logout} from "./auth";


export function GetUsersnow(){
    const [user, setUser] = useState({user: "" });
    
      useEffect(() => {
        checkUserLogin(setUser);
      }, []);    
 
  
  function checkUserLogin(setUser) {
    const accessToken = getAccessToken();  
    if (!accessToken) {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
          logout();
          setUser({
            user: null,
          });
        } 
      } else {
        setUser({
          user: jwtDecode(accessToken)
        });
      }
  }
  console.log(user)

  //------------Mostrar Nombre Cliente--------------
  const [name, setName]=useState([]) 
  

    useEffect(()=>{    
     fetch("http://localhost:3001/usuarios/misdatos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:"diana@gmail.com"}),
        })
        .then(res => res.json())
        .then((datos)=>setName(datos.contenido))
        },[]) 
        

      console.log(name)
}