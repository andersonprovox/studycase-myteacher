import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'



const Home: NextPage = () => {
  return (
    <div>
      <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista></Lista>
      </Box>
    </div>
  )
}

export default Home
