import React from "react";
import Link from "next/link";
import styles from './Styles/Pages.module.css';

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Perfil(){
    return(
        <div>
            <h1> PERFIL </h1>
            <div className={styles.container}>
                {/* Link href não relativo: com adição de barra no inicio
                   <Link href="/exemplo/teste"></Link> <==> /exemplo/teste
                */}
                <Link href="amigos"> Amigos </Link>
                <Link href="/sobre"> Sobre </Link>
                <Link href="/"> Voltar a tela inicial</Link>

            </div>
        </div>
    )
}