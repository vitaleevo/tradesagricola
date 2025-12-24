import Link from 'next/link';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://picsum.photos/seed/landscape/1920/1080"
                    alt="Agricultural Landscape"
                    className="w-full h-full object-cover filter brightness-[0.4]"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center items-start">
                <div className="border-l-4 border-primary pl-6 md:pl-10 max-w-[900px]">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-4 sm:mb-6">
                        Traders Agrícola: Transformando a paisagem de Angola.
                    </h1>
                    <p className="text-white/90 text-base md:text-2xl font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10">
                        Do fornecimento de materiais ornamentais à manutenção de grandes infraestruturas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/servicos" className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 active:scale-95">
                            Nossos Serviços
                        </Link>
                        <a
                            href="https://wa.me/244923276552"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold rounded-2xl transition-all flex items-center justify-center active:scale-95"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
