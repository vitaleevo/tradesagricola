"use client";

import React from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const CareersList: React.FC = () => {
    const jobs = [
        { title: "Engenheiro Agrónomo Sénior", type: "Full-time", location: "Luanda / Viana", dept: "Técnico" },
        { title: "Gestor Comercial B2B (Agro)", type: "Full-time", location: "Luanda", dept: "Vendas" },
        { title: "Operador de Logística de Insumos", type: "Full-time", location: "Viana - ZEE", dept: "Operacional" }
    ];

    return (
        <section className="py-24 px-4 lg:px-40 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <FadeIn>
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Vagas Abertas</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-balance">Oportunidades Atuais</h2>
                        </div>
                    </FadeIn>
                </div>

                <StaggerContainer>
                    <div className="flex flex-col gap-4">
                        {jobs.map((j, i) => (
                            <FadeIn key={i}>
                                <div className="bg-background-light dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-primary/50 transition-all hover:shadow-2xl group cursor-pointer">
                                    <div className="flex flex-col gap-2 text-center md:text-left">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{j.dept}</span>
                                        <h3 className="text-2xl font-black">{j.title}</h3>
                                        <div className="flex items-center gap-4 text-text-muted dark:text-gray-400 justify-center md:justify-start">
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {j.location}</span>
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {j.type}</span>
                                        </div>
                                    </div>
                                    <button className="h-14 px-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary font-bold rounded-2xl transition-all">
                                        Candidatar-se
                                    </button>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
};
