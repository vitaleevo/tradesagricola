import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { GardeningHero, GardeningCatalog } from '@/features/gardening';

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
            <Navbar />
            <main className="flex-grow pb-24 lg:pb-0">
                <GardeningHero />
                <GardeningCatalog />
            </main>
            <Footer />
        </div>
    );
}
