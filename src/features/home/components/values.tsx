"use client";

import React from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

const values = [
    { title: "Rigor Técnico", desc: "Nossa equipe é formada por engenheiros agrónomos e técnicos especializados. Aplicamos metodologia científica em cada etapa.", icon: "engineering" },
    { title: "Tradição e Confiança", desc: "Anos de experiência servindo o mercado angolano com integridade. Construímos relações baseadas na transparência.", icon: "handshake" },
    { title: "Sustentabilidade", desc: "Compromisso com o verde. Utilizamos práticas que respeitam o ecossistema local e promovem a biodiversidade.", icon: "eco" }
];

export const Values: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 px-4 lg:px-10 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                <FadeIn direction="left" className="lg:w-1/2 flex flex-col gap-8">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa Essência</span>
                        <h2 className="text-3xl lg:text-5xl font-black leading-tight">Nossos Valores e Compromissos</h2>
                    </div>
                    <p className="text-lg lg:text-xl text-text-muted dark:text-gray-400 leading-relaxed">
                        Mais do que serviços, entregamos valor. A nossa atuação no mercado angolano é guiada por princípios inegociáveis.
                    </p>
                    <div className="p-8 bg-background-light dark:bg-surface-dark/50 rounded-2xl border-l-8 border-primary shadow-lg">
                        <p className="italic text-lg text-text-main dark:text-gray-300 font-medium mb-4">
                            "A Traders Agrícola não apenas executa obras, mas constrói legados verdes para as futuras gerações de Angola."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary-dark overflow-hidden flex items-center justify-center text-white font-bold text-lg">
                                JM
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-white">Eng. João Manuel</h4>
                                <p className="text-xs text-primary font-bold uppercase">Diretor Geral</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <StaggerContainer className="lg:w-1/2 flex flex-col gap-6">
                    {values.map((v, i) => (
                        <FadeIn key={i} direction="right" delay={i * 0.1}>
                            <div className="flex gap-6 p-8 bg-background-light dark:bg-surface-dark rounded-2xl hover:shadow-xl transition-all border border-transparent hover:border-primary/10 group">
                                <div className="shrink-0 size-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
