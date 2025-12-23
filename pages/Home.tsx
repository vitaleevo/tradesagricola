
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Paisagismo de Grande Escala",
      desc: "Projetos paisagísticos completos para condomínios, empresas e espaços públicos, integrando beleza natural e funcionalidade urbana.",
      icon: "park",
      img: "https://picsum.photos/seed/park/800/600"
    },
    {
      title: "Vasos Ornamentais Exclusivos",
      desc: "Uma coleção exclusiva de vasos de alta durabilidade e design sofisticado, perfeitos para interiores e exteriores de prestígio.",
      icon: "potted_plant",
      img: "https://picsum.photos/seed/pot/800/600"
    },
    {
      title: "Consultoria e Insumos",
      desc: "Suporte técnico especializado para maximizar colheitas e fornecimento de insumos certificados para o setor agropecuário angolano.",
      icon: "science",
      img: "https://picsum.photos/seed/agri/800/600"
    }
  ];

  const values = [
    { title: "Rigor Técnico", desc: "Nossa equipe é formada por engenheiros agrónomos e técnicos especializados. Aplicamos metodologia científica em cada etapa.", icon: "engineering" },
    { title: "Tradição e Confiança", desc: "Anos de experiência servindo o mercado angolano com integridade. Construímos relações baseadas na transparência.", icon: "handshake" },
    { title: "Sustentabilidade", desc: "Compromisso com o verde. Utilizamos práticas que respeitam o ecossistema local e promovem a biodiversidade.", icon: "eco" }
  ];

  const faqs = [
    {
      question: "Quais são as principais áreas de atuação da Traders Agrícola?",
      answer: "Atuamos em três frentes principais: Paisagismo de grande escala (design e execução), Soluções Agrícolas (consultoria e insumos) e Manutenção B2B para condomínios, empresas e espaços públicos."
    },
    {
      question: "A empresa realiza projetos fora de Luanda?",
      answer: "Sim, orgulhamo-nos de ser uma empresa nacional com capacidade logística para atender projetos e fornecer materiais em todas as províncias de Angola."
    },
    {
      question: "Como posso solicitar um orçamento para manutenção de áreas verdes?",
      answer: "Pode contactar-nos através do formulário na página de contato, via WhatsApp ou telefone. A nossa equipa técnica realiza uma visita de diagnóstico gratuita para elaborar uma proposta personalizada."
    },
    {
      question: "Vocês vendem materiais (vasos, relva, pedras) para clientes particulares?",
      answer: "Sim, dispomos de um catálogo variado de produtos ornamentais e insumos que podem ser adquiridos individualmente, com opção de entrega ao domicílio."
    },
    {
      question: "A Traders Agrícola trabalha com concursos públicos?",
      answer: "Sim, possuímos toda a documentação legal, capacidade técnica comprovada e regularidade fiscal necessária para participar e executar projetos governamentais e de reabilitação urbana."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/landscape/1920/1080" 
            alt="Agricultural Landscape" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-10 h-full flex flex-col justify-center items-start">
          <div className="border-l-4 border-primary pl-6 md:pl-10 max-w-[900px] animate-fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-6">
              Traders Agrícola: Transformando a paisagem de Angola com tradição e rigor técnico.
            </h1>
            <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mb-10">
              Do fornecimento de materiais ornamentais à manutenção de grandes infraestruturas verdes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1">
                Conheça Nossos Serviços
              </button>
              <a 
                href="https://wa.me/244923276552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold rounded-lg transition-all flex items-center justify-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">O que fazemos</span>
              <h2 className="text-text-main dark:text-white text-3xl md:text-5xl font-black leading-tight">Nossos Serviços Principais</h2>
            </div>
            <p className="max-w-md text-text-muted dark:text-gray-400 text-lg">Soluções integradas para quem exige excelência em paisagismo e agricultura.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold">{s.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm lg:text-base">{s.desc}</p>
                  <a href="#" className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-xs group-hover:underline mt-4">
                    Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-10 bg-white dark:bg-[#1a2c1a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa Essência</span>
              <h2 className="text-3xl lg:text-5xl font-black leading-tight">Nossos Valores e Compromissos</h2>
            </div>
            <p className="text-lg lg:text-xl text-text-muted dark:text-gray-400 leading-relaxed">
              Mais do que serviços, entregamos valor. A nossa atuação no mercado angolano é guiada por princípios inegociáveis.
            </p>
            <div className="p-8 bg-background-light dark:bg-background-dark/50 rounded-2xl border-l-8 border-primary shadow-lg">
              <p className="italic text-lg text-text-main dark:text-gray-300 font-medium mb-4">
                "A Traders Agrícola não apenas executa obras, mas constrói legados verdes para as futuras gerações de Angola."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://picsum.photos/seed/man/100/100" alt="CEO" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Eng. João Manuel</h4>
                  <p className="text-xs text-primary font-bold uppercase">Diretor Geral</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex gap-6 p-8 bg-background-light dark:bg-background-dark/30 rounded-2xl hover:shadow-xl transition-all border border-transparent hover:border-primary/10 group">
                <div className="shrink-0 size-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Dúvidas Comuns</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Perguntas Frequentes</h2>
            <p className="text-text-muted dark:text-gray-400 text-lg">Encontre respostas rápidas sobre a nossa forma de trabalhar e serviços oferecidos.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-primary' : 'text-text-muted'}`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100 dark:border-white/5 text-text-muted dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black text-[#111811] leading-tight">Pronto para transformar seu espaço?</h2>
          <p className="text-xl text-[#111811]/80 font-medium">Seja para um projeto paisagístico ou consultoria agrícola, temos a solução ideal.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-14 px-10 bg-[#111811] hover:bg-black text-white font-bold rounded-lg shadow-2xl transition-all hover:-translate-y-1">
              Solicitar Orçamento Gratuito
            </button>
            <a 
              href="https://wa.me/244923276552" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 px-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/30 text-[#111811] font-bold rounded-lg transition-all flex items-center justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
