import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { LegalLayout } from '@/features/legal';

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-grow">
                <LegalLayout title="Termos de Uso" lastUpdated="24 de Dezembro de 2023">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">1. Termos</h2>
                        <p>Ao aceder ao site da Traders Agrícola, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">2. Uso de Licença</h2>
                        <p>É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site da Traders Agrícola apenas para visualização transitória pessoal e não comercial.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">3. Isenção de responsabilidade</h2>
                        <p>Os materiais no site da Traders Agrícola são fornecidos 'como estão'. A Traders Agrícola não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.</p>
                    </section>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
