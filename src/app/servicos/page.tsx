import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { ServicesCatalog } from '@/features/services';

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                        <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Soluções Completas</span>
                        <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Catálogo de Produtos e Serviços <span className="text-primary italic">Especializados</span></h1>
                        <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">Desde a base do solo à ornamentação final, fornecemos tudo o que o seu projeto precisa para prosperar no clima de Angola.</p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden hidden lg:block">
                        <div className="w-[150%] h-[150%] -rotate-12 bg-primary/20 blur-[100px] rounded-full"></div>
                    </div>
                </section>

                <ServicesCatalog />
            </main>
            <Footer />
        </div>
    );
}
