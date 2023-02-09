import React from 'react';
import './header.css';
import Head from './Head';
import Navbar from './NavBar';
import Search from './Search';

const Header = () => {
    return (
        <>
        <Head />
        <Search />
        <Navbar />

        </>
        );
}

export default Header;
