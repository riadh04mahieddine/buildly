'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const ContactPage = () => {
  return (
    <div className="bg-white">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Planifions votre succès
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            Choisissez un créneau ci-dessous pour discuter de votre projet. Cet appel de 30 minutes est gratuit et nous permettra de comprendre vos objectifs et de voir comment nous pouvons vous aider.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border-2 border-black shadow-[8px_8px_0_#000] overflow-hidden">
            {/* 
              IMPORTANT: Remplacez le lien ci-dessous par votre propre lien Calendly.
              Exemple: https://calendly.com/votre-nom/30min
            */}
            <InlineWidget url="https://calendly.com/rmahieddine04/30min" styles={{ height: '1000px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
