import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-2xl w-full text-center flex flex-col items-center gap-8">
                    <div className="relative">
                        <span className="text-[150px] lg:text-[200px] font-black text-primary/10 select-none">404</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-7xl lg:text-9xl text-primary animate-bounce">
                                agriculture
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl lg:text-5xl font-black text-text-main dark:text-white">
                            Campo Não Encontrado
                        </h1>
                        <p className="text-lg text-text-muted dark:text-gray-400 max-w-md mx-auto">
                            Parece que você se desviou do caminho. A página que você procura não existe ou foi movida para uma nova área de cultivo.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                        >
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Voltar ao Início
                        </Link>
                        <Link
                            href="/contato"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
                        >
                            Falar com Suporte
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
