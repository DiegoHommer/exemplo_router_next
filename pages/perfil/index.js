import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 
import styles from "../Styles/Pages.module.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Perfil(){

    const router = useRouter();

    return(
        <div>
            <h1> PERFIL </h1>
            <div className={styles.container}>
                {/* Link href não relativo: com adição de barra no inicio
                   <Link href="/exemplo/teste"></Link> <==> /exemplo/teste
                */}
                <Link href="/perfil/amigos"> Amigos </Link>
                <Link href="/sobre"> Sobre </Link>
                <Link href="/"> Voltar a tela inicial</Link>
            
            {/* useRouter.push insere a string parâmetro no path da url.
                Se chama push pois insere a rota na pilha (stack) do histórico de rotas.
                Equivalente (em função) ao href absoluto de um Link.

                Recebe três parâmetros: router.push(url, as, options)
                *url: Path para onde desviar 
                *as: Decoração que será escrita no lugar do path (opcional)  
                *options: configurações adicionais (opcional)                           
            */}
            <button onClick={() => {router.push("/perfil/amigos", "decoraçãoUseRouter")}}> Amigos com useRouter </button>

            </div>
        </div>
    )
}