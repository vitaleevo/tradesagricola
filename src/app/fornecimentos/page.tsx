import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { SuppliesHero, SuppliesCatalog } from '@/features/supplies';

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

export default function FornecimentosPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pb-24 lg:pb-0">
                <SuppliesHero />
                <SuppliesCatalog />
            </main>
            <Footer />
        </div>
    );
}
