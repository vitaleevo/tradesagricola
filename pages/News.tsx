
import React from 'react';

const News: React.FC = () => {
  const articles = [
    {
      date: "15 Maio, 2024",
      title: "Traders Agrícola expande frota de transporte de inertes",
      excerpt: "Novas unidades chegam para garantir ainda mais agilidade nas entregas de pedras e areias decorativas em Luanda.",
      img: "https://picsum.photos/seed/truck/800/600",
      tag: "Logística"
    },
    {
      date: "02 Maio, 2024",
      title: "Dicas: Como manter a sua relva verde no cacimbo",
      excerpt: "Nossos especialistas partilham o guia definitivo de rega e nutrição para o período mais seco do ano em Angola.",
      img: "https://picsum.photos/seed/grass2/800/600",
      tag: "Dicas Técnicas"
    },
    {
      date: "20 Abril, 2024",
      title: "Sucesso na Feira Internacional de Agricultura",
      excerpt: "Apresentamos as nossas novas soluções de vasos africanos e sistemas de rega automatizada com grande adesão.",
      img: "https://picsum.photos/seed/expo/800/600",
      tag: "Eventos"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-background-light dark:bg-background-dark py-20 px-4 lg:px-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Fique Atualizado</span>
            <h1 className="text-4xl lg:text-6xl font-black mb-6">Notícias e Atualizações</h1>
            <p className="text-lg text-text-muted dark:text-gray-400 font-medium">As últimas novidades sobre paisagismo, agricultura e projetos em Angola.</p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-2 rounded-2xl flex border border-gray-200 dark:border-white/10 shadow-sm w-full md:w-auto">
            <input type="text" placeholder="Procurar notícias..." className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full md:w-64" />
            <button className="bg-primary text-white size-10 rounded-xl flex items-center justify-center"><span className="material-symbols-outlined">search</span></button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 lg:px-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {articles.map((art, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest text-primary">{art.tag}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400 mb-3">
                <span className="material-symbols-outlined text-base">calendar_today</span> {art.date}
              </div>
              <h2 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">{art.title}</h2>
              <p className="text-text-muted dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{art.excerpt}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase group-hover:underline">
                Ler Artigo Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 lg:px-40">
        <div className="max-w-5xl mx-auto bg-primary rounded-[40px] p-12 lg:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#111811]">Inscreva-se na nossa Newsletter</h2>
          <p className="text-xl text-[#111811]/70 font-medium max-w-xl">Receba dicas de manutenção e as melhores ofertas de insumos diretamente no seu email.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input type="email" placeholder="seu@email.com" className="bg-white/20 border-2 border-white/30 backdrop-blur-md rounded-xl px-6 py-4 placeholder:text-[#111811]/40 focus:ring-0 focus:border-white/60 text-[#111811] font-bold grow" />
            <button className="bg-[#111811] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all">Subscrever</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
