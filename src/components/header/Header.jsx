import React from 'react';
import Head from './Head';
import Search from './Search';

const Header = () => {
    return (
        <header className="relative z-[1000] w-full">
            <Head />
            <Search />
        </header>
    );
}

export default Header;