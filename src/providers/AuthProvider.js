
import React, { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import {
  getAccessToken,
  getRefreshToken,
  logout
  
} from "../api/auth";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;//children es toda la web

  const [user, setUser] = useState({    
    user: null,
    isLoading: true
  });


  
  useEffect(() => {
    checkUserLogin(setUser);
  }, []);
  

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function checkUserLogin(setUser) {
  const accessToken = getAccessToken();

  if (!accessToken) {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
        logout();
        setUser({
          user: null,
          isLoading: false
        });
      } 
    } else {
      setUser({
        isLoading: false,
        user: jwtDecode(accessToken)
      });
    }
}