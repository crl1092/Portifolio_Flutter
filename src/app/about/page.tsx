import Link from "next/link";
import { FaLinkedin, } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
export default function About() {
    const emailDestinatario = "rodriguescristhiano4@gmail.com";
    const assunto = encodeURIComponent("Dúvida sobre o projeto");
    const corpo = encodeURIComponent("Olá, gostaria de saber mais sobre...");

    return (
        <>
            <div className="bg-cyan-800 p-2 rounded-t-2xl">
                <Link href="/" className="text-white">Voltar</Link>
                <h1 className="text-2xl text-center text-white font-bold">Sobre mim</h1>
            </div>
            <div className="mt-1 bg-cyan-300 rounded-2xl p-2">
                <h4 className="text-center font-bold">Apresentação:</h4>
                <br/>
                <p className="text-center">Olá, seja Bem Vindo!</p>
                <p>  Eu me chamo <strong>Cristhiano Rodrigues</strong>, sou estudante em formação no curso de <strong>Engenharia de Software</strong> pela <strong>Estácio de Sá</strong> indo para o <strong>5° periodo</strong> no inicio do ano de 2027 e com previsão para conclusão em meados de 2028.</p>
                <p>  Atualmente busco oportunidades para atuar na área de <strong>Desenvolvimento Mobile usando a linguagem de programação Flutter </strong>inicialmente com oportunidades para espansão para um desenvolvimento <strong>Backend .NET , Android Nativo e React Native </strong></p>
            </div>
            <div className="mt-1 bg-purple-400 rounded-2xl p-2">
                <h4 className="text-center font-bold">Contato:</h4>
                <p className="text-center font-bold">Você Poderá entrar em contato comigo através dos links abaixo:</p>
                <div className="flex flex-row p-2 gap-10 justify-center ">
                    <Link href="https://www.linkedin.com/in/cristhiano-rodrigues-4b6814377/"
                          target="_blank"
                          className="bg-blue-500 text-white p-2 rounded max-w-xs text-center">
                        <FaLinkedin size={24} />
                        <p className="text-white font-bold">LinkedIn</p>
                    </Link>

                    <a
                        href={`mailto:${emailDestinatario}?subject=${assunto}&body=${corpo}`}
                        className="bg-red-500 text-white p-2 rounded max-w-xs text-center"
                    >
                        <AiOutlineMail size={24} />
                        Enviar Email
                    </a>
                </div>
            </div>
        </>
    )
}