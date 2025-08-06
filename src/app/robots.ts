import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.buildly.fr/sitemap.xml', // Remplacez par votre nom de domaine
  };
}
