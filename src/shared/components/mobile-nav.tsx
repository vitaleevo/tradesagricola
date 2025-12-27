"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileNav: React.FC = () => {
    const pathname = usePathname();

    const items = [
        { label: 'Início', href: '/', icon: 'home' },
        { label: 'Serviços', href: '/servicos', icon: 'agriculture' },
        { label: 'Jardins', href: '/jardinagem', icon: 'yard' },
        { label: 'Lab', href: '/fornecimentos', icon: 'science' },
        { label: 'Contacto', href: '/contato', icon: 'chat' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-sm">
            <nav className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-3xl shadow-2xl px-2 py-2 flex items-center justify-around">
                {items.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${active
                                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                                : 'text-text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[24px] ${active ? 'fill-icon' : ''}`}>
                                {item.icon}
                            </span>
                            <span className="text-[10px] font-bold mt-0.5">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
