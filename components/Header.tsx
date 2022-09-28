import Link from 'next/link'
import styles from 'styles/components/Header.module.css'

const path = [
  { uid: 1, name: 'Home', id: 1, path: '/' },
  { uid: 2, name: 'Board', id: 2, path: 'board' },
  { uid: 3, name: 'Photo Card', id: 3, path: 'photocard' },
  { uid: 4, name: 'About', id: 4, path: 'about' },
]
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  <a> {value.name} </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
