import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Info from './components/Info.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />} />
    <Route path="/recipe/:id" element={<Info />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
