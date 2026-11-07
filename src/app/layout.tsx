import type {Metadata} from "next";

import "./asssets/css/globals.css";


export const metadata: Metadata = {
    title: "Portifólio",
    description: "feito para mostrar meu conhecimento atual",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html
            lang="pt-br"
            className={` h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
