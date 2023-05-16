import React from 'react';
import Tdata from './Tdata';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export const TopCart = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }

  return (
    <>
        <Slider {...settings}>
            {Tdata.map((value, index) => {
                return (
                    <>
                        <div className='cart-box box product' key = {index}>
                            <div className='nametop d-flex'>
                                <span className='tleft'>{value.para}</span>
                                <span className='tright'>{value.desc}</span>
                            </div>
                            <div className='img'>
                                <img src = {value.cover} alt = '' />
                            </div>
                        </div>
                    </>
                )
            })}
        </Slider>
    </>
  )
}
