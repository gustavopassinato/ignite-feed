import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './Sidenav.module.css'
import { Avatar } from './Avatar'

export function Sidenav(){
  return (
    <>
      <nav className={styles.sidenav}>
         <img className={styles.profileCover} src="https://images.unsplash.com/photo-1621234078979-034c5f66f742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=50" alt="" />
         <div className={styles.profile}>
          <Avatar 
            hasBorder
            src="https://github.com/gustavopassinato.png" 
            alt="" 
          />
          <div className={styles.profileInfo}>
            <strong>Gustavo Passinato</strong>
            <span>Web Developer</span>
          </div>
         </div>
         <footer>
          <button className={styles.profileEdit}>
            <span>
              <PencilSimpleLine size={20}/>
            </span>
            Editar Perfil
          </button>
         </footer>
      </nav>
    </>
  )
}