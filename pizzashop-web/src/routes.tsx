import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SingIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SingUp } from "./pages/auth/sign-up";
import { Orders } from "./pages/app/orders/orders";
import { NotFound } from "./pages/auth/404";

export const router = createBrowserRouter([
{
    path:'/',
    element: <AppLayout/>,
    errorElement: <NotFound/>,
    children:[
        { path: '/', element: <Dashboard/>},
        { path: '/orders', element: <Orders/>},
    ]
},
{
    path:'/',
    element: <AuthLayout/>,
    children:[
        {path: '/sing-in', element: <SingIn/>},
        {path: '/sing-up', element: <SingUp/>},
    ]
}
])