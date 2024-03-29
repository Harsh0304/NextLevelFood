import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/getMeals";
const MealsPage = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delcious meals,created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
