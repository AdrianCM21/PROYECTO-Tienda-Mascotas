import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import AgregarMascota from "../page/mascota/AgregarMascota";
import DetalleMascota from "../page/mascota/DetalleMascota";
import ActualizarMascota from "../page/mascota/ActualizarMascota";

export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index: true,
            element: <Home/>
        }
        ,{
            path:'/agregar',
            element:<AgregarMascota/>
        }
        ,{
            path:'/detalles/:id',
            element:<DetalleMascota/>
        },{
            path:'/actulizar/:id',
            element:<ActualizarMascota/>
        }
    ]
}])