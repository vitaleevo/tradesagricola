import React from 'react';

export const NewsList: React.FC = () => {
    const articles = [
        {
            title: "5 Tendências de Paisagismo para 2024",
            excerpt: "Como integrar elementos naturais e sustentáveis no design urbano de Luanda.",
            date: "20 Dez 2023",
            category: "Tendências",
            img: "https://picsum.photos/seed/garden1/800/600"
        },
        {
            title: "O Impacto da Calagem nos Solos do Planalto Central",
            excerpt: "Estudo técnico sobre como a correção da acidez pode duplicar a colheita de milho.",
            date: "15 Dez 2023",
            category: "Técnico",
            img: "https://picsum.photos/seed/maize/800/600"
        },
        {
            title: "Traders Agrícola Expande Frota para Luanda Sul",
            excerpt: "Novos camiões garantem entrega recorde de inertes e materiais de manutenção.",
            date: "10 Dez 2023",
            category: "Empresa",
            img: "https://picsum.photos/seed/trucks/800/600"
        }
    ];

    return (
        <section className="py-24 px-4 lg:px-40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((a, i) => (
                    <article key={i} className="group cursor-pointer">
                        <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                            <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">{a.category}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-bold text-text-muted">{a.date}</p>
                            <h3 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">{a.title}</h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{a.excerpt}</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm mt-2">
                                Ler Artigo Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
