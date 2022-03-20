import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ProtectedRoute from '@/AppRoutes/ProtectedRoute'
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
    </Routes>
  )
}

export default AppRoutes
