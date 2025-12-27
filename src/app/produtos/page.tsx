import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { featuredProducts } from '@/shared/data/featured-products';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Catálogo de Produtos | Traders Agrícola',
    description: 'Explore nossa linha completa de reagentes laboratoriais, equipamentos de jardinagem e vasos ornamentais premium.',
};

function ProductsContent({ categoryFilter }: { categoryFilter?: string }) {
    const categories = [
        { id: 'all', label: 'Todos os Produtos' },
        { id: 'reagents', label: 'Laboratorial' },
        { id: 'gardening', label: 'Jardinagem' },
        { id: 'pots', label: 'Vasos & Decor' },
    ];

    const filteredProducts = categoryFilter && categoryFilter !== 'all'
        ? featuredProducts.filter(p => p.category === categoryFilter)
        : featuredProducts;

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
            {/* Header */}
            <FadeIn className="text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Catálogo Completo</span>
                <h1 className="text-4xl lg:text-7xl font-black mb-6 text-text-main dark:text-white">
                    Alta Performance em <span className="text-primary text-gradient">Cada Detalhe</span>
                </h1>
                <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    Seja para laboratórios de precisão ou para o paisagismo mais exigente, oferecemos soluções com garantia de qualidade Traders Agrícola.
                </p>
            </FadeIn>

            {/* Category Toggle */}
            <FadeIn direction="up" className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={cat.id === 'all' ? '/produtos' : `/produtos?category=${cat.id}`}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${(categoryFilter === cat.id || (!categoryFilter && cat.id === 'all'))
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-text-muted hover:border-primary/50'
                            }`}
                    >
                        {cat.label}
                    </Link>
                ))}
            </FadeIn>

            {/* Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {filteredProducts.map((product, i) => (
                    <FadeIn key={product.id} delay={i * 0.05}>
                        <Link
                            href={`/produtos/${product.id}`}
                            className="group flex flex-col h-full bg-white dark:bg-surface-dark rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full">
                                        Explorar Detalhes
                                    </span>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-7 flex flex-col flex-grow">
                                <h3 className="text-xl font-black mb-3 text-text-main dark:text-white group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-2 mb-6">
                                    {product.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Qualidade Certificada</span>
                                    <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </StaggerContainer>

            {/* Newsletter / CTA */}
            <FadeIn className="mb-24 py-16 px-8 rounded-[4rem] bg-primary relative overflow-hidden text-center text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-black mb-6">Não encontrou o que procurava?</h2>
                    <p className="text-white/80 text-lg mb-10">
                        Trabalhamos com encomendas personalizadas e fornecimento em larga escala para projetos industriais e corporativos.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-10 py-5 bg-white text-primary font-black rounded-2xl hover:scale-105 transition-all shadow-xl"
                    >
                        Solicitar Assistência Técnica
                    </Link>
                </div>
            </FadeIn>
        </div>
    );
}

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const { category } = await searchParams;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow pt-32 lg:pt-44">
                <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div></div>}>
                    <ProductsContent categoryFilter={category} />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
