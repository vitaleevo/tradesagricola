import React from 'react';

export const AboutIntro: React.FC = () => {
    return (
        <section className="px-4 lg:px-40 py-12 flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-8">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined font-bold">history_edu</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Nossa História</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight max-w-4xl">
                    A Traders Agrícola – Prestação de Serviços, Lda é uma empresa angolana focada no desenvolvimento do sector primário e na valorização estética de infraestruturas.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        Nascemos com o propósito de integrar soluções agrícolas modernas com serviços de manutenção de alta qualidade. Acreditamos que o crescimento económico deve caminhar lado a lado com a preservação e o embelezamento dos nossos espaços.
                    </p>
                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        Com uma estrutura legal sólida e compromisso total com as normas nacionais, garantimos segurança e profissionalismo em cada contrato, seja no fornecimento de inertes ou na gestão de áreas verdes.
                    </p>
                </div>
            </div>
        </section>
    );
};
