"use client";

import React from 'react';
import { FadeIn } from '@/shared/components/animations';

export const ContactHero: React.FC = () => {
    return (
        <section className="bg-background-dark text-white py-24 px-4 lg:px-10 relative overflow-hidden flex items-center min-h-[400px]">
            <div className="absolute inset-0 z-0">
                <img src="/agro_hero_bg.png" alt="Contact background" className="w-full h-full object-cover opacity-20 scale-110 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 relative z-10">
                <FadeIn direction="up">
                    <span className="bg-primary px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest w-fit mb-4 block">Contacto & Parcerias</span>
                    <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Prontos para <span className="text-primary italic">Impulsionar</span> a sua Produção</h1>
                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
                        Seja para cotações de insumos, parcerias de escoamento ou serviços técnicos, nossa equipa especializada está à sua disposição.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
