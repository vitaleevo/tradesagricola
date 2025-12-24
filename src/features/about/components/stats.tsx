"use client";

import React from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const AboutStats: React.FC = () => {
    const stats = [
        { label: "Produção Anual", value: "5k+ Ton", icon: "agriculture" },
        { label: "Rede de Abastecimento", value: "18 Provas", icon: "local_shipping" },
        { label: "Parceiros B2B", value: "120+", icon: "handshake" }
    ];

    return (
        <section className="px-4 lg:px-10 py-10 flex justify-center">
            <StaggerContainer className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <FadeIn key={i} className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 p-10 rounded-[2rem] shadow-xl flex flex-col gap-4 transition-transform hover:-translate-y-2">
                        <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-4xl lg:text-5xl font-black text-primary mb-2">{stat.value}</p>
                            <span className="text-text-muted dark:text-gray-300 font-bold uppercase tracking-wider text-xs">{stat.label}</span>
                        </div>
                    </FadeIn>
                ))}
            </StaggerContainer>
        </section>
    );
};
