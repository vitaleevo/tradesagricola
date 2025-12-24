"use client";

import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import Link from 'next/link';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export default function HistoriaPage() {
    const timeline = [
        {
            year: "2015",
            title: "Fundação e Visão",
            desc: "A Traders Agrícola nasce em Luanda com o foco no comércio geral, identificando a necessidade crítica de insumos de qualidade para o campo angolano."
        },
        {
            year: "2017",
            title: "Pioneirismo em Fertilizantes",
            desc: "Iniciamos a importação e distribuição especializada de fertilizantes e pesticidas, tornando-nos um player chave para os produtores nacionais."
        },
        {
            year: "2019",
            title: "Expansão para Agropecuária",
            desc: "Lançamento dos nossos próprios polos de produção agrícola e pecuária, focando na autossuficiência e segurança alimentar."
        },
        {
            year: "2021",
            title: "Aquicultura e Avicultura",
            desc: "Diversificação para a produção intensiva de peixe e criação de aves, integrando tecnologia de ponta no manejo animal."
        },
        {
            year: "2023",
            title: "Logística e Comércio a Grosso",
            desc: "Consolidação da rede de distribuição a grosso e a retalho de bens alimentares, garantindo que o produto chegue com frescura a todo o país."
        },
        {
            year: "2024",
            title: "Inovação e Consultoria B2B",
            desc: "Expansão para serviços de consultoria técnica agronómica e parcerias estratégicas para o desenvolvimento do agronegócio em Angola."
        }
    ];

    const values = [
        { icon: "agriculture", title: "Excelência Produtiva", desc: "Compromisso com os mais altos padrões de produção agropecuária." },
        { icon: "handshake", title: "Integridade Comercial", desc: "Relações de confiança no comércio a grosso e a retalho." },
        { icon: "science", title: "Rigor Técnico", desc: "Aplicação de ciência no uso de fertilizantes e pesticidas." },
        { icon: "groups", title: "Segurança Alimentar", desc: "Trabalhamos para garantir que alimentos de qualidade cheguem a todos os angolanos." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[50vh] min-h-[500px] overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <img
                        src="/agro_hero_bg.png"
                        alt="Traders Agrícola História"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
                        <FadeIn direction="left">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <span className="material-symbols-outlined">history_edu</span>
                                <span className="text-sm font-bold uppercase tracking-wider">A Nossa Jornada</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
                                Raízes Fortes, Futuro Próspero no Agronegócio
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                Desde 2015, a Traders Agrícola tem sido o parceiro de confiança para o agricultor angolano, do comércio de insumos à produção agropecuária de escala.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 px-4 lg:px-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        <FadeIn direction="left" className="bg-primary/5 dark:bg-primary/10 p-10 lg:p-16 rounded-[2.5rem] border-l-8 border-primary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">flag</span>
                                </div>
                                <h2 className="text-3xl font-black">Nossa Missão</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-lg">
                                Impulsionar o sector primário angolano através do fornecimento de insumos de alta performance, produção agropecuária sustentável e comércio eficiente de bens alimentares, contribuindo directamente para a segurança alimentar do país.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" className="bg-surface-dark/5 dark:bg-surface-dark/10 p-10 lg:p-16 rounded-[2.5rem] border-l-8 border-gray-400">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-14 rounded-2xl bg-gray-400 text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">visibility</span>
                                </div>
                                <h2 className="text-3xl font-black">Nossa Visão</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-lg">
                                Ser a principal referência no agronegócio e comércio geral em Angola, reconhecida pela excelência em toda a cadeia de valor, da produção ao prato do consumidor.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 px-4 lg:px-10 bg-background-light dark:bg-[#111811]">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn className="text-center mb-20">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Trajectória</span>
                            <h2 className="text-3xl md:text-5xl font-black">Marcos de Evolução</h2>
                        </FadeIn>

                        <StaggerContainer className="relative">
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-1/2"></div>

                            {timeline.map((item, index) => (
                                <FadeIn key={index} direction={index % 2 === 0 ? "right" : "left"} className={`relative flex flex-col md:flex-row gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} pl-16 md:pl-0`}>
                                        <div className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] shadow-xl border border-transparent hover:border-primary/20 transition-all">
                                            <span className="text-primary font-black text-5xl mb-4 block">{item.year}</span>
                                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                            <p className="text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 top-12 border-4 border-white dark:border-background-dark shadow-lg shadow-primary/20"></div>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Values */}
                <section className="py-24 px-4 lg:px-10 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn className="text-center mb-20">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">O Que Nos Move</span>
                            <h2 className="text-3xl md:text-5xl font-black">Nossos Princípios</h2>
                        </FadeIn>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((v, i) => (
                                <FadeIn key={i} className="text-center p-10 rounded-[2rem] bg-background-light dark:bg-surface-dark hover:shadow-2xl transition-all border border-transparent hover:border-primary/10">
                                    <div className="size-20 mx-auto rounded-3xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined text-4xl">{v.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">{v.desc}</p>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4 bg-primary">
                    <FadeIn className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                        <h2 className="text-3xl md:text-5xl font-black text-[#111811] leading-tight">Faça Parte da Nossa História</h2>
                        <p className="text-xl text-[#111811]/80 font-medium">Convidamo-lo a construir um agronegócio mais forte e sustentável para Angola.</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="https://wa.me/244923276552"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-14 px-10 bg-[#111811] hover:bg-black text-white font-bold rounded-xl shadow-2xl transition-all active:scale-95 flex items-center justify-center"
                            >
                                Solicitar Parceria
                            </a>
                            <Link href="/servicos" className="h-14 px-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/30 text-[#111811] font-bold rounded-xl transition-all flex items-center justify-center active:scale-95">
                                Ver Soluções
                            </Link>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}
