import Layout from 'components/Layout'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>KanataHanayuki&apos;s mini blog</title>
        <meta name="description" content="My mini VRChat gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
