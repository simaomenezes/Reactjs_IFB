import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { SingIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
    {path: '/', element: <Dashboard/>},
    {path: '/sing-in', element: <SingIn/>},
])