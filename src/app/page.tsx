import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { Hero, HomeServices, Values, LabSupplies, FeaturedShop, HomeFAQ, HomeCTA } from '@/features/home';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pb-24 lg:pb-0">
                <Hero />
                <HomeServices />
                <Values />
                <LabSupplies />
                <FeaturedShop />
                <HomeFAQ />
                <HomeCTA />
            </main>
            <Footer />
        </div>
    );
}
