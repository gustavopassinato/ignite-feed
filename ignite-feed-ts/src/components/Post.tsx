import { FormEvent } from 'react'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Comment } from './Comment'

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
          <time className={styles.publishedAt}>Publicado à cerca de uma hora</time>
        </header>
        <div className={styles.content}>
          <p>Fala Galera !!</p>
          <p>Este é o conteudo do meu primeiro post</p>
          <p><a href="https://github.com/gustavopassinato">GitHub</a></p>
        </div>

        <form className={styles.feedback}>
          <strong className={styles.feedbackTitle}>Deixe seu feedback</strong>
          <textarea className={styles.feedbackContent} placeholder='Nossa, adorei amigo!Parabé|'/>
          <button type='submit' className={styles.feedbackSend}>Publicar</button>
        
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
        </div>
                  
      </section>
    </>
  )
}