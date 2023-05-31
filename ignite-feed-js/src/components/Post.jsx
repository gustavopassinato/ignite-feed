/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, publishedAt, content}){
  const [comments, setComment] = useState(
    [
      'Este é o primeiro comentário'
    ]
  )

  const [newCommentText, setNewCommentText] = useState(
    ''
  )

  // 12 de maio às 23:45
  const publishedAtFormatted = format(publishedAt, "dd 'de' MMMM 'às' hh:mm'h'", {locale: ptBR, })

  const distanceFromPublishedToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleInvalidComment(){
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function handleNewCommentText(){

    const commentText = event.target.value

    setNewCommentText(commentText)
    event.target.setCustomValidity('')
  }

  function handleCommentInput(){
    event.preventDefault()
    setComment([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComent(commentToDelete){
    // console.log(`Deletando o comentário: ${comment} - from father`)

    const commentsWithountDeletedOne = comments.filter(coment =>{
      if (coment !== commentToDelete){
        return true
      }
    })

    // console.log(commentsWithountDeletedOne)

    setComment(commentsWithountDeletedOne)
  }

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
      <time title={publishedAtFormatted} className={styles.publishTime} >{distanceFromPublishedToNow}</time>
      </header>
      <div className={styles.content}>
      {content.map(row => {
        if (row.type === 'paragraph'){
          return (
            <p key={row.content}>{row.content}</p>
          )
        }else if( row.type === 'link'){
          return (
            <p key={row.content}><a href="#">{row.content}</a></p>
          )
        }
      })}


      </div>
      <form onSubmit={handleCommentInput} className={styles.commentForm}>
        <strong>Deixe seu Feedback!</strong>
        <textarea 
          value={newCommentText}
          onChange={handleNewCommentText}
          className={styles.commentContent}
          placeholder='Escreva aqui o seu feedback:'
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button  
            disabled={newCommentText.length === 0}
            className={styles.commentButton} 
            type='submit'
          >
              Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
      {comments.map(comment =>{
        return (
        <Comment 
          onDeleteComment={deleteComent}
          key={comment}
          content = {comment}
        />)
      })}
      </div>
    </article>
  )
}