import Footer from 'components/Footer'
import Header from './Header'
import SideBar from './Sidebar'

import styles from 'styles/components/Layout.module.css'
import { useRouter } from 'next/router'

export const hiddenLayoutPages = ['api', 'photocard']

interface Props {
  children?: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const page = pathname.split('/')[1]
  const hideLayout = hiddenLayoutPages.includes(page)

  return hideLayout ? (
    <>{children}</>
  ) : (
    <>
      <Header />
      <div className={styles.container}>
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
