import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Air from './component/Air/Air.jsx'
import Bus from './component/Bus/Bus.jsx'
import Contact from './component/Contact/Contact.jsx'
import Event from './component/Event/Event.jsx'
import Home from './component/Home/Home.jsx'
import NotFound from './component/NotFound/NotFound.jsx'
import Train from './component/Train/Train.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { 
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/bus",
        element: <Bus/>
      },
      {
        path: "/train",
        element: <Train/>
      },
      {
        path: "/air",
        element: <Air/>
      },
      {
        path: "/events",
        element: <Event/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
