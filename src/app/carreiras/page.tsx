'use client';

import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { CareersHero, CareersList } from '@/features/careers';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <CareersHero />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] relative group">
                                <img
                                    src="/agro_hero_bg.png"
                                    alt="Equipa Traders"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                            </div>
                        </FadeIn>

                        <div className="flex flex-col gap-8">
                            <FadeIn direction="right">
                                <div>
                                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa Cultura</span>
                                    <h2 className="text-3xl lg:text-5xl font-black leading-tight">Um Ambiente de Crescimento e Rigor</h2>
                                </div>
                                <p className="text-lg text-text-muted dark:text-gray-400 mt-6">
                                    Na Traders Agrícola, valorizamos a iniciativa e a precisão técnica. Acreditamos que cada semente plantada e cada contrato firmado contribui para o progresso económico de Angola.
                                </p>
                            </FadeIn>

                            <StaggerContainer>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { t: "Formação Técnica", d: "Acesso a workshops de agronomia e vendas." },
                                        { t: "Seguro de Saúde", d: "Proteção completa para si e família." },
                                        { t: "Ambiente Dinâmico", d: "Trabalhe com tecnologia de ponta." },
                                        { t: "Carreira Sólida", d: "Plano de progressão real e meritocrático." }
                                    ].map((b, i) => (
                                        <FadeIn key={i}>
                                            <div className="flex gap-4 p-4 rounded-2xl bg-background-light dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all">
                                                <span className="material-symbols-outlined text-primary">verified</span>
                                                <div>
                                                    <p className="font-bold">{b.t}</p>
                                                    <p className="text-xs text-text-muted dark:text-gray-500">{b.d}</p>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </StaggerContainer>
                        </div>
                    </div>
                </section>

                <CareersList />
            </main>
            <Footer />
        </div>
    );
}
