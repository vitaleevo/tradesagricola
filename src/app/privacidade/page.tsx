import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { LegalLayout } from '@/features/legal';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-grow">
                <LegalLayout title="Política de Privacidade" lastUpdated="24 de Dezembro de 2023">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">1. Introdução</h2>
                        <p>A Traders Agrícola respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta política informa como cuidamos dos seus dados quando visita o nosso site.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">2. Dados que recolhemos</h2>
                        <p>Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si, incluindo identificação, contacto e dados técnicos de navegação.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-black">3. Como usamos os seus dados</h2>
                        <p>Usamos os seus dados apenas para fins de contacto comercial, melhoria dos nossos serviços e cumprimento de obrigações legais em Angola.</p>
                    </section>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
