import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

const Formulario = () => {
    const navigate = useNavigate();
    const valorInicial={
        titulo:'',
        optionl:'',
        optionll:'',
        optionlll:'',
        optionlV:''
    }

    
  const envio= async (values,actions)=>{
    try {
        console.log(process.env.REACT_APP_API_URL);
        const producto = await axios.post(`${process.env.REACT_APP_API_URL}/api/votacion`,values)
        if (producto.status === 200){
          Swal.fire({
              icon: 'success',
              title: 'GENIAL!!!',
              text: `Se ha actualizado ${producto.data.nombre} perfectamente!`,
          });

          navigate('/');
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

    const productoError=Yup.object().shape({
        titulo: Yup.string()
            .min(10, 'El Titulo debe tener como minimo 10 caracteres')
            .required('Requerido'),
            
        optionl: Yup.string()
            .required('requerido.'),

        optionll: Yup.string()
            .required('requerido.'),

        optionlll: Yup.string(),
           
        optionlV: Yup.string()
    });

  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        validationSchema={productoError}
        onSubmit={envio}
        >
        {({ errors, touched, isValid, dirty })=>(
             <Form className=' col-sm-10 mb-5 mb-sm-2 container-form'>
                 <div className="btn-principal">
                    <Link className='btn btn-primary ' to={'/'}>volver</Link>
                </div>
             <div className="container-principal form">
                <div className="titulocontainer">
                    <Field name="titulo" className="form-control " as="textarea" placeholder="Titulo" />
                    {touched.titulo && errors.titulo && <div className="ms-3 mt-1 text-danger">{errors.titulo}</div>}
                    <button className="btn btn-primary mt-5" disabled={!(isValid&&dirty)}>Guardar</button>
                </div>
                
                <div className="option">
                    <Field name="optionl"  className="form-control mt-2" placeholder="Option 1"/>
                    {touched.precio && errors.precio && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                    <Field name="optionll"  className="form-control mt-2" placeholder="Option 2"/>
                    {touched.optionl && errors.optionl && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                    <Field name="optionlll"  className="form-control mt-2" placeholder="Option 3"/>
                    {touched.optionlll && errors.optionlll && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                    <Field name="optionlV"  className="form-control mt-2" placeholder="Option 4"/>
                    {touched.optionlV && errors.optionlV && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                </div>
             </div>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default Formulario