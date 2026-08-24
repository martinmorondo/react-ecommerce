import ReactSlickImport, {
  CustomArrowProps,
  Settings,
} from 'react-slick';

const Slider =
  (ReactSlickImport as typeof ReactSlickImport & {
    default?: typeof ReactSlickImport;
  }).default ?? ReactSlickImport;

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Sdata, SlideData } from './Sdata';


/* =========================================================
   FLECHAS
   ========================================================= */

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Siguiente diapositiva"
      className="
        absolute right-4 top-1/2 z-30
        hidden h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-2xl
        border border-white/15
        bg-black/20
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1/2
        hover:border-white/30
        hover:bg-primary
        hover:shadow-[0_12px_30px_rgba(233,69,96,0.25)]
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/70
        focus-visible:ring-offset-2
        focus-visible:ring-offset-secondary
        md:flex
        lg:right-6
      "
    >
      <i
        className="fa-solid fa-chevron-right text-xs"
        aria-hidden="true"
      />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Diapositiva anterior"
      className="
        absolute left-4 top-1/2 z-30
        hidden h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-2xl
        border border-white/15
        bg-black/20
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1/2
        hover:border-white/30
        hover:bg-primary
        hover:shadow-[0_12px_30px_rgba(233,69,96,0.25)]
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/70
        focus-visible:ring-offset-2
        focus-visible:ring-offset-secondary
        md:flex
        lg:left-6
      "
    >
      <i
        className="fa-solid fa-chevron-left text-xs"
        aria-hidden="true"
      />
    </button>
  );
};

/* =========================================================
   SLIDECARD
   ========================================================= */

