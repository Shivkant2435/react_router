import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/contact.jsx'
import User from './Components/User/user.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "contact",
        element:<Contact/>
      },
      {
        path: "user/:userid",
        element:<User/>
      },
      {
        path: "Github",
        loader : githubInfoLoader,
        element:<Github/>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
