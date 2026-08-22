import React from 'react';

interface CatgProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

interface CategoryOption {
  cateName: string;
  category: string;
  icon: string;
}

const categories: CategoryOption[] = [
  {
    cateName: 'Todos los productos',
    category: 'all',
    icon: 'fa-border-all',
  },
  {
    cateName: 'Phones',
    category: 'phone',
    icon: 'fa-mobile-screen-button',
  },
  {
    cateName: 'PlayStation',
    category: 'playstation',
    icon: 'fa-gamepad',
  },
  {
    cateName: 'Xbox',
    category: 'xbox',
    icon: 'fa-gamepad',
  },
  {
    cateName: 'Watch',
    category: 'watch',
    icon: 'fa-clock',
  },
  {
    cateName: 'Glasses',
    category: 'glasses',
    icon: 'fa-glasses',
  },
  {
    cateName: 'Headphones',
    category: 'headphones',
    icon: 'fa-headphones',
  },
];

const Catg: React.FC<CatgProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'all' ? null : category);
  };

  return (
    <aside
      className="
        w-full
        rounded-2xl
        border border-black/[0.06]
        bg-white
        p-4
        shadow-[0_8px_30px_rgba(3,0,71,0.06)]
        md:sticky md:top-28
      "
      aria-label="Filtrar productos por categoría"
    >
      {/* Encabezado */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Explorar
          </p>

          <h2 className="mt-1 text-lg font-extrabold tracking-tight text-secondary">
            Categorías
          </h2>
        </div>

        <span
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
          aria-hidden="true"
        >
          <i className="fa-solid fa-sliders text-sm" />
        </span>
      </div>

      {/* Lista */}
      <div className="space-y-1.5">
        {categories.map((item) => {
          const isActive =
            item.category === 'all'
              ? selectedCategory === null
              : selectedCategory === item.category;

          return (
            <button
              key={item.category}
              type="button"
              onClick={() => handleCategoryChange(item.category)}
              aria-pressed={isActive}
              className={`
                group flex w-full items-center gap-3
                rounded-xl
                px-3 py-3
                text-left
                transition-all duration-200
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40

                ${
                  isActive
                    ? `
                      bg-primary
                      text-white
                      shadow-md
                      shadow-primary/20
                    `
                    : `
                      text-gray-600
                      hover:bg-primary/[0.05]
                      hover:text-secondary
                    `
                }
              `}
            >
              {/* Icono */}
              <span
                className={`
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  transition-all duration-200

                  ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : `
                        bg-gray-50
                        text-gray-400
                        group-hover:bg-primary/10
                        group-hover:text-primary
                      `
                  }
                `}
                aria-hidden="true"
              >
                <i className={`fa-solid ${item.icon} text-sm`} />
              </span>

              {/* Texto */}
              <span className="min-w-0 flex-1 truncate text-sm font-medium">
                {item.cateName}
              </span>

              {/* Indicador */}
              <span
                className={`
                  flex h-6 w-6 shrink-0
                  items-center justify-center
                  rounded-full
                  transition-all duration-200

                  ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : `
                        text-gray-300
                        opacity-0
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      `
                  }
                `}
                aria-hidden="true"
              >
                <i
                  className={`fa-solid ${
                    isActive
                      ? 'fa-check text-[9px]'
                      : 'fa-chevron-right text-[8px]'
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Indicador inferior */}
      <div className="mt-4 border-t border-black/[0.06] pt-4">
        <p className="flex items-center gap-2 text-[11px] text-gray-400">
          <i className="fa-solid fa-circle-info text-[10px] text-primary" />
          Seleccioná una categoría para filtrar.
        </p>
      </div>
    </aside>
  );
};

export default Catg;