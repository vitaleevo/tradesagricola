"use client";

import React from 'react';
import Link from 'next/link';
import { ProductGallery } from '@/shared/components/product-gallery';
import { FadeIn } from '@/shared/components/animations';

export const FeaturedShop: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto py-24 px-4 lg:px-10">
                <FadeIn className="text-center mb-12">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
                        Catálogo Premium
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-black mb-4">
                        Produtos em <span className="text-primary">Destaque</span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore nossa seleção de produtos de alta qualidade para jardinagem e decoração, cuidadosamente selecionados para você.
                    </p>
                </FadeIn>

                <div className="space-y-4">
                    <ProductGallery
                        category="gardening"
                        title="Equipamentos e Jardinagem"
                        subtitle="Tudo o que você precisa para manter seu jardim impecável."
                    />

                    <div className="border-t border-gray-100 dark:border-white/5 pt-8">
                        <ProductGallery
                            category="pots"
                            title="Vasos & Ornamentos"
                            subtitle="Design e elegância para transformar seus ambientes."
                        />
                    </div>
                </div>

                <FadeIn className="mt-20 text-center">
                    <Link
                        href="/produtos"
                        className="inline-flex items-center gap-3 px-12 py-5 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 group"
                    >
                        <span>Ver Catálogo Completo</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                    <p className="mt-6 text-xs text-text-muted uppercase tracking-widest font-bold">
                        Mais de 50 itens disponíveis em stock
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
