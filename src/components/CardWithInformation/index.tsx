import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface SwapiPerson {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

export default function CardWithInformation({ person }: { person: SwapiPerson }) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {person.name}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          height: {person.height}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          mass: {person.mass}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          hair color: {person.hair_color}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          skin color: {person.skin_color}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          eye color: {person.eye_color}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          birth year: {person.birth_year}
        </Typography>
        <Typography variant='caption' color='text.secondary' component='div'>
          gender: {person.gender}
        </Typography>
      </CardContent>
    </Card>
  )
}
