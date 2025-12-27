"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';
import { gardeningServicesData, GardeningCategory } from '../data/gardening-services';

export const GardeningCatalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<GardeningCategory>('Jardinagem Geral');

    const categories = gardeningServicesData.map(cat => ({
        id: cat.id,
        icon: cat.icon,
        color: cat.color
    }));

    const currentCategory = gardeningServicesData.find(c => c.id === activeCategory);

    return (
        <section id="servicos" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
            {/* Category Tabs */}
            <div className="sticky top-[64px] z-40 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 lg:px-10">
                    <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap ${activeCategory === cat.id
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-text-muted hover:text-primary'
                                    }`}
                            >
                                <span
                                    className="material-symbols-outlined text-xl"
                                    style={{ color: activeCategory === cat.id ? cat.color : undefined }}
                                >
                                    {cat.icon}
                                </span>
                                <span className="hidden sm:inline">{cat.id}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-10 mt-12">
                {/* Category Header */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FadeIn className="mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="size-14 rounded-2xl flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: `${currentCategory?.color}20` }}
                                >
                                    <span
                                        className="material-symbols-outlined text-3xl"
                                        style={{ color: currentCategory?.color }}
                                    >
                                        {currentCategory?.icon}
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-2xl lg:text-4xl font-black">{currentCategory?.title}</h2>
                                </div>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 text-base lg:text-lg max-w-3xl">
                                {currentCategory?.description}
                            </p>
                        </FadeIn>

                        {/* Services Grid */}
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {currentCategory?.services.map((service, i) => (
                                <FadeIn
                                    key={service.name}
                                    delay={i * 0.1}
                                    className="group bg-white dark:bg-surface-dark rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-5">
                                        <div
                                            className="size-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${currentCategory.color}15` }}
                                        >
                                            <span
                                                className="material-symbols-outlined text-2xl"
                                                style={{ color: currentCategory.color }}
                                            >
                                                check_circle
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {service.name}
                                            </h3>
                                            {service.description && (
                                                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                                                    {service.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </AnimatePresence>

                {/* CTA Card */}
                <FadeIn delay={0.2} className="mt-20 bg-gradient-to-br from-primary to-green-600 rounded-3xl p-10 lg:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                                Pronto para Transformar o Seu Espaço?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                Solicite um orçamento gratuito e sem compromisso. A nossa equipa de especialistas visitará o seu espaço e apresentará a melhor solução para as suas necessidades.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20para%20orçamento%20de%20jardinagem."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 h-14 px-8 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95"
                                >
                                    <span className="material-symbols-outlined">chat</span>
                                    Agendar Visita
                                </a>
                                <a
                                    href="tel:+244923276552"
                                    className="inline-flex items-center gap-3 h-14 px-8 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold rounded-xl transition-all backdrop-blur-sm"
                                >
                                    <span className="material-symbols-outlined">call</span>
                                    Ligar Agora
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'calendar_month', label: 'Visita Gratuita', desc: 'Sem compromisso' },
                                { icon: 'request_quote', label: 'Orçamento Detalhado', desc: 'Preços transparentes' },
                                { icon: 'verified', label: 'Garantia de Qualidade', desc: 'Satisfação garantida' },
                                { icon: 'schedule', label: 'Execução Rápida', desc: 'Cumprimos prazos' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                                    <span className="material-symbols-outlined text-white text-3xl mb-3">{item.icon}</span>
                                    <h4 className="font-bold text-white text-sm mb-1">{item.label}</h4>
                                    <p className="text-xs text-white/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
