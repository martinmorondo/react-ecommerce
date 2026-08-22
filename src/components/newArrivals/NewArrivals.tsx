import React from 'react';
import { Link } from 'react-router-dom';
import ArrivalsGrid from './ArrivalsGrid';
import { Product } from '../../types';

interface NewArrivalsProps {
  arrivalsItems: Product[];
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  arrivalsItems,
}) => {
  return (
    <section
      aria-labelledby="new-arrivals-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-2xl
                bg-primary/10
                text-primary
                shadow-sm
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-star text-sm" />
            </div>

            <div className="min-w-0">
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                Descubrí lo nuevo
              </p>

              <h2
                id="new-arrivals-title"
                className="
                  truncate
                  text-xl font-extrabold
                  tracking-tight
                  text-secondary
                  sm:text-2xl
                "
              >
                Nuevos productos
              </h2>
            </div>
          </div>

          <Link
            to="/shop"
            className="
              group flex shrink-0 items-center gap-2
              rounded-xl
              px-2 py-2
              text-sm font-semibold
              text-primary
              transition-all duration-200
              hover:bg-primary/10
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
            "
          >
            <span className="hidden sm:inline">
              Ver todos
            </span>

            <span className="sm:hidden">
              Ver más
            </span>

            <i
              className="
                fa-solid fa-arrow-right
                text-xs
                transition-transform duration-200
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Productos */}
        <ArrivalsGrid arrivalsItems={arrivalsItems} />
      </div>
    </section>
  );
};

export default NewArrivals;