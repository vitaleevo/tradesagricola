"use client";

import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/shared/components/animations';

export const AboutHero: React.FC = () => {
    return (
        <section className="px-4 lg:px-10 py-10 flex justify-center">
            <FadeIn className="w-full max-w-7xl rounded-[2.5rem] overflow-hidden relative min-h-[500px] flex items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(/agro_hero_bg.png)` }}>
                <div className="z-10 flex flex-col gap-6 max-w-3xl">
                    <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight">Liderança no Agronegócio</h1>
                    <p className="text-gray-200 text-lg lg:text-xl font-medium max-w-2xl mx-auto">
                        A Traders Agrícola une tecnologia de produção regional com uma rede de distribuição global para o progresso de Angola.
                    </p>
                    <Link href="/historia" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold w-fit mx-auto transition-all shadow-xl shadow-primary/30 active:scale-95">
                        Conheça Nossa Jornada
                    </Link>
                </div>
            </FadeIn>
        </section>
    );
};
