
import styles from './styles.module.scss';

export function BestServices() {

  return (
       <section className={styles.bestServicesContainer}>

          <img src="/bloco_services.svg" alt="best services" />
          <div className={styles.bestServiceContent}>
            <div className={styles.textAreaContent}>
              <h2>The best services ready To serve you</h2>
              <p>
                Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
              <p>
                Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and
                supplies it with the necessary regelialia.
              </p>
              <button type="button">Know More</button>
            </div>
          </div>
        </section> 
  )
}
