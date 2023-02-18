import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {   useNavigate,useParams } from 'react-router-dom';

const Encuestas = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [detalle, setDetalle] = useState(null);
  const [vari , setVari] = useState();

  useEffect(() => {
    const Obtener = async()=>{
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/votacion/${id}`);
        setDetalle(respuesta.data);
    }
    Obtener();
  }, [id])
  const envio= async(voto,values,id)=>{
    console.log(values, voto);
      setVari((voto===1?{Votooptionl:values+1}:voto===2?{Votooptionll:values+1}:voto===3?{Votooptionlll:values+1}:{VotooptionlV:(1+values)}))
      const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/api/votacion/${id}`,vari);
      console.log(respuesta)
      vari!==undefined&&navigate(`/resultado/${id}`);
  } 

  console.log(detalle)
  return (
    <div className="container-principal encuesta">
        {detalle!==null && <h1 className="title">{detalle.titulo}</h1>}
        <div className='preguntacontainer'>
            <div className='pregunta'>
                {detalle!==null && <><h3 className="contenidocontenido">{detalle.optionl}</h3>
                <button onClick={()=>{envio(1,(detalle.Votooptionl),id)}} className="titlecontenido btn btn-primary" >{detalle.Votooptionl} votos</button></>
  }
            </div>
            <div className='pregunta'>
            {detalle!==null && <><h3 className="contenidocontenido">{detalle.optionll}</h3>
                <button onClick={()=>{envio(2,detalle.Votooptionll,id)}} className="titlecontenido btn btn-primary" >{detalle.Votooptionll} votos</button></>}
            </div>
            {detalle!==null && detalle.optionlll!=='' && <div className='pregunta'>
                <h3 className="contenidocontenido">{detalle.optionlll}</h3>
                <button onClick={()=>{envio(3,detalle.Votooptionlll,id)}} className="titlecontenido btn btn-primary" >{detalle.Votooptionlll} votos</button>
            </div> }
            {detalle!==null && detalle.optionlV!=='' && <div className='pregunta'>
                <h3 className="contenidocontenido">{detalle.optionlV}</h3>
                <button onClick={()=>{envio(4,detalle.VotooptionlV,id)}} className="titlecontenido btn btn-primary" >{detalle.VotooptionlV} votos</button>
            </div> }
        </div>
    </div>
  )
}

export default Encuestas