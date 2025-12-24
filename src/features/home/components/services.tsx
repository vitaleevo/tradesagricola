import React from 'react';

const services = [
    {
        title: "Paisagismo de Grande Escala",
        desc: "Projetos paisagísticos completos para condomínios, empresas e espaços públicos, integrando beleza natural e funcionalidade urbana.",
        icon: "park",
        img: "/images/home/paisagismo.png"
    },
    {
        title: "Vasos Ornamentais Exclusivos",
        desc: "Uma coleção exclusiva de vasos de alta durabilidade e design sofisticado, perfeitos para interiores e exteriores de prestígio.",
        icon: "potted_plant",
        img: "/images/home/vasos.png"
    },
    {
        title: "Consultoria e Insumos",
        desc: "Suporte técnico especializado para maximizar colheitas e fornecimento de insumos certificados para o setor agropecuário angolano.",
        icon: "science",
        img: "/images/home/agronomia.png"
    }
];

export const HomeServices: React.FC = () => {
    return (
        <section className="py-16 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 lg:mb-16">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">O que fazemos</span>
                        <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight">Nossos Serviços Principais</h2>
                    </div>
                    <p className="max-w-md text-text-muted dark:text-gray-400 text-base md:text-lg hidden sm:block">Soluções integradas para quem exige excelência em paisagismo e agricultura.</p>
                </div>

                <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 -mx-4 px-4 scrollbar-hide snap-x">
                    {services.map((s, i) => (
                        <div key={i} className="min-w-[85vw] sm:min-w-0 snap-center group bg-white dark:bg-surface-dark rounded-[2rem] overflow-hidden shadow-sm border border-transparent active:scale-[0.98] transition-all duration-300">
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col gap-3">
                                <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold">{s.title}</h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                                <a href="#" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs mt-2">
                                    Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
