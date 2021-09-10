import { RegisterButton } from '../RegisterButton';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';


interface MenuToggleProps {
  onHandleOpenMenuToggle: () => void;
  isOpenMenuToggle: boolean;

}

export function MenuToggle({ onHandleOpenMenuToggle, isOpenMenuToggle }: MenuToggleProps) {

console.log(isOpenMenuToggle)

  return isOpenMenuToggle ? (
    <div className={styles.menuToggle}>

        <FiX size={34} color="#FFF" onClick={onHandleOpenMenuToggle} />

      <ul>
        <a>HEALTHY RECIPES</a>
        <a>BLOG</a>
        <a>JOIN</a>
        <RegisterButton />
      </ul>


    </div>
  ) : (
    <>
    </>
  )
}