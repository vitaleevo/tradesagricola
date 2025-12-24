import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Serviços e Insumos | Traders Agrícola',
    description: 'Soluções integradas em agropecuária: fertilizantes, pesticidas, sementes, produção de aves, peixe e comércio geral alimentar em Angola.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
