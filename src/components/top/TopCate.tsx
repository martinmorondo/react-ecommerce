import { Link } from 'react-router-dom';
import { TopCart } from './TopCart';
import { TopItem } from './Tdata';

interface TopCateProps {
  topItems: TopItem[];
}

export const TopCate = ({
  topItems,
}: TopCateProps) => {
  return (
    <section
      aria-labelledby="top-categories-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
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
          -left-32
          top-0
          h-72 w-72
          rounded-full
          bg-secondary/[0.035]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-64 w-64
          rounded-full
          bg-primary/[0.035]
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
            flex items-end
            justify-between
            gap-4

            sm:mb-8
          "
        >
          {/* Title */}
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-12 w-12
                shrink-0
                items-center justify-center
                rounded-2xl
                border border-secondary/10
                bg-secondary/[0.06]
                text-secondary
                shadow-[0_6px_18px_rgba(15,52,96,0.06)]
                transition-all duration-300
                hover:border-primary/15
                hover:bg-primary/[0.07]
                hover:text-primary
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-border-all text-base" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
                  Explorá la tienda
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
                  Descubrí tus favoritos
                </span>
              </div>

              <h2
                id="top-categories-title"
                className="
                  mt-1
                  truncate
                  text-xl
                  font-extrabold
                  tracking-tight
                  text-secondary

                  sm:text-2xl
                  lg:text-[1.7rem]
                "
              >
                Categorías destacadas
              </h2>
            </div>
          </div>

          {/* View all */}
          <Link
            to="/shop"
            className="
              group
              flex shrink-0
              items-center gap-2
              rounded-xl
              border border-black/[0.06]
              bg-white
              px-3 py-2
              text-xs
              font-bold
              text-secondary
              shadow-[0_4px_14px_rgba(3,0,71,0.04)]
              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-primary/15
              hover:bg-primary/[0.05]
              hover:text-primary
              hover:shadow-[0_8px_20px_rgba(3,0,71,0.07)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
              focus-visible:ring-offset-2
            "
          >
            <span className="hidden sm:inline">
              Ver todas
            </span>

            <span className="sm:hidden">
              Ver más
            </span>

            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-lg
                bg-background
                transition-all duration-300
                group-hover:bg-primary
                group-hover:text-white
              "
              aria-hidden="true"
            >
              <i
                className="
                  fa-solid fa-arrow-right
                  text-[9px]
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </Link>
        </header>

        {/* =================================================
            CONTENT
            ================================================= */}
        <div
          className="
            rounded-[1.5rem]
            border border-black/[0.045]
            bg-background/55
            py-1
          "
        >
          <TopCart topItems={topItems} />
        </div>
      </div>
    </section>
  );
};

export default TopCate;