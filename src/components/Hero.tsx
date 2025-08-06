import React from 'react';
import CtaButton from './CtaButton';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center">
          <span className="block">De l&apos;idée au lancement.</span>
          <span className="block">Votre <span className="text-red-500">app</span> ou <span className="text-yellow-400">SaaS</span>, plus vite que vous ne l&apos;imaginez.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 text-center">Nous sommes l&apos;équipe technique des fondateurs ambitieux. Nous transformons votre vision SaaS ou mobile en un produit d&apos;exception, prêt pour la croissance.</p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <CtaButton href="/contact" className="py-4 px-8 text-lg">
          Réserver un appel gratuit → 
          </CtaButton>
          
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-1/2 -translate-y-1/2 left-10 w-20 h-20 bg-red-500 rounded-full border-2 border-black opacity-50 hidden md:block"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-400 border-2 border-black opacity-50 hidden md:block"></div>
    </section>
  );
};

export default Hero;
