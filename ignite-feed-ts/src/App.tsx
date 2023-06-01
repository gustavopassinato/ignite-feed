import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidenav } from "./components/Sidenav";

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />  

      <main className={styles.wrapper}>
        <Sidenav />
        <section >
          <Post />
          <Post />
        </section>
      </main>
      
    </>
  )
}

