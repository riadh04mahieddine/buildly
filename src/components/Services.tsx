import React from 'react';
import { Code, Smartphone, Box, Cloud, BrainCircuit, MicVocal, ArrowUpRight } from 'lucide-react';
import CtaButton from './CtaButton';

const servicesData = [
  {
    title: 'Développement d\'Applications Web Sur Mesure',
    description: 'Des applications web sur mesure conçues pour répondre aux besoins uniques de votre entreprise.',
    icon: <Code size={32} className="text-orange-500" />,
    bgColor: 'bg-orange-100',
  },
  {
    title: 'Développement d\'Applications Mobiles',
    description: 'Lançons vos applications iOS et Android plus rapidement, avec une expérience utilisateur exceptionnelle.',
    icon: <Smartphone size={32} className="text-green-500" />,
    bgColor: 'bg-green-100',
  },
  {
    title: 'Développement de MVP',
    description: 'Vous construisez votre entreprise. Nous construirons votre logiciel IA/Web/Mobile, plus rapidement et mieux.',
    icon: <Box size={32} className="text-purple-500" />,
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Entreprise de Développement d\'Applications SaaS',
    description: 'Des applications web et mobiles SaaS évolutives et prêtes pour le marché en quelques semaines.',
    icon: <Cloud size={32} className="text-blue-500" />,
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Intelligence Artificielle & IA Générative',
    description: 'Donnez à votre entreprise une nouvelle dimension avec une automatisation de pointe.',
    icon: <BrainCircuit size={32} className="text-red-500" />,
    bgColor: 'bg-red-100',
  },
  {
    title: 'Développement d\'IA Vocale',
    description: 'Transformez votre idée en un produit logiciel avec une feuille de route d\'expert.',
    icon: <MicVocal size={32} className="text-yellow-500" />,
    bgColor: 'bg-yellow-100',
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, bgColor }) => (
  <div className="bg-white p-6 border-2 border-black shadow-[6px_6px_0_#000] flex flex-col h-full hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_#000] transition-all duration-200">
    <div className="flex items-start justify-between">
        <div className={`w-16 h-16 flex items-center justify-center ${bgColor} border-2 border-black mb-4`}>
            {icon}
        </div>
        <ArrowUpRight size={24} className="text-gray-400" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">
          <span className="bg-yellow-400 border-2 border-black px-4 py-1">Nos Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-20 text-center">
            <CtaButton href="#contact">Discutons de votre projet →</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
