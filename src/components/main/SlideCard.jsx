import React from 'react';
import Sdata from './Sdata';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style = {{margin: '0px'}}>{dots}</ul>
        },
    }
    
    return (
        <div className="slider-container">
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <div className="slide-box" key={index}>
                <div className="slide-content">
                  <button className="btn-primary">
                    Visit Collections</button>
                </div>
                <div className="slide-image">
                  <img src={value.cover} alt="" />
                  <img src={value.cover2} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      
    );
}

export default SlideCard;
