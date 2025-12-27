"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/shared/components/animations';

export const GardeningHero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/agro_hero_bg.png"
                    alt="Paisagismo profissional em Angola"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-32 right-24 hidden lg:block"
            >
                <div className="size-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">eco</span>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 right-48 hidden lg:block"
            >
                <div className="size-16 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-400 text-3xl">grass</span>
                </div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-10 w-full py-20">
                <FadeIn>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                            Jardinagem & Paisagismo
                        </span>
                        <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80 text-xs font-bold">
                            +10 Anos de Experiência
                        </span>
                    </div>

                    <h1 className="text-white text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl mb-6">
                        Transformamos <span className="text-primary italic">Espaços</span> em Jardins de Sonho
                    </h1>

                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed mb-10">
                        Serviços completos de jardinagem e paisagismo para residências, empresas e espaços públicos. Da criação à manutenção, cuidamos do verde em Angola.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20de%20jardinagem."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Pedir Orçamento
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all"
                        >
                            <span className="material-symbols-outlined">yard</span>
                            Ver Serviços
                        </a>
                    </div>
                </FadeIn>

                {/* Features Row */}
                <FadeIn delay={0.3} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {[
                        { label: 'Jardins Criados', value: '500+', icon: 'yard' },
                        { label: 'Clientes Satisfeitos', value: '300+', icon: 'groups' },
                        { label: 'Experiência', value: '+10 Anos', icon: 'workspace_premium' },
                        { label: 'Cobertura', value: 'Nacional', icon: 'location_on' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-black text-white">{stat.value}</p>
                                <p className="text-xs lg:text-sm text-gray-400 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </FadeIn>
            </div>
        </section>
    );
};
