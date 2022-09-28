// import custom components
import Footer from 'components/Footer'
import Header from './Header'
import SideBar from './Sidebar'

import styles from 'styles/components/Layout.module.css'

export default function Layout({ children }) {
  return (
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
