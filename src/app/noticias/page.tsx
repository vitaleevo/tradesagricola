'use client';

import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { NewsHero, NewsList } from '@/features/news';
import { FadeIn } from '@/shared/components/animations';

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <NewsHero />
                <NewsList />

                <section className="py-24 px-4 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-10 opacity-10">
                                    <span className="material-symbols-outlined text-[150px] rotate-12">mail</span>
                                </div>

                                <span className="bg-white/20 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/10">Newsletter Técnica</span>
                                <h2 className="text-3xl lg:text-5xl font-black text-white text-balance">Receba Actualizações do Sector</h2>
                                <p className="text-lg text-white/80 max-w-xl">
                                    Boletins mensais com tendências de mercado, dicas de produtividade e cotações exclusivas de insumos.
                                </p>
                                <form className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl relative z-10">
                                    <input
                                        type="email"
                                        placeholder="Seu melhor e-mail corporativo"
                                        className="h-16 px-8 bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl flex-grow outline-none focus:bg-white/20 text-white placeholder:text-white/50 backdrop-blur-md transition-all"
                                    />
                                    <button className="h-16 px-10 bg-white text-primary hover:bg-gray-100 font-bold rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95">
                                        Subscrever Gratuitamente
                                    </button>
                                </form>
                                <p className="text-xs text-white/50">Respeitamos a sua privacidade. Cancele a qualquer momento.</p>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
