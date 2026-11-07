import Link from "next/link";

export const NavMenu = () => {
    return (
        <div>
            <nav className="bg-blue-500 p-2 rounded-b-2xl space-x-3 flex items-center justify-center">
                <Link href="/" className="bg-black text-white p-2 rounded-2xl hover:bg-white hover:text-black">Inicio</Link>
                <Link href="/about" className="bg-black text-white p-2 rounded-2xl hover:bg-white hover:text-black">Sobre</Link>
                <Link href="/projects" className="bg-black text-white p-2 rounded-2xl hover:bg-white hover:text-black">Projetos</Link>
            </nav>
        </div>
    )
}