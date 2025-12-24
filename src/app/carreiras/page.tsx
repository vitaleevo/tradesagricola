import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { CareersHero, CareersList } from '@/features/careers';

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CareersHero />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-[#1a2c1a]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
                            <img src="https://picsum.photos/seed/culture/800/1000" alt="Equipa Trades" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-8">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa Cultura</span>
                                <h2 className="text-3xl lg:text-5xl font-black leading-tight">Um Ambiente de Crescimento e Rigor</h2>
                            </div>
                            <p className="text-lg text-text-muted dark:text-gray-400">Na Traders Agrícola, valorizamos a iniciativa e a precisão técnica. Acreditamos que cada planta cuidada e cada serviço prestado contribui para o orgulho nacional.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Formação Contínua", d: "Acesso a workshops técnicos." },
                                    { t: "Seguro de Saúde", d: "Proteção para si e família." },
                                    { t: "Equipamento Moderno", d: "Trabalhe com o melhor arsenal." },
                                    { t: "Carreira Sólida", d: "Plano de progressão real." }
                                ].map((b, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">verified</span>
                                        <div>
                                            <p className="font-bold">{b.t}</p>
                                            <p className="text-xs text-text-muted">{b.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CareersList />
            </main>
            <Footer />
        </div>
    );
}
