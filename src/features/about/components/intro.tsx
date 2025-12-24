"use client";

import React from 'react';
import { FadeIn } from '@/shared/components/animations';

export const AboutIntro: React.FC = () => {
    return (
        <section className="px-4 lg:px-10 py-16 flex justify-center">
            <div className="w-full max-w-7xl flex flex-col gap-10">
                <FadeIn direction="left" className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined font-bold">corporate_fare</span>
                    <span className="text-sm font-bold uppercase tracking-wider">A Traders Agrícola</span>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight max-w-5xl">
                        A Traders Agrícola – Prestação de Serviços, Lda é uma organização multidisciplinar angolana focada na segurança alimentar e no comércio estratégico.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <FadeIn direction="right" delay={0.2}>
                        <p className="text-text-muted dark:text-gray-400 text-lg lg:text-xl leading-relaxed">
                            Nascemos da visão de integrar toda a cadeia de valor agrícola. Não apenas produzimos, mas garantimos que a agricultura comercial seja viável através do fornecimento de sementes, fertilizantes e pesticidas de excelência internacional.
                        </p>
                    </FadeIn>
                    <FadeIn direction="right" delay={0.3}>
                        <p className="text-text-muted dark:text-gray-400 text-lg lg:text-xl leading-relaxed">
                            A nossa actuação estende-se ao comércio geral a grosso e a retalho, operando com logística própria para o escoamento de bens alimentares, pecuária e produtos da aquicultura, apicultura e avicultura para o mercado interno e externo.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
