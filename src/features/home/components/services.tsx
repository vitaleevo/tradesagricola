"use client";

import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Agropecuária de Precisão",
        desc: "Desenvolvimento sustentável de agricultura, aquicultura e avicultura com tecnologia de ponta para o mercado angolano.",
        icon: "agriculture",
        img: "/agro_hero_bg.png"
    },
    {
        title: "Insumos e Fertilizantes",
        desc: "Comércio especializado de fertilizantes, pesticidas e sementes certificadas para maximizar a produtividade do campo.",
        icon: "science",
        img: "/agro_pesticides_fertilizers.png"
    },
    {
        title: "Comércio Geral B2B",
        desc: "Distribuição a grosso e a retalho de bens alimentares e produtos essenciais com eficiência logística garantida.",
        icon: "shopping_cart",
        img: "/agro_hero_bg.png" // Temporary, reuse or add more later
    },
    {
        title: "Aquicultura e Pesca",
        desc: "Sistemas modernos de produção de peixe e gestão de recursos hídricos para segurança alimentar.",
        icon: "set_meal",
        img: "/agro_aquaculture_fish_farming.png"
    },
    {
        title: "Avicultura e Pecuária",
        desc: "Criação e comércio de aves e gado sob rigorosos padrões sanitários e de nutrição animal.",
        icon: "egg",
        img: "/agro_livestock_aviculture.png"
    },
    {
        title: "Apicultura Sustentável",
        desc: "Produção técnica de mel e derivados, promovendo a biodiversidade e o desenvolvimento rural.",
        icon: "hive",
        img: "/agro_apiculture_honey.png"
    }
];

import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const HomeServices: React.FC = () => {
    return (
        <section className="py-16 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 lg:mb-16">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">O que fazemos</span>
                        <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight">Nossos Serviços Principais</h2>
                    </div>
                    <p className="max-w-md text-text-muted dark:text-gray-400 text-base md:text-lg hidden sm:block">Soluções integradas para quem exige excelência em paisagismo e agricultura.</p>
                </FadeIn>

                <StaggerContainer className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 -mx-4 px-4 scrollbar-hide snap-x">
                    {services.map((s, i) => (
                        <FadeIn key={i} className="min-w-[85vw] sm:min-w-0 snap-center group bg-white dark:bg-surface-dark rounded-[2rem] overflow-hidden shadow-sm border border-transparent active:scale-[0.98] transition-all duration-300">
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                                <Image
                                    src={s.img}
                                    alt={s.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col gap-3">
                                <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold">{s.title}</h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                                <a href="/servicos" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs mt-2 group-hover:gap-3 transition-all">
                                    Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
