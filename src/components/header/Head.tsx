import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className="hidden border-b border-white/10 bg-[#0b2748] text-white/70 lg:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
        {/* Contact */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+1234567890"
            className="
              group flex items-center gap-2
              rounded-lg
              transition-colors duration-200
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0b2748]
            "
            aria-label="Llamar al +1 234 567 890"
          >
            <span
              className="
                flex h-5 w-5 items-center justify-center
                rounded-md bg-white/5
                transition-colors duration-200
                group-hover:bg-primary/20
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-phone text-[9px] text-primary" />
            </span>

            <span className="font-medium tracking-wide">
              +1 234 567 890
            </span>
          </a>

          <span
            className="h-3 w-px bg-white/10"
            aria-hidden="true"
          />

          <a
            href="mailto:support@store.com"
            className="
              group flex items-center gap-2
              rounded-lg
              transition-colors duration-200
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0b2748]
            "
            aria-label="Enviar correo a support@store.com"
          >
            <span
              className="
                flex h-5 w-5 items-center justify-center
                rounded-md bg-white/5
                transition-colors duration-200
                group-hover:bg-primary/20
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-envelope text-[9px] text-primary" />
            </span>

            <span className="font-medium tracking-wide">
              support@store.com
            </span>
          </a>
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-1">
          <Link
            to="/faq"
            className="
              rounded-lg px-3 py-1.5
              font-medium
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0b2748]
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
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0b2748]
            "
          >
            ¿Necesitás ayuda?
          </Link>

          <span
            className="mx-2 h-4 w-px bg-white/10"
            aria-hidden="true"
          />

          {/* Language indicator */}
          <div
            className="
              flex items-center gap-1.5
              rounded-lg px-2.5 py-1.5
              font-semibold
            "
            aria-label="Idioma actual: Español"
          >
            <i
              className="fa-solid fa-globe text-[10px] text-primary"
              aria-hidden="true"
            />

            <span>ES</span>
          </div>

          {/* Currency indicator */}
          <div
            className="
              flex items-center gap-1.5
              rounded-lg px-2.5 py-1.5
              font-semibold
            "
            aria-label="Moneda actual: Peso argentino"
          >
            <i
              className="fa-solid fa-coins text-[10px] text-primary"
              aria-hidden="true"
            />

            <span>ARS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;