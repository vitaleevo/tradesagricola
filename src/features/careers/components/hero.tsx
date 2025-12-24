"use client";

import React from 'react';
import { FadeIn } from '@/shared/components/animations';

export const CareersHero: React.FC = () => {
    return (
        <section className="bg-background-dark text-white py-24 lg:py-32 px-4 lg:px-40 relative overflow-hidden flex items-center min-h-[450px]">
            <div className="absolute inset-0 z-0">
                <img
                    src="/agro_hero_bg.png"
                    alt="Team work on fields"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/80 to-background-dark"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                <FadeIn>
                    <span className="bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest w-fit mb-6 mx-auto block">
                        Trabalhe Connosco
                    </span>
                    <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                        Cultive o seu Futuro na <span className="text-primary italic">Traders</span>
                    </h1>
                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium mx-auto leading-relaxed">
                        Buscamos talentos apaixonados pelo sector produtivo e pela excelência comercial para impulsionar a segurança alimentar em Angola.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
