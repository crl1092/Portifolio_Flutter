import Link from "next/link";
import {connection} from "next/server";
import {Suspense} from "react";
import {GetJavaRepositories, GetUserProfile, GetUsersRepositories} from "@/services/FetchRepositorys";
import Image from "next/image";

interface Repositories {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

interface JavaRepositories {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

interface ProfileProps {
    profile: {
        avatar_url: string;
        name: string;
        bio: string;
        html_url: string;
        language: string;
    };
    repositories: Repositories[],
    javaRepositories: JavaRepositories[],
}

const ProjectsContent = async () => {
    await connection();
    const username = "crl1092";
    const [profile, repositories, javaRepositories] = await Promise.all([
        GetUserProfile(username),
        GetUsersRepositories(username),
        GetJavaRepositories(username),
    ]);

    const props: ProfileProps = {
        profile: profile ?? {
            avatar_url: "",
            name: username,
            bio: "",
            html_url: "",
            language: "",
        },
        repositories: repositories ?? [],
        javaRepositories: javaRepositories ?? [],
    };

    return (<>
            <div className="bg-cyan-800 p-2 rounded-t-2xl flex flex-col">
                <Link href="/" className="text-white">Voltar</Link>
                <h1 className="text-2xl text-white text-center">Projetos Atuais</h1>
            </div>
            <div className="flex flex-row space-x-3 px-2  bg-blue-300 p-2 rounded-b-2xl">
                <div className="flex items-center space-x-3">
                    <Image src={props.profile.avatar_url} alt={props.profile.name} width={100} height={300}
                           className={`${props.profile.avatar_url}`}/>
                </div>
                <div>
                    <h1>{props.profile.name}</h1>
                    <p>{props.profile.bio}</p>
                </div>
            </div>
            <h4 className="text-center text-3xl font-bold bg-cyan-800 mt-1 p-1 text-white">Lado Mobile: </h4>
            <div className="mt-1.5 bg-amber-200 p-2 rounded-2xl">
                <h2 className="text-xl font-semibold text-center">Projetos Flutter</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {props.repositories.map(repo => (
                        <div key={repo.id} className="p-4 border rounded-lg">
                            <h3 className="text-lg font-bold">
                                <a href={repo.html_url} className="text-blue-500">{repo.name}</a>
                            </h3>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h4 className="text-center text-3xl font-bold bg-cyan-800 mt-1 p-1 text-white">Lado backend: </h4>
            <div className="mt-1.5 bg-lime-300 p-2 rounded-2xl">
                <h2 className="text-xl font-semibold text-center">Projetos Java</h2>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {props.javaRepositories.map(repo => (
                        <div key={repo.id} className="p-4 border rounded-lg">
                            <h3 className="text-lg font-bold">
                                <a href={repo.html_url} className="text-blue-500">{repo.name}</a>
                            </h3>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const Projects = () => (
    <Suspense fallback={<p className="p-4 text-center">Carregando projetos...</p>}>
        <ProjectsContent/>
    </Suspense>
);

export default Projects;