import Image from 'next/image'
import styles from 'styles/components/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      {/* <a
        href="https://github.com/laywolf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Edited by Laywolf{' '}
        <span className={styles.logo}>
          <Image
            src="https://github.com/laywolf.png?size=32"
            alt="Laywolf avatar"
            width={32}
            height={32}
          />
        </span>
      </a> */}
    </footer>
  )
}

export default Footer
