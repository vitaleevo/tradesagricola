"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/shared/components/animations';

const labCategories = [
    {
        title: 'Reagentes Físico-Químicos',
        count: '60+',
        icon: 'science',
        color: '#17cf17',
        examples: ['Ácidos', 'Sais', 'Solventes', 'Indicadores']
    },
    {
        title: 'Kits de Análise de Água',
        count: '34+',
        icon: 'water_drop',
        color: '#0ea5e9',
        examples: ['Metais', 'Nutrientes', 'CSB/TOC', 'Dureza']
    },
    {
        title: 'Reagentes Bioquímicos',
        count: '18+',
        icon: 'biotech',
        color: '#a855f7',
        examples: ['Meios de Cultura', 'Agares', 'Testes Rápidos']
    }
];

export const LabSupplies: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 px-4 lg:px-10 bg-white dark:bg-background-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
                            Novo Serviço
                        </span>
                        <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight mb-4">
                            Fornecimentos <span className="text-primary">Laboratoriais</span>
                        </h2>
                        <p className="text-text-muted dark:text-gray-400 text-base md:text-lg">
                            Reagentes, kits de análise e meios de cultura para laboratórios de controle de qualidade, pesquisa e produção em Angola.
                        </p>
                    </div>
                    <Link
                        href="/fornecimentos"
                        className="hidden lg:flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Ver Catálogo Completo
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {labCategories.map((cat, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <Link
                                href="/fornecimentos"
                                className="group block bg-background-light dark:bg-surface-dark rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="size-16 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={{ backgroundColor: `${cat.color}20` }}
                                    >
                                        <span
                                            className="material-symbols-outlined text-3xl"
                                            style={{ color: cat.color }}
                                        >
                                            {cat.icon}
                                        </span>
                                    </motion.div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-text-main dark:text-white">{cat.count}</span>
                                        <p className="text-xs text-text-muted dark:text-gray-400 font-medium">produtos</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {cat.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cat.examples.map((ex, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-text-muted dark:text-gray-300"
                                        >
                                            {ex}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                                    Ver produtos
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                {/* Mobile CTA */}
                <FadeIn className="mt-10 lg:hidden">
                    <Link
                        href="/fornecimentos"
                        className="flex items-center justify-center gap-2 w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        Ver Catálogo Completo
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};
