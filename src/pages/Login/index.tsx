/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, TextField, Box, Typography, Container } from '@mui/material'
import { FieldValues, useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'

export default function Login() {
  const { handleLogin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async (user: FieldValues) => {
    await handleLogin({
      email: user.email,
      password: user.password
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar src='/assets/logo.png' sx={{ width: 150, height: 150 }} />
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            type='email'
            label='Email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })}
            autoFocus
          />
          <p style={{ color: 'red', textAlign: 'center' }}>{errors.email && errors.email.message}</p>
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            type='password'
            label='Password'
            {...register('password', {
              required: 'Password is required'
            })}
            autoFocus
          />
          <p style={{ color: 'red', textAlign: 'center' }}>{errors.password && errors.password.message}</p>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} size='large'>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
