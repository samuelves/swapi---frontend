import { Container, Grid } from '@mui/material'
import CardWithInformation from '../../components/CardWithInformation'
export default function Home() {
  return (
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        <Grid item xs>
          <CardWithInformation />
        </Grid>
        <Grid item xs>
          <CardWithInformation />
        </Grid>
        <Grid item xs>
          <CardWithInformation />
        </Grid>
        <Grid item xs>
          <CardWithInformation />
        </Grid>
        <Grid item xs>
          <CardWithInformation />
        </Grid>
      </Grid>
    </Container>
  )
}
