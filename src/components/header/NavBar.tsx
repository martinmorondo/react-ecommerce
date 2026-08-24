import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  icon: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    label: 'Inicio',
    path: '/',
    icon: 'fa-house',
    description: 'Volver al inicio',
  },
  {
    label: 'Páginas',
    path: '/pages',
    icon: 'fa-grid-2',
    description: 'Explorar contenido',
  },
  {
    label: 'Seguimiento',
    path: '/cart',
    icon: 'fa-box',
    description: 'Consultar tu pedido',
  },
  {
    label: 'Contacto',
    path: '/contact',
    icon: 'fa-envelope',
    description: 'Estamos para ayudarte',
  },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /*
   * Cierra el menú cuando cambia la ruta.
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /*
   * Control del scroll y Escape.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative z-50 w-full">
      <nav
        aria-label="Navegación principal"
        className="
          relative
          border-y border-white/[0.07]
          bg-secondary-dark
          text-white
          shadow-[0_12px_35px_rgba(7,26,47,0.16)]
        "
      >
        {/* =====================================================
            BACKGROUND EFFECTS
            ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            overflow-hidden
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute
              -left-20
              top-1/2
              h-40 w-40
              -translate-y-1/2
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              right-[-80px]
              top-1/2
              h-52 w-52
              -translate-y-1/2
              rounded-full
              bg-primary/[0.05]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary/25
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            DESKTOP BAR
            ===================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            gap-4
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Categories */}
          <Link
            to="/shop"
            aria-label="Explorar categorías"
            className="
              group
              flex
              h-11
              shrink-0
              items-center
              gap-2.5
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-3
              text-sm
              font-bold
              text-white
              shadow-[0_6px_20px_rgba(0,0,0,0.08)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-primary/25
              hover:bg-primary/[0.09]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/50
              focus-visible:ring-offset-2
              focus-visible:ring-offset-secondary-dark

              sm:px-4
            "
          >
            <span
              className="
                flex
                h-7 w-7
                items-center
                justify-center
                rounded-xl
                bg-primary/15
                text-primary
                transition-all
                duration-300

                group-hover:bg-primary
                group-hover:text-white
                group-hover:shadow-[0_0_18px_rgba(233,69,96,0.22)]
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-border-all text-xs" />
            </span>

            <span className="hidden sm:inline">
              Categorías
            </span>

            <i
              className="
                fa-solid
                fa-chevron-down
                text-[8px]
                text-white/40
                transition-transform
                duration-300
                group-hover:translate-y-0.5
              "
              aria-hidden="true"
            />
          </Link>

          {/* Desktop navigation */}
          <div
            className="
              hidden
              flex-1
              items-center
              justify-center
              md:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-1
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.035]
                p-1.5
                shadow-[0_5px_20px_rgba(0,0,0,0.06)]
                backdrop-blur-md
              "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/40

                    ${
                      isActive
                        ? `
                          bg-primary
                          text-white
                          shadow-[0_7px_18px_rgba(233,69,96,0.22)]
                        `
                        : `
                          text-white/60
                          hover:bg-white/[0.06]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          flex
                          h-5 w-5
                          items-center
                          justify-center
                          rounded-md
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? 'bg-white/15'
                              : 'group-hover:bg-white/[0.05]'
                          }
                        `}
                        aria-hidden="true"
                      >
                        <i
                          className={`
                            fa-solid
                            ${item.icon}
                            text-[10px]

                            ${
                              isActive
                                ? 'text-white'
                                : 'text-white/35 group-hover:scale-110 group-hover:text-primary'
                            }
                          `}
                        />
                      </span>

                      <span>
                        {item.label}
                      </span>

                      {isActive && (
                        <span
                          className="
                            absolute
                            inset-x-4
                            -bottom-1
                            h-0.5
                            rounded-full
                            bg-primary
                            shadow-[0_0_10px_rgba(233,69,96,0.55)]
                          "
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right visual indicator */}
          <div
            className="
              hidden
              items-center
              gap-2
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.035]
              px-3
              py-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white/35
              lg:flex
            "
          >
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-success
                shadow-[0_0_8px_rgba(22,163,74,0.65)]
              "
              aria-hidden="true"
            />

            Compra segura
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              isMobileMenuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="
              ml-auto
              flex
              h-11 w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              text-white
              shadow-[0_5px_18px_rgba(0,0,0,0.08)]
              transition-all
              duration-300

              hover:border-primary/25
              hover:bg-primary/10

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/50

              md:hidden
            "
          >
            <i
              className={`
                fa-solid
                ${
                  isMobileMenuOpen
                    ? 'fa-xmark text-xl'
                    : 'fa-bars text-lg'
                }
              `}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* =====================================================
            MOBILE OVERLAY
            ===================================================== */}

        <div
          className={`
            fixed inset-0
            z-[998]
            bg-secondary-dark/75
            backdrop-blur-md
            transition-opacity
            duration-300
            md:hidden

            ${
              isMobileMenuOpen
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0'
            }
          `}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* =====================================================
            MOBILE DRAWER
            ===================================================== */}

        <aside
          id="mobile-navigation"
          aria-label="Menú móvil"
          className={`
            fixed
            right-0
            top-0
            z-[999]
            flex
            h-full
            w-[90%]
            max-w-sm
            flex-col
            overflow-hidden
            border-l
            border-white/10
            bg-secondary-dark
            shadow-[-25px_0_70px_rgba(0,0,0,0.32)]
            transition-transform
            duration-300
            ease-out
            md:hidden

            ${
              isMobileMenuOpen
                ? 'translate-x-0'
                : 'translate-x-full'
            }
          `}
        >
          {/* Mobile glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-64
              bg-gradient-to-b
              from-primary/10
              to-transparent
            "
            aria-hidden="true"
          />

          {/* Header */}
          <div
            className="
              relative
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-5
              py-5
            "
          >
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-primary/10
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-primary
                "
              >
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-primary
                    shadow-[0_0_8px_rgba(233,69,96,0.75)]
                  "
                  aria-hidden="true"
                />

                NEXORA
              </span>

              <h2 className="mt-2 text-xl font-extrabold tracking-tight text-white">
                Menú principal
              </h2>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="
                flex
                h-10 w-10
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                text-white/70
                transition-all
                duration-300

                hover:border-primary/25
                hover:bg-primary/10
                hover:text-white

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40
              "
            >
              <i
                className="fa-solid fa-xmark text-lg"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Links */}
          <div
            className="
              relative
              flex-1
              overflow-y-auto
              px-4
              py-6
            "
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    px-4
                    py-4
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          border-primary/20
                          bg-primary
                          text-white
                          shadow-[0_9px_24px_rgba(233,69,96,0.20)]
                        `
                        : `
                          border-transparent
                          text-white/65
                          hover:border-white/[0.08]
                          hover:bg-white/[0.045]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          flex
                          h-11 w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-white/[0.05] text-white/35 group-hover:bg-primary/10 group-hover:text-primary'
                          }
                        `}
                        aria-hidden="true"
                      >
                        <i
                          className={`fa-solid ${item.icon} text-sm`}
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">
                          {item.label}
                        </span>

                        <span
                          className={`
                            mt-0.5
                            block
                            text-xs

                            ${
                              isActive
                                ? 'text-white/65'
                                : 'text-white/30'
                            }
                          `}
                        >
                          {item.description}
                        </span>
                      </div>

                      <i
                        className={`
                          fa-solid
                          fa-chevron-right
                          text-[9px]
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? 'text-white'
                              : 'text-white/20 group-hover:translate-x-1 group-hover:text-primary'
                          }
                        `}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Categories CTA */}
            <div
              className="
                my-6
                h-px
                bg-white/10
              "
              aria-hidden="true"
            />

            <Link
              to="/shop"
              onClick={closeMenu}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-primary/15
                bg-gradient-to-r
                from-primary/10
                to-white/[0.03]
                px-4
                py-4
                transition-all
                duration-300

                hover:border-primary/30
                hover:from-primary/15

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40
              "
            >
              <span
                className="
                  flex
                  h-11 w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300

                  group-hover:bg-primary
                  group-hover:text-white
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-border-all text-sm" />
              </span>

              <div className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-white">
                  Explorar categorías
                </span>

                <span className="mt-0.5 block text-xs text-white/30">
                  Encontrá lo que estás buscando
                </span>
              </div>

              <i
                className="
                  fa-solid fa-arrow-right
                  text-[10px]
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-primary
                "
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile footer */}
          <div
            className="
              relative
              border-t
              border-white/10
              bg-black/10
              px-6
              py-5
            "
          >
            <div className="flex items-center justify-center gap-2">
              <i
                className="
                  fa-solid
                  fa-shield-halved
                  text-[10px]
                  text-primary/80
                "
                aria-hidden="true"
              />

              <p className="text-[10px] text-white/30">
                Comprá con confianza en NEXORA.
              </p>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default NavBar;