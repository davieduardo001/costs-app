import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Error page
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/company",
        element: <Company />
      },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/newproject",
        element: <NewProject />
      },
      
      // Nested routes = identificador unico para usuario
      // {
      //   path: "/contact/:id",
      //   element: <ContactDetails/>,
      // }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);