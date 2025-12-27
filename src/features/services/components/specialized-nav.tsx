"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

const specializedServices = [
    {
        title: 'Jardinagem & Paisagismo',
        description: 'Criação, manutenção e transformação de jardins. Vasos, relvados, materiais e transporte especializado.',
        icon: 'yard',
        color: '#22c55e',
        href: '/jardinagem',
        stats: '35+ Serviços',
        categories: ['Criação de Jardins', 'Vasos', 'Manutenção', 'Materiais']
    },
    {
        title: 'Fornecimentos Laboratoriais',
        description: 'Reagentes físico-químicos, kits de análise de água e meios de cultura para laboratórios.',
        icon: 'science',
        color: '#0ea5e9',
        href: '/fornecimentos',
        stats: '100+ Produtos',
        categories: ['Reagentes', 'Kits de Água', 'Bioquímica']
    },
    {
        title: 'Soluções B2B',
        description: 'Parcerias comerciais, distribuição a grosso e soluções logísticas para empresas.',
        icon: 'business',
        color: '#8b5cf6',
        href: '/b2b',
        stats: 'Parcerias',
        categories: ['Distribuição', 'Logística', 'Contratos']
    }
];

export const SpecializedServicesNav: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 lg:px-10">
                <FadeIn className="text-center mb-12">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
                        Áreas Especializadas
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-black mb-4">
                        Explore os Nossos Serviços
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
                        Além da agropecuária, oferecemos serviços especializados em diversas áreas.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {specializedServices.map((service, i) => (
                        <FadeIn key={service.title} delay={i * 0.1}>
                            <Link
                                href={service.href}
                                className="group block bg-white dark:bg-surface-dark rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="size-16 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <span
                                            className="material-symbols-outlined text-3xl"
                                            style={{ color: service.color }}
                                        >
                                            {service.icon}
                                        </span>
                                    </motion.div>
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-bold"
                                        style={{ backgroundColor: `${service.color}15`, color: service.color }}
                                    >
                                        {service.stats}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-5">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.categories.map((cat, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-text-muted dark:text-gray-300"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                                    Ver Detalhes
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
