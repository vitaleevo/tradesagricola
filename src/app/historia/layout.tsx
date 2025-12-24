import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nossa Jornada | Traders Agrícola',
    description: 'Conheça a história, missão e visão da Traders Agrícola, desde a sua fundação em 2015 até à liderança no agronegócio angolano.',
};

export default function HistoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
