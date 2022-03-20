import { FC } from 'react'
import { AppBar, Button, Toolbar, Box } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const pages = ['People', 'Planets', 'Films', 'Species', 'Vehicles', 'Starships']

const Header: FC = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to={'/'}>
            <img src='assets/logoh.png' alt='logo' width={160} />
          </Link>
        </Box>
        {isAuthenticated && (
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button key={page} onClick={() => navigate(page)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        )}
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
