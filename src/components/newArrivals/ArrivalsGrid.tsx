import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

interface ArrivalsGridProps {
  arrivalsItems: Product[];
}

const ArrivalsGrid: React.FC<ArrivalsGridProps> = ({ arrivalsItems }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [addedProductId, setAddedProductId] = useState<Product['id'] | null>(
    null
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProductId(product.id);

    window.setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  if (!arrivalsItems.length) {
    return (
      <div className="rounded-2xl border border-dashed border-black/10 bg-white/60 px-6 py-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <i className="fa-solid fa-box-open text-xl" />
        </div>

        <h3 className="text-base font-semibold text-secondary">
          No hay productos disponibles
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Volvé a intentarlo más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {arrivalsItems.map((product) => {
        const isAdded = addedProductId === product.id;

        return (
          <article
            key={product.id}
            className="
              group relative
              flex min-w-0 flex-col
              overflow-hidden
              rounded-2xl
              border border-black/[0.06]
              bg-white
              shadow-[0_4px_20px_rgba(3,0,71,0.05)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-primary/15
              hover:shadow-[0_12px_30px_rgba(3,0,71,0.10)]
            "
          >
            {/* Badge */}
            <span
              className="
                absolute left-3 top-3 z-10
                rounded-full
                bg-primary/10
                px-2.5 py-1
                text-[10px] font-bold uppercase tracking-wider
                text-primary
              "
            >
              Nuevo
            </span>

            {/* Imagen */}
            <div className="relative flex h-[155px] items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 pt-8 sm:h-[175px]">
              <img
                src={product.cover}
                alt={product.name}
                loading="lazy"
                className="
                  max-h-full max-w-full
                  object-contain
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay al hacer hover */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0 h-16
                  bg-gradient-to-t from-black/[0.03] to-transparent
                "
              />
            </div>

            {/* Información */}
            <div className="flex flex-1 flex-col p-3.5 sm:p-4">
              <h3
                className="
                  min-h-[40px]
                  text-[13px] font-medium leading-5
                  text-secondary
                  transition-colors duration-200
                  group-hover:text-primary
                  sm:text-sm
                "
                title={product.name}
              >
                {product.name}
              </h3>

              <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-gray-400">
                    Precio
                  </span>

                  <p className="mt-0.5 truncate text-base font-extrabold text-secondary sm:text-lg">
                    ${Number(product.price).toLocaleString('es-AR')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  aria-label={
                    isAdded
                      ? `${product.name} agregado al carrito`
                      : `Agregar ${product.name} al carrito`
                  }
                  className={`
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-xl
                    border
                    transition-all duration-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                    ${
                      isAdded
                        ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                        : 'border-black/10 bg-white text-primary hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/15'
                    }
                  `}
                >
                  <i
                    className={`fa-solid ${
                      isAdded ? 'fa-check' : 'fa-plus'
                    } text-sm transition-transform duration-300 ${
                      isAdded ? 'scale-110' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ArrivalsGrid;