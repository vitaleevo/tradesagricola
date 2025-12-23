
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-white dark:bg-[#152615] px-4 lg:px-40 py-16">
        <div className="max-w-4xl mx-auto">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs w-fit mb-6 block">Acordo</span>
          <h1 className="text-4xl lg:text-6xl font-black mb-8">Termos de Uso</h1>
          <p className="text-text-muted dark:text-gray-400 text-lg">Bem-vindo aos Termos de Uso da Traders Agrícola.</p>
        </div>
      </section>

      <section className="px-4 lg:px-40 py-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-green">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">1.</span> Aceitação dos Termos
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Ao aceder ao website tradersagricola.com, o utilizador concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis em Angola. Se não concordar com algum destes termos, está proibido de usar ou aceder a este site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">2.</span> Uso de Licença de Conteúdo
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site da Traders Agrícola apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-text-muted dark:text-gray-300">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                <li>Remover quaisquer direitos de autor ou outras notações de propriedade dos materiais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">3.</span> Isenção de Responsabilidade
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Os materiais no site da Traders Agrícola são fornecidos 'como estão'. A Traders Agrícola não oferece garantias, expressas ou implícitas, e, por este meio, isenta-se e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">4.</span> Orçamentos e Contratos
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Qualquer informação sobre preços ou especificações técnicas fornecida no site é meramente indicativa. A validade de qualquer orçamento ou proposta comercial está sujeita à formalização através de um contrato escrito e assinado por ambas as partes, após visita técnica e diagnóstico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">5.</span> Lei Aplicável
              </h2>
              <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo com as leis da República de Angola e o utilizador submete-se irrevogavelmente à jurisdição exclusiva dos tribunais da província de Luanda para a resolução de quaisquer disputas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
