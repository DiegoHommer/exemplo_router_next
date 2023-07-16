import React from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router"; 
import styles from "./Styles/Pages.module.css";

// Para mais informações sobre Link: <https://reactrouter.com/en/main/components/link>
// Para mais informações sobre useRouter: <https://nextjs.org/docs/pages/api-reference/functions/use-router>

export default function Home() {

  // Informações de exemplo para teste de transferência de dados por query
  // Para testar outros exemplos pode escrever diretamente na URL seguindo o seguinte modelo:
  //  { /informacoes?nome=NOME_EXEMPLO&idade=IDADE_EXEMPLO&semestre=SEMESTRE_EXEMPLO }
  const nome = "Diego";
  const idade = 19;
  const semestre = "3º";

  const router = useRouter();

  // Importante destacar que Router.push (do objeto Router) é diferente de router.push
  function enviarProps(){
    // pathname: rota/path para onde redirecionar
    // query: informações que serão passadas pelo url
    Router.push({
      pathname: "/informacoes",
      query: {
        nome,
        idade,
        semestre
      }      
    })
  }

  return (
    <div>
        <h1> HOME </h1>
        <div className={styles.container}>
            {/* Link href relativo: sem adição de barra no inicio
               <Link href="exemplo"></Link> <==> path-atual/exemplo
            */}
            <Link href="sobre"> Sobre com link</Link>
            <Link href="perfil"> Perfil</Link>
            
            {/* useRouter.push insere a string parâmetro no path da url.
                Equivalente (em função) ao href absoluto de um Link.

                Recebe três parâmetros: router.push(url, as, options)
                *url: Path para onde desviar 
                *as: Decoração que será escrita no lugar do path (opcional)  
                *options: configurações adicionais (opcional)                           
            */}
            <button onClick={() => {router.push("/sobre", "decoraçãoUseRouter")}}> Sobre com useRouter.push </button>

            {/* Ao chamar a função enviarProps, enviamos as informações destacadas na função através do query da URL*/}
            <button onClick={() => enviarProps()}> Enviar informacoes com query </button>

        </div>
    </div>
  )
}