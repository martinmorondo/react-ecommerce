import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { ShopItem } from './Sdata';

interface ShopProductCardProps {
  shopItem: ShopItem;
}

const formatPrice = (price: number) =>
  price.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const ShopProductCard = ({
  shopItem,
}: ShopProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore(
    (state) => state.toggleWishlist
  );

  const isFavorite = useCartStore((state) =>
    state.wishlist.some(
      (item) => item.id === shopItem.id
    )
  );

  const [isAdded, setIsAdded] = useState(false);
  const addedTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current !== null) {
        window.clearTimeout(addedTimeoutRef.current);
      }
    };
  }, []);

  const handleAddToCart = () => {
    addToCart(shopItem);

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
    <article
      className="
        group relative flex h-full flex-col
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
      {/* Image */}
      <div
        className="
          relative flex h-[220px]
          items-center justify-center
          overflow-hidden
          bg-gradient-to-b from-gray-50 to-white
          p-5
        "
      >
        {/* Discount badge */}
        {shopItem.discount !== undefined &&
          shopItem.discount > 0 && (
            <span
              className="
                absolute left-4 top-4 z-10
                rounded-full
                bg-primary px-3 py-1.5
                text-[10px] font-bold uppercase tracking-wider
                text-white
                shadow-lg shadow-primary/20
              "
            >
              -{shopItem.discount}%
            </span>
          )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(shopItem)}
          aria-label={
            isFavorite
              ? `Quitar ${shopItem.name} de favoritos`
              : `Agregar ${shopItem.name} a favoritos`
          }
          aria-pressed={isFavorite}
          className={`
            absolute right-4 top-4 z-10
            flex h-10 w-10 items-center justify-center
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
            focus-visible:ring-offset-2

            ${
              isFavorite
                ? 'text-primary shadow-primary/10'
                : 'text-gray-400 hover:text-primary'
            }
          `}
        >
          <i
            className={`${
              isFavorite
                ? 'fa-solid fa-heart'
                : 'fa-regular fa-heart'
            } text-base`}
            aria-hidden="true"
          />
        </button>

        {/* Product image */}
        <img
          src={shopItem.cover}
          alt={`Imagen de ${shopItem.name}`}
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
            pointer-events-none absolute inset-x-0 bottom-0 h-20
            bg-gradient-to-t from-black/[0.04] to-transparent
          "
          aria-hidden="true"
        />
      </div>

      {/* Information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h3
            className="
              line-clamp-2
              min-h-[40px]
              text-sm font-semibold leading-5
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
              className="flex gap-0.5 text-[11px] text-amber-400"
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

        {/* Price + cart */}
        <div
          className="
            mt-5 flex items-end justify-between gap-3
            border-t border-black/[0.06]
            pt-4
          "
        >
          <div>
            <span
              className="
                block text-[10px] font-medium uppercase
                tracking-wider text-gray-400
              "
            >
              Precio
            </span>

            <span
              className="
                mt-1 block
                text-lg font-extrabold
                text-secondary
                sm:text-xl
              "
            >
              ${formatPrice(shopItem.price)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={
              isAdded
                ? `${shopItem.name} agregado al carrito`
                : `Agregar ${shopItem.name} al carrito`
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
              ? `${shopItem.name} agregado al carrito`
              : ''}
          </span>
        </div>
      </div>
    </article>
  );
};

interface ShopCartProps {
  shopItems: ShopItem[];
}

const ShopCart = ({ shopItems }: ShopCartProps) => {
  return (
    <div
      className="
        grid grid-cols-2
        gap-3
        sm:grid-cols-2
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