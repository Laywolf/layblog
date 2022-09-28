import Layout from 'components/Layout'
import { useRouter } from 'next/router'

import 'styles/globals.css'

const HidableLayout = ({ condition, children }) => {
  return condition ? children : <Layout>{children}</Layout>
}

export default function MyApp({ Component, pageProps }) {
  const hiddenLayoutPages = ['photocard']

  const { pathname } = useRouter()
  const page = pathname.split('/')[1]
  const hideLayout = hiddenLayoutPages.includes(page)
  console.log(hiddenLayoutPages, page)

  return (
    <HidableLayout condition={hideLayout}>
      <Component {...pageProps} />
    </HidableLayout>
  )
}
