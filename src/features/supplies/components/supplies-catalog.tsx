"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';
import { labSuppliesData, SupplyCategory, SupplySubcategory, SupplyItem } from '../data/lab-supplies';

export const SuppliesCatalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<SupplyCategory>('Reagentes Físico-Químicos');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

    const categories: { id: SupplyCategory; icon: string; color: string }[] = [
        { id: 'Reagentes Físico-Químicos', icon: 'science', color: '#17cf17' },
        { id: 'Kits para Análise de Água', icon: 'water_drop', color: '#0ea5e9' },
        { id: 'Reagentes para Provas Bioquímicas', icon: 'biotech', color: '#a855f7' },
    ];

    const currentCategory = labSuppliesData.find(c => c.id === activeCategory);

    // Filter items based on search
    const getFilteredItems = () => {
        if (!currentCategory) return [];

        const query = searchQuery.toLowerCase().trim();

        if (currentCategory.items) {
            return query
                ? currentCategory.items.filter(item => item.name.toLowerCase().includes(query))
                : currentCategory.items;
        }

        if (currentCategory.subcategories) {
            return currentCategory.subcategories.map(sub => ({
                ...sub,
                items: query
                    ? sub.items.filter(item => item.name.toLowerCase().includes(query))
                    : sub.items
            })).filter(sub => sub.items.length > 0);
        }

        return [];
    };

    const filteredData = getFilteredItems();
    const hasSubcategories = currentCategory?.subcategories !== undefined;

    return (
        <section id="catalogo" className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
            {/* Category Tabs */}
            <div className="sticky top-[64px] z-40 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 lg:px-10">
                    <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setSearchQuery('');
                                    setExpandedSubcategory(null);
                                }}
                                className={`flex items-center gap-2 px-6 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap ${activeCategory === cat.id
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
                                {cat.id}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-10 mt-12">
                {/* Category Header + Search */}
                <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className="size-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${currentCategory?.color}20` }}
                            >
                                <span
                                    className="material-symbols-outlined text-2xl"
                                    style={{ color: currentCategory?.color }}
                                >
                                    {currentCategory?.icon}
                                </span>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-black">{currentCategory?.title}</h2>
                            </div>
                        </div>
                        <p className="text-text-muted dark:text-gray-400 text-base lg:text-lg max-w-2xl mt-3">
                            {currentCategory?.description}
                        </p>
                    </div>

                    {/* Search */}
                    <div className="w-full lg:w-auto">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Pesquisar produto..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full lg:w-80 h-12 pl-12 pr-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-main dark:text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">close</span>
                                </button>
                            )}
                        </div>
                    </div>
                </FadeIn>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + searchQuery}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {hasSubcategories ? (
                            // Render subcategories (for Bioquímicos)
                            <div className="space-y-8">
                                {(filteredData as SupplySubcategory[]).map((subcategory, idx) => (
                                    <div
                                        key={subcategory.title}
                                        className="bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setExpandedSubcategory(
                                                expandedSubcategory === subcategory.title ? null : subcategory.title
                                            )}
                                            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="size-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-2xl">
                                                        {subcategory.icon}
                                                    </span>
                                                </div>
                                                <div className="text-left">
                                                    <h3 className="text-xl font-bold">{subcategory.title}</h3>
                                                    <p className="text-sm text-text-muted dark:text-gray-400">
                                                        {subcategory.items.length} produtos disponíveis
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`material-symbols-outlined text-2xl text-text-muted transition-transform duration-300 ${expandedSubcategory === subcategory.title ? 'rotate-180 text-primary' : ''
                                                }`}>
                                                expand_more
                                            </span>
                                        </button>

                                        <AnimatePresence>
                                            {expandedSubcategory === subcategory.title && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {subcategory.items.map((item, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group"
                                                            >
                                                                <span className="material-symbols-outlined text-primary text-lg">
                                                                    check_circle
                                                                </span>
                                                                <span className="text-sm font-medium text-text-main dark:text-gray-200 group-hover:text-primary transition-colors">
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Render flat items list
                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {(filteredData as SupplyItem[]).map((item, i) => (
                                    <FadeIn
                                        key={i}
                                        delay={Math.min(i * 0.02, 0.5)}
                                        className="flex items-center gap-3 p-5 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/30 transition-all group hover:-translate-y-1"
                                    >
                                        <div
                                            className="size-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${currentCategory?.color}15` }}
                                        >
                                            <span
                                                className="material-symbols-outlined text-lg"
                                                style={{ color: currentCategory?.color }}
                                            >
                                                {activeCategory === 'Kits para Análise de Água' ? 'science' : 'deployed_code'}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-text-main dark:text-gray-200 group-hover:text-primary transition-colors leading-tight">
                                            {item.name}
                                        </span>
                                    </FadeIn>
                                ))}
                            </StaggerContainer>
                        )}

                        {/* No results */}
                        {filteredData.length === 0 && (
                            <div className="text-center py-20">
                                <span className="material-symbols-outlined text-6xl text-text-muted mb-4">search_off</span>
                                <h3 className="text-xl font-bold mb-2">Nenhum produto encontrado</h3>
                                <p className="text-text-muted dark:text-gray-400">
                                    Tente pesquisar com outros termos ou limpe o filtro.
                                </p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-4 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                                >
                                    Limpar pesquisa
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Summary Card */}
                <FadeIn delay={0.2} className="mt-16 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-purple-500/10 dark:from-primary/20 dark:via-cyan-500/10 dark:to-purple-500/20 rounded-3xl p-10 lg:p-16 border border-primary/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black mb-6">
                                Precisando de <span className="text-primary">Cotação Personalizada</span>?
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                Nossa equipa comercial está pronta para preparar uma proposta sob medida para o seu laboratório. Atendemos instituições públicas, privadas e de ensino em todo o território angolano.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20para%20reagentes%20laboratoriais."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                                >
                                    <span className="material-symbols-outlined">chat</span>
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:comercial@tradersagricola.com?subject=Cotação%20de%20Reagentes%20Laboratoriais"
                                    className="inline-flex items-center gap-3 h-14 px-8 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 font-bold rounded-xl transition-all"
                                >
                                    <span className="material-symbols-outlined">mail</span>
                                    Email
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'verified', label: 'Produtos Certificados', desc: 'Qualidade garantida' },
                                { icon: 'local_shipping', label: 'Entrega Nacional', desc: 'Todo o país' },
                                { icon: 'support_agent', label: 'Suporte Técnico', desc: 'Especializado' },
                                { icon: 'request_quote', label: 'Preços Competitivos', desc: 'Melhores condições' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-3">{item.icon}</span>
                                    <h4 className="font-bold text-sm mb-1">{item.label}</h4>
                                    <p className="text-xs text-text-muted dark:text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
