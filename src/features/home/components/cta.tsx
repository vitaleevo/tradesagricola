"use client";

import React from 'react';

import { FadeIn } from '@/shared/components/animations';

export const HomeCTA: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-primary overflow-hidden">
            <FadeIn className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                <h2 className="text-3xl md:text-5xl font-black text-[#111811] leading-tight">Pronto para transformar seu espaço?</h2>
                <p className="text-xl text-[#111811]/80 font-medium">Seja para um projeto paisagístico ou consultoria agrícola, temos a solução ideal.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="h-14 px-10 bg-[#111811] hover:bg-black text-white font-bold rounded-xl shadow-2xl transition-all active:scale-95">
                        Solicitar Orçamento Gratuito
                    </button>
                    <a
                        href="https://wa.me/244923276552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 px-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/30 text-[#111811] font-bold rounded-xl transition-all flex items-center justify-center active:scale-95"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};
