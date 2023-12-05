"use client";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

import styles from "../page.module.css";

export default function Home() {
  const dispatch = useContext(BasketUpdaterContext);

  return (
    <main className={styles.main}>
      <h1>Her er en tshirt </h1>
      <button
        onClick={() =>
          dispatch((old) => old.concat({ title: "T-Shirt", price: 350 }))
        }
      >
        Læg i kurv
      </button>
    </main>
  );
}
