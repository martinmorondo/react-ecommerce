import React from "react";
import Ndata from "./Ndata";
import './arrivals.css';

const Cart = ({ arrivalsItems, addToCart }) => {
  return (
    <>
      <div className='content grid product'>
        {arrivalsItems.map((val, index) => {
          return (
            <div className='cart-box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <div className='price'>
              <h4>${val.price}.00 </h4>
              <button onClick={() => addToCart(val)}>
                <i className='fa fa-plus'></i>
              </button>
            </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart;