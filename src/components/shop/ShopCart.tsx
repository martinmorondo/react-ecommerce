import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { ShopItem } from './Sdata';

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
   PRODUCT CARD
   ========================================================= */

interface ShopProductCardProps {
  shopItem: ShopItem;
}

const ShopProductCard = ({
  shopItem,
}: ShopProductCardProps) => {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const toggleWishlist = useCartStore(
    (state) => state.toggleWishlist
  );

  const isFavorite = useCartStore((state) =>
    state.wishlist.some(
      (item) => item.id === shopItem.id
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
    Math.min(99, shopItem.discount ?? 0)
  );

  const originalPrice =
    calculateOriginalPrice(
      shopItem.price,
      discount
    );

  const handleAddToCart = () => {
    addToCart(shopItem);

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
    <article
      className="
        group relative
        flex h-full
        min-w-0
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
          flex h-[220px]
          items-center justify-center
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          via-white
          to-white
          p-5

          sm:h-[230px]
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32 w-32
            rounded-full
            bg-primary/[0.05]
            blur-3xl
          "
          aria-hidden="true"
        />

        {/* Discount */}
        {discount > 0 && (
          <span
            className="
              absolute left-3 top-3 z-20
              rounded-full
              bg-primary
              px-3 py-1.5
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_7px_18px_rgba(233,69,96,0.22)]
            "
          >
            -{discount}%
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() =>
            toggleWishlist(shopItem)
          }
          aria-label={
            isFavorite
              ? `Quitar ${shopItem.name} de favoritos`
              : `Agregar ${shopItem.name} a favoritos`
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
          src={shopItem.cover}
          alt={`Imagen de ${shopItem.name}`}
          loading="lazy"
          className="
            relative z-10
            h-full w-full
            object-contain
            mix-blend-multiply
            transition-transform duration-500

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
      <div
        className="
          flex flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        <div className="flex-1">
          {/* Category */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-secondary/[0.06]
              px-2.5 py-1
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.10em]
              text-secondary
            "
          >
            <i
              className="fa-solid fa-tag text-[8px] text-primary"
              aria-hidden="true"
            />

            {shopItem.category}
          </span>

          {/* Name */}
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
            title={shopItem.name}
          >
            {shopItem.name}
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
            mt-5
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
                    Oferta
                  </span>
                </div>
              )}

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
                ${formatPrice(shopItem.price)}
              </span>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              aria-label={
                isAdded
                  ? `${shopItem.name} agregado al carrito`
                  : `Agregar ${shopItem.name} al carrito`
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

      {/* Accessible cart feedback */}
      <span
        className="sr-only"
        aria-live="polite"
      >
        {isAdded
          ? `${shopItem.name} agregado al carrito.`
          : ''}
      </span>
    </article>
  );
};

/* =========================================================
   GRID
   ========================================================= */

interface ShopCartProps {
  shopItems: ShopItem[];
}

const ShopCart = ({
  shopItems,
}: ShopCartProps) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        sm:gap-5
        lg:grid-cols-3
        xl:grid-cols-3
      "
    >
      {shopItems.map((shopItem) => (
        <ShopProductCard
          key={shopItem.id}
          shopItem={shopItem}
        />
      ))}
    </div>
  );
};

export default ShopCart;