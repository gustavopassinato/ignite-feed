import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.commentContainer}>
      <Avatar 
        alt=""
        hasBorder={false}
        src="https://github.com/gustavopassinato.png"
      />
      <div className={styles.comment}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentUser}>
              <strong>Gustavo Passinato</strong>
              <time> Cerca de 2h</time>
            </div>
            <button title="Deletar comentário"  className={styles.commentDeleteButton}>
              <Trash size={24} />
            </button>
          </header>
          <div className={styles.commentText}>
            Muito bom este post!!
          </div>
        </div>
        <button className={styles.commentReaction}>
          <ThumbsUp size={20} />
          Aplaudir 
          <span>03</span>
        </button>
      </div>
    </div>
  )
}