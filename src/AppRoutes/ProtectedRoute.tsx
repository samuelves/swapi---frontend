import { Navigate, useLocation } from 'react-router-dom'
import { FC } from 'react'

type TProtectedRouteProps = {
  children: React.ReactElement
}

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token')
  const location = useLocation()
  if (!token) {
    if (token === undefined || token === null) {
      return <Navigate to='/login' replace state={{ from: location }} />
    }
  }

  return children
}

export default ProtectedRoute
