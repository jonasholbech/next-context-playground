"use client";
import { useContext } from "react";
import { BasketValueContext } from "../contexts/basketContext";
import Link from "next/link";
function Header() {
  const test123 = useContext(BasketValueContext);
  return (
    <header>
      <Link href="/">Forside</Link>
      <Link href="/product">Produkt</Link>
      <Link href="/kurv">Kurv</Link>
      <div>Kurv: {test123.length}</div>
    </header>
  );
}

export default Header;
