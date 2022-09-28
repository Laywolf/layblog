import Layout from 'components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import 'styles/globals.css'

//export to test hideLayout
export const hiddenLayoutPages = ['photocard']

interface hidableLayoutProps {
  condition: boolean
  children: React.ReactNode
}
const HidableLayout: FC<hidableLayoutProps> = ({ condition, children }) => {
  return condition ? <>{children}</> : <Layout>{children}</Layout>
}

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const page = pathname.split('/')[1]
  const hideLayout = hiddenLayoutPages.includes(page)

  return (
    <HidableLayout condition={hideLayout}>
      <Head>
        <title>KanataHanayuki&apos;s mini blog</title>
        <meta name="description" content="My mini VRChat gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </HidableLayout>
  )
}
