import {Link} from 'react-router-dom'
import { Card} from 'antd';


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
      
       </Card>
        </div>
        
        </>
    )
}

function Recetas(props){
    return props.recetario.slice(0).reverse().map((receta, index) => {
        
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
        )
    })
}

export default Recetas;