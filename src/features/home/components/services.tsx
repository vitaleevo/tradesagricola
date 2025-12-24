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
        <section className="py-20 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">O que fazemos</span>
                        <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight">Nossos Serviços Principais</h2>
                    </div>
                    <p className="max-w-md text-text-muted dark:text-gray-400 text-lg">Soluções integradas para quem exige excelência em paisagismo e agricultura.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
                            <div className="relative h-64 overflow-hidden">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold">{s.title}</h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm lg:text-base">{s.desc}</p>
                                <a href="#" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs group-hover:underline mt-4">
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
