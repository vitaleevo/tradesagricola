import { NewsArticle } from '@/shared/types';
import React from 'react';

export const articles: NewsArticle[] = [
    {
        slug: "seguranca-alimentar-angola-2024",
        title: "O Papel da Traders Agrícola na Segurança Alimentar",
        excerpt: "Como a nossa produção de aves, peixe e milho está a fortalecer o mercado interno.",
        date: "24 Dez 2023",
        category: "Estratégia",
        img: "/agro_hero_bg.png",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-lg leading-relaxed" },
                "A segurança alimentar é o pilar central do desenvolvimento de Angola. Na Traders Agrícola, compreendemos que a independência das importações começa com uma produção local forte e tecnificada."
            ),
            React.createElement("h3", { className: "text-2xl font-bold mb-4 mt-8" }, "Integração Vertical: Do Campo à Mesa"),
            React.createElement("p", { className: "mb-6 leading-relaxed" },
                "Ao dominarmos a produção de insumos (fertilizantes e sementes) e aplicá-los nos nossos próprios polos agropecuários, conseguimos garantir uma eficiência produtiva superior."
            ),
            React.createElement("h3", { className: "text-2xl font-bold mb-4 mt-8" }, "Impacto da Aquicultura e Avicultura"),
            React.createElement("p", { className: "mb-6 leading-relaxed" },
                "O peixe e o frango são as principais fontes de proteína para a população. Nossos investimentos em aquicultura industrial e avicultura de escala visam reduzir custos e aumentar a disponibilidade de alimentos frescos no mercado nacional."
            )
        )
    },
    {
        slug: "impacto-fertilizantes-npk-producao-nacional",
        title: "Fertilizantes NPK: Maximizando o Rendimento",
        excerpt: "Estudo técnico sobre como a nutrição correta do solo pode duplicar a colheita de cereais.",
        date: "15 Dez 2023",
        category: "Técnico",
        img: "/agro_pesticides_fertilizers.png",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-lg leading-relaxed" },
                "A nutrição do solo é um dos maiores limitantes da produtividade agrícola em Angola. Este artigo técnico explora como a escolha correta do fertilizante pode transformar a realidade dos produtores."
            ),
            React.createElement("h3", { className: "text-2xl font-bold mb-4 mt-8" }, "A Ciência por Trás do NPK"),
            React.createElement("p", { className: "mb-6 leading-relaxed" },
                "Cada solo exige uma balança específica. Nossos engenheiros agrónomos analisam as carências do terreno para prescrever a fórmula NPK ideal para milho, soja ou hortícolas."
            )
        )
    },
    {
        slug: "tecnologia-sementes-alto-rendimento",
        title: "Inovação em Sementes de Alto Rendimento",
        excerpt: "A seleção de sementes certificadas como o primeiro passo para o sucesso agrícola.",
        date: "10 Dez 2023",
        category: "Produção",
        img: "/agro_seeds.png",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-lg leading-relaxed" },
                "Investir em tecnologia de sementes é investir no futuro da colheita. A Traders Agrícola traz para Angola variedades testadas e adaptadas à nossa geografia e clima."
            ),
            React.createElement("h3", { className: "text-2xl font-bold mb-4 mt-8" }, "Resiliência e Produtividade"),
            React.createElement("p", { className: "mb-6 leading-relaxed" },
                "Trabalhamos com sementes que oferecem maior resistência a stress hídrico e pragas, garantindo que o agricultor tenha segurança no seu investimento."
            )
        )
    }
];
