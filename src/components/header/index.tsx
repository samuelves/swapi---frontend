import { FC } from 'react'
import { AppBar, Toolbar, Box } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <AppBar position='absolute'>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to={'/'}>
            <img src='assets/logoh.png' alt='logo' width={160} />
          </Link>
        </Box>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
