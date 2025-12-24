import React from 'react';

export const B2BHero: React.FC = () => {
    return (
        <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Soluções Corporativas</span>
                <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Elevamos o Padrão do seu <span className="text-primary italic">Empreendimento</span></h1>
                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">Gestão profissional de áreas verdes para empresas, condomínios e sector público. Eficiência operacional com rigor estético.</p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">Solicitar Proposta B2B</button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold backdrop-blur-md border border-white/20 transition-all">Ver Portfólio</button>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none overflow-hidden hidden lg:block">
                <img src="https://picsum.photos/seed/corporate/1000/1000" alt="Corporate background" className="w-full h-full object-cover scale-110 -translate-x-20 rotate-6 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#152615] via-transparent to-transparent"></div>
            </div>
        </section>
    );
};
