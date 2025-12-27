"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from './theme-toggle';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Início', href: '/' },
        { label: 'Produtos', href: '/produtos' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Jardinagem', href: '/jardinagem' },
        { label: 'Fornecimentos', href: '/fornecimentos' },
        { label: 'B2B', href: '/b2b' },
        { label: 'Notícias', href: '/noticias' },
        { label: 'Contacto', href: '/contato' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 lg:px-10 py-3 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Traders Agrícola"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-semibold transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-text-main dark:text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-8">
                        <ThemeToggle />
                        <a
                            href="https://wa.me/244923276552?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20 hover:scale-105"
                        >
                            Solicitar Proposta
                        </a>
                    </div>
                </nav>

                {/* Mobile menu button removed to use MobileNav */}
                <div className="lg:hidden flex items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};
