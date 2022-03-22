/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import CardWithInformation from '@/components/CardWithInformation'
import api from '@/services/api'
import { Box } from '@mui/system'
import { useLoading } from '@/hooks/useLoading'
import { useAuth } from '@/hooks/useAuth'
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

type IPerson = {
  total: number
  status: number
  totalPages: number
  page: number
  next: string | null
  previous: string | null
  results: SwapiPerson[]
}
export default function Home() {
  const { setLoading } = useLoading()
  const [page, setPage] = useState(1)
  const { token } = useAuth()
  const [person, setPerson] = useState<IPerson>({
    total: 0,
    status: 0,
    totalPages: 0,
    page: 0,
    next: null,
    previous: null,
    results: []
  })
  const fetchPerson = async (pageNumber = 1) => {
    setLoading(true)
    api
      .get<IPerson>(`/swapi/person?page=${pageNumber}`)
      .then(response => {
        const { page } = response.data
        setPage(page)
        setPerson(response.data)
        setLoading(false)
      })
      .catch(err => {
        alert('Não foi possível carregar os dados')
        setLoading(false)
      })
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    fetchPerson(value)
  }
  useEffect(() => {
    fetchPerson()
  }, [token])
  return (
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {person.results.map(result => (
          <Grid item xs key={result.name}>
            <CardWithInformation person={result} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Box display='flex' width={'100%'} height={80} alignItems='center' justifyContent='center'>
          <Pagination count={person.totalPages} page={page} onChange={handleChange} />
        </Box>
      </Grid>
    </Container>
  )
}
