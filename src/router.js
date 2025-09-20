import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";


const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/login", element: <Login />},
    {path: "/dashboard", element: <Dashboard />},


])

export default router;