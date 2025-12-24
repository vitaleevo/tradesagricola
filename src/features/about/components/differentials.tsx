import Link from 'next/link';

export const AboutDifferentials: React.FC = () => {
    const features = [
        {
            title: "Frota Própria",
            desc: "Garantimos o transporte terrestre e marítimo com frota própria de camiões e embarcações para logística de inertes e equipamentos, sem depender de terceiros.",
            icon: "local_shipping",
            img: "/images/frota.png"
        },
        {
            title: "Equipa Especializada",
            desc: "Profissionais preparados e uniformizados para a manutenção contínua e rigorosa de hotéis, condomínios e espaços públicos.",
            icon: "handyman",
            img: "/images/equipa.png"
        },
        {
            title: "Identidade Nacional",
            desc: "Orgulhosamente uma empresa de direito angolano, comprometida com o desenvolvimento local e a valorização do nosso território.",
            icon: "flag",
            img: "/images/identidade.png"
        }
    ];

    return (
        <section className="px-4 lg:px-40 py-20 flex justify-center bg-white dark:bg-[#152615]">
            <div className="w-full max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 dark:border-white/10 pb-10 mb-12">
                    <div className="max-w-xl flex flex-col gap-4">
                        <h2 className="text-4xl font-black">Nossos Diferenciais</h2>
                        <p className="text-text-muted dark:text-gray-400 text-lg">Oferecemos soluções completas e autónomas para garantir a qualidade.</p>
                    </div>
                    <Link href="/servicos" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all">
                        Ver Nossos Serviços
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col gap-5 group">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined">{f.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold">{f.title}</h3>
                                </div>
                                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
