import Head from "next/head";
import { Header } from "../components/Header";
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Healthy Food</title>
      </Head>
      <Header />
      <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <h1>Ready for<br />Trying a new <br />recipe?</h1>
          </section>
          <img src="/Illustration.svg" alt="fruit" />
      </main>
    </>
  )
}
