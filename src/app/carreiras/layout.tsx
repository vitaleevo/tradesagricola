import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Carreiras | Traders Agrícola',
    description: 'Junte-se à equipa que está a transformar o agronegócio em Angola. Oportunidades em agronomia, logística, vendas e produção agropecuária.',
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
