import FlashCard from './FlashCard';
import { Product } from '../../types';

interface FlashDealsProps {
  productItems: Product[];
}

const FlashDeals = ({
  productItems,
}: FlashDealsProps) => {
  return (
    <section
      aria-labelledby="flash-deals-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-background
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-72 w-72
          rounded-full
          bg-primary/[0.045]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-64 w-64
          rounded-full
          bg-secondary/[0.035]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =================================================
            HEADER
            ================================================= */}
        <header
          className="
            mb-6
            flex flex-col gap-5

            sm:mb-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* Title */}
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                relative
                flex h-12 w-12
                shrink-0
                items-center justify-center
                rounded-2xl
                bg-primary
                text-white
                shadow-[0_10px_24px_rgba(233,69,96,0.22)]
              "
              aria-hidden="true"
            >
              <span
                className="
                  absolute inset-1
                  rounded-xl
                  border border-white/10
                "
              />

              <i className="fa-solid fa-bolt relative z-10 text-base" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
                  Solo por tiempo limitado
                </p>

                <span
                  className="
                    hidden h-1 w-1
                    rounded-full
                    bg-primary/40
                    sm:block
                  "
                  aria-hidden="true"
                />

                <span className="hidden text-[10px] font-semibold text-gray-400 sm:block">
                  Ofertas especiales
                </span>
              </div>

              <h2
                id="flash-deals-title"
                className="
                  mt-1
                  text-xl
                  font-extrabold
                  tracking-tight
                  text-secondary

                  sm:text-2xl
                  lg:text-[1.7rem]
                "
              >
                Ofertas relámpago
              </h2>
            </div>
          </div>

          {/* Active offers */}
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border border-primary/10
              bg-white
              px-3.5 py-2
              text-xs
              font-bold
              text-primary
              shadow-[0_5px_18px_rgba(3,0,71,0.05)]
            "
          >
            <span
              className="
                relative
                flex h-2 w-2
              "
              aria-hidden="true"
            >
              <span
                className="
                  absolute
                  inline-flex
                  h-full w-full
                  animate-ping
                  rounded-full
                  bg-primary
                  opacity-50

                  motion-reduce:animate-none
                "
              />

              <span
                className="
                  relative
                  h-2 w-2
                  rounded-full
                  bg-primary
                "
              />
            </span>

            <span>Ofertas activas</span>
          </div>
        </header>

        {/* =================================================
            PRODUCTS
            ================================================= */}
        <div
          className="
            rounded-[1.5rem]
            border border-black/[0.045]
            bg-white/55
            py-1
          "
        >
          <FlashCard productItems={productItems} />
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;