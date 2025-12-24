import React from 'react';

export const AboutHero: React.FC = () => {
    return (
        <section className="px-4 lg:px-40 py-10 flex justify-center">
            <div className="w-full max-w-5xl rounded-3xl overflow-hidden relative min-h-[450px] flex items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/fields/1200/600)` }}>
                <div className="z-10 flex flex-col gap-6 max-w-2xl">
                    <h1 className="text-white text-5xl lg:text-7xl font-black">Sobre Nós</h1>
                    <p className="text-gray-200 text-lg lg:text-xl font-medium">
                        Cultivando o futuro e construindo a base para o desenvolvimento de Angola com excelência e dedicação.
                    </p>
                    <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold w-fit mx-auto transition-all shadow-lg shadow-primary/30">
                        Nossa História
                    </button>
                </div>
            </div>
        </section>
    );
};
