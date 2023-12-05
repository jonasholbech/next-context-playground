"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./comps/Header";
import { BasketProvider } from "./contexts/basketContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <Header />

          {children}
        </BasketProvider>
      </body>
    </html>
  );
}
