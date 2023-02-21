import React from 'react'
import {Formik,Form,Field} from 'formik'


import { Link} from 'react-router-dom';

const Formulario = ({valorInicial,envio}) => {


  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        onSubmit={envio}
        >
        {({   isValid, dirty })=>(
             <Form className=' col-sm-10 mb-5 mb-sm-2 container-form'>
                <div className="btn-principal">
                    <div>
                        <h1 className='title-principal'>Pet shelter</h1>
                        <p className='fs-4'>Know a pet needing a home?</p>
                    </div>
                    <Link className='btn btn-primary h-25' to={'/'}>volver</Link>
                </div>
             <div className="container-principal form">
                <div className="titulocontainer">
                    <p className='mb-2 mt-3'>Pet name</p>
                    <Field name="nombre" className="form-control "  placeholder="Name" />
                    <p className='mb-2 mt-3'>Pet type</p>
                    <Field name="tipo" className="form-control "  placeholder="Type" />

                    <p className='mb-2 mt-3'>Pet Description</p>
                    <Field name="description" className="form-control "  placeholder="Description" />

                    <button className="btn btn-primary mt-5" disabled={!(isValid&&dirty)}>Guardar</button>
                </div>
                
                <div className="option">
                    <p className='mb-2 mt-3'>Skil 1</p>
                    <Field name="skil1"  className="form-control mt-2" placeholder="Option 1"/>
                    <p className='mb-2 mt-3'>Skil 2</p>
                    <Field name="skil2"  className="form-control mt-2" placeholder="Option 2"/>
                    <p className='mb-2 mt-3'>Skil 3</p>
                    <Field name="skil3"  className="form-control mt-2" placeholder="Option 3"/>
  
                </div>
             </div>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default Formulario