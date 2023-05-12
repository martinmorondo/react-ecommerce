import React from 'react';
import './header.css';
import Head from './Head';
import Navbar from './NavBar';
import Search from './Search';

const Header = ({ cartItem }) => {
    return (
        <>
        <Head />
        <Search cartItem = {cartItem} />
        <Navbar />
        </>
        );
}

export default Header;
