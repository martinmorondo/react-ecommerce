import React from 'react';
import './header.css';
import Head from './Head';
import Search from './Search';

const Header = ({ cartItem }) => {
    return (
        <>
        <Head />
        <Search cartItem = {cartItem} />
        </>
        );
}

export default Header;
