import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    label: 'Inicio',
    path: '/',
    icon: 'fa-house',
  },
  {
    label: 'Páginas',
    path: '/pages',
    icon: 'fa-grid-2',
  },
  {
    label: 'Seguimiento',
    path: '/cart',
    icon: 'fa-box',
  },
  {
    label: 'Contacto',
    path: '/contact',
    icon: 'fa-envelope',
  },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /*
   * Cerrar el menú cuando cambia la ruta.
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  /*
   * Bloquear scroll y permitir Escape
   * mientras el menú móvil está abierto.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
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
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="
          relative
          border-b border-white/10
          bg-secondary/95
          text-white
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
        "
        aria-label="Navegación principal"
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-primary/5
            via-transparent
            to-primary/5
          "
          aria-hidden="true"
        />

        <div
          className="
            relative mx-auto
            flex h-[74px]
            max-w-7xl
            items-center justify-between
            px-4 sm:px-6 lg:px-8
          "
        >
          {/* Categories */}
          <Link
            to="/shop"
            aria-label="Explorar categorías"
            className="
              group
              flex h-11 items-center gap-3
              rounded-xl
              border border-white/10
              bg-white/[0.06]
              px-4
              text-sm font-semibold
              text-white
              shadow-sm
              transition-all duration-300
              hover:border-primary/30
              hover:bg-primary/15
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/50
              focus-visible:ring-offset-2
              focus-visible:ring-offset-secondary
            "
          >
            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-lg
                bg-primary/15
                text-primary
                transition-transform duration-300
                group-hover:scale-110
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-border-all text-sm" />
            </span>

            <span className="hidden sm:block">
              Categorías
            </span>

            <i
              className="
                fa-solid fa-angle-down
                text-[10px]
                text-white/60
                transition-transform duration-300
                group-hover:translate-y-0.5
              "
              aria-hidden="true"
            />
          </Link>

          {/* Desktop navigation */}
          <div
            className="
              hidden items-center gap-1
              rounded-2xl
              border border-white/10
              bg-white/[0.035]
              p-1.5
              backdrop-blur-md
              md:flex
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `
                  group relative
                  flex items-center gap-2
                  rounded-xl
                  px-4 py-2.5
                  text-sm font-medium
                  transition-all duration-300
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40

                  ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <i
                      className={`
                        fa-solid ${item.icon}
                        text-xs
                        transition-transform duration-300

                        ${
                          isActive
                            ? 'text-white'
                            : 'text-white/45 group-hover:scale-110 group-hover:text-primary'
                        }
                      `}
                      aria-hidden="true"
                    />

                    <span>{item.label}</span>

                    {isActive && (
                      <span
                        className="
                          absolute inset-x-4 -bottom-1
                          h-0.5
                          rounded-full
                          bg-primary
                          shadow-[0_0_10px_rgba(255,255,255,0.35)]
                        "
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
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
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/[0.06]
              text-white
              transition-all duration-300
              hover:border-primary/30
              hover:bg-primary/15
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/50
              md:hidden
            "
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen
                  ? 'fa-xmark text-xl'
                  : 'fa-bars text-lg'
              } transition-transform duration-300`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile overlay */}
        <div
          className={`
            fixed inset-0
            z-[998]
            bg-black/60
            backdrop-blur-sm
            transition-all duration-300
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

        {/* Mobile menu */}
        <aside
          id="mobile-navigation"
          className={`
            fixed right-0 top-0
            z-[999]
            flex h-full
            w-[88%] max-w-sm
            flex-col
            border-l border-white/10
            bg-secondary
            shadow-[-15px_0_50px_rgba(0,0,0,0.25)]
            transition-transform duration-300 ease-out
            md:hidden

            ${
              isMobileMenuOpen
                ? 'translate-x-0'
                : 'translate-x-full'
            }
          `}
          aria-label="Menú móvil"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Navegación
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Menú principal
              </h2>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.05]
                text-white/70
                transition-all duration-300
                hover:bg-white/10
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
          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    group
                    flex items-center gap-4
                    rounded-2xl
                    px-4 py-4
                    transition-all duration-300

                    ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          flex h-10 w-10
                          items-center justify-center
                          rounded-xl
                          transition-all duration-300

                          ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-white/[0.05] text-white/45 group-hover:bg-primary/15 group-hover:text-primary'
                          }
                        `}
                        aria-hidden="true"
                      >
                        <i
                          className={`fa-solid ${item.icon}`}
                        />
                      </span>

                      <div className="flex-1">
                        <span className="block text-sm font-semibold">
                          {item.label}
                        </span>

                        <span
                          className={`
                            mt-0.5 block text-xs
                            ${
                              isActive
                                ? 'text-white/70'
                                : 'text-white/35'
                            }
                          `}
                        >
                          {item.path === '/'
                            ? 'Volver al inicio'
                            : item.path === '/pages'
                            ? 'Explorar contenido'
                            : item.path === '/cart'
                            ? 'Consultar tu pedido'
                            : 'Estamos para ayudarte'}
                        </span>
                      </div>

                      <i
                        className={`
                          fa-solid fa-chevron-right
                          text-xs
                          transition-transform duration-300
                          ${
                            isActive
                              ? 'text-white'
                              : 'text-white/25 group-hover:translate-x-1 group-hover:text-primary'
                          }
                        `}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div
              className="my-6 h-px bg-white/10"
              aria-hidden="true"
            />

            {/* Categories */}
            <Link
              to="/shop"
              onClick={closeMenu}
              className="
                group
                flex items-center gap-4
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-4 py-4
                text-left
                transition-all duration-300
                hover:border-primary/20
                hover:bg-primary/10
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40
              "
            >
              <span
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-transform duration-300
                  group-hover:scale-105
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-border-all" />
              </span>

              <div className="flex-1">
                <span className="block text-sm font-semibold text-white">
                  Categorías
                </span>

                <span className="mt-0.5 block text-xs text-white/35">
                  Explorar por categoría
                </span>
              </div>

              <i
                className="
                  fa-solid fa-angle-right
                  text-xs text-white/30
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:text-primary
                "
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-6 py-5">
            <p className="text-center text-xs text-white/30">
              Navegación rápida y sencilla
            </p>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default NavBar;