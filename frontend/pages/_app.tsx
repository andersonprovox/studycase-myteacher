import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import tema from '../src/themes/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp
