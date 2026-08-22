import React from 'react';
import { Link } from 'react-router-dom';

interface PromotionalBannerProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  size: 'small' | 'large';
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  image,
  alt,
  eyebrow,
  title,
  description,
  href,
  size,
}) => {
  const isSmall = size === 'small';

  return (
    <article
      className={`
        group relative
        h-[280px] overflow-hidden
        rounded-3xl
        shadow-[0_8px_30px_rgba(3,0,71,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(3,0,71,0.14)]
        md:h-[320px]
        ${isSmall ? 'md:w-[35%]' : 'md:w-[65%]'}
      `}
    >
      {/* Imagen */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          ${
            isSmall
              ? 'bg-gradient-to-t from-black/80 via-black/35 to-black/5'
              : 'bg-gradient-to-r from-black/80 via-black/45 to-black/10'
          }
        `}
      />

      {/* Contenido */}
      <div
        className={`
          relative z-10
          flex h-full flex-col justify-end
          p-6
          sm:p-8
          ${isSmall ? 'max-w-sm' : 'max-w-xl'}
        `}
      >
        <span
          className="
            mb-2 w-fit
            rounded-full
            border border-white/20
            bg-white/10
            px-3 py-1
            text-[10px] font-bold uppercase tracking-[0.16em]
            text-white
            backdrop-blur-md
          "
        >
          {eyebrow}
        </span>

        <h2
          className={`
            font-extrabold
            leading-tight
            tracking-tight
            text-white
            ${isSmall ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}
          `}
        >
          {title}
        </h2>

        <p
          className={`
            mt-2
            max-w-lg
            text-sm leading-6
            text-white/75
            ${isSmall ? 'line-clamp-2' : 'line-clamp-3'}
          `}
        >
          {description}
        </p>

        <Link
          to={href}
          className="
            group/button
            mt-5 inline-flex w-fit items-center gap-2
            rounded-xl
            bg-white
            px-4 py-2.5
            text-sm font-bold
            text-secondary
            shadow-lg
            transition-all duration-300
            hover:bg-primary
            hover:text-white
            hover:shadow-primary/25
            focus:outline-none
            focus:ring-2
            focus:ring-white/70
            focus:ring-offset-2
            focus:ring-offset-transparent
          "
        >
          <span>Descubrir más</span>

          <i
            className="
              fa-solid fa-arrow-right
              text-xs
              transition-transform duration-300
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Brillo decorativo */}
      <div className="
        pointer-events-none absolute
        right-0 top-0
        h-32 w-32
        rounded-full
        bg-white/10
        blur-3xl
      " />
    </article>
  );
};

const Announcement: React.FC = () => {
  return (
    <section
      aria-labelledby="promotions-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Aprovechá nuestras promociones
            </p>

            <h2
              id="promotions-title"
              className="mt-1 text-xl font-extrabold tracking-tight text-secondary sm:text-2xl"
            >
              Ofertas y novedades
            </h2>
          </div>
        </div>

        {/* Banners */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-5">

          <PromotionalBanner
            image="/img/products/banner-1.jpg"
            alt="Promoción especial de productos"
            eyebrow="Oferta especial"
            title="Encontrá algo que te sorprenda"
            description="Descubrí productos seleccionados y aprovechá oportunidades especiales por tiempo limitado."
            href="/shop"
            size="small"
          />

          <PromotionalBanner
            image="/img/products/banner-2.jpg"
            alt="Colección destacada de productos"
            eyebrow="Colección destacada"
            title="Todo lo que buscás, en un solo lugar"
            description="Explorá nuestra selección de tecnología, accesorios y productos pensados para acompañar tu día."
            href="/pages"
            size="large"
          />

        </div>
      </div>
    </section>
  );
};

export default Announcement;