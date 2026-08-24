import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section
      aria-labelledby="promo-banner-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-background
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            group
            relative
            min-h-[360px]
            overflow-hidden
            rounded-[1.75rem]
            bg-secondary-dark
            shadow-[0_22px_55px_rgba(7,26,47,0.16)]
            sm:min-h-[390px]
            lg:min-h-[420px]
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-80 w-80
              rounded-full
              bg-primary/20
              blur-3xl
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-20
              h-72 w-72
              rounded-full
              bg-secondary/40
              blur-3xl
            "
            aria-hidden="true"
          />

          {/* Decorative grid */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.035]
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              [background-size:42px_42px]
            "
            aria-hidden="true"
          />

          {/* Decorative circle */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              top-1/2
              hidden
              h-[420px]
              w-[420px]
              -translate-y-1/2
              rounded-full
              border border-white/[0.06]
              lg:block
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-8
              top-1/2
              hidden
              h-[280px]
              w-[280px]
              -translate-y-1/2
              rounded-full
              border border-primary/15
              lg:block
            "
            aria-hidden="true"
          />

          {/* Content */}
          <div
            className="
              relative z-10
              flex h-full
              min-h-[360px]
              flex-col
              justify-center
              px-6 py-10

              sm:px-10
              sm:py-12

              lg:min-h-[420px]
              lg:max-w-[62%]
              lg:px-14
              xl:px-16
            "
          >
            {/* Badge */}
            <span
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border border-primary/25
                bg-primary/10
                px-3.5 py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-primary
                backdrop-blur-md
                sm:text-[10px]
              "
            >
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_10px_rgba(233,69,96,0.8)]
                "
                aria-hidden="true"
              />

              Oferta especial
            </span>

            {/* Heading */}
            <h2
              id="promo-banner-title"
              className="
                mt-5
                max-w-xl
                text-[2rem]
                font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-white

                sm:text-4xl
                lg:text-5xl
                xl:text-[3.5rem]
              "
            >
              Tecnología que
              <span className="block text-primary">
                se adapta a vos.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-6
                text-white/60

                sm:text-base
                sm:leading-7
              "
            >
              Descubrí productos seleccionados para tu día a día
              y aprovechá promociones especiales por tiempo limitado.
            </p>

            {/* Offer */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div
                className="
                  flex items-center gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                  px-4 py-3
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  HASTA
                  <span className="ml-1.5 text-primary">
                    40%
                  </span>
                </span>

                <span
                  className="
                    border-l border-white/10
                    pl-3
                    text-[9px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-white/45
                  "
                >
                  En productos
                  <br />
                  seleccionados
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <Link
                to="/shop"
                className="
                  group/cta
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-6 py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_28px_rgba(233,69,96,0.28)]
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-primary-dark
                  hover:shadow-[0_16px_34px_rgba(233,69,96,0.36)]

                  active:translate-y-0
                  active:scale-[0.98]

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/80
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-secondary-dark
                "
              >
                Explorar productos

                <i
                  className="
                    fa-solid fa-arrow-right
                    text-xs
                    transition-transform duration-300
                    group-hover/cta:translate-x-1
                  "
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

         <div
  className="
    pointer-events-none
    absolute
    -bottom-6
    right-[-4%]
    hidden
    h-[95%]
    w-[52%]
    max-w-[620px]
    lg:block
  "
  aria-hidden="true"
>
  {/* Halo principal */}
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[360px]
      w-[360px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-primary/20
      blur-[90px]
    "
  />

  {/* Halo secundario */}
  <div
    className="
      absolute
      bottom-[12%]
      left-[28%]
      h-[180px]
      w-[180px]
      rounded-full
      bg-white/10
      blur-[70px]
    "
  />

  {/* Imagen */}
  <img
    src="/img/products/banner-tecnologia.webp"
    alt=""
    loading="lazy"
    className="
      relative z-10
      ml-auto
      h-full
      w-full
      object-contain
      object-right
      drop-shadow-[0_35px_45px_rgba(0,0,0,0.32)]
      transition-transform
      duration-700
      group-hover:scale-[1.04]
      motion-reduce:transition-none
      motion-reduce:group-hover:scale-100
    "
  />

  {/* Fade para integrar la imagen con el banner */}
  <div
    className="
      absolute
      inset-y-0
      left-0
      z-20
      w-1/3
      bg-gradient-to-r
      from-secondary-dark
      via-secondary-dark/55
      to-transparent
    "
  />
</div>

          {/* Bottom accent */}
          <div
            className="
              absolute inset-x-0 bottom-0
              h-1
              bg-gradient-to-r
              from-primary
              via-primary/50
              to-transparent
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;