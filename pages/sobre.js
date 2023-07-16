import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 
import styles from './Styles/Pages.module.css';

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Sobre(){

    const router = useRouter();

    return(
        <div>
            <h1> SOBRE </h1>
            <div className={styles.container}>
                {/* Link href relativo: sem adição de barra no inicio
                   <Link href="exemplo"></Link> <==> path-atual/exemplo
                */}
                {/* Os .. servem para "subir" um path, neste caso retornando a Home */}
                <Link href="../perfil"> Perfil </Link>
                <Link href=".."> Voltar a tela inicial</Link>
                
                {/* router.back() é equivalente a clicar o botão de voltar do browser */}
                <button onClick={() => {router.back()}}> Voltar a tela inicial com useRouter.back</button>
            </div>
        </div>
    )
}