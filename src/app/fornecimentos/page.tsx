import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { SuppliesHero, SuppliesCatalog } from '@/features/supplies';
import { JsonLd } from '@/shared/components/json-ld';

export const metadata: Metadata = {
    title: 'Fornecimentos Laboratoriais',
    description: 'Reagentes físico-químicos, kits para análise de água e meios de cultura para laboratórios. Fornecimento especializado para Angola.',
    keywords: ['reagentes', 'laboratório', 'kits análise água', 'bioquímica', 'angola', 'fornecimentos laboratoriais'],
    openGraph: {
        title: 'Fornecimentos Laboratoriais | Traders Agrícola',
        description: 'Reagentes, kits de análise e meios de cultura para laboratórios em Angola.',
        type: 'website',
    },
};

import { ProductGallery } from '@/shared/components/product-gallery';

export default function FornecimentosPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Catálogo de Fornecimentos Laboratoriais",
                "description": "Reagentes, kits de análise e meios de cultura para laboratórios em Angola.",
                "url": "https://tradersagricola.com/fornecimentos",
                "mainEntity": {
                    "@type": "OfferCatalog",
                    "name": "Produtos Laboratoriais",
                    "itemListElement": [
                        { "@type": "Product", "name": "Reagentes Físico-Químicos" },
                        { "@type": "Product", "name": "Kits de Análise de Água" },
                        { "@type": "Product", "name": "Reagentes Bioquímicos" }
                    ]
                }
            }} />
            <Navbar />
            <main className="flex-grow pb-24 lg:pb-0">
                <SuppliesHero />
                <SuppliesCatalog />
                <div className="bg-background-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/5">
                    <ProductGallery
                        category="reagents"
                        title="Produtos em Destaque"
                        subtitle="Confira os reagentes mais procurados por nossos clientes."
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
