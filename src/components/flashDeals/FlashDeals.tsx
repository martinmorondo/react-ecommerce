import React from 'react';
import FlashCard from './FlashCard';
import { Product } from '../../types';

interface FlashDealsProps {
  productItems: Product[];
}

const FlashDeals: React.FC<FlashDealsProps> = ({ productItems }) => {
  return (
    <section
      aria-labelledby="flash-deals-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="
          mb-6 flex flex-col gap-4
          sm:mb-8 sm:flex-row sm:items-end sm:justify-between
        ">
          <div className="flex items-center gap-3">
            <div className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-2xl
              bg-primary/10
              text-primary
            ">
              <i className="fa-solid fa-bolt text-lg" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                Solo por tiempo limitado
              </p>

              <h2
                id="flash-deals-title"
                className="mt-1 text-xl font-extrabold tracking-tight text-secondary sm:text-2xl"
              >
                Ofertas relámpago
              </h2>
            </div>
          </div>

          {/* Indicador */}
          <div className="
            flex w-fit items-center gap-2
            rounded-full
            border border-primary/10
            bg-primary/5
            px-3 py-2
            text-xs font-semibold
            text-primary
          ">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            Ofertas activas
          </div>
        </div>

        <FlashCard productItems={productItems} />
      </div>
    </section>
  );
};

export default FlashDeals;