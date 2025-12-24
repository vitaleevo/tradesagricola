import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { ServicesCatalog } from '@/features/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Serviços e Produtos | Traders Agrícola',
    description: 'Catálogo especializado em agropecuária, comércio de insumos (fertilizantes, pesticidas), avicultura, aquicultura, apicultura e comércio geral de bens alimentares.',
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-background-dark text-white py-24 px-4 lg:px-10 relative overflow-hidden flex items-center min-h-[450px]">
                    <div className="absolute inset-0 z-0">
                        <img src="/agro_hero_bg.png" alt="Services background" className="w-full h-full object-cover opacity-40 scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 relative z-10">
                        <span className="bg-primary px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest w-fit mb-4 block">Soluções Corporativas</span>
                        <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl mb-6">Catálogo de Produtos e <span className="text-primary italic">Soluções Técnicas</span></h1>
                        <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
                            Fornecemos desde insumos de alta tecnologia até serviços de mecanização e logística para o progresso do sector primário nacional.
                        </p>
                    </div>
                </section>

                <ServicesCatalog />

                {/* CTA Section */}
                <section className="py-20 px-4 lg:px-40 bg-primary text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Precisa de um Orçamento Personalizado?</h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Fale diretamente com a nossa equipa comercial pelo WhatsApp e receba uma proposta adaptada às suas necessidades.
                        </p>
                        <a
                            href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20seguintes%20serviços/produtos:"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 h-16 px-10 bg-white text-primary hover:bg-gray-100 font-bold rounded-xl transition-all shadow-2xl text-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.641-5.822-1.746l-.418-.263-2.64.884.885-2.64-.263-.418A9.962 9.962 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" /></svg>
                            Solicitar Proposta via WhatsApp
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
