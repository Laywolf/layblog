import styles from 'styles/components/Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.SidebarCard}>
      <h2> Avatars</h2>
      <div className={styles.sidebarTag}>
        <p> シグ(Shigu) </p>
        <p> 右近(Ukon) </p>
        <p> 山風(YamaKaze) </p>
      </div>
    </aside>
  )
}
