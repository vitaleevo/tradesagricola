import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { AboutHero, AboutIntro, AboutStats, AboutDifferentials } from '@/features/about';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pb-20">
                <AboutHero />
                <AboutIntro />
                <AboutStats />
                <AboutDifferentials />
            </main>
            <Footer />
        </div>
    );
}
