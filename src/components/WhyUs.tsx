import React from 'react';
import { Lightbulb, Cpu, Users } from 'lucide-react';
import CtaButton from './CtaButton';

const advantages = [
  {
    icon: <Lightbulb size={32} className="text-yellow-500" />,
    title: "Conseil d\'Expert",
    description: "Profitez de notre expérience approfondie pour affiner votre idée, définir une stratégie produit solide et éviter les pièges courants.",
    bgColor: 'bg-yellow-100',
  },
  {
    icon: <Cpu size={32} className="text-blue-500" />,
    title: "Technologie de Pointe",
    description: "Nous utilisons les dernières technologies et les frameworks les plus performants pour construire des produits modernes, rapides et évolutifs.",
    bgColor: 'bg-blue-100',
  },
  {
    icon: <Users size={32} className="text-green-500" />,
    title: "Une Équipe d'Élite",
    description: "Collaborez avec une équipe de développeurs, designers et stratèges passionnés et dédiés à la réussite de votre projet.",
    bgColor: 'bg-green-100',
  },
];

interface AdvantageCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, bgColor }) => (
    <div className="bg-white p-6 border-2 border-black shadow-[6px_6px_0_#000]">
        <div className={`w-16 h-16 flex items-center justify-center ${bgColor} border-2 border-black mb-6`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Pourquoi nous choisir ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">On est une équipe smart a la pointe de la technologies on peut vous conseiller et vous aider grace a notre experiance dans le domaine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
        <div className="mt-20 text-center">
            <CtaButton href="#contact">Travaillons ensemble →</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
