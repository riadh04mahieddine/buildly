import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css"; // Import explicite de Tailwind
import "./tailwind-utilities.css"; // Classes CSS explicites pour garantir les styles
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Buildly | Agence de Développement d\'Apps Mobiles & SaaS pour Startups",
  description: "Nous aidons les entrepreneurs à construire, lancer et faire grandir des applications ambitieuses qui résolvent de vrais problèmes.",
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Buildly',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              description: 'Agence de développement spécialisée dans la création d\'applications mobiles et de plateformes SaaS pour startups.',
              url: 'https://www.buildly.dev', // Remplacez par votre nom de domaine
              logo: 'https://www.buildly.dev/images/logo.png', // Remplacez par votre nom de domaine
            }),
          }}
        />
      </body>
    </html>
  );
}
