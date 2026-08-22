import React from 'react';
import { Link } from 'react-router-dom';
import { TopCart } from './TopCart';
import { TopItem } from './Tdata';

interface TopCateProps {
  topItems: TopItem[];
}

export const TopCate: React.FC<TopCateProps> = ({ topItems }) => {
  return (
    <section
      aria-labelledby="top-categories-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-2xl
              bg-primary/10
              text-primary
            ">
              <i className="fa-solid fa-border-all text-base" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                Explorá la tienda
              </p>

              <h2
                id="top-categories-title"
                className="mt-1 truncate text-xl font-extrabold tracking-tight text-secondary sm:text-2xl"
              >
                Categorías destacadas
              </h2>
            </div>
          </div>

          <Link
            to="/pages"
            className="
              group flex shrink-0 items-center gap-2
              rounded-xl
              px-2 py-2
              text-sm font-semibold text-primary
              transition-all duration-200
              hover:bg-primary/10
              focus:outline-none
              focus:ring-2
              focus:ring-primary/30
            "
          >
            <span className="hidden sm:inline">Ver todas</span>
            <span className="sm:hidden">Ver más</span>

            <i className="
              fa-solid fa-arrow-right
              text-xs
              transition-transform duration-200
              group-hover:translate-x-1
            " />
          </Link>
        </div>

        {/* Categorías */}
        <TopCart topItems={topItems} />
      </div>
    </section>
  );
};

export default TopCate;