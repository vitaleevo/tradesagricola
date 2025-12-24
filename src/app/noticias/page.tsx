import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { NewsHero, NewsList } from '@/features/news';

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <NewsHero />
                <NewsList />

                <section className="py-24 px-4 bg-primary/10 dark:bg-white/5 border-y border-primary/10">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                        <span className="material-symbols-outlined text-5xl text-primary">mail_lock</span>
                        <h2 className="text-3xl lg:text-5xl font-black">Newsletter Técnica</h2>
                        <p className="text-lg text-text-muted dark:text-gray-400">Receba boletins mensais com dicas de manutenção e cotações de insumos diretamente no seu e-mail.</p>
                        <form className="flex flex-col sm:flex-row gap-4 w-full">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail corporativo"
                                className="h-14 px-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl flex-grow outline-none focus:border-primary"
                            />
                            <button className="h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20">Subscrever Agora</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
