import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
        author="Rafael Marques"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat placeat sed nam dolorum unde officia veniam et corporis eligendi, temporibus facilis at, velit natus repellendus voluptatibus sequi repellat amet beatae!"
        />
        <Post 
        author="Lorenna Marques"
        content="Outro Post"
        />
        </main>
    </div>
  </div>
  )
}


