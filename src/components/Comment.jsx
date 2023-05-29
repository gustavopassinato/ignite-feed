import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
  return(
    <section className={styles.commentContainer}>
      <Avatar
       hasBorder
       src="https://github.com/gustavopassinato.png" 
      />
      <div className={styles.comment}>
        <div className={styles.commentBody}>
          <header>
            <div className={styles.authorInfo}>
              <strong>
                Gustavo Passinato <span>(você)</span>
              </strong>
              <time className={styles.publishTime} >Publicado a 1h</time>
            </div>
            <button className={styles.trash} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p className={styles.commentContent}>
            Conteúdo do comentário.
          </p>
        </div>
        <button className={styles.aplaudir}>
          <span className={styles.thumbsUp}>
            <ThumbsUp size={20}/> 
          </span>
          Aplaudir 
          <span className={styles.likesCounter}>03</span>
        </button>
      </div>
    </section>
  )
}