import { Form, Button, Row, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";


function CrearRecetas() {
    const [titulo, setTitulo] = useState("");
    const [receta, setReceta] = useState("");
    const [feedback, setFeedback] = useState({ empty: true });

    function enviarReceta() {
        fetch("http://localhost:3001/crearreceta/crearNuevaReceta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ titulo: titulo, receta: receta}),
        })
          .then((res) => res.json())
          .then(function (datos) {
            setFeedback(datos)
            setTimeout(() => {
            setFeedback({ empty: true });
            }, 6000);
            setTitulo("")
            setReceta("")          
            });        
      }

      //____________Mostrar recetas_______________

      
      const [data, setData]=useState([]) 
    useEffect(()=>{    
    fetch("http://localhost:3001/crearreceta/misrecetas").then(res => res.json()).then((datos)=>setData(datos.results))
    },[data])

  let recetario = data
 

    return (
      <>
     <Row>        
        <Col>
          <Form>
            <h2>Nuestras recetas</h2>
            <Form.Group controlId="formBasicTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pon un título resultón"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo} />
            </Form.Group>
            <Form.Group controlId="formBasicTitulo">
              <Form.Label>Título</Form.Label>
              <textarea className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="5"
              type="text"
              placeholder="Pon paso a paso la receta"                
              onChange={(e) => setReceta(e.target.value)}
              value={receta}></textarea>
            
            </Form.Group>
                 
            <Button variant="primary" 
            onClick={() => enviarReceta()}>
              Enviar
            </Button>
           
            <Form.Group>
              {feedback.empty ? (
                <h1> </h1>
              ) : (
                <Alert variant={feedback.logged ? "danger " : "success"}>
                  {feedback.mensaje}
                </Alert>
              )}
            </Form.Group>
          </Form>
         </Col>
         </Row>

         <h1>Recetas</h1>
     <ul>
     <div className="catalogo">{recetario}</div>
   </ul>
        
      


    </>
    );
}




export default CrearRecetas;