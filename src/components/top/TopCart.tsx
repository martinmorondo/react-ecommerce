import React, { useState } from 'react';
import ReactSlick, { CustomArrowProps, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCartStore } from '../../store/cartStore';
import { TopItem } from './Tdata';

const Slider = ReactSlick.default || ReactSlick;

/* =========================================================
   Flechas
   ========================================================= */

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Siguiente categoría"
    className="
      absolute right-0 top-1/2 z-20
      flex h-10 w-10
      -translate-y-1/2 translate-x-1/2
      items-center justify-center
      rounded-full
      border border-black/10
      bg-white
      text-secondary
      shadow-lg
      transition-all duration-300
      hover:border-primary
      hover:bg-primary
      hover:text-white
      hover:shadow-primary/20
      active:scale-95
      focus:outline-none
      focus:ring-2
      focus:ring-primary/30
      sm:h-11 sm:w-11
    "
  >
    <i className="fa-solid fa-chevron-right text-xs" />
  </button>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Categoría anterior"
    className="
      absolute left-0 top-1/2 z-20
      flex h-10 w-10
      -translate-x-1/2
      -translate-y-1/2
      items-center justify-center
      rounded-full
      border border-black/10
      bg-white
      text-secondary
      shadow-lg
      transition-all duration-300
      hover:border-primary
      hover:bg-primary
      hover:text-white
      hover:shadow-primary/20
      active:scale-95
      focus:outline-none
      focus:ring-2
      focus:ring-primary/30
      sm:h-11 sm:w-11
    "
  >
    <i className="fa-solid fa-chevron-left text-xs" />
  </button>
);

/* =========================================================
   Tarjeta
   ========================================================= */

interface TopProductCardProps {
  item: TopItem;
}

const TopProductCard: React.FC<TopProductCardProps> = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <article
      className="
        group mx-2 flex h-full min-h-[380px] flex-col
        overflow-hidden
        rounded-2xl
        border border-black/[0.06]
        bg-white
        shadow-[0_5px_25px_rgba(3,0,71,0.05)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/15
        hover:shadow-[0_15px_35px_rgba(3,0,71,0.10)]
      "
    >
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-2 p-4 pb-0">
        <span className="
          inline-flex
          max-w-[55%]
          truncate
          rounded-full
          bg-secondary
          px-3 py-1.5
          text-[10px] font-bold uppercase tracking-wider
          text-white
        ">
          {item.para}
        </span>

        <span className="
          shrink-0
          rounded-full
          border border-primary/10
          bg-primary/5
          px-3 py-1.5
          text-[10px] font-bold
          text-primary
        ">
          {item.desc}
        </span>
      </div>

      {/* Imagen */}
      <div className="
        relative mx-4 mt-3
        flex h-[230px]
        items-center justify-center
        overflow-hidden
        rounded-2xl
        bg-gradient-to-b from-gray-50 to-white
      ">
        <img
          src={item.cover}
          alt={item.para}
          loading="lazy"
          className="
            h-full w-full
            object-contain
            p-5
            mix-blend-multiply
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Brillo */}
        <div className="
          pointer-events-none
          absolute right-0 top-0
          h-24 w-24
          rounded-full
          bg-primary/5
          blur-2xl
        " />
      </div>

      {/* Información */}
      <div className="mt-auto p-4">
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
            Producto destacado
          </p>

          <h3 className="mt-1 text-sm font-semibold text-secondary">
            {item.para}
          </h3>
        </div>

        <div className="
          flex items-end justify-between gap-3
          border-t border-black/[0.06]
          pt-4
        ">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-400">
              Desde
            </span>

            <span className="mt-0.5 block text-lg font-extrabold text-secondary">
              ${Number(item.price).toLocaleString('es-AR')}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={
              isAdded
                ? `${item.para} agregado al carrito`
                : `Agregar ${item.para} al carrito`
            }
            className={`
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl
              text-white
              shadow-md
              transition-all duration-300
              hover:-translate-y-0.5
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-primary/30

              ${
                isAdded
                  ? 'bg-green-500 shadow-green-500/20'
                  : 'bg-secondary shadow-secondary/15 hover:bg-primary hover:shadow-primary/20'
              }
            `}
          >
            <i
              className={`fa-solid ${
                isAdded ? 'fa-check' : 'fa-cart-plus'
              } text-sm`}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

/* =========================================================
   Carrusel
   ========================================================= */

interface TopCartProps {
  topItems: TopItem[];
}

export const TopCart: React.FC<TopCartProps> = ({ topItems }) => {
  if (!topItems.length) {
    return (
      <div className="
        flex min-h-[250px]
        items-center justify-center
        rounded-2xl
        border border-dashed border-black/10
        bg-white/60
        px-6
        text-center
      ">
        <div>
          <div className="
            mx-auto mb-4
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            bg-primary/10
            text-primary
          ">
            <i className="fa-solid fa-border-all text-xl" />
          </div>

          <h3 className="font-bold text-secondary">
            No hay categorías disponibles
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Volvé a intentarlo más tarde.
          </p>
        </div>
      </div>
    );
  }

  const settings: Settings = {
    dots: false,
    infinite: topItems.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: topItems.length > 3,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    arrows: topItems.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative px-2 sm:px-4">
      <Slider {...settings}>
        {topItems.map((item) => (
          <TopProductCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default TopCart;