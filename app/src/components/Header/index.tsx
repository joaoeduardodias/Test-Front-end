import { RegisterButton } from '../RegisterButton'
import styles from './styles.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Header() {
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
        <GiHamburgerMenu size={32} color="#9cb454" />
       
      </div>
    </header>
  )
}