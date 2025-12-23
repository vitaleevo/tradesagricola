
import React from 'react';

const Careers: React.FC = () => {
  const openings = [
    { title: "Engenheiro Agrónomo", dept: "Técnico", loc: "Luanda", type: "Full-time" },
    { title: "Motorista de Pesados", dept: "Logística", loc: "Viana", type: "Full-time" },
    { title: "Técnico de Manutenção", dept: "Paisagismo", loc: "Talatona", type: "Contracto" },
    { title: "Assistente Comercial", dept: "Vendas", loc: "Luanda", type: "Full-time" }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-[#152615] text-white py-24 px-4 lg:px-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Carreiras</span>
          <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">Ajude-nos a cultivar um <span className="text-primary">Angola mais verde</span></h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Estamos sempre à procura de talentos apaixonados pela terra e pelo desenvolvimento sustentável.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              { t: "Inovação", d: "Aplicamos as mais recentes tecnologias agrícolas.", i: "lightbulb" },
              { t: "Sustentabilidade", d: "Nosso trabalho respeita e valoriza o ecossistema.", i: "eco" },
              { t: "Crescimento", d: "Plano de carreira sólido para todos os colaboradores.", i: "trending_up" }
            ].map((v, idx) => (
              <div key={idx} className="text-center flex flex-col items-center gap-4">
                <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">{v.i}</span>
                </div>
                <h3 className="text-xl font-bold">{v.t}</h3>
                <p className="text-text-muted dark:text-gray-400">{v.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black mb-10">Vagas Abertas</h2>
          <div className="flex flex-col gap-4">
            {openings.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-primary transition-all group">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-text-muted dark:text-gray-400">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">work</span> {job.dept}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> {job.loc}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> {job.type}</span>
                  </div>
                </div>
                <button className="bg-background-light dark:bg-background-dark px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                  Candidatar-se
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-primary/5 dark:bg-white/5 rounded-[40px] text-center">
            <h3 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h3>
            <p className="text-text-muted dark:text-gray-400 mb-6">Envie o seu currículo para a nossa base de dados para futuras oportunidades.</p>
            <a href="mailto:comercial@tradersagricola.com" className="text-primary font-bold text-lg hover:underline flex items-center justify-center gap-2">
              comercial@tradersagricola.com <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
