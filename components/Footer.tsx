
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark text-text-main dark:text-white pt-16 pb-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">agriculture</span>
              <span className="text-xl font-bold">Traders Agrícola</span>
            </div>
            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformando a paisagem e a agricultura em Angola com profissionalismo e dedicação rigorosa.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Empresa</h4>
            <Link to="/sobre" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Sobre Nós</Link>
            <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Carreiras</a>
            <a href="#" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Notícias</a>
            <Link to="/contato" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Contato</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Serviços</h4>
            <Link to="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Paisagismo Urbano</Link>
            <Link to="/b2b" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Manutenção de Áreas Verdes</Link>
            <Link to="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Insumos Agrícolas</Link>
            <Link to="/servicos" className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors text-sm">Vasos Decorativos</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Contato</h4>
            <div className="flex items-start gap-3 text-text-muted dark:text-gray-400">
              <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
              <span className="text-sm">Av. 4 de Fevereiro, Talatona, Luanda</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <span className="text-sm">+244 923 000 000</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted dark:text-gray-400">
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              <span className="text-sm">geral@tradersagricola.ao</span>
            </div>
            <div className="flex gap-4 mt-4">
               {['social_leaderboard', 'photo_camera', 'work'].map((icon, idx) => (
                 <a key={idx} href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-base">{icon}</span>
                 </a>
               ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted dark:text-gray-500">
          <p>© 2024 Traders Agrícola. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
