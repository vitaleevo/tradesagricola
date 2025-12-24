"use client";

import React, { useState } from 'react';

const faqs = [
    {
        question: "Quais são as principais áreas de atuação da Traders Agrícola?",
        answer: "Atuamos em três frentes principais: Paisagismo de grande escala (design e execução), Soluções Agrícolas (consultoria e insumos) e Manutenção B2B para condomínios, empresas e espaços públicos."
    },
    {
        question: "A empresa realiza projetos fora de Luanda?",
        answer: "Sim, orgulhamo-nos de ser uma empresa nacional com capacidade logística para atender projetos e fornecer materiais em todas as províncias de Angola."
    },
    {
        question: "Como posso solicitar um orçamento para manutenção de áreas verdes?",
        answer: "Pode contactar-nos através do formulário na página de contato, via WhatsApp ou telefone. A nossa equipa técnica realiza uma visita de diagnóstico gratuita para elaborar uma proposta personalizada."
    },
    {
        question: "Vocês vendem materiais (vasos, relva, pedras) para clientes particulares?",
        answer: "Sim, dispomos de um catálogo variado de produtos ornamentais e insumos que podem ser adquiridos individualmente, com opção de entrega ao domicílio."
    },
    {
        question: "A Traders Agrícola trabalha com concursos públicos?",
        answer: "Sim, possuímos toda a documentação legal, capacidade técnica comprovada e regularidade fiscal necessária para participar e executar projetos governamentais e de reabilitação urbana."
    }
];

import { FadeIn, StaggerContainer } from '@/shared/components/animations';

export const HomeFAQ: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="py-20 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Dúvidas Comuns</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Perguntas Frequentes</h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg">Encontre respostas rápidas sobre a nossa forma de trabalhar e serviços oferecidos.</p>
                </FadeIn>

                <StaggerContainer className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <div
                                className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold pr-8">{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-primary' : 'text-text-muted'}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 border-t border-gray-100 dark:border-white/5 text-text-muted dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
