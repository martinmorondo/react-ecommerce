import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import './shop.css';

export const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d-flex'>
          <Catg />

          <div className='content-width'>
            <div className='heading d-flex'>
              <div className='heading-left row  f-flex'>
                <h2>Shop</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content grid-1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop;