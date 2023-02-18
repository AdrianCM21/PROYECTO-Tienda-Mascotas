import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const PantallaPrincipal = () => {
    const [encuesta, setEncuesta] = useState([]);
    const [encuestaMayor, setEncuestaMayor] = useState([]);
    // const mayores=()=>{
    //     let array=[]
    //     encuesta.forEach(element => {
    //         array.push(element.Votooptionl+element.Votooptionll+element.Votooptionlll+element.VotooptionlV)});
    //         array.sort((a,b) => b - a);
    //     encuesta.forEach(element => {
    //         console.log((element.Votooptionl+element.Votooptionll+element.Votooptionlll+element.VotooptionlV))
    //         if ((element.Votooptionl+element.Votooptionll+element.Votooptionlll+element.VotooptionlV)===array[0]||element.Votooptionl+element.Votooptionll+element.Votooptionlll+element.VotooptionlV===array[1]||element.Votooptionl+element.Votooptionll+element.Votooptionlll+element.VotooptionlV===array[2]) {
    //             setEncuestaMayor(old=>[...old,element])
    //             console.log(element)
    //         }
    //     });
        
    //     console.log(encuestaMayor)
    // }    

    useEffect(() => {
       
        const Obtener= async ()=>{
          const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/votacion`);
          setEncuesta(respuesta.data.prod.reverse());
          
          setEncuestaMayor([respuesta.data.prod[0],respuesta.data.prod[1],respuesta.data.prod[2]])
        //   mayores()
        console.log(encuestaMayor)
        }
        
        Obtener();
        console.log(encuestaMayor)
      }, [])



      
  return (
    <div className="container-principal">
        <div className="btn-principal">
            <Link className='btn btn-primary' to={'/agregar'}>Create your own Poll</Link>
        </div>
        <div className="contenido">
            <div className="votos uno">
                <h2>Top 3 Pols</h2>
                {
                encuestaMayor.map((encuesta,idx)=>{
                    return(<div key={idx} className='votoscontenido'>
                        <Link className="titlecontenido" to={`/votacion/${encuesta._id}`}>{encuesta.titulo}</Link>
                        <p className="contenidocontenido">{encuesta.optionl}: {encuesta.Votooptionl} Votes, {encuesta.optionll}: {encuesta.Votooptionll}  Votes</p>
                        {encuesta.optionlll !==''&&<span>{encuesta.optionlll}: {encuesta.Votooptionlll} Votes</span>}
                        {encuesta.optionlV !==''&&<span>{encuesta.optionlV}: {encuesta.VotooptionlV} Votes</span>}
                    </div>)
                })
            }
            </div>
            <div className="votos dos">
            <h2>Recent polls</h2>
            {
                encuesta.map((encuesta,idx)=>{
                    return(<div key={idx} className='votoscontenido'>
                    <Link className="titlecontenido" to={`/votacion/${encuesta._id}`}>{encuesta.titulo}</Link>
                    <p className="contenidocontenido">{encuesta.optionl}: {encuesta.Votooptionl} Votes, {encuesta.optionll}: {encuesta.Votooptionll}  Votes</p>
                    {encuesta.optionlll !=='' && <span>{encuesta.optionlll}: {encuesta.Votooptionlll} Votes</span>}
                    {encuesta.optionlV !=='' && <span>{encuesta.optionlV}: {encuesta.VotooptionlV} Votes</span>}
                </div>)
                })
            }
            </div>
        </div>
    </div>
  )
}

export default PantallaPrincipal