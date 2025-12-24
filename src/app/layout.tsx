import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Traders Agrícola",
        template: "%s | Traders Agrícola"
    },
    description: "Especialistas em agronegócio, paisagismo e comércio de sementes em Angola. Soluções integradas para o setor primário.",
    keywords: ["agricultura", "angola", "paisagismo", "sementes", "consultoria agrícola", "traders agrícola", "vitaleevo"],
    authors: [{ name: "vitaleevo", url: "https://vitaleevo.com" }],
    creator: "vitaleevo",
    publisher: "Traders Agrícola",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        type: "website",
        locale: "pt_AO",
        url: "https://tradersagricola.com",
        siteName: "Traders Agrícola",
        title: "Traders Agrícola | Excelência no Agronegócio em Angola",
        description: "Líderes em soluções agrícolas e paisagismo urbano. Qualidade e compromisso com o futuro de Angola.",
        images: [
            {
                url: "https://tradersagricola.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Traders Agrícola",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Traders Agrícola | Excelência no Agronegócio",
        description: "Soluções integradas para agricultura e manutenção de áreas verdes em Angola.",
        creator: "@vitaleevo",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-AO">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
