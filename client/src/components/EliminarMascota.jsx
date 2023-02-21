import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';

const EliminarMascota = ({id,nombre}) => {
  const navigate = useNavigate();
    const eliminar=async(idMascota,nombreM)=>{
        try {
            const mascota = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mascota/${idMascota}`);
            console.log(mascota)
            Swal.fire(
                'Adoctado!',
                `Adoctaste a ${nombreM}} porductos`,
                'success'
              )
              navigate('/');
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
    <button className='btn btn-danger  ms-2 mt-2' onClick={()=>eliminar(id,nombre)}>Adoctar a {nombre}</button>
  )
}

export default EliminarMascota