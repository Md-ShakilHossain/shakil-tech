import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegister/Login";
import Register from "../Pages/LoginAndRegister/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProductDetails from "../Pages/BrandProducts/ProductDetails";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/addProduct',
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/cart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/carts')
        },
        {
          path: '/products/:brandName',
          element: <BrandProducts></BrandProducts>,
          loader: ({params}) => fetch(`https://shakil-tech-server.vercel.app/products/${params.brandName}`)
        },
        {
          path: '/product/:id',
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }
      
      ]
    },
  ]);

  export default router;