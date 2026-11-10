import {NavMenu} from "@/app/components/NavMenu";

export default function Home() {
  return (
   <main className="main">
       <div className="bg-cyan-800 p-2 rounded-t-2xl">
            <h1 className="text-center text-2xl font-bold text-white">Cristhiano Rodrigues - Dev Flutter / Backend</h1>
       </div>
       <NavMenu />
       <div className="mt-1 p-2 bg-amber-100">
           <h3 className="text-center font-bold ">Apresentação e propósito do site</h3>
           <p>Esse site foi feito com o propósito de mostrar meu conhecimento atual em flutter inicialmente, Java e aspnet core com a apresentação de pequenos projetos para estudos feitos no decorrer de alguns cursos que fiz.</p>
           <br/>
           <p>No momento, por estar em processo de aprendizado , ainda não há muitas coisas para mostrar. Porém daqui uns tempos terá bastante coisa interessante por aqui. </p>
           <br/>
           <p>Não espere também que esse site tenha muitos efeitos pois além de eu não ser do  ramo frontend web, meu proposito com esse site é ser simples e direto.  </p>
       </div>
   </main>
  );
}
