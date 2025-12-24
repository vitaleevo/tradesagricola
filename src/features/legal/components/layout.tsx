import React from 'react';

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
    return (
        <section className="py-20 px-4 lg:px-40 flex justify-center">
            <div className="w-full max-w-4xl bg-white dark:bg-surface-dark p-8 md:p-16 rounded-[40px] shadow-2xl border border-gray-100 dark:border-white/5">
                <div className="border-b border-gray-100 dark:border-white/10 pb-10 mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">{title}</h1>
                    <p className="text-text-muted text-sm font-bold uppercase tracking-widest">Última Atualização: {lastUpdated}</p>
                </div>
                <div className="prose dark:prose-invert max-w-none text-text-main dark:text-gray-300 leading-relaxed space-y-8">
                    {children}
                </div>
            </div>
        </section>
    );
};
