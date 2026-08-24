import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

/* =========================================================
   HELPERS
   ========================================================= */

const formatPrice = (price: number) =>
  price.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

/* =========================================================
   PROPS
   ========================================================= */

interface ArrivalsGridProps {
  arrivalsItems: Product[];
}

/* =========================================================
   COMPONENT
   ========================================================= */

const ArrivalsGrid = ({
  arrivalsItems,
}: ArrivalsGridProps) => {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const [addedProductId, setAddedProductId] =
    useState<Product['id'] | null>(null);

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

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    setAddedProductId(product.id);

    if (addedTimeoutRef.current !== null) {
      window.clearTimeout(
        addedTimeoutRef.current
      );
    }

    addedTimeoutRef.current = window.setTimeout(
      () => {
        setAddedProductId(null);
        addedTimeoutRef.current = null;
      },
      1200
    );
  };

  /* =======================================================
     EMPTY STATE
     ======================================================= */

  if (!arrivalsItems.length) {
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
            <i className="fa-solid fa-box-open text-xl" />
          </div>

          <h3 className="text-base font-semibold text-secondary">
            No hay productos disponibles
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Volvé a intentarlo más tarde.
          </p>
        </div>
      </div>
    );
  }

  /* =======================================================
     GRID
     ======================================================= */

  return (
    <>
      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
        "
      >
        {arrivalsItems.map((product) => {
          const isAdded =
            addedProductId === product.id;

          return (
            <article
              key={product.id}
              className="
                group relative
                flex min-w-0
                flex-col
                overflow-hidden
                rounded-[1.15rem]
                border border-black/[0.055]
                bg-white
                shadow-[0_4px_18px_rgba(3,0,71,0.04)]
                transition-all duration-300

                hover:-translate-y-1
                hover:border-primary/15
                hover:shadow-[0_14px_30px_rgba(3,0,71,0.09)]
              "
            >
              {/* =================================================
                  BADGE
                  ================================================= */}
              <span
                className="
                  absolute left-3 top-3 z-20
                  inline-flex
                  items-center gap-1.5
                  rounded-full
                  border border-primary/10
                  bg-primary/[0.08]
                  px-2.5 py-1
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[0.10em]
                  text-primary
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-primary
                  "
                  aria-hidden="true"
                />

                Nuevo
              </span>

              {/* =================================================
                  IMAGE
                  ================================================= */}
              <div
                className="
                  relative
                  flex h-[155px]
                  items-center justify-center
                  overflow-hidden
                  bg-gradient-to-b
                  from-slate-50
                  via-white
                  to-white
                  px-4
                  pt-8

                  sm:h-[170px]
                  md:h-[175px]
                "
              >
                {/* Soft glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24 w-24
                    rounded-full
                    bg-primary/[0.05]
                    blur-2xl
                  "
                  aria-hidden="true"
                />

                <img
                  src={product.cover}
                  alt={`Imagen de ${product.name}`}
                  loading="lazy"
                  className="
                    relative z-10
                    max-h-full
                    max-w-full
                    object-contain
                    transition-transform
                    duration-500

                    group-hover:scale-[1.08]

                    motion-reduce:transition-none
                    motion-reduce:group-hover:scale-100
                  "
                />

                {/* Bottom fade */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0
                    h-14
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
                  p-3.5

                  sm:p-4
                "
              >
                <div className="flex-1">
                  <h3
                    className="
                      min-h-[40px]
                      line-clamp-2
                      text-[13px]
                      font-bold
                      leading-5
                      text-secondary
                      transition-colors duration-200

                      group-hover:text-primary

                      sm:text-sm
                    "
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* =================================================
                    PRICE / ACTION
                    ================================================= */}
                <div
                  className="
                    mt-4
                    flex items-end justify-between gap-2
                    border-t border-black/[0.06]
                    pt-3.5
                  "
                >
                  <div className="min-w-0">
                    <span
                      className="
                        block
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-gray-400
                      "
                    >
                      Precio
                    </span>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-base
                        font-extrabold
                        tracking-tight
                        text-secondary

                        sm:text-lg
                      "
                    >
                      ${formatPrice(product.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    aria-label={
                      isAdded
                        ? `${product.name} agregado al carrito`
                        : `Agregar ${product.name} al carrito`
                    }
                    className={`
                      group/cart
                      flex h-10 w-10
                      shrink-0
                      items-center justify-center
                      rounded-xl
                      border
                      transition-all duration-300

                      hover:-translate-y-0.5
                      active:scale-95

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary/40
                      focus-visible:ring-offset-2

                      ${
                        isAdded
                          ? `
                            border-success
                            bg-success
                            text-white
                            shadow-[0_8px_18px_rgba(22,163,74,0.18)]
                          `
                          : `
                            border-black/[0.08]
                            bg-white
                            text-primary
                            shadow-[0_5px_14px_rgba(3,0,71,0.05)]

                            hover:border-primary
                            hover:bg-primary
                            hover:text-white
                            hover:shadow-[0_9px_20px_rgba(233,69,96,0.18)]
                          `
                      }
                    `}
                  >
                    <i
                      className={`fa-solid ${
                        isAdded
                          ? 'fa-check'
                          : 'fa-plus'
                      } text-xs transition-transform duration-300 ${
                        isAdded
                          ? 'scale-110'
                          : 'group-hover/cart:scale-105'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Accessible feedback */}
      <span
        className="sr-only"
        aria-live="polite"
      >
        {addedProductId
          ? 'Producto agregado al carrito.'
          : ''}
      </span>
    </>
  );
};

export default ArrivalsGrid;