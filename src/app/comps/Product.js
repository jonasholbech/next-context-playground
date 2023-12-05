"use client";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function Product() {
  const dispatch = useContext(BasketUpdaterContext);
  return (
    <article>
      <h2>Sko</h2>
      <button
        onClick={() => dispatch((o) => o.concat({ title: "Sko", price: 120 }))}
      >
        Læg i kurv
      </button>
    </article>
  );
}

export default Product;
