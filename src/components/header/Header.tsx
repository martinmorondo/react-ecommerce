import React from 'react';
import Head from './Head';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <header className="relative z-[1000] w-full bg-secondary">

      {/* Barra superior */}
      <Head />

      {/* Área principal del header */}
      <div className="relative border-b border-black/5 dark:border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

        <div className="relative">
          <Search />
        </div>
      </div>

    </header>
  );
};

export default Header;