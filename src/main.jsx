import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Component/Cart/Cart';
import Details from './Component/Details/Details';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import ProductsCard from './Component/Product Card/ProductsCard';
import WishList from './Component/WishList/WishList';
import './index.css';
import MainLayout from './Layouts/MainLayout';
import CustomerService from './Pages/Customar service/CustomerService';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Statistics from './Pages/Statistics/Statistics';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('../gadgetData.json'),
          },
          {
            path: '/category/:category',
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('/gadgetData.json'),
          }
        ]
      },
      {
        path: '/productDetails/:product_id',
        element: <Details></Details>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Cart></Cart>,
          },
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>,
          },
          {
            path: '/dashboard/wishList',
            element: <WishList></WishList>,
          },
        ]  
      },
      {
        path: '/customerService',
        element: <CustomerService></CustomerService>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>,
)
