// Catálogo de Fornecimentos Laboratoriais - Traders Agrícola

export type SupplyCategory =
    | 'Reagentes Físico-Químicos'
    | 'Kits para Análise de Água'
    | 'Reagentes para Provas Bioquímicas';

export interface SupplyItem {
    name: string;
    description?: string;
}

export interface SupplySubcategory {
    title: string;
    icon: string;
    items: SupplyItem[];
}

export interface SupplyCategoryData {
    id: SupplyCategory;
    title: string;
    description: string;
    icon: string;
    color: string;
    subcategories?: SupplySubcategory[];
    items?: SupplyItem[];
}

export const labSuppliesData: SupplyCategoryData[] = [
    {
        id: 'Reagentes Físico-Químicos',
        title: 'Reagentes Físico-Químicos',
        description: 'Linha completa de reagentes analíticos de alta pureza para laboratórios de análise química, controle de qualidade e pesquisa científica.',
        icon: 'science',
        color: '#17cf17',
        items: [
            { name: 'Acetato de Amónio' },
            { name: 'Acetato de Cálcio Hidratado' },
            { name: 'Acetato de Cobre' },
            { name: 'Ácido Acético 100%' },
            { name: 'Ácido Bórico' },
            { name: 'Ácido Hidroclorídrico 37%' },
            { name: 'Ácido Metafosfórico' },
            { name: 'Ácido Nítrico 69%' },
            { name: 'Ácido Perclórico' },
            { name: 'Ácido Oxálico Dihidratado' },
            { name: 'Ácido Fosfórico' },
            { name: 'Ácido Sulfúrico 95%' },
            { name: 'Amoníaco 25%' },
            { name: 'Azul de Bromofenol' },
            { name: 'Carvão Ativo' },
            { name: 'Citrato de Sódio Dihidratado' },
            { name: 'Cloreto de Amónio' },
            { name: 'Cloreto de Potássio' },
            { name: 'Clorofórmio' },
            { name: 'Cromato de Potássio' },
            { name: 'Diclorometano' },
            { name: 'Dicromato de Sódio' },
            { name: 'Dicromato de Potássio' },
            { name: 'Difenilamina' },
            { name: 'Éter Dietílico' },
            { name: 'Éter de Petróleo (40–60°C)' },
            { name: 'EDTA (Etilenodiaminotetracético)' },
            { name: 'Fenantrolina Monohidratada' },
            { name: 'Fenolftaleína em Etanol 1%' },
            { name: 'Fluoreto de Amónio' },
            { name: 'Formaldeído 37–38%' },
            { name: 'Glicerina' },
            { name: 'Heptamolibdato de Amónio Tetrahidratado' },
            { name: 'Hidrogenoftalato de Potássio' },
            { name: 'Hidrogenocarbonato de Sódio' },
            { name: 'Hidrogenofosfato de Potássio' },
            { name: 'Hidróxido de Potássio' },
            { name: 'Hidróxido de Sódio' },
            { name: 'Iodeto de Potássio' },
            { name: 'Metavanadato de Amónio' },
            { name: 'Murexida' },
            { name: 'Nitrato de Lantânio Hexahidratado' },
            { name: 'Nitrato de Prata' },
            { name: 'Oxalato de Amónio Monohidratado' },
            { name: 'Óxido de Magnésio' },
            { name: 'Pedra-Pomes (Grânulos)' },
            { name: 'Permanganato de Potássio' },
            { name: 'Fosfato Monopotássico' },
            { name: 'Hexacianoferrato de Potássio II Hidratado' },
            { name: 'Vermelho de Metilo' },
            { name: 'Solução Padrão para Condutivímetro (1413 µS/cm)' },
            { name: 'Solução de Preto de Eriocromo' },
            { name: 'Soluções Tampão (diversos pH)' },
            { name: 'Sulfato de Amónio' },
            { name: 'Sulfato de Cobre' },
            { name: 'Sulfato de Zinco Heptahidratado' },
            { name: 'Trietanolamina' },
            { name: 'Tartarato Duplo de Potássio e Sódio' },
            { name: 'Sulfato de Cobre Pentahidratado' },
        ]
    },
    {
        id: 'Kits para Análise de Água',
        title: 'Kits para Análise de Água',
        description: 'Kits de teste rápidos e precisos para análise de parâmetros físico-químicos e biológicos em amostras de água potável, residual e industrial.',
        icon: 'water_drop',
        color: '#0ea5e9',
        items: [
            { name: 'Kits para Alumínio' },
            { name: 'Kits para Amónio' },
            { name: 'Kits para Capacidade Ácida' },
            { name: 'Kits para Arsénio' },
            { name: 'Kits para Boro' },
            { name: 'Kits para Bromo' },
            { name: 'Kits CSB (vários intervalos)' },
            { name: 'Kits para Cálcio' },
            { name: 'Kits para Cianeto' },
            { name: 'Kits para Cádmio' },
            { name: 'Kits para Chumbo' },
            { name: 'Kits para Cloro (Livre e Total)' },
            { name: 'Kits para Cloretos' },
            { name: 'Kits para Cobre' },
            { name: 'Kits para Crómio' },
            { name: 'Kits para Fenol' },
            { name: 'Kits para Ferro' },
            { name: 'Kits para Flúor' },
            { name: 'Kits para Fosfato' },
            { name: 'Kits para Iodo' },
            { name: 'Kits para Manganês' },
            { name: 'Kits para Nitrato' },
            { name: 'Kits para Nitrito' },
            { name: 'Kits para Nitrogénio' },
            { name: 'Kits para Níquel' },
            { name: 'Kits para Potássio' },
            { name: 'Kits para Sódio' },
            { name: 'Kits para Sulfato' },
            { name: 'Kits para Sulfito' },
            { name: 'Kits para Sulfuretos' },
            { name: 'Kits para Tensioativos (Aniônicos, Catiônicos e Não Iônicos)' },
            { name: 'Kits TOC (Carbono Orgânico Total)' },
            { name: 'Kits de Dureza Total' },
            { name: 'Kits para Zinco' },
        ]
    },
    {
        id: 'Reagentes para Provas Bioquímicas',
        title: 'Reagentes para Provas Bioquímicas',
        description: 'Meios de cultura, reagentes e kits especializados para microbiologia alimentar e análise de águas, seguindo normas internacionais de qualidade.',
        icon: 'biotech',
        color: '#a855f7',
        subcategories: [
            {
                title: 'Análise de Alimentos',
                icon: 'restaurant',
                items: [
                    { name: 'Brilliant Green Lactose Bile Broth' },
                    { name: 'Agar Sangue' },
                    { name: 'Meios para Microscopia (Bolores e Leveduras)' },
                    { name: 'Testes para Clostridium Sulfito Redutores' },
                    { name: 'Testes para Listeria (Hemólise, Rhamnose, Xilose)' },
                    { name: 'Agar TSI' },
                    { name: 'Agar Ureia' },
                    { name: 'Agar LDC' },
                    { name: 'Meios para Enterobactérias' },
                    { name: 'Teste de Coagulase' },
                ]
            },
            {
                title: 'Análise de Águas',
                icon: 'water',
                items: [
                    { name: 'Teste de Oxidase' },
                    { name: 'Agar Bile Aesculin Azide' },
                    { name: "King's B Medium" },
                    { name: 'Acetamide Broth' },
                    { name: 'Nutrient Agar' },
                    { name: 'Reagente de Nessler' },
                    { name: 'Agar Sangue / Tryptone Soya Agar' },
                    { name: 'Teste de Fosfatase Ácida' },
                ]
            }
        ]
    }
];

// Estatísticas para exibição
export const suppliesStats = {
    totalProducts: 100,
    categories: 3,
    certifications: ['ISO 9001', 'CE', 'REACH'],
    deliveryAreas: 'Nacional'
};
