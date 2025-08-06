import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-yellow-400 border-y-2 border-black">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
          Prêt à Lancer Votre Projet ?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-black">
          Nous avons aidé des startups et des entreprises à construire des produits exceptionnels. Nous sommes prêts à vous aider à construire le vôtre.
        </p>
        <div className="mt-8">
            <Link 
                href="#contact"
                className="inline-block bg-white text-black font-bold py-4 px-8 border-2 border-black shadow-[6px_6px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              DISCUTONS DE VOTRE IDÉE →
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
