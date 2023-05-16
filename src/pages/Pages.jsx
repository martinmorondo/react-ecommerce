import React from 'react';
import Home from '../components/main/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import { TopCate } from '../components/top/TopCate';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { Shop } from '../components/shop/Shop';
import Annocument from '../components/annocuments/Annocument';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
    return (
        <>
            <Home cartItem = {cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate productItems={productItems} addToCart={addToCart} />
            <NewArrivals />
            <Shop shopItems = {shopItems} addToCart={addToCart} />
            <Annocument />
            <Wrapper />
        </>
    );
}

export default Pages;
