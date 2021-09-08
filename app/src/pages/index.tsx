import Head from "next/head";
import { AreaSearch } from "../components/AreaSearch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from '../styles/home.module.scss';

export default function Home() {


  return (
    <>
      <Head>
        <title>Home | Healthy Food</title>
      </Head>
      <Header />
      <main>
        <section className={styles.contentContainer}>
          <div className={styles.hero}>
            <h1>Ready for<br />Trying a new <br />recipe?</h1>
            <AreaSearch />
          </div>

          <img src="/Illustration.svg" alt="fruit" />
        </section>
        <section className={styles.bestRecipeContainer}>


          <div className={styles.bestRecipeContent}>
            <h2>Our Best Recipes</h2>
            <p>
              Far far away, behind the word mountains, far from the countries <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className={styles.recipeContainer}>

              <div className={styles.recipeContent}>
                <img src="/comida_1.svg" alt="food" />
                <div>
                  <h3>Broccoli Salad with Bacon</h3>
                  <button type="button">See Recipe</button>
                </div>

              </div>
              <div className={styles.recipeContent}>
                <img src="/comida_2.svg" alt="food" />
                <div>
                  <h3>Classic Beef Burgers</h3>
                  <button type="button">See Recipe</button>
                </div>

              </div>
              <div className={styles.recipeContent}>
                <img src="/comida_3.svg" alt="food" />
                <div>
                  <h3>Classic Potato Salad</h3>
                  <button type="button">See Recipe</button>
                </div>

              </div>
              <div className={styles.recipeContent}>
                <img src="/comida_4.svg" alt="food" />
                <div>
                  <h3>Cherry Cobbler on the Grill</h3>
                  <button type="button">See Recipe</button>
                </div>

              </div>
            </div>
          </div>



        </section>
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

        <section className={styles.blogContainer}>
          <div className={styles.blogContent}>
            <h2>Read Our Blog</h2>
            <p>
              Far far away, behind the word mountains, far from the countries <br />
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className={styles.blogCardContent}>

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
            </div>
          </div>
        </section>
        <section className={styles.membershipContainer}>
          <div className={styles.membershipContent}>
            <img src="/bloco_final_image.svg" alt="join menbership" />
            <div className={styles.menbershipText}>
              <h2>Join our membership <br />to get special offer</h2>
              
                <input type="text" placeholder="Enter your email address" />
                <button type="button">Join</button>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}
