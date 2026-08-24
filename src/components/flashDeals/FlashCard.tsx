import { useEffect, useRef, useState } from 'react';
import ReactSlick, {
  CustomArrowProps,
  Settings,
} from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

const Slider = ReactSlick.default || ReactSlick;

/* =========================================================
   HELPERS
   ========================================================= */

const formatPrice = (price: number) =>
  price.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const calculateOriginalPrice = (
  price: number,
  discount: number
) => {
  if (discount <= 0 || discount >= 100) {
    return price;
  }

  return price / (1 - discount / 100);
};

/* =========================================================
   FLECHAS
   ========================================================= */

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Siguiente oferta"
      className="
        absolute right-0 top-1/2 z-30
        flex h-10 w-10
        -translate-y-1/2 translate-x-1/2
        items-center justify-center
        rounded-full
        border border-black/[0.07]
        bg-white
        text-secondary
        shadow-[0_10px_25px_rgba(3,0,71,0.10)]
        transition-all duration-300

        hover:-translate-y-1/2
        hover:border-primary/25
        hover:bg-primary
        hover:text-white
        hover:shadow-[0_12px_28px_rgba(233,69,96,0.22)]

        active:scale-95

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/40
        focus-visible:ring-offset-2

        sm:h-11 sm:w-11
      "
    >
      <i
        className="fa-solid fa-chevron-right text-[10px]"
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
      aria-label="Oferta anterior"
      className="
        absolute left-0 top-1/2 z-30
        flex h-10 w-10
        -translate-y-1/2
        -translate-x-1/2
        items-center justify-center
        rounded-full
        border border-black/[0.07]
        bg-white
        text-secondary
        shadow-[0_10px_25px_rgba(3,0,71,0.10)]
        transition-all duration-300

        hover:-translate-y-1/2
        hover:border-primary/25
        hover:bg-primary
        hover:text-white
        hover:shadow-[0_12px_28px_rgba(233,69,96,0.22)]

        active:scale-95

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/40
        focus-visible:ring-offset-2

        sm:h-11 sm:w-11
      "
    >
      <i
        className="fa-solid fa-chevron-left text-[10px]"
        aria-hidden="true"
      />
    </button>
  );
};

/* =========================================================
   PRODUCT CARD
   ========================================================= */

interface FlashProductCardProps {
  productItem: Product;
}

