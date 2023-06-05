import React from 'react';
import Cart from './Cart';
import './arrivals.css';

export const NewArrivals = ({ arrivalsItems, addToCart }) => {
  return (
    <>
        <section className='new-arrivals background'>
            <div className='container'>
                <div className='heading d-flex'>
                    <div className='heading-left row f-flex'>
                        <img src = 'https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h2>New arrivals</h2>
                    </div>
                    <div className='heading-right row'>
                        <span>View all</span>
                        <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>

                <Cart addToCart={addToCart} arrivalsItems={arrivalsItems}/>
            </div>
        </section>
    </>
  )
}
