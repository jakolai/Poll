import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
