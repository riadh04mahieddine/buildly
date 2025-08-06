import React from 'react';
import Link from 'next/link';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ href, children, className = '' }) => {
  const buttonClasses = `
    inline-block bg-yellow-400 text-black font-bold py-3 px-6 
    border-2 border-black shadow-[4px_4px_0_#000] 
    hover:shadow-none hover:translate-x-1 hover:translate-y-1 
    transition-all duration-200 text-center
  `;

  return (
    <Link href={href} className={`${buttonClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default CtaButton;
