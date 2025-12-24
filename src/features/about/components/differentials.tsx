"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const AboutDifferentials: React.FC = () => {
    const features = [
        {
            title: "Logística Dominante",
            desc: "Rede própria de transporte para garantir o escoamento de bens alimentares e a entrega pontual de fertilizantes e pesticidas em todo o país.",
            icon: "local_shipping",
            img: "/agro_hero_bg.png"
        },
        {
            title: "Expertise em Insumos",
            desc: "Parcerias com fabricantes globais para fornecer o que há de mais moderno em nutrição e protecção de culturas.",
            icon: "science",
            img: "/agro_pesticides_fertilizers.png"
        },
        {
            title: "Domínio Produtivo",
            desc: "Controle total da cadeia produtiva, desde a criação animal (aves, gado, peixe) até a distribuição a grosso e a retalho.",
            icon: "inventory",
            img: "/agro_livestock_aviculture.png"
        }
    ];

    return (
        <section className="px-4 lg:px-10 py-24 flex justify-center bg-background-light dark:bg-[#111811]">
            <div className="w-full max-w-7xl">
                <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-gray-200 dark:border-white/10 pb-12 mb-16">
                    <div className="max-w-xl flex flex-col gap-4">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Por que nós?</span>
                        <h2 className="text-4xl lg:text-5xl font-black">Nossos Diferenciais Estratégicos</h2>
                        <p className="text-text-muted dark:text-gray-400 text-lg">Unimos infraestrutura própria com conhecimento técnico profundo.</p>
                    </div>
                    <Link href="/servicos" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-95">
                        Ver Soluções Completas
                    </Link>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                    {features.map((f, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.1} className="flex flex-col gap-6 group">
                            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                <Image
                                    src={f.img}
                                    alt={f.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                            <div className="flex flex-col gap-4 px-2">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined text-2xl">{f.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold">{f.title}</h3>
                                </div>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm lg:text-base">{f.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
