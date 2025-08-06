import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Inclure tous les fichiers dans src
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Définir explicitement les couleurs utilisées
        red: {
          500: '#ef4444',
        },
        yellow: {
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
  // S'assurer que Tailwind est bien activé
  corePlugins: {
    preflight: true,
  },
}

export default config
