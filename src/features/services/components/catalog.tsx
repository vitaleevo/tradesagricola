"use client";

import React, { useState } from 'react';
import { FadeIn, StaggerContainer } from '@/shared/components/animations';

type Category = 'Agropecuária' | 'Insumos e Fertilizantes' | 'Pecuária e Aquicultura' | 'Comércio Alimentar';

export const ServicesCatalog: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Category>('Agropecuária');
    const categories: Category[] = ['Agropecuária', 'Insumos e Fertilizantes', 'Pecuária e Aquicultura', 'Comércio Alimentar'];

    const products = {
        'Agropecuária': [
            { title: "Mecanização e Preparo de Solo", desc: "Serviços técnicos de aragem e preparação de terrenos para cultivo em grande escala.", img: "/agro_hero_bg.png" },
            { title: "Consultoria Agronómica", desc: "Apoio especializado para maximização de colheitas e gestão de culturas.", img: "/agro_seeds.png" },
            { title: "Sistemas de Rega", desc: "Implementação de irrigação moderna para garantir produtividade o ano todo.", img: "/agro_hero_bg.png" },
            { title: "Apicultura Técnica", desc: "Instalação e gestão de apiários para produção profissional de mel.", img: "/agro_apiculture_honey.png" }
        ],
        'Insumos e Fertilizantes': [
            { title: "Fertilizantes NPK", desc: "Insumos balanceados para as necessidades específicas das terras angolanas.", img: "/agro_pesticides_fertilizers.png" },
            { title: "Pesticidas e Herbicidas", desc: "Proteção eficaz contra pragas com produtos certificados e seguros.", img: "/agro_pesticides_fertilizers.png" },
            { title: "Sementes Selecionadas", desc: "Variedades de milho, feijão e hortícolas de alto rendimento.", img: "/agro_seeds.png" },
            { title: "Calcário Agrícola", desc: "Correção de pH para garantir a fertilidade e saúde do solo.", img: "/agro_pesticides_fertilizers.png" }
        ],
        'Pecuária e Aquicultura': [
            { title: "Aquicultura Industrial", desc: "Sistemas fechados e abertos para criação de peixe de alta qualidade.", img: "/agro_aquaculture_fish_farming.png" },
            { title: "Avicultura de Escala", desc: "Instalações modernas para produção de frango de corte e postura.", img: "/agro_livestock_aviculture.png" },
            { title: "Nutrição Animal", desc: "Rações e suplementos para gado e aves com foco em produtividade.", img: "/agro_livestock_aviculture.png" },
            { title: "Gestão Pecuária", desc: "Consultoria técnica para manejo de gado e pequenos ruminantes.", img: "/agro_hero_bg.png" }
        ],
        'Comércio Alimentar': [
            { title: "Comércio Geral a Grosso", desc: "Distribuição de bens alimentares essenciais (arroz, óleo, farinha) para revenda.", img: "/agro_seeds.png" },
            { title: "Distribuição Alimentar", desc: "Logística eficiente para abastecimento de retalho em todo o país.", img: "/agro_hero_bg.png" },
            { title: "Produtos Derivados", desc: "Comercialização de mel, peixe e carne provenientes da nossa produção.", img: "/agro_apiculture_honey.png" },
            { title: "Soluções Logísticas", desc: "Transporte especializado para produtos agrícolas e bens de consumo.", img: "/agro_hero_bg.png" }
        ]
    };

    return (
        <>
            <div className="sticky top-[64px] z-40 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10 overflow-x-auto shadow-sm">
                <div className="max-w-7xl mx-auto px-4 lg:px-10 flex min-w-max">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-5 text-sm font-bold border-b-4 transition-all ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-primary'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-10 mt-16 flex flex-col gap-24">
                <section key={activeTab}>
                    <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-1 block">Nosso Portfolio Técnico</span>
                            <h2 className="text-3xl lg:text-5xl font-black">{activeTab}</h2>
                        </div>
                        <p className="text-text-muted dark:text-gray-400 text-sm max-w-sm lg:text-base leading-relaxed">Mostrando soluções especializadas para o agronegócio e comércio angolano.</p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products[activeTab].map((p, i) => (
                            <FadeIn key={`${activeTab}-${i}`} className="bg-white dark:bg-surface-dark p-4 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all group hover:-translate-y-2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="px-2 pb-4">
                                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
                                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </StaggerContainer>
                </section>

                <FadeIn className="bg-primary/5 dark:bg-white/5 rounded-[3rem] p-10 lg:p-20 border border-primary/10 mb-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl lg:text-5xl font-black leading-tight">Excelência <span className="text-primary">Garantida</span> em Toda a Cadeia</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Padrões Internacionais", d: "Insumos e processos que seguem rigorosas normas de qualidade e produtividade." },
                                    { t: "Logística Integrada", d: "Frota própria treinada para o transporte de sementes, animais e bens sensíveis." },
                                    { t: "Consultoria no Terreno", d: "Acompanhamento técnico para garantir que a sua produção atinja o potencial máximo." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{item.t}</p>
                                            <p className="text-base text-text-muted dark:text-gray-400">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                            <img src="/agro_hero_bg.png" alt="Service focus" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </>
    );
};
