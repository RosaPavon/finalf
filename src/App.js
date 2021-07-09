import { BrowserRouter, Route } from 'react-router-dom'
import "./App.css";
import Login from './Login'
import Registro from './Registro'
import AreaCliente from './AreaCliente'
import Cabecera from './Cabecera'

import { useState } from "react";



function App() {

  const [usuario, setUsuario] = useState ({})//aqui tenemos guardado el usuario que hemos recibido
  const [usuarioEmail, setUsuarioEmail] = useState("")


  return (
    <>
    <BrowserRouter>
    <Cabecera />
    <Route path="/login">
    <Login usuario={usuario} setUsuario={setUsuario}  usuarioEmail={usuarioEmail} setUsuarioEmail={setUsuarioEmail}/> {/* enviamos el usuario y la capacidad de modificarlo */}
    </Route>
    <Route path="/registrate">
    <Registro />
    </Route>
    <Route path="/areacliente">
    <AreaCliente usuario={usuario} setUsuario={setUsuario}/>
    </Route>
    </BrowserRouter>
    </>
  )
}

export default App;