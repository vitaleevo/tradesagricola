import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parcerias B2B | Traders Agrícola',
    description: 'Soluções corporativas para abastecimento alimentar, distribuição de insumos em larga escala e consultoria técnica em Angola.',
};

export default function B2BLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
