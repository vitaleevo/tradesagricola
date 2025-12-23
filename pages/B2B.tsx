
import React from 'react';

const B2B: React.FC = () => {
  const pillars = [
    { title: "Contratos Mensais", desc: "Planos de manutenção contínua e preventiva para garantir a longevidade.", icon: "calendar_month" },
    { title: "Concursos Públicos", desc: "Total capacidade técnica e financeira para participar e executar grandes projetos.", icon: "account_balance" },
    { title: "Faturação Certificada", desc: "Processos transparentes com software certificado pela AGT. Conformidade total.", icon: "receipt_long" }
  ];

  const projects = [
    { title: "Sede Corporativa Talatona", cat: "Manutenção", loc: "Luanda", img: "https://picsum.photos/seed/talatona/600/400" },
    { title: "Projeto Fazenda Lubango", cat: "Agricultura", loc: "Huíla", img: "https://picsum.photos/seed/fazenda/600/400" },
    { title: "Requalificação Urbana", cat: "Obra Pública", loc: "Benguela", img: "https://picsum.photos/seed/urbano/600/400" }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero */}
      <section className="px-4 lg:px-40 py-5 flex justify-center">
        <div className="w-full max-w-[1280px]">
          <div className="relative min-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center text-center p-12 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/corp/1600/800)` }}>
            <div className="z-10 max-w-3xl flex flex-col gap-6">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest w-fit mx-auto border border-white/30">Soluções Corporativas</span>
              <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                Excelência em Parcerias <span className="text-primary">B2B</span> e Governamentais
              </h1>
              <p className="text-gray-200 text-lg lg:text-xl font-medium">Oferecemos capacidade técnica para grandes projetos, gestão de infraestruturas e conformidade total com as exigências fiscais.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20">
                  <span className="material-symbols-outlined">handshake</span> Fale com a Equipa B2B
                </button>
                <button className="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 text-white rounded-xl font-bold transition-all">
                  Ver Projetos Recentes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 lg:px-40 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-3xl lg:text-4xl font-black">Os Nossos Pilares B2B</h2>
            <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl">Flexibilidade e rigor profissional para empresas privadas e entidades públicas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all group">
                <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="material-symbols-outlined text-base">check_circle</span> Rigor Técnico</li>
                  <li className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="material-symbols-outlined text-base">check_circle</span> Conformidade AGT</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 px-4 lg:px-40 flex justify-center bg-background-light dark:bg-[#112111]">
        <div className="w-full max-w-5xl flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black">Fluxo de Trabalho Corporativo</h2>
            <p className="text-text-muted dark:text-gray-400">Do primeiro contacto à entrega final, o nosso processo é otimizado.</p>
          </div>
          <div className="grid grid-cols-[40px_1fr] gap-x-8">
            {[
              { title: "Diagnóstico e Levantamento", desc: "A nossa equipa técnica visita o local para entender as necessidades específicas e medir áreas.", icon: "search" },
              { title: "Proposta e Contrato", desc: "Envio de orçamento detalhado com prazos. Formalização através de contrato claro.", icon: "description" },
              { title: "Execução Técnica", desc: "Mobilização de equipas e máquinas seguindo rigorosas normas de segurança.", icon: "engineering" },
              { title: "Entrega e Faturação", desc: "Vistoria final com o cliente e emissão de fatura via software certificado.", icon: "verified" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="size-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center z-10 shadow-sm">
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  {i < 3 && <div className="w-[2px] grow bg-primary/20"></div>}
                </div>
                <div className="flex flex-col pb-12 pt-1">
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 text-base">{step.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Projects */}
      <section className="py-20 px-4 lg:px-40 flex justify-center bg-white dark:bg-[#152615]">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black">Projetos de Referência</h2>
              <p className="text-text-muted dark:text-gray-400 text-lg mt-2">Alguns dos nossos trabalhos recentes para o setor corporativo.</p>
            </div>
            <a href="#" className="text-primary font-bold flex items-center gap-1 group">
              Ver Portfólio Completo <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group bg-background-light dark:bg-surface-dark rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 transition-all hover:shadow-xl">
                <div className="h-56 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/80 rounded font-bold text-xs uppercase tracking-widest">{p.cat}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <div className="flex items-center gap-2 text-text-muted dark:text-gray-400 text-sm font-semibold">
                    <span className="material-symbols-outlined text-base">location_on</span> {p.loc}, Angola
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
