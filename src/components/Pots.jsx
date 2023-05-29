/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}){
  
  // 12 de maio às 23:45
  const formattedDate = format(publishedAt, "dd 'de' MMMM 'às' hh:mm'h'", {locale: ptBR, })

  const formattdDateFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
      <time title={formattedDate} className={styles.publishTime} >{formattdDateFromNow}</time>
      </header>
      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>&nbsp;</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>&nbsp;</p>
      <p><a href="">👉 jane.design/doctorcare</a></p>
      <p>&nbsp;</p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>


      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback!</strong>
        <textarea 
          className={styles.commentContent}
          placeholder='Escreva aqui o seu feedback:'
        />

        <footer>
          <button className={styles.commentButton} type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
      </div>
    </article>
  )
}