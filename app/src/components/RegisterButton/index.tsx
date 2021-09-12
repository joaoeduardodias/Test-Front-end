import styles from './styles.module.scss';
import Link from 'next/link'

export function RegisterButton() {


  return (
    <Link href="/register">
      <button type="button" className={styles.registerButton}>
        Register
      </button>
    </Link>


  )

}
