import { FaArrowRight } from 'react-icons/fa';
import styles from './styles.module.scss';

export function BlogContainer() {



  return (
    <section className={styles.blogContainer}>
    <div className={styles.blogContent}>
      <h2>Read Our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries <br />
        Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className={styles.blogCardContent}>

        <div className={styles.transparentEffect}> 
          <button type="button"><FaArrowRight /></button>
         </div>

        <div className={styles.blogCard}>
            <img src="/blog_image_1.svg" alt="blog_image" />
            <div className={styles.cardInfo}>
              <h3>Quick-start guide to nuts and seeds</h3>
              <div className={styles.ArticleAuthor}>
                <img src="/perfil.jpeg" alt="author" />
                <span>João Dias</span>
              </div>
            </div>

          </div>

          <div className={styles.blogCard}>
            <img src="/blog_image_2.svg" alt="blog_image" />
            <div className={styles.cardInfo}>
              <h3>Nutrition: Tips for Improving Your Health</h3>
              <div className={styles.ArticleAuthor}>
                <img src="/perfil.jpeg" alt="author" />
                <span>João Dias</span>
              </div>
            </div>

          </div>

          <div className={styles.blogCard}>
            <img src="/blog_image_3.svg" alt="blog_image" />
            <div className={styles.cardInfo}>
              <h3>The top 10 benefits of eating healthy</h3>
              <div className={styles.ArticleAuthor}>
                <img src="/perfil.jpeg" alt="author" />
                <span>João Dias</span>
              </div>
            </div>

          </div>

          <div className={styles.blogCard}>
            <img src="/blog_image_4.svg" alt="blog_image" />
            <div className={styles.cardInfo}>
              <h3>Quick-start guide to nuts and seeds</h3>
              <div className={styles.ArticleAuthor}>
                <img src="/perfil.jpeg" alt="author" />
                <span>João Dias</span>
              </div>
            </div>
          </div>

          <div className={styles.blogCard}>
            <img src="/blog_image_4.svg" alt="blog_image" />
            <div className={styles.cardInfo}>
              <h3>Quick-start guide to nuts and seeds</h3>
              <div className={styles.ArticleAuthor}>
                <img src="/perfil.jpeg" alt="author" />
                <span>João Dias</span>
              </div>
            </div>
          </div>

      </div>
    </div>
  </section>
  )

}