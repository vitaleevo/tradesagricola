"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer } from './animations';
import { featuredProducts, FeaturedProduct } from '../data/featured-products';

interface ProductGalleryProps {
    category: 'reagents' | 'gardening' | 'pots';
    title: string;
    subtitle?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ category, title, subtitle }) => {
    const products = featuredProducts.filter(p => p.category === category);

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-10">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-2xl lg:text-4xl font-black mb-4 truncate">{title}</h2>
                    {subtitle && <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.map((product, i) => (
                        <FadeIn key={product.id} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative bg-white dark:bg-surface-dark rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
                            >
                                <Link href={`/produtos/${product.id}`} className="block relative">
                                    <div className="aspect-square relative overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="px-4 py-2 bg-white/90 dark:bg-black/80 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                                Detalhes
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-5 flex-grow">
                                    <Link href={`/produtos/${product.id}`}>
                                        <h3 className="font-bold text-sm lg:text-base mb-2 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-xs text-text-muted dark:text-gray-400 line-clamp-2">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="px-5 pb-5 mt-auto">
                                    <Link href={`/produtos/${product.id}`}>
                                        <button className="w-full py-2 bg-gray-50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary rounded-xl text-xs font-bold transition-all border border-transparent">
                                            Solicitar Cotação
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
