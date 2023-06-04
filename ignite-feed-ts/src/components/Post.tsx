import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Post {
  id? : number
  user: User
  content: PostContent[]
}

interface User {
  avatarUrl: string
  name: string
  role: string
}

interface PostContent {
  type: string
  content: string
}

export function Post({ user, content}: Post){

  const [commentList, setCommentList] = useState(
    [
      'Este é o primeiro comentário!!'
    ]
  )

  const [newCommentText, setNewCommentText] = useState('')

  function handleInputCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    // console.log(event.target.value)
    const inputText = event.target.value 
    setNewCommentText(inputText)
  }

  function handleSubmitComment(event :FormEvent){
    event.preventDefault()
    const newCommentList = [newCommentText, ... commentList]

    setCommentList(newCommentList)
    setNewCommentText('')
  }

  return (
    <>
      <section className={styles.post}>
        <header>
          <div className={styles.profile}>
            <Avatar 
              src={user.avatarUrl}
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
          {content.map(row =>{
              if (row.type === 'paragraph'){
                return <p key={row.content}>{row.content}</p>
              }else if(row.type === 'link'){
                return <p key={row.content}><a href="">{row.content}</a></p>
              }
          })}
        </div>

        <form onSubmit={handleSubmitComment} className={styles.feedback}>
          <strong className={styles.feedbackTitle}>Deixe seu feedback</strong>
          <textarea 
            value={newCommentText}
            onChange={handleInputCommentText}
            className={styles.feedbackContent} 
            placeholder='Nossa, adorei amigo!Parabé|'
          />
          <button type='submit' className={styles.feedbackSend}>Publicar</button>
        
        </form >
        <div className={styles.commentList}>
          {
            commentList.map(comment => {
              return (
                <Comment 
                  key={comment}
                  text={comment}
                />
              )
            })
          }
        </div>
                  
      </section>
    </>
  )
}