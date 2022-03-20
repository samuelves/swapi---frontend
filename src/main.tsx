import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import AuthProvider from '@/contexts/AuthContext'
import LoadingProvider from '@/contexts/LoadingContext'

import App from './App'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <ChosenThemeProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ChosenThemeProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
