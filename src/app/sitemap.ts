import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tradersagricola.com';

    // Páginas estáticas principais
    const routes = [
        '',
        '/servicos',
        '/jardinagem',
        '/fornecimentos',
        '/b2b',
        '/historia',
        '/contato',
        '/noticias',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
