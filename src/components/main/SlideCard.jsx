import React from 'react';
import Sdata from './Sdata';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = ReactSlick.default || ReactSlick;

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, 
        appendDots: (dots) => {
            return <ul className="absolute bottom-5" style={{ margin: '0px' }}>{dots}</ul>
        },
    }
    
    return (
        <div className="max-w-7xl mx-auto w-full mt-5 px-4 md:px-0">
            <Slider {...settings}>
              {Sdata.map((value, index) => {
                return (
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group" key={index}>
                    
                    {/* OVERLAY: Gradiente oscuro para garantizar que el texto se lea siempre */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                    {/* BLOQUE DE TEXTO Y BOTÓN */}
                    <div className="absolute top-1/2 left-[5%] md:left-[8%] transform -translate-y-1/2 z-20 w-[85%] md:w-[50%] flex flex-col items-start gap-4">
                      <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                        {value.title}
                      </h1>
                      <p className="text-gray-200 text-sm md:text-lg drop-shadow-md">
                        {value.desc}
                      </p>
                      <button className="mt-4 bg-primary hover:bg-[#c2334d] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-[16px] shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                        Shop Now
                      </button>
                    </div>
                    
                    {/* IMAGEN DE FONDO */}
                    <div className="w-full h-[350px] md:h-[500px] overflow-hidden bg-gray-100">
                      <img src={value.cover} alt={value.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                  </div>
                );
              })}
            </Slider>
        </div>
    );
}

export default SlideCard;