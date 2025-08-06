import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeShip from "@/components/HowWeShip";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buildly | Agence de Développement d\'Apps Mobiles & SaaS pour Startups',
  description: 'Accélérez votre croissance avec Buildly. Nous créons des applications mobiles et des plateformes SaaS sur-mesure pour les entrepreneurs ambitieux. Transformons votre idée en succès.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeShip />
      <WhyUs />
      <FAQ />
      <Projects />
      <CTA />
    </>
  );
}
