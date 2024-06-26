import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import OpeningSection from './sections/OpeningSection.jsx'
import Projects from './sections/Projects.jsx'
import ToolsAndTechnology from './sections/ToolsAndTechnology.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<OpeningSection/>}/>
      <Route path='' element={<Projects/>}/>
      <Route path='' element={<ToolsAndTechnology/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
