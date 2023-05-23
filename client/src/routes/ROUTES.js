import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Products from '../pages/Products';
import Services from '../pages/Services';
import DropDrown from '../pages/DropDrown';
import Blog from '../pages/Blog.js';
import Contact from "../pages/Contact";
import MainRoot from "../pages/MainRoot";
import Detail from '../pages/Detail';
import Add from '../pages/Add';


export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
           {
            path:"",
            element:<Home/>
           },
           {
             path:"/about",
             element: <About/>
           },
           {
            path:"/blog",
            element: <Blog/>
          },
           {
            path:"/products",
            element: <Products/>
           },
           {
            path:"/service",
            element: <Services/>
           },
           {
            path:"/dropdrown",
            element: <DropDrown/>
           },
           {
            path:"/contact",
            element: <Contact/>
           },
           {
            path:"/detail",
            element: <Detail/>
           },
           {
            path:"/add",
            element: <Add/>
           }
        ]
    }
]