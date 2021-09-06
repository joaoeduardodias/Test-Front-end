import { RegisterButton } from '../RegisterButton'
import styles from './styles.module.scss'

export function Header(){
  return (
   <header className={styles.headerContainer}>
     <div className={styles.headerContent}>
        <h1>Healthy Food</h1>
        <nav>
          <a>HEALTHY RECIPES</a>
          <a>BLOG</a>
          <a>JOIN</a>
        </nav>
        <RegisterButton />
        
     </div>
   </header>
  )
}