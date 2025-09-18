import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import FaleConosco from './routes/FaleConosco/index.tsx'
import './globals.css'

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
      {path:"/", element:<Home/>},
      {path:"/faleConosco",element:<FaleConosco/>}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


