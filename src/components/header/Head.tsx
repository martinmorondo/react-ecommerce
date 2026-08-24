import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div
      className="
        hidden
        border-b border-white/[0.07]
        bg-secondary-dark
        text-white/65
        lg:block
      "
    >
      <div
        className="
          relative
          mx-auto
          flex h-9
          max-w-7xl
          items-center
          justify-between
          px-4
          text-[10px]
          sm:px-6
          lg:px-8
        "
      >
        {/* Línea de brillo */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/20
            to-transparent
          "
          aria-hidden="true"
        />

        {/* =====================================================
            CONTACTO
            ===================================================== */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            aria-label="Llamar al +1 234 567 890"
            className="
              group
              flex items-center gap-2
              rounded-lg
              px-1.5 py-1
              transition-all duration-200
              hover:bg-white/[0.04]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
            "
          >
            <span
              className="
                flex h-5 w-5
                items-center justify-center
                rounded-md
                bg-white/[0.05]
                text-primary
                transition-all duration-200
                group-hover:bg-primary/15
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-phone text-[8px]" />
            </span>

            <span className="hidden font-semibold tracking-wide sm:inline">
              +1 234 567 890
            </span>

            <span className="font-semibold tracking-wide sm:hidden">
              Llamar
            </span>
          </a>

          <span
            className="h-3 w-px bg-white/10"
            aria-hidden="true"
          />

          <a
            href="mailto:support@store.com"
            aria-label="Enviar correo a support@store.com"
            className="
              group
              flex min-w-0 items-center gap-2
              rounded-lg
              px-1.5 py-1
              transition-all duration-200
              hover:bg-white/[0.04]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
            "
          >
            <span
              className="
                flex h-5 w-5 shrink-0
                items-center justify-center
                rounded-md
                bg-white/[0.05]
                text-primary
                transition-all duration-200
                group-hover:bg-primary/15
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-envelope text-[8px]" />
            </span>

            <span className="max-w-[190px] truncate font-semibold tracking-wide">
              support@store.com
            </span>
          </a>
        </div>

        {/* =====================================================
            UTILIDADES
            ===================================================== */}
        <div className="flex items-center gap-1">
          <Link
            to="/faq"
            className="
              rounded-lg
              px-2.5 py-1.5
              font-medium
              transition-all duration-200
              hover:bg-white/[0.05]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
            "
          >
            Preguntas frecuentes
          </Link>

          <Link
            to="/help"
            className="
              rounded-lg
              px-2.5 py-1.5
              font-medium
              transition-all duration-200
              hover:bg-white/[0.05]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
            "
          >
            ¿Necesitás ayuda?
          </Link>

          <span
            className="mx-2 h-4 w-px bg-white/10"
            aria-hidden="true"
          />

          {/* Idioma */}
          <div
            className="
              flex items-center gap-1.5
              rounded-lg
              border border-white/[0.05]
              bg-white/[0.03]
              px-2.5 py-1.5
              font-semibold
              text-white/75
            "
            aria-label="Idioma actual: Español"
          >
            <i
              className="fa-solid fa-globe text-[9px] text-primary"
              aria-hidden="true"
            />

            <span>ES</span>
          </div>

          {/* Moneda */}
          <div
            className="
              flex items-center gap-1.5
              rounded-lg
              border border-white/[0.05]
              bg-white/[0.03]
              px-2.5 py-1.5
              font-semibold
              text-white/75
            "
            aria-label="Moneda actual: Peso argentino"
          >
            <i
              className="fa-solid fa-coins text-[9px] text-primary"
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