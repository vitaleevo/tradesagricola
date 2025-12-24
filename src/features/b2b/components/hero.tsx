"use client";

import React from 'react';
import { FadeIn } from '@/shared/components/animations';

export const B2BHero: React.FC = () => {
    return (
        <section className="bg-background-dark text-white py-24 px-4 lg:px-10 relative overflow-hidden flex items-center min-h-[500px]">
            <div className="absolute inset-0 z-0">
                <img src="/agro_hero_bg.png" alt="B2B Agro business" className="w-full h-full object-cover opacity-40 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 relative z-10">
                <FadeIn direction="left">
                    <span className="bg-primary px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest w-fit mb-4 block">Parcerias Corporativas</span>
                    <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl mb-6">Eficiência em Escala para o seu <span className="text-primary italic">Negócio</span></h1>
                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
                        Fornecimento industrial de cereais, carnes, peixe e insumos agrícolas. Logística própria e contratos B2B desenhados para a sua necessidade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-95">Solicitar Cotação B2B</button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold backdrop-blur-md border border-white/20 transition-all active:scale-95">Nossas Provas de Entrega</button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
