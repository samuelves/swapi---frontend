import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '@/services/api'
import { useLoading } from '@/hooks/useLoading'

type THandleLogin = {
  email: string
  password: string
}

type AuthContextType = {
  token: string | null
  handleLogin: (loginData: THandleLogin) => void
  handleLogout: () => void
  isAuthenticated: boolean
}

type TokenState = string | null

type AuthContextProps = {
  children: React.ReactNode
}
type TLocationState = {
  state: {
    from: {
      path: string
      pathname: string
    }
  }
}
const INITIAL_STATE = {
  token: null,
  handleLogin: (loginData: THandleLogin) => {},
  handleLogout: () => {},
  isAuthenticated: false
}

export const AuthContext = createContext<AuthContextType>(INITIAL_STATE)

const AuthProvider = ({ children }: AuthContextProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { setLoading } = useLoading()
  const { state } = location as TLocationState
  const [token, setToken] = useState<TokenState>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (loginData: THandleLogin) => {
    setLoading(true)
    const origin = state?.from?.pathname || '/'
    const { email, password } = loginData
    api
      .post('/session', {
        email,
        password
      })
      .then(
        (response: {
          data: {
            token: string
            user: {
              id: string
              name: string
            }
          }
        }) => {
          setToken(token)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          setIsAuthenticated(true)
          setLoading(false)
          navigate(origin)
        }
      )
      .catch(() => {
        alert('Login failed')
        setLoading(false)
      })
  }
  const handleLogout = () => {
    setToken(null)
  }

  const value = {
    token,
    isAuthenticated,
    handleLogin,
    handleLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
