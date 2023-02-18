import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Resultado = () => {
  const [encuesta, setEncuesta] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const Obtener= async ()=>{
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/votacion/${id}`);
      setEncuesta(respuesta.data);
    }
    Obtener();

  }, [id])
  console.log(encuesta);
  return (
    <div className="container-principal encuesta">
        <h1 className="title">Resultados</h1>
        <div className='resapuestacontainer'>
          <h3>{encuesta.optionl}: {encuesta.Votooptionl} Votes</h3>
          <h3>{encuesta.optionll}: {encuesta.Votooptionll} Votes</h3>
          {encuesta.optionlll==='undefined'&& <h3>{encuesta.optionlll}: {encuesta.Votooptionlll}</h3> }
          {encuesta.optionlV==='undefined'&& <h3>{encuesta.optionlV}: {encuesta.VotooptionlV}</h3> }
        </div>
    </div>
  )
}

export default Resultado