import styles from './styles.module.scss';


export function Footer() {


  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
        <div>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>

      </div>

    </footer>
  )
}