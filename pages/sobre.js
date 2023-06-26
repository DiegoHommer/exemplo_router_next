import React from "react";
import Link from "next/link";
import styles from './Styles/Pages.module.css';

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Sobre(){
    return(
        <div>
            <h1> SOBRE </h1>
            <div className={styles.container}>
                {/* Link href não relativo: com adição de barra no inicio
                   <Link href="/exemplo/teste"></Link> <==> /exemplo/teste
                */}
                <Link href="/perfil"> Perfil </Link>
                <Link href="/"> Voltar a tela inicial</Link>
            </div>
        </div>
    )
}