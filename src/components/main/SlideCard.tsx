import ReactSlick, {
  CustomArrowProps,
  Settings,
} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Sdata, SlideData } from './Sdata';

const Slider = ReactSlick.default || ReactSlick;

/* =========================================================
   Flechas
   ========================================================= */

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Siguiente diapositiva"
      className="
        absolute right-5 top-1/2 z-20
        hidden h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-full
        border border-white/15
        bg-black/20
        text-white
        backdrop-blur-md
        transition-all duration-300
        hover:border-white/30
        hover:bg-primary
        hover:shadow-lg
        hover:shadow-primary/20
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/60
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black/20
        md:flex
        lg:right-7
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
        absolute left-5 top-1/2 z-20
        hidden h-11 w-11
        -translate-y-1/2
        items-center justify-center
        rounded-full
        border border-white/15
        bg-black/20
        text-white
        backdrop-blur-md
        transition-all duration-300
        hover:border-white/30
        hover:bg-primary
        hover:shadow-lg
        hover:shadow-primary/20
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/60
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black/20
        md:flex
        lg:left-7
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
   SlideCard
   ========================================================= */

const SlideCard = () => {
  const settings: Settings = {
    dots: true,
    infinite: Sdata.length > 1,
    speed: 700,
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
      <div className="absolute bottom-5 left-0 right-0 z-20">
        <ul className="m-0 flex justify-center gap-2 p-0">
          {dots}
        </ul>
      </div>
    ),

    customPaging: (index) => (
      <button
        type="button"
        aria-label={`Ir a la diapositiva ${index + 1}`}
        className="
          h-2.5 w-2.5
          rounded-full
          border border-white/30
          bg-white/30
          p-0
          transition-all duration-300
          hover:scale-125
          hover:bg-white
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/70
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
        group relative mt-4
        w-full overflow-hidden
        rounded-3xl
        border border-black/[0.05]
        bg-secondary
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      "
    >
      <Slider {...settings}>
        {Sdata.map((slide: SlideData) => (
          <article
            key={slide.id}
            className="relative outline-none"
          >
            {/* Imagen */}
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
                fetchPriority={
                  slide.id === 1 ? 'high' : undefined
                }
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                  opacity-90
                  transition-transform
                  duration-[9s]
                  ease-out
                  group-hover:scale-105
                  motion-reduce:transition-none
                  motion-reduce:group-hover:scale-100
                "
              />

              {/* Overlay principal */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/90
                  via-black/60
                  to-black/10
                "
                aria-hidden="true"
              />

              {/* Overlay inferior */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  h-32
                  bg-gradient-to-t
                  from-black/45
                  to-transparent
                "
                aria-hidden="true"
              />

              {/* Brillo */}
              <div
                className="
                  pointer-events-none
                  absolute right-0 top-0
                  h-72 w-72
                  rounded-full
                  bg-white/5
                  blur-3xl
                "
                aria-hidden="true"
              />
            </div>

            {/* Contenido */}
            <div
              className="
                absolute inset-0
                flex items-center
                px-6 py-14
                sm:px-10
                md:px-16
                lg:px-20
                xl:px-24
              "
            >
              <div className="w-full max-w-2xl">
                {/* Badge */}
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-primary/30
                    bg-primary/15
                    px-3.5 py-1.5
                    text-[10px] font-bold uppercase
                    tracking-[0.16em]
                    text-primary
                    shadow-sm
                    backdrop-blur-md
                    sm:text-xs
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

                  {slide.badge}
                </span>

                {/* Título */}
                <h2
                  className="
                    mt-5
                    max-w-2xl
                    text-[2rem]
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.03em]
                    text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                    xl:text-[4.25rem]
                  "
                >
                  {slide.title}
                </h2>

                {/* Descripción */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-6
                    text-white/70
                    sm:text-base
                    md:text-lg
                    md:leading-7
                  "
                >
                  {slide.desc}
                </p>

                {/* Actions */}
                <div
                  className="
                    mt-7
                    flex flex-col
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
                        items-center justify-center gap-2
                        rounded-xl
                        bg-primary
                        px-6 py-3.5
                        text-sm font-bold
                        text-white
                        shadow-[0_10px_25px_rgba(233,69,96,0.35)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#d93652]
                        hover:shadow-[0_15px_30px_rgba(233,69,96,0.45)]
                        active:translate-y-0
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary/50
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-black/20
                      "
                    >
                      <span>{slide.primaryAction.label}</span>

                      <i
                        className="
                          fa-solid fa-arrow-right
                          text-xs
                          transition-transform duration-300
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
                        items-center justify-center
                        rounded-xl
                        border border-white/15
                        bg-white/5
                        px-6 py-3.5
                        text-sm font-semibold
                        text-white
                        backdrop-blur-md
                        transition-all duration-300
                        hover:border-white/25
                        hover:bg-white/10
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/40
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-black/20
                      "
                    >
                      {slide.secondaryAction.label}
                    </Link>
                  )}
                </div>

                {/* Trust indicators */}
                <div
                  className="
                    mt-7
                    flex flex-wrap
                    items-center gap-x-5 gap-y-2
                    text-[10px]
                    font-medium
                    text-white/45
                    sm:text-xs
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <i
                      className="fa-solid fa-shield-halved text-primary/80"
                      aria-hidden="true"
                    />
                    Compra segura
                  </span>

                  <span
                    className="
                      hidden h-3 w-px
                      bg-white/10
                      sm:block
                    "
                    aria-hidden="true"
                  />

                  <span className="flex items-center gap-1.5">
                    <i
                      className="fa-solid fa-truck-fast text-primary/80"
                      aria-hidden="true"
                    />
                    Envíos rápidos
                  </span>
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