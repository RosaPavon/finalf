import React from "react"
import maps from "../images/854878.png"
import { useState, useRef, useEffect} from "react";
import { Image } from "react-bootstrap"
import {Card,  Avatar, Rate } from 'antd';
import {Row, Col, Form, Alert} from "react-bootstrap"
import { Popconfirm } from 'antd';

import { Button, Modal} from "react-bootstrap"
import { Radio } from 'antd';

function Inicio(){
  var email = localStorage.getItem("emailToken")

  //------------Mostrar Nombre Cliente--------------
const [name, setName]=useState([]) 

  useEffect(()=>{    
   fetch(`${process.env.REACT_APP_API_URL}/usuarios/misdatos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email}),
      })
      .then(res => res.json())
      .then((datos)=>setName(datos.contenido))
      },[email]) 
 

  //cuenta atras

  const [timeDays, setTimeDays] = useState('00');
  const [timeHours, setTimeHours] = useState('00');
  const [timeMin, setTimeMin] = useState('00');
  const [timeSeg, setTimeSeg] = useState('00');
  
let interval = useRef();

const startTimer = () => {
 const countDownDate =new Date('Oct 22, 2022 18:30:00').getTime();

 interval =setInterval(() => {
   const now =new Date().getTime();
   const distance = countDownDate - now;

 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 if (distance < 0){
     clearInterval(interval.current);
 }else{
   setTimeDays(days);
   setTimeHours(hours);
   setTimeMin(minutes);
   setTimeSeg(seconds);
 }

 }, 1000);
};

useEffect(() => {
 startTimer();
 return () => {
   clearInterval(interval.current);

 };
});

let countDownDate = new Date("Oct 22, 2022 18:30:00").getTime()
let now = new Date().getTime();
let timeleft = countDownDate - now;

   // Calculating the days, hours, minutes and seconds left
   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

   let myfunc = setInterval(function() {

     let now = new Date().getTime();
     let timeleft = countDownDate - now;
         
  
     // Result is output to the specific element
     
         
     // Display the message when countdown is over
     if (timeleft < 0) {
         clearInterval(myfunc);
        
     }
     }, 1000);

  
//----------------ASISTIRA---------------

const [comentario, setComentario] = useState(true)
 
    
const posclaro = () => {  
 setComentario(true)
 setNoviene(false)
  }
  

const [value, setValue] = useState(1)
const [nombre, setNombre] = useState("");
const [numero, setNumero] = useState("");
const [comentarios, setComentarios] = useState("");
const [feedbackReceta, setFeedbackReceta] = useState({ empty: true });

 
      
   const onChange = e => {
     setValue(e.target.value);
     
    
   };

   function siAsistira() {
     fetch(`${process.env.REACT_APP_API_URL}/asistira/asistira`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({  
         intolencia: value, 
         nombre:nombre, 
         numero:numero, 
         comentarios:comentarios,
                  
       }),
     })
       .then((res) => res.json())
       .then(function (datos) {
         setFeedbackReceta(datos)
         setTimeout(() => {
           setFeedbackReceta({ empty: true });
         }, 6000);
         setValue(1)
         setNombre("")
         setNumero("")
         setComentarios("")
         window.location.reload()
       });      
   }
    //----------------NoASISTIRA---------------

const [noviene, setNoviene] = useState(false)
 
    
const vaASerQueNo = () => {  
  setNoviene(true)
  setComentario(false)
 
  }

const [nombreno, setNombreno] = useState("");
const [comentariosno, setComentariosno] = useState("");
const [feedbackRecetano, setFeedbackRecetano] = useState({ empty: true });


   function noAsistira() {
     fetch(`${process.env.REACT_APP_API_URL}/noasistira/noasistira`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({  
         nombreno:nombreno, 
         comentariosno:comentariosno,
                  
       }),
     })
       .then((res) => res.json())
       .then(function (datos) {
         setFeedbackRecetano(datos)
         setTimeout(() => {
           setFeedbackRecetano({ empty: true });
         }, 6000);      
         setNombreno("")      
         setComentariosno("")
         window.location.reload()
       });      
   }
    return(
        <>
 
  <div id="homehomes">
  <br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<p id="centrado2"> {days} dias {hours} horas {minutes} min {seconds} seg </p>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<a href="https://www.google.com/maps/dir/37.3943436,-5.9304048/El+Loreto+Sal%C3%B3n+de+Celebraciones,+Ramal,+Ctra.+Umbrete,+510,+41807+Espartinas,+Sevilla/@37.3957136,-6.1785146,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd12112893c27843:0x4d47e45b74410fc7!2m2!1d-6.1529087!2d37.3787063">
    <Image src={maps} width="100" fluid  id="secciones" />
    <p id="centrado" >···COMO LLEGAR···</p>    
   </a>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p id="centrado" >···¿ASISTIRÁS?···</p> 
  
<div class="centrar_contenido">
            <button type="button"  className="btn btn-outline-warning" size="sm" onClick={() => posclaro() }>Acepto la invitación</button>
            
            <button type="button" className="btn btn-outline-warning" size="sm" onClick={() => vaASerQueNo() }>Rechazo la invitación</button>
            </div> {
              comentario ? (
                <>
              <div className="px-4 py-3 bg-grey space-y-6 sm:p-6">
   <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Control type="text" placeholder="Nombre y apellidos"  onChange={(e) => setNombre(e.target.value)}
    value={nombre}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Control type="text" placeholder="Indica el número de invitados"  onChange={(e) => setNumero(e.target.value)}
    value={numero}/>
  </Form.Group>
  <div>
        <form className="row g-3 needs-validation" noValidate>
        
        <Radio.Group onChange={onChange} value={value} >      
      
      <Col >
      <Radio value={"NO"} className="blancos">Ninguna Especificación Alimentaria</Radio>     
      <Radio value={"Vegetarion@"} className="blancos">Vegetari@  </Radio>
      <Radio value={"Vegan@"} className="blancos">Vegan@</Radio>
      <Radio value={"Celiac@"} className="blancos">Celiaco </Radio>           
      <Radio value={"Intolerancia a la lactosa"} className="blancos">Intolerancia a la lactosa</Radio>
      </Col>
      <Col>
      <Radio value={"Intolerancia al huevo"} className="blancos">Intolerancia al huevo</Radio>     
      <Radio value={"Intolerancia a los frutos secos"} className="blancos">Intolerancia a los frutos secos</Radio>
      <Radio value={"Otras"} className="blancos">Otras (añadir en los comentarios)</Radio>
            
     </Col>
    </Radio.Group>
  
  </form>
  </div>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  >
  <Form.Control as="textarea" rows={3}  onChange={(e) => setComentarios(e.target.value)}placeholder={`Si existe alguien con especificaciones alimentarias indicanos por favor su nombre para facilitárselo al cátering.`}
    value={comentarios} />
  </Form.Group>
  </Form>
  <Modal.Footer>
     <Form.Group>
       {feedbackReceta.empty ? (
           <h1> </h1>
       ) : (
         <Alert variant={feedbackReceta.logged ? "danger " : "success"}>
           {feedbackReceta.mensaje}
         </Alert>
       )}
     </Form.Group>
     <Button variant="warning" 
     onClick={() => siAsistira()}>
        Enviar
     </Button>               
    </Modal.Footer>              
        </div>    
                </>
              ) : (
                <p> </p>
              )
            }
      
     <div>

</div>{
 noviene ? (
   <>
 <div className="px-4 py-3 bg-grey space-y-6 sm:p-6">
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Control type="text" placeholder="Nombre y apellidos"  onChange={(e) => setNombreno(e.target.value)}
value={nombreno}/>
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  >
<Form.Control as="textarea" rows={3}  onChange={(e) => setComentariosno(e.target.value)}placeholder={`Déjanos tu comentario.`}
value={comentariosno} />
</Form.Group>
</Form>
<Modal.Footer>
<Form.Group>
{feedbackRecetano.empty ? (
<h1> </h1>
) : (
<Alert variant={feedbackReceta.logged ? "danger " : "success"}>
{feedbackRecetano.mensaje}
</Alert>
)}
</Form.Group>
<Button variant="warning" 
onClick={() => noAsistira()}>
Enviar
</Button>               
</Modal.Footer>              
</div>    
   </>
 ) : (
   <p> </p>
 )
}
  <br></br>
  <br></br>
     
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

      </div>
        </>
    )
}

export default Inicio