import React from 'react';

export const B2BWorkflow: React.FC = () => {
    const steps = [
        { num: "01", title: "Diagnóstico", desc: "Visita técnica ao local para avaliação do estado atual do solo, espécies e infraestrutura." },
        { num: "02", title: "Proposta", desc: "Elaboração de cronograma de manutenção e orçamento customizado para as necessidades da empresa." },
        { num: "03", title: "Execução", desc: "Implementação das melhorias com equipas fixas, equipamentos modernos e uniformizados." },
        { num: "04", title: "Monitoramento", desc: "Relatórios mensais de saúde vegetal e intervenções realizadas para total transparência." }
    ];

    return (
        <section className="py-24 px-4 lg:px-40 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Método</span>
                    <h2 className="text-3xl lg:text-5xl font-black">Como Trabalhamos</h2>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((s, i) => (
                            <div key={i} className="relative flex flex-col gap-6 group">
                                <div className="size-16 rounded-2xl bg-white dark:bg-surface-dark shadow-xl flex items-center justify-center text-2xl font-black text-primary border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform relative z-10">
                                    {s.num}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold">{s.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
