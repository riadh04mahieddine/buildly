import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos de nous */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">À propos de nous</h3>
            <p className="text-gray-400 text-sm">
              Nous créons des produits numériques exceptionnels avec une vitesse et une précision inégalées. Nous transformons les idées visionnaires en solutions prêtes pour le marché qui établissent de nouvelles normes industrielles.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="#contact" className="hover:text-white">Planifier un appel</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Légal</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link href="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="/termes-et-conditions" className="hover:text-white">Termes et conditions</Link></li>
            </ul>
          </div>

          {/* Commencer */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Commencer</h3>
            <Link href="/contact" className="bg-yellow-400 text-black font-bold py-3 px-5 border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-md inline-block">
              LANCEZ VOTRE MVP →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Buildly. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
