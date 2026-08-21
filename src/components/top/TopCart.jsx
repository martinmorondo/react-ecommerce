import React from 'react';
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartStore } from '../../store/cartStore';

const Slider = ReactSlick.default || ReactSlick;

export const TopCart = ({ topItems }) => {
  const addToCart = useCartStore(state => state.addToCart);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {topItems.map((item, index) => (
          <div className='px-3' key={index}>
            <div className='bg-white p-4 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex flex-col items-center group'>
              <div className='flex justify-between items-center w-full mb-4'>
                <span className='bg-secondary text-white text-[12px] px-3 py-1 rounded-full capitalize'>{item.para}</span>
                <span className='bg-blue-50 text-black text-[12px] px-3 py-1 rounded-full'>{item.desc}</span>
              </div>
              
              {/* Contenedor de imagen centrado con tamaño fijo */}
              <div className='w-full h-[250px] flex justify-center items-center overflow-hidden mb-4'>
                <img src={item.cover} alt='' className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105' />
              </div>
              
              <div className='w-full flex justify-between items-center text-primary'>
                <h4 className="text-lg font-bold">${item.price}.00</h4>
                <button className="text-primary text-[20px] transition-all duration-300 border border-black/10 w-[35px] h-[35px] rounded-[5px] hover:bg-primary hover:text-white flex items-center justify-center" onClick={() => addToCart(item)}>
                    <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};