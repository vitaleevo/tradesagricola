
import React from 'react';

const Services: React.FC = () => {
  const products = [
    { title: "Vasos Africanos", desc: "Design artesanal com argila local de alta durabilidade para exteriores.", img: "https://picsum.photos/seed/vase/400/300" },
    { title: "Relva Natural", desc: "Tapetes de relva certificados, ideais para campos desportivos e parques.", img: "https://picsum.photos/seed/grass/400/300" },
    { title: "Pedras Decorativas", desc: "Seixos brancos e gravilha vulcânica para acabamentos de paisagismo.", img: "https://picsum.photos/seed/stones/400/300" },
    { title: "Areia Preta & Adubos", desc: "Substratos ricos em nutrientes para garantir o crescimento saudável.", img: "https://picsum.photos/seed/soil/400/300" }
  ];

  const tableData = [
    { name: "Vasos Africanos Kamakupa", cat: "Ornamentação", app: "Decoração de entradas e halls", diff: "Argila Refratária" },
    { name: "Relva Bermuda Tifway", cat: "Infraestrutura", app: "Campos de golfe e jardins", diff: "Resistência à seca" },
    { name: "Chapa Isoladora PVC", cat: "Infraestrutura", app: "Proteção de raízes em lajes", diff: "Alta densidade" },
    { name: "Fertilizante NPK 10-10-10", cat: "Agropecuária", app: "Nutrição geral de culturas", diff: "Rápida absorção" }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Sub Hero */}
      <section className="relative w-full h-[450px] flex items-center justify-center bg-cover bg-fixed bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/ag/1600/600)` }}>
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6">
          <h1 className="text-white text-4xl md:text-6xl font-black">Catálogo de Soluções Técnicas</h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium">Referência nacional em ornamentação, infraestrutura verde e manutenção especializada.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white h-12 px-8 rounded-lg font-bold flex items-center gap-2 shadow-lg">
              <span className="material-symbols-outlined">download</span> Baixar Catálogo PDF
            </button>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white h-12 px-8 rounded-lg font-bold">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Tabs (Visual) */}
      <div className="sticky top-[64px] z-40 bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 flex min-w-max">
          {['Ornamentação', 'Infraestrutura Verde', 'Manutenção B2B', 'Agropecuária'].map((tab, idx) => (
            <button key={idx} className={`px-6 py-4 text-sm font-bold border-b-4 transition-all ${idx === 0 ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-primary hover:border-primary/40'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 lg:px-10 mt-16 flex flex-col gap-24">
        {/* Product Grid */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-1 block">Nosso Portfólio</span>
              <h2 className="text-3xl font-black">Destaques em Ornamentação</h2>
            </div>
            <a href="#" className="text-primary font-bold flex items-center gap-1 group">
              Ver galeria completa <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-xs lg:text-sm text-text-muted dark:text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Table */}
        <section className="bg-white dark:bg-surface-dark rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between gap-4">
             <div>
               <h3 className="text-xl font-bold flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">table_chart</span> Especificações Técnicas
               </h3>
               <p className="text-sm text-text-muted dark:text-gray-400 mt-1">Detalhes para projetos de infraestrutura corporativa.</p>
             </div>
             <button className="text-primary text-sm font-bold flex items-center gap-1 hover:bg-primary/5 px-4 rounded-lg">
               <span className="material-symbols-outlined">download</span> XLS Completo
             </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-background-light dark:bg-background-dark/50">
                <tr>
                  <th className="px-8 py-5 font-bold">Produto / Material</th>
                  <th className="px-8 py-5 font-bold">Categoria</th>
                  <th className="px-8 py-5 font-bold">Aplicação Principal</th>
                  <th className="px-8 py-5 font-bold">Diferencial Traders</th>
                  <th className="px-8 py-5 font-bold text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-8 py-5 font-medium">{row.name}</td>
                    <td className="px-8 py-5 text-text-muted">{row.cat}</td>
                    <td className="px-8 py-5 text-text-muted">{row.app}</td>
                    <td className="px-8 py-5"><span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{row.diff}</span></td>
                    <td className="px-8 py-5 text-right"><a href="#" className="text-primary hover:underline font-bold">Ver Ficha</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section className="bg-white dark:bg-surface-dark rounded-3xl p-10 border border-gray-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-3xl">handyman</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Manutenção B2B e Contratos Públicos</h3>
              <p className="text-text-muted dark:text-gray-400 mb-8 leading-relaxed">Gestão integral para espaços verdes corporativos. Garantimos a saúde do seu paisagismo durante todo o ano.</p>
              <ul className="space-y-4 mb-10">
                {['Cronograma de poda mensal', 'Controle fitossanitário', 'Reposição de plantas'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> {li}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full h-14 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-black transition-all">Solicitar Proposta</button>
          </section>

          <section className="bg-background-dark text-white rounded-3xl p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="size-14 rounded-full bg-white/10 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-3xl">agriculture</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Divisão de Agropecuária</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">Suporte completo para o produtor rural. Maximice sua colheita com insumos de alta performance.</p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="text-primary font-bold block mb-1">Insumos</span>
                  <p className="text-xs text-gray-400">Fertilizantes e sementes certificados.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="text-primary font-bold block mb-1">Consultoria</span>
                  <p className="text-xs text-gray-400">Acompanhamento de agrônomos.</p>
                </div>
              </div>
            </div>
            <button className="relative z-10 w-full h-14 rounded-xl bg-primary hover:bg-primary-dark text-white font-black transition-all">Falar com Especialista</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;
