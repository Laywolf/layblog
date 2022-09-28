// import custom components
import Footer from 'components/Footer'
import Header from './Header'
import SideBar from './Sidebar'

import styles from 'styles/components/Layout.module.css'
import { useRouter } from 'next/router'

// export to test hideLayout
export const hiddenLayoutPages = ['photocard']

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
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.section} style={{ width: '1024px' }}>
          {children}
        </section>
        <SideBar />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
