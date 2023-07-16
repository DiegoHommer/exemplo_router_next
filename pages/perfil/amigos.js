import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 
import styles from "../Styles/Pages.module.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>

export default function Amigos(){

    const router = useRouter();

    return(
        <div>
            <h1> AMIGOS </h1>
            <div className={styles.container}>
                {/* Link href não relativo: com adição de barra no inicio
                   <Link href="/exemplo/teste"></Link> <==> /exemplo/teste
                */}
                <Link href="/perfil"> Voltar</Link>
                <Link href='/sobre'> Sobre</Link>
                <Link href="/"> Volta a tela inicial</Link>

            {/* useRouter.replace insere a string parâmetro no path da url.
                Se chama replace pois substitui o topo da pilha pela nova rota.
                Isso impede que o usuário retorne com o botão de retorno do browser para, por exemplo, um path inválido.
                Equivalente (em função) ao href absoluto de um Link.

                Recebe três parâmetros: router.replace(url, as, options)
                *url: Path para onde desviar 
                *as: Decoração que será escrita no lugar do path (opcional)  
                *options: configurações adicionais (opcional)                           
            */}
            <button onClick={() => {router.replace("/")}}> Mudar path</button>

            </div>
        </div>
    )
}