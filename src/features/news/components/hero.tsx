import React from 'react';

export const NewsHero: React.FC = () => {
    return (
        <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10 text-center items-center">
                <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Blog / Actualidade</span>
                <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Traders <span className="text-primary italic">Journal</span></h1>
                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">As últimas tendências em paisagismo, avanços na agricultura angolana e novidades da nossa empresa.</p>
            </div>
        </section>
    );
};
