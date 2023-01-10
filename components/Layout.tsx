import Footer from 'components/Footer'
import Header from './Header'
import SideBar from './Sidebar'

import styles from 'styles/components/Layout.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const hiddenLayoutPages = ['api', 'photocard']

interface Props {
  children?: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const page = router.pathname.split('/')[1]
  const hideLayout = hiddenLayoutPages.includes(page)

  useEffect(() => {
    const container = document.getElementById('container')
    if (container) container.scrollTop = 0
  }, [router])

  return hideLayout ? (
    <>{children}</>
  ) : (
    <>
      <Header />
      <div id="container" className={styles.container}>
        <main className={styles.main}>
          <section className={styles.section} style={{ width: '80vh' }}>
            {children}
          </section>
          <SideBar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
