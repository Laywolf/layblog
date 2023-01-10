import Button from '@mui/material/Button'
import Link from 'next/link'
import styles from 'styles/components/Header.module.css'

const path = [
  { uid: 1, name: 'Home', id: 1, path: '/' },
  { uid: 2, name: 'Board', id: 2, path: '/board' },
  // { uid: 3, name: 'Photo Card', id: 3, path: '/photocard' },
  { uid: 4, name: 'About', id: 4, path: '/about' },
]
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <Link href={value.path} key={value.uid}>
                <li>
                  <Button
                    variant="text"
                    color="inherit"
                    style={{
                      font: 'inherit',
                      fontWeight: 'inherit',
                      fontSize: 'inherit',
                      width: 'inherit',
                      height: 'inherit',
                    }}
                  >
                    {value.name}
                  </Button>
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
