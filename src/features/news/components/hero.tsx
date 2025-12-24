"use client";

import React from 'react';
import { FadeIn } from '@/shared/components/animations';

export const NewsHero: React.FC = () => {
    return (
        <section className="bg-background-dark text-white py-24 px-4 lg:px-10 relative overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
                <img src="/agro_hero_bg.png" alt="News background" className="w-full h-full object-cover opacity-30 scale-110 blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
            </div>

            <FadeIn className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10 items-center">
                <span className="bg-primary px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest w-fit">Journal do Agronegócio</span>
                <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Traders <span className="text-primary italic">Journal</span></h1>
                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
                    Actualizações sobre o sector primário em Angola, inovações no comércio de insumos e o impacto da nossa produção nacional.
                </p>
            </FadeIn>
        </section>
    );
};
