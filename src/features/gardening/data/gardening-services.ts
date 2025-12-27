// Catálogo de Serviços de Jardinagem & Paisagismo - Traders Agrícola

export type GardeningCategory =
    | 'Jardinagem Geral'
    | 'Jardinagem Especializada'
    | 'Plantio e Relvados'
    | 'Vasos e Ornamentos'
    | 'Manutenção de Jardins'
    | 'Materiais e Transporte';

export interface GardeningService {
    name: string;
    description?: string;
}

export interface GardeningCategoryData {
    id: GardeningCategory;
    title: string;
    description: string;
    icon: string;
    color: string;
    services: GardeningService[];
}

export const gardeningServicesData: GardeningCategoryData[] = [
    {
        id: 'Jardinagem Geral',
        title: 'Serviços Gerais de Jardinagem',
        description: 'Mão de obra qualificada e apoio operacional para todas as necessidades básicas de jardinagem e preparação de terrenos.',
        icon: 'grass',
        color: '#17cf17',
        services: [
            { name: 'Mão de Obra Geral em Jardinagem', description: 'Equipa profissional para trabalhos diversos de jardinagem' },
            { name: 'Preparação e Limpeza de Terrenos', description: 'Preparação de solo para plantio e novos projetos' },
            { name: 'Limpeza de Espaços Verdes', description: 'Manutenção e limpeza regular de áreas verdes' },
            { name: 'Apoio Operacional em Projetos de Jardinagem', description: 'Suporte técnico e operacional para grandes projetos' },
        ]
    },
    {
        id: 'Jardinagem Especializada',
        title: 'Serviços Especializados de Jardinagem',
        description: 'Criação e transformação de espaços verdes com design paisagístico profissional para residências e empresas.',
        icon: 'yard',
        color: '#22c55e',
        services: [
            { name: 'Criação de Jardins (Residenciais e Empresariais)', description: 'Projetos completos de jardins sob medida' },
            { name: 'Planeamento Paisagístico', description: 'Design e planeamento de espaços verdes' },
            { name: 'Montagem de Jardins Completos', description: 'Execução integral de projetos paisagísticos' },
            { name: 'Revitalização de Jardins Existentes', description: 'Renovação e modernização de jardins antigos' },
        ]
    },
    {
        id: 'Plantio e Relvados',
        title: 'Serviços de Plantio e Relvados',
        description: 'Instalação profissional de plantas ornamentais e relvados naturais com técnicas que garantem durabilidade e beleza.',
        icon: 'local_florist',
        color: '#84cc16',
        services: [
            { name: 'Plantio de Plantas Ornamentais', description: 'Seleção e plantio de espécies decorativas' },
            { name: 'Aplicação de Relva Natural', description: 'Instalação de relvados naturais de alta qualidade' },
            { name: 'Substituição e Recuperação de Relvados', description: 'Renovação de áreas de relva danificadas' },
            { name: 'Organização Decorativa de Jardins', description: 'Arranjo estético de elementos paisagísticos' },
            { name: 'Ajustes e Reposicionamento de Elementos Decorativos', description: 'Otimização do layout do jardim' },
        ]
    },
    {
        id: 'Vasos e Ornamentos',
        title: 'Vasos e Elementos Ornamentais',
        description: 'Fornecimento e instalação de vasos decorativos em todas as tipologias, tamanhos e materiais para embelezar qualquer espaço.',
        icon: 'potted_plant',
        color: '#f59e0b',
        services: [
            { name: 'Vasos de Cerâmica', description: 'Vasos artesanais de cerâmica em diversos tamanhos e cores' },
            { name: 'Vasos de Plástico de Alta Qualidade', description: 'Opções leves e duráveis para uso interior e exterior' },
            { name: 'Vasos de Cimento e Concreto', description: 'Vasos robustos e modernos para áreas externas' },
            { name: 'Vasos de Fibra de Vidro', description: 'Design contemporâneo com leveza e resistência' },
            { name: 'Vasos Suspensos e de Parede', description: 'Soluções criativas para espaços verticais' },
            { name: 'Vasos de Grande Porte', description: 'Peças imponentes para jardins e entradas' },
            { name: 'Jardineiras e Floreiras', description: 'Recipientes alongados para canteiros e varandas' },
            { name: 'Cachepots Decorativos', description: 'Coberturas estéticas para vasos internos' },
            { name: 'Instalação e Posicionamento de Vasos', description: 'Montagem profissional e decoração' },
        ]
    },
    {
        id: 'Manutenção de Jardins',
        title: 'Serviços de Manutenção de Jardins',
        description: 'Cuidados regulares e especializados para manter o seu jardim sempre saudável, bonito e bem cuidado.',
        icon: 'content_cut',
        color: '#10b981',
        services: [
            { name: 'Manutenção Regular de Jardins', description: 'Planos de manutenção periódica personalizados' },
            { name: 'Poda de Plantas e Arbustos', description: 'Corte técnico para saúde e estética das plantas' },
            { name: 'Corte e Nivelamento de Relva', description: 'Manutenção profissional de relvados' },
            { name: 'Remoção de Ervas Daninhas', description: 'Limpeza e controle de pragas vegetais' },
        ]
    },
    {
        id: 'Materiais e Transporte',
        title: 'Materiais e Transporte Especializado',
        description: 'Fornecimento de materiais essenciais para jardinagem e serviços de transporte especializado para obras paisagísticas.',
        icon: 'local_shipping',
        color: '#0ea5e9',
        services: [
            { name: 'Transporte de Relva', description: 'Entrega de rolos de relva natural com cuidado especializado' },
            { name: 'Transporte de Pedra Decorativa', description: 'Movimentação de pedras ornamentais e decorativas' },
            { name: 'Transporte de Materiais de Jardinagem', description: 'Logística completa para plantas, terra e insumos' },
            { name: 'Fornecimento de Pedra Decorativa', description: 'Pedras de diversos tipos, cores e tamanhos' },
            { name: 'Fornecimento de Areia', description: 'Areia fina e grossa para paisagismo e construção' },
            { name: 'Fornecimento de Chapa Isoladora', description: 'Material para proteção e isolamento de canteiros' },
            { name: 'Terra Vegetal e Substrato', description: 'Solo preparado para plantio e cultivo' },
            { name: 'Cascalho e Brita Decorativa', description: 'Materiais para caminhos e áreas de drenagem' },
            { name: 'Logística Interna para Obras de Jardinagem', description: 'Coordenação e movimentação em grandes projetos' },
        ]
    }
];

// Estatísticas para exibição
export const gardeningStats = {
    totalServices: 35,
    categories: 6,
    experience: '+10 Anos',
    coverage: 'Nacional'
};
