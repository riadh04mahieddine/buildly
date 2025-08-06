import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Ici, vous pouvez étendre le thème par défaut de Tailwind
      // par exemple, en ajoutant des couleurs, des polices, etc.
    },
  },
  plugins: [],
}
export default config
