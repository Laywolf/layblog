import { useRouter } from 'next/router'

import styles from 'styles/Home.module.css'

const Photocard: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className={styles.card}>
      <h2>Sample Card &rarr;</h2>
      <p>This is a sample card with id {id}.</p>
    </div>
  )
}

export default Photocard
