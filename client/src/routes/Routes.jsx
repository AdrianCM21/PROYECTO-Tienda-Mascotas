import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AgregarProducto from "../page/voto/AgregarEncuesta";
import Home from "../page/Home";
import Encuestas from "../page/voto/Encuestas";
import Resultado from "../page/voto/Resultado";

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
            element:<AgregarProducto/>
        }
        ,{
            path:'/votacion/:id',
            element:<Encuestas/>
        },{
            path:'/resultado/:id',
            element:<Resultado/>
        }
    ]
}])