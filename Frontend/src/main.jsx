import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router";
import {About, Contact, Courses, Home} from './pages/index.js';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path:'/about', element: <About />
      },
      {
        path: '/courses', element: <Courses />
      },
      {
        path: '/contact', element: <Contact />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
