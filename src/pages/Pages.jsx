import React from 'react';
import Home from '../components/main/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import { TopCate } from '../components/top/TopCate';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { Shop } from '../components/shop/Shop';
import Annocument from '../components/annocuments/Annocument';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({ productItems, cartItem, addToCart, shopItems, topItems, arrivalsItems, selectedCategory }) => {

    const filteredShopItems = selectedCategory ? shopItems.filter(item => item.category === selectedCategory) : shopItems;
    return (
        <>
            <Home cartItem = {cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate topItems={topItems} addToCart={addToCart} />
            <NewArrivals arrivalsItems={arrivalsItems} addToCart={addToCart} />
            <Shop shopItems = {filteredShopItems} addToCart={addToCart} selectedCategory={selectedCategory}/>
            <Annocument />
            <Wrapper />
        </>
    );
}

export default Pages;
