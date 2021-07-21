import {Link} from 'react-router-dom'
import { Card} from 'antd';
import { HeartOutlined } from '@ant-design/icons'
import {Button} from "react-bootstrap"


function Receta(props){
    return(
        <>
        <div key={props.index}>  
            <Card 
            style={{ width: 240}}
            cover={
              <img 
              alt="example"
              src={props.imagen}
              width="200" height="200"
              />
            }
           >
            <h6>{props.titulo}</h6>
            <Link to={`/logged/home/${props.titulo}`}>Ver Receta</Link> 
            <button type="button" class="btn btn-default">
    <span class=".glyphicon .glyphicon-heart"></span> Like
  </button> 
       </Card>
        </div>
        
        </>
    )
}

function Recetas(props){
    return props.recetario.slice(0).reverse().map((receta, index) => {
        if (index <= 11) {
        return(
            <Receta
            key={index}
            imagen={receta.foto}
            titulo={receta.titulo}
            usuario={receta.usuario}
            categoria={receta.categori}
            ingredientes={receta.ingredientes}
            receta={receta}
            dificultad={receta.dificultad}
            index={index}
            />
        )}
    })
}

export default Recetas;