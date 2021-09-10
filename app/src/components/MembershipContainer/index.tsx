import styles from './styles.module.scss';

export function MembershipContainer() {


  return (
    <section className={styles.membershipContainer}>
      <div className={styles.membershipContent}>
        <img src="/bloco_final_image.svg" alt="join menbership" />
        <div className={styles.menbershipText}>
          <h2>Join our membership <br />to get special offer</h2>

          <div>
            <input type="text" placeholder="Enter your email address" />
            <button type="button">Join</button>
          </div>


        </div>
      </div>
    </section>
  )
}