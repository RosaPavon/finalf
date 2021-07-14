
//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages

import AdminHome from "../pages/Admin/index"//al ser exportacion default no importa el nombre que le pongamos
import AdminSingnin from "../pages/Admin/Signin";

//Pages(usuario no logado)

import Home from "../pages/Home"
import Contact from "../pages/Contact"

//Other
import Error404 from "../pages/Error404"


const routes = [
    {
        path:"/logged",
        component:LayoutAdmin,
        exact:false,
        router:[{
            path:"/logged",
            component: AdminHome,
            exact:true
        },
        {
            path:"/logged/login",
            component: AdminSingnin,
            exact:true
        },
        {
            component: Error404,
        }
    
    ]
    },
    {
        path:"/",
        component:LayoutBasic,
        exact:false,
        router:[{
            path:"/",
            component: Home,
            exact:true
        },
        {
            path:"/contact",
            component: Contact,
            exact:true
        },
        {
            component: Error404,
        }
    ]
    }
]

export default routes