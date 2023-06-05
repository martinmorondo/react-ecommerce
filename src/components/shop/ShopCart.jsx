import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart, selectedCategory }) => {

  // Filtrar los productos por categoría seleccionada
  const filteredItems = selectedCategory
    ? shopItems.filter((item) => item.category === selectedCategory)
    : shopItems; 
    
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {filteredItems.map((shopItems, index) => {
        return (
          <div className='box' key={index}>
            <div className='product m-top'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart;
