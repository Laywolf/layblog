import Image from 'next/image'
import { useState } from 'react'

import styles from 'styles/components/Sidebar.module.css'
import useMousePosition from 'utils/useMousePosition'

interface ItagProps {
  tag: string
  image: string
}

const TagWithHover: React.FC<ItagProps> = ({ tag, image }) => {
  const [isHover, setHover] = useState(false)

  const { pageX, pageY } = useMousePosition()

  const handleMouseOver = (): void => {
    setHover(true)
  }

  const handleMouseOut = (): void => {
    setHover(false)
  }

  return (
    <>
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {tag}
      </p>
      {isHover && (
        <div
          className={styles.sidebarTagImage}
          style={{
            left: pageX,
            top: pageY,
          }}
        >
          <Image src={image} alt="Image" width={256} height={192} />
        </div>
      )}
    </>
  )
}

const Sidebar: React.FC = () => {
  const Tags = [
    { id: 'shigu', tag: 'シグ(Shigu)', image: '/avatars/shigu.png' },
    { id: 'ukon', tag: '右近(Ukon)', image: '/avatars/ukon.png' },
    { id: 'yamakaze', tag: '山風(YamaKaze)', image: '/avatars/yamakaze.png' },
  ]

  return (
    <aside className={styles.sidebar}>
      <h2>Avatars</h2>
      <label htmlFor="toggle" className={styles.sidebarHandle}>
        {'<'}
      </label>
      <input type="checkbox" id="toggle" className={styles.sidebarToggle} />
      <div className={styles.sidebarTag}>
        {Tags.map((tag) => (
          <TagWithHover key={tag.id} tag={tag.tag} image={tag.image} />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
