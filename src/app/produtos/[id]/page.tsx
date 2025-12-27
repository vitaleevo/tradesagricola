import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { featuredProducts } from '@/shared/data/featured-products';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = featuredProducts.find(p => p.id === id);
    if (!product) return { title: 'Produto Não Encontrado' };

    return {
        title: `${product.name} | Traders Agrícola`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [{ url: product.image }]
        }
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = featuredProducts.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    const relatedProducts = featuredProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow pt-28 lg:pt-36 pb-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-10">
                    {/* Breadcrumbs */}
                    <FadeIn direction="down" className="flex mb-8 text-sm" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="text-text-muted hover:text-primary transition-colors">Início</Link></li>
                            <li className="text-text-muted">/</li>
                            <li>
                                <Link
                                    href="/produtos"
                                    className="text-text-muted hover:text-primary transition-colors"
                                >
                                    Produtos
                                </Link>
                            </li>
                            <li className="text-text-muted">/</li>
                            <li>
                                <Link
                                    href={`/produtos?category=${product.category}`}
                                    className="text-text-muted hover:text-primary transition-colors capitalize"
                                >
                                    {product.category === 'reagents' ? 'Laboratorial' : product.category === 'gardening' ? 'Jardinagem' : 'Vasos'}
                                </Link>
                            </li>
                            <li className="text-text-muted">/</li>
                            <li className="font-bold text-primary truncate max-w-[150px] sm:max-w-none">{product.name}</li>
                        </ol>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
                        {/* Product Image Section */}
                        <FadeIn direction="left" className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group shadow-2xl">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </FadeIn>

                        {/* Product Info Section */}
                        <div className="flex flex-col">
                            <FadeIn direction="right">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                        {product.category === 'reagents' ? 'Alta Pureza' : 'Premium Selection'}
                                    </span>
                                    {product.tags?.map(tag => (
                                        <span key={tag} className="px-4 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-text-muted text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight text-text-main dark:text-white">
                                    {product.name}
                                </h1>

                                <p className="text-lg lg:text-xl text-text-muted dark:text-gray-400 mb-10 leading-relaxed italic border-l-4 border-primary/30 pl-6">
                                    "{product.description}"
                                </p>

                                {product.fullDescription && (
                                    <div className="mb-10 text-text-main dark:text-gray-300 leading-relaxed">
                                        {product.fullDescription}
                                    </div>
                                )}

                                {product.specs && (
                                    <div className="mb-12">
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-primary"></span>
                                            Especificações Técnicas
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {product.specs.map((spec, i) => (
                                                <div key={i} className="flex flex-col p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                                    <span className="text-xs text-text-muted font-bold uppercase mb-1">{spec.label}</span>
                                                    <span className="text-text-main dark:text-white font-semibold">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={`https://wa.me/244923276552?text=Olá, gostaria de mais informações sobre o produto: ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
                                    >
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert" alt="WhatsApp" />
                                        Conversar com Especialista
                                    </a>
                                    <a
                                        href="#quote-form"
                                        className="flex-1 py-5 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                                    >
                                        Solicitar Cotação
                                        <span className="material-symbols-outlined">description</span>
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Quotation Form Section */}
                    <FadeIn id="quote-form" className="mb-24 scroll-mt-32">
                        <div className="relative p-8 lg:p-12 rounded-[3.5rem] bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-white/10 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Atendimento B2B</span>
                                    <h2 className="text-3xl lg:text-5xl font-black mb-4">Cotação Corporativa</h2>
                                    <p className="text-text-muted">Preencha os dados abaixo para receber uma proposta personalizada em até 24h.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-text-muted uppercase px-1">Nome Completo</label>
                                            <input
                                                type="text"
                                                className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                                                placeholder="Nome do responsável"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-text-muted uppercase px-1">E-mail Corporativo</label>
                                            <input
                                                type="email"
                                                className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                                                placeholder="contato@empresa.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-text-muted uppercase px-1">Telefone / WhatsApp</label>
                                            <input
                                                type="tel"
                                                className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                                                placeholder="+244 9..."
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-text-muted uppercase px-1">Empresa</label>
                                            <input
                                                type="text"
                                                className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                                                placeholder="Nome da sua organização"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-text-muted uppercase px-1">Mensagem ou Requisitos Específicos</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all resize-none"
                                            placeholder="Detalhe a quantidade desejada, local de entrega ou especificações..."
                                            required
                                        />
                                    </div>

                                    <button className="w-full py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-3xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/30">
                                        Enviar Solicitação Profissional
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <FadeIn>
                            <div className="mb-8 flex items-end justify-between">
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-text-main dark:text-white">Mais da Categoria</h2>
                                    <p className="text-text-muted">Produtos complementares que podem interessar.</p>
                                </div>
                                <Link
                                    href={`/produtos?category=${product.category}`}
                                    className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline"
                                >
                                    Ver Todos
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </Link>
                            </div>

                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((p, i) => (
                                    <FadeIn key={p.id} delay={i * 0.1}>
                                        <Link href={`/produtos/${p.id}`} className="group block">
                                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border border-gray-100 dark:border-white/5 shadow-sm group-hover:shadow-xl transition-all">
                                                <Image
                                                    src={p.image}
                                                    alt={p.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <h3 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors truncate">{p.name}</h3>
                                            <p className="text-sm text-text-muted line-clamp-1">{p.description}</p>
                                        </Link>
                                    </FadeIn>
                                ))}
                            </StaggerContainer>
                        </FadeIn>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
