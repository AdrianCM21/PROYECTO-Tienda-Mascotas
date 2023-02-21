import React from 'react'
import Formulario from '../../components/Formulario'
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';


const AgregarMascota = () => {
  const navigate = useNavigate();
  const valorInicial={
    nombre:'',
    tipo:'',
    description:'',
    skil1:'',
    skil2:'',
    skil3:''
}
const envio= async (values,actions)=>{
  try {
      console.log(process.env.REACT_APP_API_URL);
      const mascota = await axios.post(`${process.env.REACT_APP_API_URL}/api/mascota`,values)
      console.log(mascota.status)
      if (mascota.status === 200){
        Swal.fire({
            icon: 'success',
            title: 'GENIAL!!!',
            text: `Se ha creado ${mascota.data.nombre} perfectamente!`,
        });

        navigate('/');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ops que mal!!!',
        text: `Error: ${mascota.errors?.response?.data?.message || mascota.errors.message}`,
    })
    }
      
  } catch (error) {
      console.log(error);
      Swal.fire({
          icon: 'error',
          title: 'Ops que mal!!!',
          text: `Error: ${error?.response?.data?.message || error.message}`,
      })
  }
}

  return (
    <Formulario valorInicial={valorInicial} envio={envio}/>
  )
}

export default AgregarMascota