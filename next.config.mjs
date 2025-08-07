/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver l'option strictMode pour éviter les doubles rendus en développement
  reactStrictMode: false,
  
  // Optimiser les images
  images: {
    domains: ['www.buildly.dev'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configuration spécifique pour Vercel
  eslint: {
    // Avertir mais ne pas bloquer le build en cas d'erreurs ESLint
    ignoreDuringBuilds: true,
  },

  // Ignorer les erreurs TypeScript lors du build pour Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
