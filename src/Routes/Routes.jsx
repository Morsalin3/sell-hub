import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import AllProducts from "../Pages/Products/AllProducts";
import PhoneSignIn from "../Pages/PhoneSignIn/PhoneSignIn";
import Card from "../Pages/Card/Card";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
      },
      {
        path: '/product',
        element: <AllProducts />
    },
    {
        path: '/login',
        element: <PhoneSignIn />
    },
    {
        path: '/products/:id',
        element: <ProductsDetails />,
        loader: ({ params }) => fetch(`https://sell-hub-server.vercel.app/product/${params.id}`)
    },
    {
        path: '/card',
        element: <Card />
    },
      ]
    },

  ]);