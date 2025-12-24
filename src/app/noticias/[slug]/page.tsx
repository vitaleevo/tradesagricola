import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { articles } from '@/shared/data/articles';
import Link from 'next/link';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'Artigo Não Encontrado',
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.img],
        },
    };
}

export async function generateStaticParams() {
    return articles.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                    <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
                        <div className="max-w-4xl mx-auto">
                            <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    {article.date}
                                </span>
                                <span>|</span>
                                <span>Por Traders Agrícola</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 px-4 lg:px-40">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {article.content}
                        </div>

                        {/* Share / Navigation */}
                        <div className="border-t border-gray-200 dark:border-white/10 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                            <Link
                                href="/noticias"
                                className="flex items-center gap-2 text-primary font-bold hover:underline transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                Voltar para Notícias
                            </Link>

                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-text-muted">Partilhar:</span>
                                <button className="size-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-sm">share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
