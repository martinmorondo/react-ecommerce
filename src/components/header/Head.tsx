import React from 'react';
import { Link } from 'react-router-dom';

const Head: React.FC = () => {
  return (
    <div className="hidden lg:block border-b border-white/10 bg-[#0b2748] text-white/70">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">

        {/* Contacto */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+1234567890"
            className="
              group flex items-center gap-2
              transition-colors duration-200
              hover:text-white
            "
            aria-label="Llamar al +1 234 567 890"
          >
            <span className="
              flex h-5 w-5 items-center justify-center
              rounded-md bg-white/5
              transition-colors duration-200
              group-hover:bg-primary/20
            ">
              <i className="fa-solid fa-phone text-[9px] text-primary" />
            </span>

            <span className="font-medium tracking-wide">
              +1 234 567 890
            </span>
          </a>

          <span className="h-3 w-px bg-white/10" />

          <a
            href="mailto:support@store.com"
            className="
              group flex items-center gap-2
              transition-colors duration-200
              hover:text-white
            "
            aria-label="Enviar correo a support@store.com"
          >
            <span className="
              flex h-5 w-5 items-center justify-center
              rounded-md bg-white/5
              transition-colors duration-200
              group-hover:bg-primary/20
            ">
              <i className="fa-solid fa-envelope text-[9px] text-primary" />
            </span>

            <span className="font-medium tracking-wide">
              support@store.com
            </span>
          </a>
        </div>

        {/* Utilidades */}
        <div className="flex items-center gap-1">
          <Link
            to="/faq"
            className="
              rounded-lg px-3 py-1.5
              font-medium
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
            "
          >
            Preguntas frecuentes
          </Link>

          <Link
            to="/help"
            className="
              rounded-lg px-3 py-1.5
              font-medium
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
            "
          >
            ¿Necesitás ayuda?
          </Link>

          <span className="mx-2 h-4 w-px bg-white/10" />

          {/* Idioma */}
          <button
            type="button"
            className="
              group flex items-center gap-1.5
              rounded-lg px-2.5 py-1.5
              font-semibold
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-primary/40
            "
            aria-label="Seleccionar idioma"
          >
            <i className="fa-solid fa-globe text-[10px] text-primary" />
            <span>ES</span>
            <i className="
              fa-solid fa-chevron-down
              text-[8px] text-white/40
              transition-transform duration-200
              group-hover:translate-y-0.5
            " />
          </button>

          {/* Moneda */}
          <button
            type="button"
            className="
              group flex items-center gap-1.5
              rounded-lg px-2.5 py-1.5
              font-semibold
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-primary/40
            "
            aria-label="Seleccionar moneda"
          >
            <i className="fa-solid fa-coins text-[10px] text-primary" />
            <span>ARS</span>
            <i className="
              fa-solid fa-chevron-down
              text-[8px] text-white/40
              transition-transform duration-200
              group-hover:translate-y-0.5
            " />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Head;