const SlideCard = () => {
  const settings: Settings = {
    dots: true,
    infinite: Sdata.length > 1,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: Sdata.length > 1,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    pauseOnFocus: true,

    arrows: Sdata.length > 1,
    swipeToSlide: true,
    adaptiveHeight: false,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots) => (
      <div
        className="
          absolute
          bottom-5 left-0 right-0
          z-30
        "
      >
        <ul
          className="
            m-0
            flex
            items-center
            justify-center
            gap-2
            p-0
          "
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: (index) => (
      <button
        type="button"
        aria-label={`Ir a la diapositiva ${index + 1}`}
        className="
          h-2 w-2
          rounded-full
          border border-white/40
          bg-white/30
          p-0
          opacity-80
          transition-all duration-300
          hover:scale-125
          hover:bg-white
          hover:opacity-100
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/80
          focus-visible:ring-offset-2
          focus-visible:ring-offset-transparent
          motion-reduce:transition-none
          motion-reduce:hover:scale-100
        "
      />
    ),
  };

  return (
    <section
      aria-label="Ofertas destacadas"
      className="
        group
        relative
        mt-4
        w-full
        overflow-hidden
        rounded-[1.75rem]
        border border-black/[0.05]
        bg-secondary
        shadow-[0_25px_60px_rgba(3,0,71,0.16)]
        sm:rounded-[2rem]
      "
    >
      {/* Brillo exterior */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          z-20
          rounded-[1.75rem]
          border border-white/[0.06]
          sm:rounded-[2rem]
        "
        aria-hidden="true"
      />

      <Slider {...settings}>
        {Sdata.map((slide: SlideData, index) => (
          <article
            key={slide.id}
            className="
              relative
              outline-none
            "
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${Sdata.length}`}
          >
            {/* =================================================
                IMAGEN
                ================================================= */}
            <div
              className="
                relative
                h-[430px]
                w-full
                overflow-hidden
                bg-secondary

                sm:h-[480px]
                md:h-[540px]
                lg:h-[590px]
              "
            >
              <img
                src={slide.cover}
                alt={slide.alt}
                loading={slide.id === 1 ? 'eager' : 'lazy'}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                  opacity-90
                  transition-transform duration-[9s] ease-out
                  group-hover:scale-105
                "
              />

              {/* Overlay lateral */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-secondary
                  via-secondary/70
                  via-40%
                  to-secondary/5
                "
                aria-hidden="true"
              />

              {/* Overlay inferior */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  h-48
                  bg-gradient-to-t
                  from-secondary/70
                  via-secondary/25
                  to-transparent
                "
                aria-hidden="true"
              />

              {/* Overlay superior sutil */}
              <div
                className="
                  absolute inset-x-0 top-0
                  h-24
                  bg-gradient-to-b
                  from-secondary/25
                  to-transparent
                "
                aria-hidden="true"
              />

              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-72 w-72
                  rounded-full
                  bg-primary/10
                  blur-3xl
                "
                aria-hidden="true"
              />

              {/* Glow inferior */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-10
                  h-64 w-64
                  rounded-full
                  bg-primary/5
                  blur-3xl
                "
                aria-hidden="true"
              />
            </div>

            {/* =================================================
                CONTENIDO
                ================================================= */}
            <div
              className="
                absolute inset-0
                flex items-center
              "
            >
              <div
                className="
                  w-full
                  px-6
                  pb-10
                  pt-12

                  sm:px-10
                  sm:pb-12

                  md:px-16

                  lg:px-20

                  xl:px-24
                "
              >
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div
                    className="
                      inline-flex
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
                      shadow-[0_8px_20px_rgba(233,69,96,0.08)]
                      backdrop-blur-md
                      sm:text-[10px]
                    "
                  >
                    <span
                      className="
                        relative
                        flex h-1.5 w-1.5
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
                          opacity-60
                          motion-reduce:animate-none
                        "
                      />

                      <span
                        className="
                          relative
                          h-1.5 w-1.5
                          rounded-full
                          bg-primary
                        "
                      />
                    </span>

                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      mt-5
                      max-w-2xl

                      text-[2rem]
                      font-extrabold
                      leading-[1.03]
                      tracking-[-0.045em]
                      text-white

                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl
                      xl:text-[4.25rem]
                    "
                  >
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-6
                      text-white/65

                      sm:text-base
                      md:text-lg
                      md:leading-7
                    "
                  >
                    {slide.desc}
                  </p>

                  {/* Actions */}
                  {(slide.primaryAction ||
                    slide.secondaryAction) && (
                    <div
                      className="
                        mt-7
                        flex
                        flex-col
                        gap-3

                        sm:flex-row
                        sm:items-center
                      "
                    >
                      {slide.primaryAction && (
                        <Link
                          to={slide.primaryAction.href}
                          className="
                            group/primary
                            inline-flex
                            min-h-12
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-primary
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_12px_28px_rgba(233,69,96,0.28)]
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-primary-dark
                            hover:shadow-[0_16px_32px_rgba(233,69,96,0.36)]

                            active:translate-y-0
                            active:scale-[0.98]

                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-white/80
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-secondary
                          "
                        >
                          <span>
                            {slide.primaryAction.label}
                          </span>

                          <i
                            className="
                              fa-solid
                              fa-arrow-right
                              text-xs
                              transition-transform
                              duration-300
                              group-hover/primary:translate-x-1
                            "
                            aria-hidden="true"
                          />
                        </Link>
                      )}

                      {slide.secondaryAction && (
                        <Link
                          to={slide.secondaryAction.href}
                          className="
                            inline-flex
                            min-h-12
                            items-center
                            justify-center
                            rounded-xl
                            border border-white/15
                            bg-white/[0.06]
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                            backdrop-blur-md
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:border-white/25
                            hover:bg-white/10
                            hover:shadow-[0_12px_25px_rgba(0,0,0,0.12)]

                            active:translate-y-0

                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-white/60
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-secondary
                          "
                        >
                          {slide.secondaryAction.label}
                        </Link>
                      )}
                    </div>
                  )}

                  {/* Trust indicators */}
                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      items-center
                      gap-x-5
                      gap-y-2
                      text-[10px]
                      font-semibold
                      text-white/40
                      sm:text-xs
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className="
                          flex h-5 w-5
                          items-center
                          justify-center
                          rounded-md
                          bg-white/[0.06]
                        "
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-shield-halved text-[9px] text-primary/90" />
                      </span>

                      Compra segura
                    </span>

                    <span
                      className="
                        hidden h-4 w-px
                        bg-white/10
                        sm:block
                      "
                      aria-hidden="true"
                    />

                    <span className="flex items-center gap-1.5">
                      <span
                        className="
                          flex h-5 w-5
                          items-center
                          justify-center
                          rounded-md
                          bg-white/[0.06]
                        "
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-truck-fast text-[9px] text-primary/90" />
                      </span>

                      Envíos rápidos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default SlideCard;