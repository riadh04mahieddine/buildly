import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Buildly Logo" width={140} height={30} />
        </Link>
        <Link 
          href="/contact" 
          className="bg-yellow-400 text-black font-bold py-2 px-5 border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        >
          DISCUTONS →
        </Link>
      </div>
    </header>
  );
};

export default Header;
