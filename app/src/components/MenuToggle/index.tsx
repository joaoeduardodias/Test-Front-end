import { RegisterButton } from '../RegisterButton';
import styles from './styles.module.scss';

export function MenuToggle() {

  return (
    <div className={styles.menuToggle}>
      <a>HEALTHY RECIPES</a>
      <a>BLOG</a>
      <a>JOIN</a>
      <RegisterButton />

    </div>
  )
}