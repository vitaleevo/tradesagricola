"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/agro_hero_bg.png"
                    alt="Agronegócio de Excelência em Angola"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="border-l-4 border-primary pl-6 md:pl-10 max-w-[900px]"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-4 sm:mb-6"
                    >
                        Traders Agrícola: Força Motriz do Agronegócio em Angola.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/90 text-sm md:text-2xl font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10"
                    >
                        Líderes na agropecuária, comércio de bens alimentares, insumos agrícolas e soluções sustentáveis para o setor primário.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/servicos" className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 group text-sm lg:text-base">
                            Nossas Soluções
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="material-symbols-outlined"
                            >
                                arrow_forward
                            </motion.span>
                        </Link>
                        <a
                            href="https://wa.me/244923276552"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold rounded-2xl transition-all flex items-center justify-center active:scale-95 text-sm lg:text-base"
                        >
                            Comércio Geral
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
