
import {ACCESS_TOKEN, REFRESH_TOKEN, EMAILTOKEN } from '../utils/constans'
import jwtDecode from 'jwt-decode'


export function getAccessToken(){
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    if(!accessToken || accessToken === "null"){
        return null
    }
    return willExpiredToken(accessToken) ? null : accessToken //asi veo si ha expirado o no
  
}

export function getRefreshToken(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)
    if(!refreshToken || refreshToken === "null"){
        return null
    }
    return willExpiredToken(refreshToken) ? null : refreshToken //asi veo si ha expirado o no
  
}

function willExpiredToken(token){
    const seconds=60
    const metaToken= jwtDecode(token)
    const {exp} = metaToken
    //const expCaducado = exp -10000000
    const now= (Date.now()+ seconds)/1000//la fecha de hoy

    return now > exp//si es mayor quiere decir que ha expirado y dara true
}

export function logout(){
    localStorage.removeItem(EMAILTOKEN)
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
  
}

