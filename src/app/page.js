import Product from "./comps/Product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Product />
      <Product />
      <Product />
      <Product />
    </main>
  );
}
