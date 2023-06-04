import React from 'react';
import './style.css';
import { TopCart } from './TopCart';

export const TopCate = ({ addToCart, topItems }) => {
  return (
    <>
        <section className='top-cate background'>
            <div className='container'>
                <div className='heading d-flex'>
                    <div className='heading-left row f-flex'>
                        <i className='fa-solid fa-border-all'></i>
                        <h2>Top Categories</h2>
                    </div>
                    <div className='heading-right row'>
                        <span>View all</span>
                        <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>
                <TopCart addToCart={addToCart} topItems={topItems} />
            </div>
        </section>
    </>
  )
}
