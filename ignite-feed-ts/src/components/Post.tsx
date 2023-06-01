import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(){
  return (
    <>
      <section className={styles.post}>
        <header>
          <div className={styles.profile}>
            <Avatar 
              src='https://github.com/gustavopassinato.png'
              hasBorder
              alt=''
            />
            <div className={styles.profileInfo}>
              <strong>Gustavo Passinato</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time>Publicado à cerca de uma hora</time>
        </header>
        <div className={styles.content}>
          <p>Fala Galera !!</p>
          <p>Este é o conteudo do meu primeiro post</p>
          <p><a href="https://github.com/gustavopassinato">GitHub</a></p>
        </div>

        
      </section>
    </>
  )
}