const FlashProductCard = ({
  productItem,
}: FlashProductCardProps) => {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const toggleWishlist = useCartStore(
    (state) => state.toggleWishlist
  );

  const isFavorite = useCartStore((state) =>
    state.wishlist.some(
      (item) => item.id === productItem.id
    )
  );

  const [isAdded, setIsAdded] = useState(false);

  const addedTimeoutRef =
    useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current !== null) {
        window.clearTimeout(
          addedTimeoutRef.current
        );
      }
    };
  }, []);

  const discount = Math.max(
    0,
    Math.min(99, productItem.discount ?? 0)
  );

  const originalPrice =
    calculateOriginalPrice(
      productItem.price,
      discount
    );

  const handleAddToCart = () => {
    addToCart(productItem);

    setIsAdded(true);

    if (addedTimeoutRef.current !== null) {
      window.clearTimeout(
        addedTimeoutRef.current
      );
    }

    addedTimeoutRef.current = window.setTimeout(
      () => {
        setIsAdded(false);
        addedTimeoutRef.current = null;
      },
      1200
    );
  };

  return (
    <div className="px-2 py-3">
      <article
        className="
          group relative
          flex h-full
          min-h-[415px]
          flex-col
          overflow-hidden
          rounded-[1.25rem]
          border border-black/[0.055]
          bg-white
          shadow-[0_5px_24px_rgba(3,0,71,0.045)]
          transition-all duration-300

          hover:-translate-y-1
          hover:border-primary/15
          hover:shadow-[0_18px_38px_rgba(3,0,71,0.10)]
        "
      >
        {/* =================================================
            IMAGE
            ================================================= */}
        <div
          className="
            relative
            flex h-[205px]
            items-center justify-center
            overflow-hidden
            bg-gradient-to-b
            from-slate-50
            via-white
            to-white
            p-5
            sm:h-[215px]
          "
        >
          {/* Top glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28 w-28
              rounded-full
              bg-primary/[0.06]
              blur-3xl
            "
            aria-hidden="true"
          />

          {/* Discount */}
          {discount > 0 && (
            <div
              className="
                absolute left-3 top-3 z-20
                flex items-center gap-1.5
                rounded-full
                bg-primary
                px-3 py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.08em]
                text-white
                shadow-[0_7px_18px_rgba(233,69,96,0.24)]
              "
            >
              <span
                className="
                  flex h-4 w-4
                  items-center justify-center
                  rounded-full
                  bg-white/15
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-bolt text-[7px]" />
              </span>

              -{discount}%
            </div>
          )}

          {/* Wishlist */}
          <button
            type="button"
            onClick={() =>
              toggleWishlist(productItem)
            }
            aria-label={
              isFavorite
                ? `Quitar ${productItem.name} de favoritos`
                : `Agregar ${productItem.name} a favoritos`
            }
            aria-pressed={isFavorite}
            className={`
              absolute right-3 top-3 z-20
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border
              bg-white/90
              shadow-[0_5px_16px_rgba(3,0,71,0.07)]
              backdrop-blur-md
              transition-all duration-300

              hover:scale-105
              hover:shadow-[0_8px_20px_rgba(3,0,71,0.12)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
              focus-visible:ring-offset-2

              ${
                isFavorite
                  ? 'border-primary/10 bg-primary/5 text-primary'
                  : 'border-black/[0.05] text-gray-400 hover:border-primary/10 hover:text-primary'
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

          {/* Product image */}
          <img
            src={productItem.cover}
            alt={`Imagen de ${productItem.name}`}
            loading="lazy"
            className="
              relative z-10
              h-full w-full
              object-contain
              mix-blend-multiply
              transition-transform
              duration-500

              group-hover:scale-[1.07]

              motion-reduce:transition-none
              motion-reduce:group-hover:scale-100
            "
          />

          {/* Bottom fade */}
          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-16
              bg-gradient-to-t
              from-black/[0.025]
              to-transparent
            "
            aria-hidden="true"
          />
        </div>

        {/* =================================================
            CONTENT
            ================================================= */}
        <div className="flex flex-1 flex-col p-4">
          <div className="flex-1">
            {/* Flash badge */}
            <span
              className="
                inline-flex
                items-center gap-1.5
                rounded-full
                bg-primary/[0.07]
                px-2.5 py-1
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.10em]
                text-primary
              "
            >
              <i
                className="fa-solid fa-bolt text-[8px]"
                aria-hidden="true"
              />

              Oferta flash
            </span>

            {/* Product name */}
            <h3
              className="
                mt-2
                line-clamp-2
                min-h-[40px]
                text-sm
                font-bold
                leading-5
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
                className="
                  flex items-center gap-0.5
                  text-[10px]
                  text-amber-400
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star text-gray-200" />
              </div>

              <span className="text-[10px] font-medium text-gray-400">
                4.8
              </span>
            </div>
          </div>

          {/* =================================================
              PRICE / ACTION
              ================================================= */}
          <div
            className="
              mt-4
              border-t border-black/[0.06]
              pt-4
            "
          >
            <div className="flex items-end justify-between gap-3">
              {/* Pricing */}
              <div className="min-w-0">
                {discount > 0 && (
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        text-xs
                        font-medium
                        text-gray-400
                        line-through
                      "
                    >
                      ${formatPrice(originalPrice)}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-green-50
                        px-1.5 py-0.5
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-wide
                        text-green-600
                      "
                    >
                      Ahorrás
                    </span>
                  </div>
                )}

                <div className="mt-0.5">
                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.10em]
                      text-gray-400
                    "
                  >
                    Precio
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-xl
                      font-extrabold
                      tracking-tight
                      text-secondary
                    "
                  >
                    ${formatPrice(productItem.price)}
                  </span>
                </div>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                aria-label={
                  isAdded
                    ? `${productItem.name} agregado al carrito`
                    : `Agregar ${productItem.name} al carrito`
                }
                className={`
                  group/cart
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
                      ? `
                        bg-success
                        shadow-[0_8px_20px_rgba(22,163,74,0.20)]
                      `
                      : `
                        bg-secondary
                        shadow-[0_8px_20px_rgba(15,52,96,0.14)]
                        hover:bg-primary
                        hover:shadow-[0_10px_24px_rgba(233,69,96,0.22)]
                      `
                  }
                `}
              >
                <i
                  className={`fa-solid ${
                    isAdded
                      ? 'fa-check'
                      : 'fa-cart-plus'
                  } text-sm transition-transform duration-300 ${
                    isAdded
                      ? 'scale-110'
                      : 'group-hover/cart:scale-105'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Added announcement */}
        <span
          className="sr-only"
          aria-live="polite"
        >
          {isAdded
            ? `${productItem.name} agregado al carrito.`
            : ''}
        </span>
      </article>
    </div>
  );
};

/* =========================================================
   CAROUSEL
   ========================================================= */

interface FlashCardProps {
  productItems: Product[];
}

const FlashCard = ({
  productItems,
}: FlashCardProps) => {
  if (!productItems.length) {
    return (
      <div
        className="
          flex min-h-[280px]
          items-center justify-center
          rounded-2xl
          border border-dashed border-black/10
          bg-white/70
          px-6
          text-center
        "
        role="status"
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

  const settings: Settings = {
    dots: false,
    infinite: productItems.length > 4,

    speed: 450,

    slidesToShow: 4,
    slidesToScroll: 1,

    arrows: productItems.length > 1,

    autoplay: productItems.length > 4,
    autoplaySpeed: 4500,

    pauseOnHover: true,
    pauseOnFocus: true,

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
    <div
      className="
        relative
        px-2
        sm:px-4
      "
    >
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