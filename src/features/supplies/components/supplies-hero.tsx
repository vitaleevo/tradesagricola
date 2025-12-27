"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/shared/components/animations';

export const SuppliesHero: React.FC = () => {
    return (
        <section className="bg-background-dark text-white py-24 lg:py-32 px-4 lg:px-10 relative overflow-hidden min-h-[550px] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-600/20"></div>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="lab-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.3" />
                            <path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lab-pattern)" />
                </svg>
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-20 right-20 text-primary/40 hidden lg:block"
            >
                <span className="material-symbols-outlined text-[120px]">science</span>
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-40 text-cyan-400/30 hidden lg:block"
            >
                <span className="material-symbols-outlined text-[80px]">water_drop</span>
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-40 left-[60%] text-purple-400/30 hidden lg:block"
            >
                <span className="material-symbols-outlined text-[60px]">biotech</span>
            </motion.div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                            Fornecimentos Laboratoriais
                        </span>
                        <span className="bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-400 text-xs font-bold">
                            +100 Produtos
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl mb-6">
                        Reagentes e <span className="text-primary italic">Kits de Análise</span> para Laboratórios
                    </h1>

                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed mb-10">
                        Fornecemos reagentes físico-químicos, kits para análise de água e meios de cultura para laboratórios de controle de qualidade, pesquisa e produção em Angola.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20solicitar%20cotação%20de%20reagentes%20laboratoriais."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Solicitar Cotação
                        </a>
                        <a
                            href="#catalogo"
                            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all"
                        >
                            <span className="material-symbols-outlined">inventory_2</span>
                            Ver Catálogo
                        </a>
                    </div>
                </FadeIn>

                {/* Stats Row */}
                <FadeIn delay={0.3} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Reagentes', value: '60+', icon: 'science' },
                        { label: 'Kits de Água', value: '34+', icon: 'water_drop' },
                        { label: 'Meios de Cultura', value: '18+', icon: 'biotech' },
                        { label: 'Entrega Nacional', value: '18 Províncias', icon: 'local_shipping' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white">{stat.value}</p>
                                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </FadeIn>
            </div>
        </section>
    );
};
