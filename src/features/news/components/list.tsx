"use client";

import React from 'react';
import Link from 'next/link';
import { articles } from '@/shared/data/articles';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const NewsList: React.FC = () => {
    return (
        <section className="py-24 px-4 lg:px-40 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((a, i) => (
                            <FadeIn key={i}>
                                <Link href={`/noticias/${a.slug}`} className="group cursor-pointer block h-full">
                                    <article className="flex flex-col h-full">
                                        <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-xl">
                                            <img
                                                src={a.img}
                                                alt={a.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-primary uppercase tracking-widest border border-white/20">
                                                    {a.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 flex-grow px-2">
                                            <div className="flex items-center gap-2 text-xs font-bold text-text-muted dark:text-gray-500 uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                                                {a.date}
                                            </div>
                                            <h3 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">
                                                {a.title}
                                            </h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                                {a.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm mt-auto pt-4 group-hover:translate-x-2 transition-transform">
                                                Ler Artigo Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
};
