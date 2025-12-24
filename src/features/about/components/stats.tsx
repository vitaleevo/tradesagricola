import React from 'react';

export const AboutStats: React.FC = () => {
    const stats = [
        { label: "Projetos Concluídos", value: "150+", icon: "engineering" },
        { label: "Anos de Experiência", value: "10+", icon: "calendar_month" },
        { label: "Clientes Satisfeitos", value: "50+", icon: "groups" }
    ];

    return (
        <section className="px-4 lg:px-40 py-10 flex justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-sm flex flex-col gap-2 transition-transform hover:scale-105">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <span className="material-symbols-outlined">{stat.icon}</span>
                            <span className="text-text-main dark:text-white font-semibold">{stat.label}</span>
                        </div>
                        <p className="text-5xl font-black text-primary">{stat.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
