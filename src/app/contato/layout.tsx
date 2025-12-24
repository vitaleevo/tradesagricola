import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto | Traders Agrícola',
    description: 'Entre em contacto com a nossa equipa para orçamentos, parcerias ou suporte técnico agropecuário em Angola.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
