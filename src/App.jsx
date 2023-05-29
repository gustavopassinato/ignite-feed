import { Header } from './components/Header'
import styles from  './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Pots'

const posts = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavopassinato.png',
      name: 'Gustavo Passinato',
      role: 'Web Developer'
    }, 
    content:[
      {type: 'paragraph', content:'Fala galera!!!! '},
      {type: 'paragraph', content:'Este é meu primeiro post'},
      {type: 'link', content: 'passinato-dev.com'}
    ],
    publishedAt: new Date('2023-05-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gustavopassinato.png',
      name: 'Sarah Eduarda',
      role: 'Loyer'
    }, 
    content:[
      {type: 'paragraph', content:'Fala galera!!!! '},
      {type: 'paragraph', content:'Este é meu primeiro post'},
      {type: 'link', content: 'sr-machado.com'}
    ],
    publishedAt: new Date('2023-05-10 10:14:00')
  }
]
 
 function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  publishedAt={post.publishedAt}
                  content={post.content}
                />
              )
            })
          }

        </main>
      </div>
    </div>
      
  )
}

export default App
