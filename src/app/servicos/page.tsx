import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { ServicesCatalog } from '@/features/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Serviços e Produtos | Traders Agrícola',
    description: 'Catálogo completo de produtos e serviços especializados em paisagismo, ornamentação, infraestrutura verde e insumos agrícolas.',
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-[#152615] text-white py-20 px-4 lg:px-40 relative">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
                        <span className="bg-primary px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest w-fit">Soluções Completas</span>
                        <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">Catálogo de Produtos e Serviços <span className="text-primary italic">Especializados</span></h1>
                        <p className="text-gray-300 text-lg lg:text-xl max-w-2xl font-medium">Desde a base do solo à ornamentação final, fornecemos tudo o que o seu projeto precisa para prosperar no clima de Angola.</p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden hidden lg:block">
                        <div className="w-[150%] h-[150%] -rotate-12 bg-primary/20 blur-[100px] rounded-full"></div>
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
