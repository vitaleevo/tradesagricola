"use client";

import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for initial theme
        const theme = localStorage.getItem('theme');
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme === 'dark' || (!theme && isSystemDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="size-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-text-main dark:text-white hover:border-primary transition-all group overflow-hidden relative"
            aria-label="Toggle Theme"
        >
            <div className={`flex flex-col gap-8 transition-transform duration-500 ${isDark ? '-translate-y-8' : 'translate-y-0'}`}>
                <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">light_mode</span>
                <span className="material-symbols-outlined text-xl group-hover:-rotate-12 transition-transform">dark_mode</span>
            </div>
        </button>
    );
};
