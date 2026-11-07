import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="bg-cyan-800 p-2 rounded-t-2xl">
                <Link href="/">Voltar</Link>
                <h1 className="text-2xl text-center text-white font-bold">Sobre mim</h1>
            </div>
        </>
    )
}