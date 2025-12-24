'use client';

import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { B2BHero, B2BWorkflow } from '@/features/b2b';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export default function B2BPage() {
    const pillars = [
        {
            title: "Abastecimento Alimentar",
            desc: "Fornecimento em larga escala de cereais (milho, soja), carnes congeladas, peixe e ovos para refeitórios industriais e revenda.",
            icon: "inventory_2"
        },
        {
            title: "Distribuição de Insumos",
            desc: "Logística especializada para fertilizantes, pesticidas e sementes certificadas para grandes explorações agrícolas.",
            icon: "local_shipping"
        },
        {
            title: "Consultoria em Produção",
            desc: "Gestão técnica de projectos agropecuários, desde a preparação do solo até à implementação de sistemas de aquicultura e apicultura.",
            icon: "psychology"
        }
    ];

    const partners = [
        { name: "Supermercados 24/7", segment: "Venda a Retalho", logo: "/partner_retail.png" },
        { name: "Fazendas do Sul", segment: "Produção Animal", logo: "/partner_agri.png" },
        { name: "Indústria de Rações", segment: "Processamento", logo: "/partner_industry.png" },
        { name: "Catering Express", segment: "Serviços Alimentares", logo: "/partner_catering.png" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <B2BHero />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto">
                        <StaggerContainer>
                            <div className="max-w-3xl mb-16">
                                <FadeIn>
                                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossas Competências</span>
                                    <h2 className="text-3xl lg:text-5xl font-black mb-6">Soluções Corporativas de Alto Impacto</h2>
                                    <p className="text-lg text-text-muted dark:text-gray-400">
                                        Operamos na base da confiança e previsibilidade. A nossa estrutura logística permite entregas em todo o território nacional com prazos rigorosos.
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {pillars.map((p, i) => (
                                    <FadeIn key={i}>
                                        <div className="p-10 rounded-3xl bg-background-light dark:bg-background-dark/30 border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all group h-full">
                                            <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">{p.icon}</span>
                                            <h3 className="text-xl font-black mb-4">{p.title}</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </StaggerContainer>
                    </div>
                </section>

                <B2BWorkflow />

                <section className="py-24 px-4 lg:px-40 bg-background-light dark:bg-background-dark/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <FadeIn>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Ecossistema B2B</span>
                                <h2 className="text-3xl lg:text-5xl font-black">Segmentos Atendidos</h2>
                                <p className="mt-4 text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                                    Colaboramos com os principais nomes do sector alimentar e produtivo em Angola.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {partners.map((p, i) => (
                                <FadeIn key={i}>
                                    <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-white/5 flex flex-col items-center text-center hover:scale-105 transition-transform">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-3xl text-primary">business</span>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{p.name}</h4>
                                        <p className="text-xs text-text-muted dark:text-gray-500 uppercase tracking-widest font-bold">{p.segment}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-background-dark rounded-[3rem] overflow-hidden relative p-12 lg:p-24">
                            <div className="absolute inset-0 z-0">
                                <img src="/agro_hero_bg.png" alt="Call to action" className="w-full h-full object-cover opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-r from-background-dark to-transparent"></div>
                            </div>

                            <div className="relative z-10 max-w-2xl">
                                <FadeIn>
                                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">Agende uma Reunião Estratégica</h2>
                                    <p className="text-xl text-gray-300 mb-12">
                                        Discuta as necessidades de volume, logística e condições de pagamento directamente com os nossos gestores de conta.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="mailto:comercial@traders.co.ao" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105">
                                            E-mail Comercial <span className="material-symbols-outlined">mail</span>
                                        </a>
                                        <a href="tel:+244923276552" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 transition-all hover:scale-105">
                                            Ligar Agora <span className="material-symbols-outlined">call</span>
                                        </a>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

