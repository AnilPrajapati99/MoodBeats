import { createBrowserRouter } from "react-router-dom";
const Register = lazy(()=>import("./feauters/auth/pages/Register"))
const Login = lazy(()=>import( "./feauters/auth/pages/Login"))
import Protected from "./feauters/auth/components/Protected";
import MainHome from "./feauters/home/pages/MainHome";
import Navbar from "./feauters/home/components/Navbar";
import Layout from "./feauters/home/Layout/Layout";
const Home = lazy(()=>import("./feauters/home/pages/Home")) ;
import PublicRoute from "./feauters/auth/components/PublicRoute";
import { lazy, Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<MainHome/>
      },
       {
    path: "player",
    element: <Protected>
      <Suspense fallback={ <h1>Loading...</h1> }>
      <Home/>

      </Suspense>
      </Protected>
  },
]},
  {
    path: "/register",
    element: <PublicRoute>
        <Suspense fallback={ <h1>Loading...</h1> }>
      <Register/>
      </Suspense>
    </PublicRoute>
  },
  {
    path: "/login",
    element: <PublicRoute> 
        <Suspense fallback={ <h1>Loading...</h1> }>
      <Login/>
      </Suspense>
    </PublicRoute>
  },
  
]);

export default router;
