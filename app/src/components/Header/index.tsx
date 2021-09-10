import { RegisterButton } from '../RegisterButton'
import styles from './styles.module.scss'
import { FiMenu } from 'react-icons/fi'

interface HeaderProps {
  onHandleOpenMenuToggle: () => void;
}

export function Header({onHandleOpenMenuToggle}: HeaderProps) {
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
        <FiMenu size={32} color="#9cb454" onClick={onHandleOpenMenuToggle}/>
       
      </div>
    </header>
  )
}