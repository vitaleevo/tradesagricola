import React from 'react';

export const CareersHero: React.FC = () => {
    return (
        <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Junte-se à Equipa</span>
                <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Ajude-nos a Construir uma Angola mais <span className="text-primary italic">Verde</span></h1>
                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">Buscamos talentos apaixonados por agronomia, paisagismo e excelência operacional. Venha crescer connosco.</p>
            </div>
            <div className="absolute -bottom-20 -right-20 size-[600px] border-[60px] border-primary/10 rounded-full"></div>
        </section>
    );
};
