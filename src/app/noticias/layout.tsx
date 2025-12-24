import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Notícias e Actualizações | Traders Agrícola',
    description: 'Actualizações sobre o sector primário em Angola, inovações no comércio de insumos e o impacto da nossa produção nacional.',
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
