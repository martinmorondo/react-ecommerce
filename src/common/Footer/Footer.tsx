import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: 'Sobre nosotros', href: '/about' },
  { label: 'Nuestras tiendas', href: '/stores' },
  { label: 'Trabajá con nosotros', href: '/careers' },
  { label: 'Términos y condiciones', href: '/terms' },
  { label: 'Política de privacidad', href: '/privacy' },
];

const customerLinks: FooterLink[] = [
  { label: 'Preguntas frecuentes', href: '/faq' },
  { label: 'Centro de ayuda', href: '/help' },
  { label: 'Seguimiento de pedido', href: '/track-order' },
  { label: 'Cambios y devoluciones', href: '/returns' },
  { label: 'Contacto', href: '/contact' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-secondary text-white">
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Siempre cerca tuyo
            </p>

            <h2 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
              ¿Necesitás ayuda con tu compra?
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Estamos para ayudarte con tus consultas, pedidos y cualquier
              duda que tengas.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex shrink-0 items-center justify-center gap-2
              rounded-xl
              border border-primary/30
              bg-primary/10
              px-5 py-3
              text-sm font-semibold text-primary
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-primary
              hover:text-white
              hover:shadow-lg hover:shadow-primary/20
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
            "
          >
            <span>Contactanos</span>

            <i
              className="fa-solid fa-arrow-right text-xs"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:px-8">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Ecommerce - Inicio"
          >
            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-primary
                text-white
                shadow-lg shadow-primary/20
              "
              aria-hidden="true"
            >
              <i className="fa-solid fa-bag-shopping text-sm" />
            </span>

            <span className="text-2xl font-extrabold tracking-tight">
              Ecommerce
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
            Tecnología, accesorios y productos seleccionados para acompañar
            tu día con calidad, diseño y una experiencia de compra simple.
          </p>

          {/* Social media */}
          <nav
            className="mt-6"
            aria-label="Redes sociales"
          >
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-white/50
                  transition-all duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
              >
                <i
                  className="fa-brands fa-instagram"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-white/50
                  transition-all duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
              >
                <i
                  className="fa-brands fa-facebook-f"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-white/50
                  transition-all duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
              >
                <i
                  className="fa-brands fa-tiktok"
                  aria-hidden="true"
                />
              </a>
            </div>
          </nav>

          {/* App availability */}
          <div className="mt-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              Próximamente en
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-white/70">
                <i
                  className="fa-brands fa-google-play text-lg"
                  aria-hidden="true"
                />

                <div className="leading-none">
                  <span className="block text-[8px] text-white/35">
                    Próximamente
                  </span>

                  <span className="mt-0.5 block text-xs font-semibold">
                    Google Play
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-white/70">
                <i
                  className="fa-brands fa-app-store-ios text-lg"
                  aria-hidden="true"
                />

                <div className="leading-none">
                  <span className="block text-[8px] text-white/35">
                    Próximamente
                  </span>

                  <span className="mt-0.5 block text-xs font-semibold">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <FooterLinkSection
          title="Empresa"
          ariaLabel="Enlaces de empresa"
          links={companyLinks}
        />

        {/* Customer service */}
        <FooterLinkSection
          title="Atención al cliente"
          ariaLabel="Atención al cliente"
          links={customerLinks}
        />

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold text-white">
            Contactanos
          </h2>

          <div className="mt-5 space-y-4">
            <a
              href="mailto:support@store.com"
              className="group flex items-start gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-colors duration-300
                  group-hover:bg-primary
                  group-hover:text-white
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-envelope text-xs" />
              </span>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-white/30">
                  Email
                </span>

                <span className="mt-1 block text-sm text-white/55 transition-colors group-hover:text-white">
                  support@store.com
                </span>
              </div>
            </a>

            <a
              href="tel:+11123456780"
              className="group flex items-start gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-colors duration-300
                  group-hover:bg-primary
                  group-hover:text-white
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-phone text-xs" />
              </span>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-white/30">
                  Teléfono
                </span>

                <span className="mt-1 block text-sm text-white/55 transition-colors group-hover:text-white">
                  +1 1123 456 780
                </span>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
                aria-hidden="true"
              >
                <i className="fa-solid fa-location-dot text-xs" />
              </span>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-white/30">
                  Dirección
                </span>

                <span className="mt-1 block text-sm leading-5 text-white/55">
                  70 Washington Square South,
                  <br />
                  New York, NY 10012
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/35 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {currentYear} Ecommerce. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <i
                className="fa-solid fa-shield-halved text-[10px] text-primary/70"
                aria-hidden="true"
              />
              Compra segura
            </span>

            <span
              className="hidden h-3 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <span className="flex items-center gap-1.5">
              <i
                className="fa-solid fa-lock text-[10px] text-primary/70"
                aria-hidden="true"
              />
              Pago protegido
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkSectionProps {
  title: string;
  ariaLabel: string;
  links: FooterLink[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  ariaLabel,
  links,
}) => {
  return (
    <div>
      <h2 className="text-sm font-bold text-white">
        {title}
      </h2>

      <nav
        className="mt-5"
        aria-label={ariaLabel}
      >
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="
                  group flex items-center gap-2
                  rounded-sm
                  text-sm text-white/45
                  transition-colors duration-200
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
              >
                <i
                  className="
                    fa-solid fa-chevron-right
                    text-[8px] text-primary/60
                    transition-transform duration-200
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                />

                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Footer;