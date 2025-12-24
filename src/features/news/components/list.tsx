import Link from 'next/link';
import { articles } from '@/shared/data/articles';

export const NewsList: React.FC = () => {

    return (
        <section className="py-24 px-4 lg:px-40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((a, i) => (
                    <Link href={`/noticias/${a.slug}`} key={i} className="group cursor-pointer block">
                        <article>
                            <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">{a.category}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-bold text-text-muted">{a.date}</p>
                                <h3 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">{a.title}</h3>
                                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{a.excerpt}</p>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-2">
                                    Ler Artigo Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};
