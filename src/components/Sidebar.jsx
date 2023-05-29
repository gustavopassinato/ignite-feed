import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
        alt="Imagem de capa" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://github.com/gustavopassinato.png" 
          alt="Foto de perfil" 
        />

        <strong>Gustavo Passinato</strong>
        <span>Web Developer</span>
      
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>

    </aside>
  )
}