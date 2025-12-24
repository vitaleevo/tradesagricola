"use client";

import React from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const ContactInfo: React.FC = () => {
    const info = [
        {
            title: "Sede Administrativa",
            detail: "Av. 4 de Fevereiro, Talatona, Luanda - Angola",
            icon: "location_on",
            sub: "Edifício Sky Center, Piso 3"
        },
        {
            title: "E-mail Comercial",
            detail: "comercial@traders.co.ao",
            icon: "mail",
            sub: "Cotações e Parcerias B2B"
        },
        {
            title: "Suporte Técnico",
            detail: "+244 923 276 552",
            icon: "support_agent",
            sub: "Assistência em Insumos e Logística"
        },
        {
            title: "Horário de Operação",
            detail: "Segunda a Sexta, 08:00 - 18:00",
            icon: "schedule",
            sub: "Sábados sob agendamento prévio"
        }
    ];

    return (
        <div className="flex flex-col gap-8 h-full">
            <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-black mb-2">Canais de Apoio</h2>
                <p className="text-text-muted dark:text-gray-400 mb-8">
                    Escolha o canal mais adequado à sua necessidade. Nossa equipa está pronta para fornecer soluções rápidas e eficientes.
                </p>
            </FadeIn>

            <StaggerContainer>
                <div className="grid grid-cols-1 gap-4 flex-grow">
                    {info.map((item, i) => (
                        <FadeIn key={i}>
                            <div className="flex gap-5 p-6 bg-background-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group">
                                <div className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="font-medium text-text-main dark:text-white">{item.detail}</p>
                                    <p className="text-xs text-text-muted dark:text-gray-500 mt-1 uppercase tracking-widest font-bold">{item.sub}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </StaggerContainer>

            <FadeIn>
                <div className="mt-10 pt-10 border-t border-gray-200 dark:border-white/10">
                    <h4 className="font-black mb-6 uppercase tracking-widest text-sm text-primary">Conecte-se Connosco</h4>
                    <div className="flex gap-4">
                        {[
                            { icon: 'facebook', label: 'Facebook' },
                            { icon: 'photo_camera', label: 'Instagram' },
                            { icon: 'business', label: 'LinkedIn' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className="size-14 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-xl"
                                title={social.label}
                            >
                                <span className="material-symbols-outlined text-2xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};
