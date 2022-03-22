import { FC } from 'react'
import { styled } from '@mui/material'
import CircularStatic from '@/components/CircularProgressWithLabel'
import Header from '@/components/header'
import AppRoutes from '@/AppRoutes'
import { useLoading } from '@/hooks/useLoading'
const App: FC = () => {
  const { loading } = useLoading()
  return (
    <Root>
      {loading && <CircularStatic />}
      <Header />
      <AppRoutes />
    </Root>
  )
}

const Root = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
