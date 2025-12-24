import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nossa História | Traders Agrícola',
    description: 'Conheça a trajetória da Traders Agrícola, uma empresa angolana dedicada ao desenvolvimento agrícola e paisagístico de Angola.',
};

export default function HistoriaPage() {
    const timeline = [
        {
            year: "2015",
            title: "Fundação",
            desc: "A Traders Agrícola nasce em Luanda com o sonho de transformar o sector agrícola angolano através de soluções modernas e sustentáveis."
        },
        {
            year: "2017",
            title: "Expansão para Paisagismo",
            desc: "Iniciamos os serviços de paisagismo e manutenção de espaços verdes, atendendo os primeiros condomínios de luxo em Talatona."
        },
        {
            year: "2019",
            title: "Frota Própria",
            desc: "Adquirimos a nossa frota de camiões para garantir autonomia logística e entregas rápidas em todo o território nacional."
        },
        {
            year: "2021",
            title: "Parcerias B2B",
            desc: "Firmamos contratos de manutenção com grandes clientes corporativos, incluindo o Banco Económico e condomínios residenciais de prestígio."
        },
        {
            year: "2023",
            title: "Expansão Marítima",
            desc: "Ampliamos a nossa logística com embarcações para transporte de inertes, consolidando a nossa presença na cadeia de valor da construção."
        },
        {
            year: "2024",
            title: "Inovação Digital",
            desc: "Lançamento da nova plataforma digital e expansão dos serviços de consultoria agronómica para o Planalto Central."
        }
    ];

    const values = [
        { icon: "eco", title: "Sustentabilidade", desc: "Compromisso com práticas ambientais responsáveis em todos os nossos projetos." },
        { icon: "handshake", title: "Integridade", desc: "Relações comerciais transparentes e honestas com clientes e parceiros." },
        { icon: "military_tech", title: "Excelência", desc: "Padrões rigorosos de qualidade em cada serviço prestado." },
        { icon: "groups", title: "Valorização Local", desc: "Investimento no talento angolano e no desenvolvimento das comunidades." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"></div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                    <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-10 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <span className="material-symbols-outlined">history_edu</span>
                            <span className="text-sm font-bold uppercase tracking-wider">Nossa Jornada</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                            Uma História de Crescimento e Compromisso com Angola
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl">
                            Desde 2015, transformamos paisagens e impulsionamos a agricultura angolana com rigor técnico e paixão pelo nosso território.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 px-4 lg:px-40">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-primary/5 dark:bg-primary/10 p-10 rounded-3xl border-l-4 border-primary">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                                <h2 className="text-2xl font-black">Nossa Missão</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-lg">
                                Fornecer soluções integradas de paisagismo, manutenção e insumos agrícolas que contribuam para o desenvolvimento sustentável de Angola, valorizando o território e capacitando as comunidades locais.
                            </p>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/10 p-10 rounded-3xl border-l-4 border-yellow-500">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-yellow-600 text-3xl">visibility</span>
                                <h2 className="text-2xl font-black">Nossa Visão</h2>
                            </div>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-lg">
                                Ser a referência nacional em serviços de paisagismo e consultoria agropecuária, reconhecida pela excelência operacional e pelo impacto positivo no ambiente e na economia angolana.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20 px-4 lg:px-40 bg-gray-50 dark:bg-[#1a2c1a]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Linha do Tempo</span>
                            <h2 className="text-3xl md:text-5xl font-black">Marcos da Nossa Trajetória</h2>
                        </div>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-12 md:pl-0`}>
                                        <div className={`bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                                            <span className="text-primary font-black text-4xl">{item.year}</span>
                                            <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                                            <p className="text-text-muted dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 top-8 border-4 border-white dark:border-background-dark shadow-md"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 px-4 lg:px-40">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">O Que Nos Guia</span>
                            <h2 className="text-3xl md:text-5xl font-black">Nossos Valores</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((v, i) => (
                                <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-primary/5 transition-all group">
                                    <div className="size-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4 lg:px-40 bg-black text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Faça Parte da Nossa História</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Seja como cliente, parceiro ou colaborador, convidamos você a construir o futuro de Angola connosco.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Traders%20Agrícola."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">chat</span>
                                Falar Connosco
                            </a>
                            <Link href="/servicos" className="h-14 px-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                                Ver Nossos Serviços
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
