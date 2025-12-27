import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { GardeningHero, GardeningCatalog } from '@/features/gardening';
import { JsonLd } from '@/shared/components/json-ld';

export const metadata: Metadata = {
    title: 'Jardinagem & Paisagismo',
    description: 'Serviços completos de jardinagem e paisagismo em Angola. Criação, manutenção e revitalização de jardins residenciais e empresariais.',
    keywords: ['jardinagem', 'paisagismo', 'jardins', 'angola', 'manutenção de jardins', 'plantio', 'relvados'],
    openGraph: {
        title: 'Jardinagem & Paisagismo | Traders Agrícola',
        description: 'Serviços profissionais de jardinagem e paisagismo para transformar o seu espaço.',
        type: 'website',
    },
};

export default function JardinagemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Jardinagem e Paisagismo",
                "provider": {
                    "@type": "Organization",
                    "name": "Traders Agrícola"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Angola"
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "AOA",
                    "availability": "https://schema.org/InStock",
                    "url": "https://tradersagricola.com/jardinagem"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Jardinagem",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criação de Jardins" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção de Espaços Verdes" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Venda de Vasos e Ornamentos" } }
                    ]
                }
            }} />
            <Navbar />
            <main className="flex-grow pb-24 lg:pb-0">
                <GardeningHero />
                <GardeningCatalog />
            </main>
            <Footer />
        </div>
    );
}
