'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CtaButton from './CtaButton';

const faqData = [
  {
    question: 'Quel est le coût pour développer un MVP ?',
    answer: 'Le coût d\'un MVP varie considérablement en fonction de la complexité. Nous proposons un "Sprint Stratégique" initial pour définir précisément la portée et vous fournir un devis détaillé et transparent.',
  },
  {
    question: 'Combien de temps faut-il pour construire une application ?',
    answer: 'Notre processus est conçu pour la vitesse. Un MVP peut être livré en aussi peu que 4 à 8 semaines. Pour des projets plus complexes, le délai peut s\'étendre, mais nous nous engageons toujours à livrer rapidement.',
  },
  {
    question: 'Travaillez-vous avec des startups qui n\'ont qu\'une idée ?',
    answer: 'Absolument ! C\'est notre spécialité. Nous aimons transformer des idées brutes en produits logiciels fonctionnels et vous accompagner de la conceptualisation au lancement.',
  },
  {
    question: 'Quel type de technologies utilisez-vous ?',
    answer: 'Nous utilisons les technologies les plus modernes et performantes comme Next.js, React, Node.js, et les bases de données adaptées pour garantir la performance et l\'évolutivité de votre projet.',
  },
    {
    question: 'Offrez-vous de la maintenance après le lancement ?',
    answer: 'Oui, nous proposons des contrats de maintenance et de support pour nous assurer que votre application reste performante, sécurisée et à jour. Nous pouvons aussi travailler sur les futures fonctionnalités.',
  },
];

interface FaqItemProps {
    item: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => (
    <div className="border-2 border-black mb-4 bg-white">
        <button
            className="w-full flex justify-between items-center p-6 font-bold text-left"
            onClick={onClick}
        >
            <span className="text-lg">{item.question}</span>
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </button>
        {isOpen && (
            <div className="p-6 pt-0 text-gray-700">
                <p>{item.answer}</p>
            </div>
        )}
    </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Questions Fréquentes
            </h2>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <FaqItem 
                    key={index} 
                    item={item} 
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
        <div className="mt-20 text-center">
            <CtaButton href="#contact">Vous avez une autre question ? →</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
