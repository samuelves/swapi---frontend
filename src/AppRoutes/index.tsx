import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ProtectedRoute from '@/AppRoutes/ProtectedRoute'
import Register from '@/pages/Register'
const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
