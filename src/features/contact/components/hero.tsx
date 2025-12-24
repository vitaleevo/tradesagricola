import React from 'react';

export const ContactHero: React.FC = () => {
    return (
        <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Disponíveis 24/7</span>
                <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Fale com os Nossos <span className="text-primary italic">Especialistas</span></h1>
                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">Estamos prontos para ouvir o seu desafio e propor a solução técnica mais adequada para o seu projeto.</p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden hidden lg:block">
                <div className="w-[150%] h-[150%] -rotate-12 bg-primary/20 blur-[100px] rounded-full"></div>
            </div>
        </section>
    );
};
