import React from 'react';
import CtaButton from './CtaButton';

const processSteps = [
  {
    number: '01',
    title: 'Sprint stratégique',
    description: 'Appel de découverte rapide mais approfondi pour définir votre vision et la portée MVP parfaite.',
    borderColor: 'border-red-500',
  },
  {
    number: '02',
    title: 'Explosion de design',
    description: 'Processus de conception ultra-rapide axé sur l\'expérience utilisateur et l\'optimisation de la conversion.',
    borderColor: 'border-yellow-400',
  },
  {
    number: '03',
    title: 'Marathon de codes',
    description: 'Sprint de développement intense avec des mises à jour quotidiennes et des itérations rapides.',
    borderColor: 'border-green-400',
  },
  {
    number: '04',
    title: 'Lancement de fusée',
    description: 'Tests finaux, déploiement et livraison : votre produit est prêt à décoller.',
    borderColor: 'border-blue-500',
  },
];

interface StepCardProps {
    number: string;
    title: string;
    description: string;
    borderColor: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, borderColor }) => (
    <div className={`border-t-4 ${borderColor} pt-6`}>
        <p className="text-6xl font-black text-gray-600 mb-2">{number}</p>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const HowWeShip = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Comment nous expédions rapidement
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
        <div className="mt-20 text-center">
            <CtaButton href="#contact">Prêt à commencer votre sprint ? →</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default HowWeShip;
