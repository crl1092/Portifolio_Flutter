import Link from "next/link";

export default function Projects () {
    return (<>
    <div className="bg-cyan-800 p-2 rounded-t-2xl flex flex-col">
        <Link href="/">Voltar</Link>
        <h1 className="text-2xl text-white text-center">Projetos Atuais</h1>
    </div>
    </>)
}