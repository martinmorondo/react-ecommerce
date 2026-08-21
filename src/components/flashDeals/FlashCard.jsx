import React, { useState } from 'react';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartStore } from '../../store/cartStore';

// FIX para la compatibilidad de Vite con react-slick
const Slider = ReactSlick.default || ReactSlick;

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-secondary rounded-full text-white transition-all duration-300 z-10 hover:bg-primary cursor-pointer flex items-center justify-center shadow-md' onClick={onClick}>
            <i className='fa fa-long-arrow-alt-right text-lg'></i>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-secondary rounded-full text-white transition-all duration-300 z-10 hover:bg-primary cursor-pointer flex items-center justify-center shadow-md' onClick={onClick}>
            <i className='fa fa-long-arrow-alt-left text-lg'></i>
        </div>
    )
}

const FlashCard = ({ productItems }) => {
    const addToCart = useCartStore(state => state.addToCart);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    }

    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItem) => {
                    return (
                        <div className='px-3' key={productItem.id}>
                            <div className='bg-white p-5 relative rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] group'>
                                
                                {/* Contenedor de imagen centrado */}
                                <div className='relative w-full h-[200px] overflow-hidden flex justify-center items-center'>
                                    <span className='absolute top-0 left-0 bg-primary px-2.5 py-1 text-[12px] rounded-full text-white z-10'>
                                        {productItem.discount}% Off
                                    </span>
                                    
                                    <img className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110" src={productItem.cover} alt='' />
                                    
                                    <div className='absolute top-0 right-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 flex flex-col items-center'>
                                        <label className="bg-secondary px-2.5 py-[1px] text-[12px] text-white rounded-full">{count}</label>
                                        <i className='fa-regular fa-heart text-[20px] mt-2 cursor-pointer hover:text-primary' onClick={increment}></i>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <h3 className="font-normal text-[17px] truncate">{productItem.name}</h3>
                                    <div className='text-[#ffcd4e] flex gap-1 my-2 text-sm'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>

                                    <div className='flex justify-between items-center text-primary'>
                                        <h4 className="text-lg font-bold">${productItem.price}.00 </h4>
                                        <button className="text-primary text-[20px] transition-all duration-300 border border-black/10 w-[35px] h-[35px] rounded-[5px] hover:bg-primary hover:text-white flex items-center justify-center" onClick={() => addToCart(productItem)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}

export default FlashCard;