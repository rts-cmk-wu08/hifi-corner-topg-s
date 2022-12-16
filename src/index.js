import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Product, { loader as  getProductData }from './Pages/Product';
import { createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route,} from 'react-router-dom';



  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<Product/>} loader={getProductData}/>
      </Route>
    )
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
);


