"use client";

import React from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const B2BWorkflow: React.FC = () => {
    const steps = [
        { num: "01", title: "Consulta", desc: "Levantamento das necessidades de volume e especificações técnicas dos produtos ou insumos." },
        { num: "02", title: "Cotação", desc: "Apresentação de proposta comercial customizada com prazos de entrega e condições logísticas." },
        { num: "03", title: "Logística", desc: "Preparação e expedição da mercadoria através da nossa frota ou parceiros estratégicos." },
        { num: "04", title: "Entrega", desc: "Conclusão do ciclo com suporte pós-venda para garantir a satisfação e continuidade." }
    ];

    return (
        <section className="py-24 px-4 lg:px-40 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <FadeIn>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Operação B2B</span>
                        <h2 className="text-3xl lg:text-5xl font-black">Fluxo de Fornecimento</h2>
                    </FadeIn>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10"></div>
                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {steps.map((s, i) => (
                                <FadeIn key={i}>
                                    <div className="relative flex flex-col gap-6 group">
                                        <div className="size-16 rounded-2xl bg-white dark:bg-surface-dark shadow-xl flex items-center justify-center text-2xl font-black text-primary border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform relative z-10">
                                            {s.num}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-bold">{s.title}</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
