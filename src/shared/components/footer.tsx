import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-background-dark text-text-main dark:text-white pt-20 pb-28 lg:pb-12 border-t border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Traders Agrícola"
                                className="h-10 w-auto object-contain brightness-0 dark:brightness-100"
                            />
                        </div>
                        <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Impulsionando a segurança alimentar em Angola através da excelência produtiva e distribuição eficiente de insumos.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Operação Nacional</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-2">Institucional</h4>
                        <Link href="/historia" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Nossa Jornada</Link>
                        <Link href="/carreiras" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Trabalhe Connosco</Link>
                        <Link href="/noticias" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Journal & Notícias</Link>
                        <Link href="/contato" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Contacto</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-2">Soluções</h4>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Insumos e Fertilizantes</Link>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Produção Agropecuária</Link>
                        <Link href="/b2b" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Logística e B2B</Link>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">Assistência Técnica</Link>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-2">Contacto Directo</h4>
                        <div className="flex items-start gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-lg shrink-0">location_on</span>
                            <span className="text-sm">Edifício Sky Center, Piso 3, Talatona, Luanda</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-lg shrink-0">call</span>
                            <a href="tel:+244923276552" className="text-sm hover:text-primary transition-colors font-bold">+244 923 276 552</a>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-lg shrink-0">mail</span>
                            <a href="mailto:comercial@traders.co.ao" className="text-sm hover:text-primary transition-colors font-bold">comercial@traders.co.ao</a>
                        </div>
                        <div className="flex gap-4 mt-4">
                            {[
                                { icon: 'facebook', href: '#', label: 'Facebook' },
                                { icon: 'photo_camera', href: '#', label: 'Instagram' },
                                { icon: 'business', href: '#', label: 'LinkedIn' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm"
                                    title={social.label}
                                >
                                    <span className="material-symbols-outlined text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-muted dark:text-gray-500 uppercase tracking-widest font-bold">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© 2024 Traders Agrícola. Direitos Reservados.</p>
                        <span className="hidden md:block text-gray-300 dark:text-white/10">|</span>
                        <p>Tech by <a href="https://vitaleevo.ao" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VITALEEVO</a></p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                        <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
