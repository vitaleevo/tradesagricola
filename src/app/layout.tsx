import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Traders Agrícola",
        template: "%s | Traders Agrícola"
    },
    description: "Especialistas em agronegócio, paisagismo e comércio de sementes em Angola. Soluções integradas para o setor primário.",
    keywords: ["agricultura", "angola", "paisagismo", "sementes", "consultoria agrícola", "traders agrícola", "vitaleevo"],
    authors: [{ name: "vitaleevo", url: "https://vitaleevo.ao" }],
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

import { MobileNav } from "@/shared/components/mobile-nav";

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Traders Agrícola",
                            "image": "https://tradersagricola.com/logo.png",
                            "@id": "https://tradersagricola.com",
                            "url": "https://tradersagricola.com",
                            "telephone": "+244923276552",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Luanda",
                                "addressLocality": "Luanda",
                                "addressCountry": "AO"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -8.839988,
                                "longitude": 13.289437
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "08:00",
                                "closes": "17:00"
                            },
                            "sameAs": [
                                "https://www.facebook.com/tradersagricola",
                                "https://www.instagram.com/tradersagricola"
                            ],
                            "description": "Especialistas em agronegócio, paisagismo e comércio de sementes em Angola."
                        })
                    }}
                />
            </head>
            <body className="antialiased">
                {children}
                <MobileNav />
            </body>
        </html>
    );
}
