import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidenav } from "./components/Sidenav";

import styles from './App.module.css'



const postList = [{
  id: 1,
  user:{
    avatarUrl:"https://github.com/gustavopassinato.png",
    name: "Gustavo Passinato",
    role: "Web Developer"
  },
  content: [
    {type: 'paragraph', content:"Fala galerinha!!"},
    {type: 'paragraph', content:'Este é meu primeiro post'},
    {type: 'link', content: 'passinato-dev.co'}
  ]
},{
  id: 2,
  user:{
    avatarUrl:"https://github.com/gustavopassinato.png",
    name: "Guadfadsf",
    role: "Web "
  },
  content: [
    {type: 'paragraph', content:"Fala galerinha!!"},
    {type: 'paragraph', content:'Este é meu primeiro post'},
    {type: 'link', content: 'passinato-dev.co'}
  ]
}

] 

export function App() {
  return (
    <>
      <Header />  

      <main className={styles.wrapper}>
        <Sidenav />
        <section >
          {postList.map(post =>{
            return (
              <Post 
                key={post.id}
                content={post.content}
                user={post.user}
              />
            )
          })}
        </section>
      </main>
      
    </>
  )
}

