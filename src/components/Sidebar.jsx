import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
 
      <img 
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1681207405529-34174a1090f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" 
      />

      <div className={styles.profile}>
        
       <Avatar src="https://www.github.com/maykbrito.png"/>

        <strong>Rafael Marques</strong>
        <span>Web Dev</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}