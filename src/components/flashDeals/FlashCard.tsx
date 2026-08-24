import { useEffect, useRef, useState } from 'react';
import ReactSlick, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

const Slider = ReactSlick.default || ReactSlick;

const formatPrice = (price: number) =>
  price.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

/* ---------------------------------- */
/* Flechas del carrusel */
/* ---------------------------------- */

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Siguiente producto"
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
        focus-visible:ring-2
        focus-visible:ring-primary/30
        focus-visible:ring-offset-2
        md:right-1
        md:h-11 md:w-11
      "
    >
      <i
        className="fa-solid fa-chevron-right text-xs"
        aria-hidden="true"
      />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Producto anterior"
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
        focus-visible:ring-2
        focus-visible:ring-primary/30
        focus-visible:ring-offset-2
        md:left-1
        md:h-11 md:w-11
      "
    >
      <i
        className="fa-solid fa-chevron-left text-xs"
        aria-hidden="true"
      />
    </button>
  );
};

/* ---------------------------------- */
/* Tarjeta de producto */
/* ---------------------------------- */

interface FlashProductCardProps {
  productItem: Product;
}

const FlashProductCard = ({
  productItem,
}: FlashProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore(
    (state) => state.toggleWishlist
  );

  const isFavorite = useCartStore((state) =>
    state.wishlist.some(
      (item) => item.id === productItem.id
    )
  );

  const [isAdded, setIsAdded] = useState(false);
  const addedTimeoutRef = useRef<number | null>(null);

  const discount = productItem.discount ?? 0;

  const originalPrice =
    discount > 0
      ? productItem.price / (1 - discount / 100)
      : productItem.price;

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current !== null) {
        window.clearTimeout(addedTimeoutRef.current);
      }
    };
  }, []);

  const handleAddToCart = () => {
    addToCart(productItem);

    setIsAdded(true);

    if (addedTimeoutRef.current !== null) {
      window.clearTimeout(addedTimeoutRef.current);
    }

    addedTimeoutRef.current = window.setTimeout(() => {
      setIsAdded(false);
      addedTimeoutRef.current = null;
    }, 1200);
  };

  return (
    <div className="px-2 py-3">
      <article
        className="
          group relative flex h-full min-h-[410px] flex-col
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
        {/* Imagen */}
        <div
          className="
            relative flex h-[205px]
            items-center justify-center
            overflow-hidden
            bg-gradient-to-b from-gray-50 to-white
            p-5
          "
        >
          {/* Badge */}
          {discount > 0 && (
            <div
              className="
                absolute left-3 top-3 z-10
                flex items-center gap-1.5
                rounded-full
                bg-primary
                px-3 py-1.5
                text-[10px] font-extrabold uppercase tracking-wider
                text-white
                shadow-lg shadow-primary/20
              "
            >
              <i
                className="fa-solid fa-bolt text-[8px]"
                aria-hidden="true"
              />

              -{discount}%
            </div>
          )}

          {/* Favorito */}
          <button
            type="button"
            onClick={() => toggleWishlist(productItem)}
            aria-label={
              isFavorite
                ? `Quitar ${productItem.name} de favoritos`
                : `Agregar ${productItem.name} a favoritos`
            }
            aria-pressed={isFavorite}
            className={`
              absolute right-3 top-3 z-10
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-black/5
              bg-white/90
              shadow-sm
              backdrop-blur-md
              transition-all duration-300
              hover:scale-110
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30

              ${
                isFavorite
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-primary'
              }
            `}
          >
            <i
              className={`${
                isFavorite
                  ? 'fa-solid fa-heart'
                  : 'fa-regular fa-heart'
              } text-sm`}
              aria-hidden="true"
            />
          </button>

          <img
            src={productItem.cover}
            alt={productItem.name}
            loading="lazy"
            className="
              h-full w-full
              object-contain
              mix-blend-multiply
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-16
              bg-gradient-to-t from-black/[0.04] to-transparent
            "
            aria-hidden="true"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-4">
          <div className="flex-1">
            <span
              className="
                inline-flex items-center gap-1
                text-[9px] font-bold uppercase tracking-[0.14em]
                text-primary
              "
            >
              <i
                className="fa-solid fa-bolt text-[8px]"
                aria-hidden="true"
              />

              Oferta flash
            </span>

            <h3
              className="
                mt-1.5
                line-clamp-2
                min-h-[40px]
                text-sm font-semibold leading-5
                text-secondary
                transition-colors duration-200
                group-hover:text-primary
              "
              title={productItem.name}
            >
              {productItem.name}
            </h3>

            {/* Rating */}
            <div
              className="mt-3 flex items-center gap-2"
              aria-label="Calificación 4.8 de 5"
            >
              <div
                className="flex gap-0.5 text-[10px] text-amber-400"
                aria-hidden="true"
              >
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star text-gray-200" />
              </div>

              <span className="text-[10px] text-gray-400">
                4.8
              </span>
            </div>
          </div>

          {/* Precio */}
          <div
            className="
              mt-4
              border-t border-black/[0.06]
              pt-4
            "
          >
            <div className="flex items-end justify-between gap-3">
              <div>
                {discount > 0 && (
                  <span className="block text-xs text-gray-400 line-through">
                    ${formatPrice(Math.round(originalPrice))}
                  </span>
                )}

                <span
                  className="
                    mt-0.5 block
                    text-xl font-extrabold
                    tracking-tight
                    text-secondary
                  "
                >
                  ${formatPrice(productItem.price)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                aria-label={
                  isAdded
                    ? `${productItem.name} agregado al carrito`
                    : `Agregar ${productItem.name} al carrito`
                }
                className={`
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  text-white
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  active:scale-95
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                  focus-visible:ring-offset-2

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
                  aria-hidden="true"
                />
              </button>

              <span
                className="sr-only"
                aria-live="polite"
              >
                {isAdded
                  ? `${productItem.name} agregado al carrito`
                  : ''}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

/* ---------------------------------- */
/* Carrusel */
/* ---------------------------------- */

interface FlashCardProps {
  productItems: Product[];
}

const FlashCard = ({ productItems }: FlashCardProps) => {
  if (!productItems.length) {
    return (
      <div
        className="
          flex min-h-[280px]
          items-center justify-center
          rounded-2xl
          border border-dashed border-black/10
          bg-white/60
          px-6
          text-center
        "
      >
        <div>
          <div
            className="
              mx-auto mb-4
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-primary/10
              text-primary
            "
            aria-hidden="true"
          >
            <i className="fa-solid fa-bolt text-xl" />
          </div>

          <h3 className="font-bold text-secondary">
            No hay ofertas disponibles
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Volvé a consultar más tarde para descubrir nuevas promociones.
          </p>
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: productItems.length > 4,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: productItems.length > 1,
    autoplay: productItems.length > 4,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
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
        {productItems.map((productItem) => (
          <FlashProductCard
            key={productItem.id}
            productItem={productItem}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FlashCard;