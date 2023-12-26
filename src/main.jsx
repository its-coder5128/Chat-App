import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { AuthProvider } from './utils/AuthContext'
import { MsgProvider } from './utils/MsgContext'
import './index.css'
import Protected from './utils/Protected'
import Login from './pages/Login'
import Register from './pages/register'
import Layout from './layouts/Layout'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Protected />}>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MsgProvider>
        <RouterProvider router={router} />
      </MsgProvider>
    </AuthProvider>
  </React.StrictMode>,
)
