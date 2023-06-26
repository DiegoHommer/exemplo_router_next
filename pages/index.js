import React from "react";
import Link from "next/link";
import styles from "./Styles/Pages.module.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Home() {
  return (
    <div>
        <h1> HOME </h1>
        <div className={styles.container}>
            {/* Link href relativo: sem adição de barra no inicio
               <Link href="exemplo"></Link> <==> path-atual/exemplo
            */}
            <Link href="sobre"> Sobre</Link>
            <Link href="perfil"> Perfil</Link>
        </div>
    </div>
  )
}