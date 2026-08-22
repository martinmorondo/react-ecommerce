import React from 'react';
import { Sdata } from './Sdata';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Slider = ReactSlick.default || ReactSlick;

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false, // Sin flechas se ve mucho más limpio
        appendDots: (dots) => (
            <div style={{ bottom: '20px' }}>
                <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-colors duration-300"></div>
        )
    };
    
    return (
        <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl group">
            <Slider {...settings}>
              {Sdata.map((value) => (
                <div key={value.id} className="relative outline-none">
                  
                  {/* IMAGEN DE FONDO CON OVERLAY */}
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative bg-gray-900">
                    <img src={value.cover} alt={value.title} className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] group-hover:scale-105" />
                    {/* El gradiente garantiza que el texto blanco siempre se lea */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* CONTENIDO (Textos y Botón) */}
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                      
                      <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                        {value.badge}
                      </span>
                      
                      <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
                        {value.title}
                      </h1>
                      
                      <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed drop-shadow-md">
                        {value.desc}
                      </p>
                      
                      {/* Usamos <Link> en lugar de <button> porque la acción lógica es ir a la tienda */}
                      <Link to="/shop" className="inline-flex items-center justify-center bg-primary hover:bg-[#c2334d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(233,69,96,0.4)] hover:shadow-[0_6px_25px_rgba(233,69,96,0.6)] hover:-translate-y-1">
                        Explorar Ahora <i className="fa-solid fa-arrow-right ml-3"></i>
                      </Link>

                    </div>
                  </div>

                </div>
              ))}
            </Slider>
        </div>
    );
}

export default SlideCard;