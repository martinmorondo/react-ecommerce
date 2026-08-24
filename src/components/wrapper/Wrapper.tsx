interface WrapperItem {
  iconClass: string;
  title: string;
  desc: string;
}

const wrapperItems: readonly WrapperItem[] = [
  {
    iconClass: 'fa-solid fa-truck-fast',
    title: 'Envíos rápidos',
    desc: 'Recibí tus productos de forma segura y seguí tu pedido durante todo el proceso.',
  },
  {
    iconClass: 'fa-solid fa-credit-card',
    title: 'Pago seguro',
    desc: 'Comprá con tranquilidad mediante métodos de pago seguros y protegidos.',
  },
  {
    iconClass: 'fa-solid fa-shield-halved',
    title: 'Compra con confianza',
    desc: 'Productos seleccionados y una experiencia de compra pensada para vos.',
  },
  {
    iconClass: 'fa-solid fa-headset',
    title: 'Atención personalizada',
    desc: 'Estamos disponibles para ayudarte antes, durante y después de tu compra.',
  },
];

const Wrapper = () => {
  return (
    <section
      aria-labelledby="benefits-title"
      className="
        w-full
        border-y border-black/[0.05]
        bg-white
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Comprá con tranquilidad
          </p>

          <h2
            id="benefits-title"
            className="
              mt-1
              text-xl font-extrabold
              tracking-tight
              text-secondary
              sm:text-2xl
            "
          >
            Todo pensado para vos
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Una experiencia de compra simple, segura y acompañada en cada paso.
          </p>
        </header>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {wrapperItems.map((item, index) => (
            <article
              key={item.title}
              className="
                group relative
                overflow-hidden
                rounded-2xl
                border border-black/[0.06]
                bg-background
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/15
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(3,0,71,0.07)]
                sm:p-6
              "
            >
              {/* Decorative number */}
              <span
                className="
                  pointer-events-none
                  absolute right-4 top-3
                  text-4xl font-extrabold
                  text-secondary/[0.035]
                  transition-colors duration-300
                  group-hover:text-primary/[0.08]
                "
                aria-hidden="true"
              >
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className="
                  relative z-10
                  mb-5
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:bg-primary
                  group-hover:text-white
                  group-hover:shadow-lg
                  group-hover:shadow-primary/20
                "
                aria-hidden="true"
              >
                <i className={`${item.iconClass} text-base`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="
                    text-sm font-bold
                    text-secondary
                    transition-colors duration-300
                    group-hover:text-primary
                    sm:text-base
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-gray-500
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom indicator */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-0.5 w-0
                  bg-primary
                  transition-all duration-300
                  group-hover:w-full
                "
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wrapper;