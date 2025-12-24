import React from 'react';

export const ContactInfo: React.FC = () => {
    const info = [
        { title: "Endereço", detail: "Av. 4 de Fevereiro, Talatona, Luanda - Angola", icon: "location_on", sub: "Edifício Sky Center, Piso 3" },
        { title: "E-mail", detail: "comercial@tradersagricola.com", icon: "mail", sub: "Atendimento em até 24h" },
        { title: "Telefone", detail: "+244 923 276 552", icon: "call", sub: "Seg-Sex, 08:00 - 18:00" }
    ];

    return (
        <div className="flex flex-col gap-6 h-full">
            <h2 className="text-3xl font-black mb-4">Informações de Contacto</h2>
            <div className="grid grid-cols-1 gap-6 flex-grow">
                {info.map((item, i) => (
                    <div key={i} className="flex gap-5 p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all group">
                        <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="font-medium text-text-main dark:text-white">{item.detail}</p>
                            <p className="text-xs text-text-muted mt-1">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-bold mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                    {['facebook', 'photo_camera'].map((icon, i) => (
                        <a key={i} href="#" className="size-12 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-xl">{icon}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
