import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Admin from "../Layout/Admin";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
{
    path: '/',
    element:<Home/>
}
        ]
    },
    {
        path:'/admin',
        element:<Admin/>
    }
])

export default router;