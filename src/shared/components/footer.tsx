import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-background-dark text-text-main dark:text-white pt-16 pb-8 border-t border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Traders Agrícola"
                                className="h-12 w-auto object-contain brightness-0 dark:brightness-100"
                            />
                        </div>
                        <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Transformando a paisagem e a agricultura em Angola com profissionalismo e dedicação rigorosa.
                        </p>
                        <a href="https://tradersagricola.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm hover:underline">
                            tradersagricola.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Empresa</h4>
                        <Link href="/sobre" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Sobre Nós</Link>
                        <Link href="/carreiras" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Carreiras</Link>
                        <Link href="/noticias" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Notícias</Link>
                        <Link href="/contato" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Contato</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Serviços</h4>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Paisagismo Urbano</Link>
                        <Link href="/b2b" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Manutenção de Áreas Verdes</Link>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Insumos Agrícolas</Link>
                        <Link href="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Vasos Decorativos</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Contato</h4>
                        <div className="flex items-start gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                            <span className="text-sm">Av. 4 de Fevereiro, Talatona, Luanda</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-sm">call</span>
                            <a href="tel:+244923276552" className="text-sm hover:text-primary transition-colors">+244 923 276 552</a>
                        </div>
                        <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-primary text-sm">mail</span>
                            <a href="mailto:comercial@tradersagricola.com" className="text-sm hover:text-primary transition-colors">comercial@tradersagricola.com</a>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.facebook.com/TradesAgricola"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                                title="Facebook"
                            >
                                <span className="material-symbols-outlined text-base">facebook</span>
                            </a>
                            <a
                                href="https://www.instagram.com/tradesagricola/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                                title="Instagram"
                            >
                                <span className="material-symbols-outlined text-base">photo_camera</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted dark:text-gray-500">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© 2024 Traders Agrícola. Todos os direitos reservados.</p>
                        <span className="hidden md:block text-gray-300 dark:text-white/10">|</span>
                        <p>Desenvolvido por <a href="https://vitaleevo.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">vitaleevo</a></p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                        <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
