import "./App.css";
import React from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import Inicio from "./pages/Inicio"

function App () {

    return (
      <>
      <BrowserRouter>
      <Route exact path="/">
      <Inicio/>
      </Route>
      </BrowserRouter>
      </>
    )

}
export default App;

