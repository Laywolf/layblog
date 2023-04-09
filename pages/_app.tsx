import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from 'components/Layout'

import 'styles/globals.css'
import Theme from 'styles/Theme'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Head>
          <title>KanataHanayuki&apos;s mini blog</title>
          <meta name="description" content="My mini VRChat gallery" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
