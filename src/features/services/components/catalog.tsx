"use client";

import React, { useState } from 'react';

type Category = 'Ornamentação' | 'Infraestrutura Verde' | 'Manutenção B2B' | 'Agropecuária';

export const ServicesCatalog: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Category>('Ornamentação');
    const categories: Category[] = ['Ornamentação', 'Infraestrutura Verde', 'Manutenção B2B', 'Agropecuária'];

    const products = {
        'Ornamentação': [
            { title: "Vasos Africanos Kamakupa", desc: "Design artesanal com argila refratária de alta durabilidade.", img: "/images/products/kamakupa.png" },
            { title: "Pedras Decorativas Brancas", desc: "Seixos selecionados para acabamentos de jardins zen e modernos.", img: "/images/products/pedras.png" },
            { title: "Esculturas de Jardim", desc: "Peças exclusivas em pedra esculpida por artesãos locais.", img: "/images/products/esculturas.png" },
            { title: "Vasos de Cimento Premium", desc: "Linha minimalista para ambientes corporativos e lofts.", img: "/images/products/cimento.png" }
        ],
        'Infraestrutura Verde': [
            { title: "Relva Bermuda Tifway", desc: "Tapetes de relva certificados com alta resistência ao pisoteio.", img: "https://picsum.photos/seed/grass/400/300" },
            { title: "Chapas Isoladoras PVC", desc: "Proteção térmica e de raízes para jardins sobre laje.", img: "https://picsum.photos/seed/pvc/400/300" },
            { title: "Sistemas de Rega Automática", desc: "Soluções inteligentes para economia de água e eficiência.", img: "https://picsum.photos/seed/irrigation/400/300" },
            { title: "Geotêxteis para Drenagem", desc: "Filtros de alta performance para contenção de solos.", img: "https://picsum.photos/seed/geo/400/300" }
        ],
        'Manutenção B2B': [
            { title: "Gestão de Condomínios", desc: "Manutenção programada com equipas fixas e uniformizadas.", img: "https://picsum.photos/seed/condo/400/300" },
            { title: "Poda Especializada", desc: "Corte técnico de árvores e arbustos para segurança e estética.", img: "https://picsum.photos/seed/pruning/400/300" },
            { title: "Tratamento Fitossanitário", desc: "Controle biológico de pragas e doenças em áreas urbanas.", img: "https://picsum.photos/seed/bugs/400/300" },
            { title: "Limpeza de Terrenos", desc: "Desmatação e limpeza de grandes lotes com remoção de resíduos.", img: "https://picsum.photos/seed/cleaning/400/300" }
        ],
        'Agropecuária': [
            { title: "Adubos NPK Selecionados", desc: "Fórmulas balanceadas para o solo angolano.", img: "https://picsum.photos/seed/fertilizer/400/300" },
            { title: "Sementes Certificadas", desc: "Milho, feijão e hortícolas de alto rendimento.", img: "https://picsum.photos/seed/seeds/400/300" },
            { title: "Calcário Agrícola", desc: "Correção de acidez para máxima produtividade da colheita.", img: "https://picsum.photos/seed/limestone/400/300" },
            { title: "Implementos Manuais", desc: "Ferramentas de alta resistência para o pequeno e médio produtor.", img: "https://picsum.photos/seed/tools/400/300" }
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
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-1 block">Nosso Portfólio</span>
                            <h2 className="text-3xl font-black">{activeTab}</h2>
                        </div>
                        <p className="text-text-muted dark:text-gray-400 text-sm max-w-xs">Mostrando soluções selecionadas para sua categoria escolhida.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products[activeTab].map((p, i) => (
                            <div key={i} className="bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all group hover:-translate-y-1">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                                </div>
                                <div className="px-2 pb-2">
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                                    <p className="text-xs lg:text-sm text-text-muted dark:text-gray-400 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-primary/5 dark:bg-white/5 rounded-[40px] p-12 border border-primary/10 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-black">Porquê escolher a Traders para <span className="text-primary">{activeTab}</span>?</h2>
                            <div className="space-y-4">
                                {[
                                    { t: "Garantia de Qualidade", d: "Materiais certificados e testados nas condições de Angola." },
                                    { t: "Logística Própria", d: "Entregas rápidas em Luanda e províncias com frota própria." },
                                    { t: "Suporte Técnico", d: "Acompanhamento pós-venda com engenheiros agrónomos." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary fill-icon">verified</span>
                                        <div>
                                            <p className="font-bold">{item.t}</p>
                                            <p className="text-sm text-text-muted dark:text-gray-400">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px]">
                            <img src={`https://picsum.photos/seed/${activeTab}/800/600`} alt="Service focus" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
