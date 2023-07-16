import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 
import styles from "./Styles/Pages.module.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>
// Para mais informações sobre useRouter: <https://nextjs.org/docs/pages/api-reference/functions/use-router#router-object>

export default function Perfil(){

    const router = useRouter();

    // Com essa codificação, pegamos as informações passadas pelo query da url e...  
    const {
     query: {nome, idade, semestre}
    } = router;

    // Colocamos elas em um objeto props
    const props = {
        nome,
        idade,
        semestre
    }

    return(
        <div>
            <h1> INFORMAÇÕES </h1>
            <div className={styles.container}>

            {/* Display das informações passadas por query */}
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Semestre: {props.semestre}</p>
            <Link href=".."> Voltar a tela inicial</Link>

            </div>
        </div>
    )
}