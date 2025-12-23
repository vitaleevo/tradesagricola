
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="bg-white dark:bg-[#152615] px-4 lg:px-40 pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs w-fit">Fale Conosco</span>
              <h1 className="text-4xl lg:text-7xl font-black leading-tight tracking-tight">Estamos prontos para ouvir o seu <span className="text-primary">projeto</span></h1>
              <p className="text-lg lg:text-xl text-text-muted dark:text-gray-400 font-medium max-w-xl">Dúvidas sobre os nossos serviços de paisagismo ou agricultura? Entre em contacto com a nossa equipa especializada.</p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-bold text-xl">Sede Operacional</p>
                    <p className="text-sm text-gray-300">Talatona, Luanda, Angola</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards and Map */}
      <section className="bg-background-light dark:bg-background-dark py-20 px-4 lg:px-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 flex flex-col gap-4">
               <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">call</span></div>
               <h3 className="font-bold text-lg">Telefone Geral</h3>
               <p className="text-sm text-text-muted dark:text-gray-400">De Segunda a Sexta, das 8h às 17h.</p>
               <a href="tel:+244923276552" className="text-2xl font-black text-primary hover:underline">+244 923 276 552</a>
            </div>
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 flex flex-col gap-4">
               <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">mail</span></div>
               <h3 className="font-bold text-lg">Email Comercial</h3>
               <p className="text-sm text-text-muted dark:text-gray-400">Para orçamentos e informações.</p>
               <a href="mailto:comercial@tradersagricola.ao" className="text-lg font-bold text-primary hover:underline break-all">comercial@tradersagricola.ao</a>
            </div>
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 flex flex-col gap-4">
               <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">language</span></div>
               <h3 className="font-bold text-lg">Website</h3>
               <p className="text-sm text-text-muted dark:text-gray-400">Visite nosso portal oficial.</p>
               <a href="https://www.tradersagricola.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-primary hover:underline">www.tradersagricola.com</a>
            </div>
          </div>
          <div className="lg:w-2/3 h-full min-h-[500px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 relative shadow-inner">
             <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
               <img src="https://picsum.photos/seed/map/1200/800" alt="Map" className="w-full h-full object-cover grayscale opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 dark:bg-surface-dark/90 p-5 rounded-xl shadow-xl flex items-center gap-4">
                    <span className="material-symbols-outlined text-red-500 text-5xl animate-bounce">location_on</span>
                    <div>
                      <p className="font-black text-lg">Traders Agrícola</p>
                      <p className="text-xs font-bold text-text-muted uppercase">Nossa Localização em Luanda</p>
                    </div>
                 </div>
               </div>
               <button className="absolute bottom-6 right-6 bg-white text-black px-6 py-3 rounded-lg font-black shadow-xl hover:bg-gray-100 transition-all text-sm">Abrir no Google Maps</button>
             </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 lg:px-40 bg-white dark:bg-[#152615]">
        <div className="max-w-4xl mx-auto bg-background-light dark:bg-surface-dark rounded-[40px] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
          <div className="p-10 lg:p-20">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black mb-4">Envie-nos uma Mensagem</h2>
               <p className="text-text-muted dark:text-gray-400 text-lg max-w-lg mx-auto">Preencha o formulário abaixo e a nossa equipa entrará em contacto o mais breve possível.</p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest">Nome Completo</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl border-gray-200 dark:border-white/10 dark:bg-background-dark focus:ring-primary focus:border-primary transition-all" placeholder="Seu nome" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-xl border-gray-200 dark:border-white/10 dark:bg-background-dark focus:ring-primary focus:border-primary transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest">Assunto</label>
                  <select className="w-full px-6 py-4 rounded-xl border-gray-200 dark:border-white/10 dark:bg-background-dark focus:ring-primary focus:border-primary transition-all appearance-none">
                    <option>Solicitação de Orçamento</option>
                    <option>Dúvidas Técnicas</option>
                    <option>Parceria B2B</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest">Telefone</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-xl border-gray-200 dark:border-white/10 dark:bg-background-dark focus:ring-primary focus:border-primary transition-all" placeholder="+244" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest">Mensagem</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-xl border-gray-200 dark:border-white/10 dark:bg-background-dark focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full h-16 bg-primary hover:bg-primary-dark text-white font-black uppercase tracking-widest text-lg rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3">
                Enviar Mensagem <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
