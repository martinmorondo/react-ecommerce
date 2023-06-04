import React, { useState } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const TopCart = ({ topItems, addToCart }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const incrementCartItemCount = () => {
    setCartItemCount(cartItemCount + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {topItems.map((item, index) => (
          <div className='cart-box box product' key={index}>
            <div className='nametop d-flex'>
              <span className='tleft'>{item.para}</span>
              <span className='tright'>{item.desc}</span>
            </div>
            <div className='img'>
              <img src={item.cover} alt='' />
            </div>
            <div className='price'>
            <h4>${item.price}.00 </h4>
             <button onClick={() => addToCart(item)}>
                <i className='fa fa-plus'></i>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
