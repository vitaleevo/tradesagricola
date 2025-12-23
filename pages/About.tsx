
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { label: "Projetos Concluídos", value: "150+", icon: "engineering" },
    { label: "Anos de Experiência", value: "10+", icon: "calendar_month" },
    { label: "Clientes Satisfeitos", value: "50+", icon: "groups" }
  ];

  const features = [
    {
      title: "Frota Própria",
      desc: "Garantimos o transporte de inertes (pedra, areia) com total autonomia e rapidez para sua obra, sem depender de terceiros.",
      icon: "local_shipping",
      img: "https://picsum.photos/seed/truck/800/600"
    },
    {
      title: "Equipa Especializada",
      desc: "Profissionais preparados e uniformizados para a manutenção contínua e rigorosa de hotéis, condomínios e espaços públicos.",
      icon: "handyman",
      img: "https://picsum.photos/seed/team/800/600"
    },
    {
      title: "Identidade Nacional",
      desc: "Orgulhosamente uma empresa de direito angolano, comprometida com o desenvolvimento local e a valorização do nosso território.",
      icon: "flag",
      img: "https://picsum.photos/seed/angola/800/600"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero */}
      <section className="px-4 lg:px-40 py-10 flex justify-center">
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden relative min-h-[450px] flex items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/fields/1200/600)` }}>
          <div className="z-10 flex flex-col gap-6 max-w-2xl">
            <h1 className="text-white text-5xl lg:text-7xl font-black">Sobre Nós</h1>
            <p className="text-gray-200 text-lg lg:text-xl font-medium">
              Cultivando o futuro e construindo a base para o desenvolvimento de Angola com excelência e dedicação.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold w-fit mx-auto transition-all shadow-lg shadow-primary/30">
              Nossa História
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 lg:px-40 py-12 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined font-bold">domain</span>
            <span className="text-sm font-bold uppercase tracking-wider">Quem Somos</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight max-w-4xl">
            A Traders Agrícola – Prestação de Serviços, Lda é uma empresa angolana focada no desenvolvimento do sector primário e na valorização estética de infraestruturas.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Nascemos com o propósito de integrar soluções agrícolas modernas com serviços de manutenção de alta qualidade. Acreditamos que o crescimento económico deve caminhar lado a lado com a preservação e o embelezamento dos nossos espaços.
            </p>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Com uma estrutura legal sólida e compromisso total com as normas nacionais, garantimos segurança e profissionalismo em cada contrato, seja no fornecimento de inertes ou na gestão de áreas verdes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 lg:px-40 py-10 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-sm flex flex-col gap-2 transition-transform hover:scale-105">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <span className="material-symbols-outlined">{stat.icon}</span>
                <span className="text-text-main dark:text-white font-semibold">{stat.label}</span>
              </div>
              <p className="text-5xl font-black text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentials */}
      <section className="px-4 lg:px-40 py-20 flex justify-center bg-white dark:bg-[#152615]">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 dark:border-white/10 pb-10 mb-12">
            <div className="max-w-xl flex flex-col gap-4">
              <h2 className="text-4xl font-black">Nossos Diferenciais</h2>
              <p className="text-text-muted dark:text-gray-400 text-lg">Oferecemos soluções completas e autónomas para garantir a qualidade.</p>
            </div>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all">
              Ver Nossos Serviços
            </button>
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
    </div>
  );
};

export default About;
