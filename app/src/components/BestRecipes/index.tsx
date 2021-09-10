import styles from './styles.module.scss';

export function BestRecipes(){

  return (
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
  )

}