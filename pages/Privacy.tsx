
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-white dark:bg-[#152615] px-4 lg:px-40 py-16">
        <div className="max-w-4xl mx-auto">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs w-fit mb-6 block">Legal</span>
          <h1 className="text-4xl lg:text-6xl font-black mb-8">Política de Privacidade</h1>
          <p className="text-text-muted dark:text-gray-400 text-lg">Última atualização: 24 de Maio de 2024</p>
        </div>
      </section>

      <section className="px-4 lg:px-40 py-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-green">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">01.</span> Introdução
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                A Traders Agrícola – Prestação de Serviços, Lda ("nós", "nosso" ou "Traders Agrícola") está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos as suas informações quando visita o nosso website tradersagricola.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">02.</span> Informações que Recolhemos
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-4">
                Recolhemos informações que nos fornece diretamente quando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted dark:text-gray-300">
                <li>Preenche o nosso formulário de contacto ou pedido de orçamento.</li>
                <li>Subscreve a nossa newsletter.</li>
                <li>Entra em contacto connosco via e-mail ou telefone.</li>
              </ul>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed mt-4">
                Os dados recolhidos podem incluir o seu nome, endereço de e-mail, número de telefone e detalhes sobre o seu projeto ou necessidade agrícola.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">03.</span> Uso das Informações
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-4">
                Utilizamos os seus dados para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted dark:text-gray-300">
                <li>Processar e responder aos seus pedidos de orçamento.</li>
                <li>Fornecer suporte ao cliente e informações técnicas.</li>
                <li>Melhorar os nossos serviços e a experiência do utilizador no website.</li>
                <li>Cumprir obrigações legais e fiscais vigentes em Angola.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">04.</span> Proteção de Dados
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. O nosso website utiliza encriptação SSL para garantir a segurança da transmissão de dados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">05.</span> Partilha com Terceiros
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Não vendemos nem alugamos os seus dados pessoais a terceiros. Podemos partilhar informações apenas com parceiros de confiança que nos auxiliam na operação do website ou na condução dos nossos negócios (como serviços logísticos), desde que estas partes concordem em manter estas informações confidenciais.
              </p>
            </div>

            <div className="p-8 bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold text-lg mb-2">Dúvidas sobre Privacidade?</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 mb-4">Se tiver alguma questão sobre esta política, entre em contacto com o nosso encarregado de proteção de dados.</p>
              <a href="mailto:comercial@tradersagricola.com" className="text-primary font-bold hover:underline">comercial@tradersagricola.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
