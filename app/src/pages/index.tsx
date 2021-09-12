import Head from "next/head";
import { AreaSearch } from "../components/AreaSearch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from '../styles/home.module.scss';
import { MenuToggle } from "../components/MenuToggle";
import { useState } from "react";
import { BestRecipes } from "../components/BestRecipes";
import { BestServices } from "../components/BestServices";
import { BlogContainer } from "../components/BlogContainer";
import { MembershipContainer } from "../components/MembershipContainer";
export default function Home() {

  const [ isOpenMenuToggle, setIsOpenMenuToggle ] = useState(false)

  function handleOpenMenuToggle(){
      setIsOpenMenuToggle(!isOpenMenuToggle)
    }

  return (
    <>
      <Head>
        <title>Home | Healthy Food</title>
      </Head>
      <Header onHandleOpenMenuToggle={handleOpenMenuToggle}/>
      <MenuToggle onHandleOpenMenuToggle={handleOpenMenuToggle} isOpenMenuToggle={isOpenMenuToggle} />
      <main>
        <section className={styles.contentContainer}>
          <div className={styles.hero}>
            <h1>Ready for<br />Trying a new <br />recipe?</h1>
            <AreaSearch />
          </div>

          <img src="/Illustration.svg" alt="fruit" />
        </section>
        

        <BestRecipes />
        <BestServices />
        <BlogContainer />
        <MembershipContainer />
       
      </main>
      <Footer />

    </>
  )
}
