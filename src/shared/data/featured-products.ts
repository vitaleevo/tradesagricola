export interface FeaturedProduct {
    id: string;
    name: string;
    category: 'reagents' | 'gardening' | 'pots';
    description: string;
    image: string;
    price?: string;
    specs?: { label: string; value: string }[];
    tags?: string[];
    fullDescription?: string;
}

export const featuredProducts: FeaturedProduct[] = [
    // Reagentes
    {
        id: 'reagent-1',
        name: 'Reagente de Análise Blue-Protin',
        category: 'reagents',
        description: 'Solução de alta pureza para análises bioquímicas precisas.',
        image: '/images/products/reagents/reagent-1.png',
        specs: [
            { label: 'Pureza', value: '≥ 99.9%' },
            { label: 'Forma', value: 'Líquida' },
            { label: 'Estabilidade', value: '24 meses' }
        ],
        tags: ['Laboratório', 'Alta Pureza', 'Certificado'],
        fullDescription: 'O Blue-Protin é um reagente premium desenvolvido para laboratórios de ponta. Sua formulação garante resultados consistentes e reprodutíveis em ensaios de quantificação de proteínas e análises enzimáticas.'
    },
    {
        id: 'reagent-2',
        name: 'Precursor de Síntese Orgânica',
        category: 'reagents',
        description: 'Grau de pesquisa para sínteses complexas em laboratório.',
        image: '/images/products/reagents/reagent-2.png',
        specs: [
            { label: 'Gradação', value: 'HPLC Grade' },
            { label: 'Solubilidade', value: 'Total em Álcool' },
            { label: 'Armazenamento', value: '4°C' }
        ],
        tags: ['P&D', 'Orgânico', 'Especializado']
    },
    {
        id: 'reagent-3',
        name: 'Kit de Solventes Ethereal',
        category: 'reagents',
        description: 'Conjunto de solventes purificados para cromatografia.',
        image: '/images/products/reagents/reagent-3.png',
        specs: [
            { label: 'Componentes', value: '5 solventes' },
            { label: 'Pureza', value: 'Cromatográfica' },
            { label: 'Volume', value: '500ml/un' }
        ],
        tags: ['Cromatografia', 'Kits', 'Essencial']
    },
    {
        id: 'reagent-4',
        name: 'Indicador de pH de Precisão',
        category: 'reagents',
        description: 'Solução indicadora estável com resposta rápida.',
        image: '/images/products/reagents/reagent-4.png',
        specs: [
            { label: 'Faixa pH', value: '0 - 14' },
            { label: 'Precisão', value: '± 0.01' },
            { label: 'Volume', value: '100ml' }
        ],
        tags: ['Análise', 'Monitoramento', 'Estabilidade']
    },
    {
        id: 'reagent-5',
        name: 'Galão Industrial de Reagente Alfa',
        category: 'reagents',
        description: 'Fornecimento em larga escala para processos industriais.',
        image: '/images/products/reagents/reagent-5.png',
        specs: [
            { label: 'Volume', value: '20 Litros' },
            { label: 'Norma', value: 'ISO 9001' },
            { label: 'Uso', value: 'Industrial' }
        ],
        tags: ['B2B', 'Escala Industrial', 'Eficiência']
    },

    // Jardinagem
    {
        id: 'garden-1',
        name: 'Kit de Ferramentas Premium',
        category: 'gardening',
        description: 'Conjunto ergonômico em aço inoxidável e madeira nobre.',
        image: '/images/products/gardening/garden-1.png',
        specs: [
            { label: 'Material', value: 'Aço Inox 304' },
            { label: 'Cabo', value: 'Nogueira Tratada' },
            { label: 'Garantia', value: '5 anos' }
        ],
        tags: ['Ergonômico', 'Durável', 'Design Premium'],
        fullDescription: 'Este kit de ferramentas foi desenhado para o jardineiro exigente que busca conforto e durabilidade. O aço inoxidável de alta qualidade previne corrosão, enquanto o cabo de nogueira oferece uma pegada firme e confortável.'
    },
    {
        id: 'garden-2',
        name: 'Paisagismo Tropical Moderno',
        category: 'gardening',
        description: 'Design exclusivo com caminhos em pedra e flora exótica.',
        image: '/images/products/gardening/garden-2.jpg',
        specs: [
            { label: 'Estilo', value: 'Moderno / Tropical' },
            { label: 'Instalação', value: 'Inclusa' },
            { label: 'Manutenção', value: 'Baixa' }
        ],
        tags: ['Design', 'Exclusivo', 'Customizado']
    },
    {
        id: 'garden-3',
        name: 'Jardim Vertical Inteligente',
        category: 'gardening',
        description: 'Solução modular para ambientes internos e áreas gourmet.',
        image: '/images/products/gardening/garden-3.jpg',
        specs: [
            { label: 'Irrigação', value: 'Automática' },
            { label: 'Módulos', value: 'Expansível' },
            { label: 'Sensores', value: 'Hipotônicos' }
        ],
        tags: ['Tecnologia', 'Sustentável', 'Indoor']
    },
    {
        id: 'garden-4',
        name: 'Consultoria de Plantio Especializado',
        category: 'gardening',
        description: 'Mão de obra técnica para garantir o crescimento saudável.',
        image: '/images/products/gardening/garden-4.png',
        specs: [
            { label: 'Duração', value: 'Sob Demanda' },
            { label: 'Técnicos', value: 'Especializados' },
            { label: 'Acompanhamento', value: 'Mensal' }
        ],
        tags: ['Serviço', 'Especialista', 'Pós-Venda']
    },
    {
        id: 'garden-5',
        name: 'Infraestrutura de Estufas',
        category: 'gardening',
        description: 'Sistemas completos para cultivo controlado de alto rendimento.',
        image: '/images/products/gardening/garden-5.jpg',
        specs: [
            { label: 'Controle', value: 'Climatizado' },
            { label: 'Estrutura', value: 'Alumínio' },
            { label: 'Filtragem UV', value: 'Sim' }
        ],
        tags: ['Cultivo', 'Escalabilidade', 'Proteção']
    },

    // Vasos
    {
        id: 'pot-1',
        name: 'Vaso Minimalista Concrete-Zen',
        category: 'pots',
        description: 'Design contemporâneo em concreto leve reforçado.',
        image: '/images/products/pots/pot-1.webp',
        specs: [
            { label: 'Peso', value: 'Leve (GRC)' },
            { label: 'Cor', value: 'Cinza Natural' },
            { label: 'Resistência', value: 'Intempéries' }
        ],
        tags: ['Moderno', 'Resistente', 'Minimalista'],
        fullDescription: 'O Vaso Concrete-Zen combina a estética industrial do concreto com a leveza da tecnologia GRC (Glassfibre Reinforced Concrete). Perfeito para composições minimalistas em decks ou interiores.'
    },
    {
        id: 'pot-2',
        name: 'Vaso de Cerâmica Esmaltada Emerald',
        category: 'pots',
        description: 'Acabamento artesanal com brilho profundo e duradouro.',
        image: '/images/products/pots/pot-2.webp',
        specs: [
            { label: 'Processo', value: 'Artesanal' },
            { label: 'Acabamento', value: 'Esmaltado' },
            { label: 'Uso', value: 'Interno / Externo' }
        ],
        tags: ['Artesanal', 'Elegante', 'Premium']
    },
    {
        id: 'pot-3',
        name: 'Vaso Geométrico Matte Black',
        category: 'pots',
        description: 'Minimalismo escandinavo para interiores modernos.',
        image: '/images/products/pots/pot-3.jpg',
        specs: [
            { label: 'Forma', value: 'Geométrica' },
            { label: 'Cor', value: 'Preto Fosco' },
            { label: 'Material', value: 'Polímero Eco' }
        ],
        tags: ['Interior', 'Escandinavo', 'Fosco']
    },
    {
        id: 'pot-4',
        name: 'Vaso de Fibra Charcoal Large',
        category: 'pots',
        description: 'Leveza e resistência para grandes áreas externas.',
        image: '/images/products/pots/pot-4.webp',
        specs: [
            { label: 'Capacidade', value: '150 Litros' },
            { label: 'Material', value: 'Fibra de Vidro' },
            { label: 'Textura', value: 'Rústica' }
        ],
        tags: ['Outdoor', 'Grande Porte', 'Durável']
    },
    {
        id: 'pot-5',
        name: 'Vaso Terracotta Clássico',
        category: 'pots',
        description: 'Peça artesanal com texturas naturais e atemporais.',
        image: '/images/products/pots/pot-5.webp',
        specs: [
            { label: 'Material', value: 'Argila Natural' },
            { label: 'Porosidade', value: 'Média' },
            { label: 'Estilo', value: 'Mediterrâneo' }
        ],
        tags: ['Clássico', 'Natural', 'Atemporal']
    }
];
