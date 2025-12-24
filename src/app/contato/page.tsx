import React from 'react';
import { Navbar } from '@/shared/components/navbar';
import { Footer } from '@/shared/components/footer';
import { ContactHero, ContactForm, ContactInfo } from '@/features/contact';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <Navbar />
            <main className="flex-grow">
                <ContactHero />

                <section className="py-24 px-4 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </section>

                <section className="relative">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
                    <div className="h-[500px] w-full grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.313515437!2d13.1908053!3d-8.9184318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f50000000000%3A0x0!2sTalatona%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1625000000000!5m2!1spt-PT!2sao"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            title="Nosso Local"
                        ></iframe>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
