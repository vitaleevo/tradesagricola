import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { B2BHero, B2BWorkflow } from '@/features/b2b';

export default function B2BPage() {
    const pillars = [
        { title: "Manutenção Predial e de Áreas Verdes", desc: "Equipas uniformizadas e qualificadas para cuidar do seu património continuamente.", icon: "apartment" },
        { title: "Consultoria em Sustentabilidade", desc: "Integração de jardins verticais e sistemas de economia circular de água.", icon: "energy_savings_leaf" },
        { title: "Fornecimento em Larga Escala", desc: "Preços especiais para encomendas volumosas de vasos e insumos agrícolas.", icon: "inventory_2" }
    ];

    const projects = [
        { title: "Condomínio Dolce Vita", location: "Talatona", img: "https://picsum.photos/seed/condo1/800/600", category: "Manutenção" },
        { title: "Sede Banco Económico", location: "Luanda", img: "https://picsum.photos/seed/bank/800/600", category: "Paisagismo" },
        { title: "Residencial Austin", location: "Camama", img: "https://picsum.photos/seed/resid/800/600", category: "Consultoria" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <B2BHero />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-[#1a2c1a]">
                    <div className="max-w-7xl mx-auto flex flex-col gap-16">
                        <div className="max-w-3xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossos Pilares</span>
                            <h2 className="text-3xl lg:text-5xl font-black mb-6">Soluções Pensadas para Grande Escala</h2>
                            <p className="text-lg text-text-muted dark:text-gray-400">Entendemos os desafios de gerir grandes infraestruturas. A nossa abordagem foca-se na autonomia e redução de custos operacionais.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pillars.map((p, i) => (
                                <div key={i} className="p-10 rounded-3xl bg-background-light dark:bg-background-dark/50 border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all group">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">{p.icon}</span>
                                    <h3 className="text-xl font-black mb-4">{p.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <B2BWorkflow />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Portfólio B2B</span>
                                <h2 className="text-3xl lg:text-5xl font-black">Projetos de Referência</h2>
                            </div>
                            <button className="text-primary font-bold flex items-center gap-2 hover:underline">Ver todos os casos de estudo <span className="material-symbols-outlined">arrow_outward</span></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((p, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-1 rounded mb-2 block w-fit">{p.category}</span>
                                            <h3 className="text-xl font-bold">{p.title}</h3>
                                            <p className="text-sm text-gray-300">{p.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
