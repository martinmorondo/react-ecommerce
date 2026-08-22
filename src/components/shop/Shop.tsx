import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Catg from './Catg';
import ShopCart from './ShopCart';
import { ShopItem } from './Sdata';

interface ShopProps {
  shopItems: ShopItem[];
}

export const Shop: React.FC<ShopProps> = ({ shopItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || null;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    urlCategory
  );

  const [sortBy, setSortBy] = useState<
    'default' | 'price-asc' | 'price-desc' | 'name'
  >('default');

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);

    const newParams = new URLSearchParams(searchParams);

    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }

    setSearchParams(newParams);
  };

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    let filtered = shopItems;

    if (normalizedQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(normalizedQuery)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    const sorted = [...filtered];

    switch (sortBy) {
      case 'price-asc':
        return sorted.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );

      case 'price-desc':
        return sorted.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );

      case 'name':
        return sorted.sort((a, b) =>
          a.name.localeCompare(b.name, 'es')
        );

      default:
        return sorted;
    }
  }, [shopItems, searchQuery, selectedCategory, sortBy]);

  return (
    <section
      aria-labelledby="shop-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          {/* Sidebar */}
          <div className="w-full lg:w-[250px] lg:shrink-0">
            <Catg
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
            />
          </div>

          {/* Contenido */}
          <div className="min-w-0 flex-1">

            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Nuestra colección
                </p>

                <h2
                  id="shop-title"
                  className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl"
                >
                  Tienda
                </h2>

                {searchQuery ? (
                  <p className="mt-1 text-sm text-gray-500">
                    Resultados para{' '}
                    <strong className="font-semibold text-secondary">
                      "{searchQuery}"
                    </strong>
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-gray-500">
                    {filteredItems.length}{' '}
                    {filteredItems.length === 1
                      ? 'producto disponible'
                      : 'productos disponibles'}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort-products"
                  className="hidden text-sm font-medium text-gray-500 sm:block"
                >
                  Ordenar:
                </label>

                <select
                  id="sort-products"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(
                      event.target.value as
                        | 'default'
                        | 'price-asc'
                        | 'price-desc'
                        | 'name'
                    )
                  }
                  className="
                    h-11 min-w-[170px]
                    rounded-xl
                    border border-black/10
                    bg-white
                    px-3
                    text-sm font-medium text-secondary
                    outline-none
                    transition-all duration-200
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                >
                  <option value="default">Más recientes</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="name">Nombre: A-Z</option>
                </select>
              </div>
            </div>

            {/* Filtros activos */}
            {(searchQuery || selectedCategory) && (
              <div className="mb-5 flex flex-wrap items-center gap-2">

                {searchQuery && (
                  <span className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-primary/10
                    bg-primary/5
                    px-3 py-1.5
                    text-xs font-medium
                    text-primary
                  ">
                    <i className="fa-solid fa-magnifying-glass text-[9px]" />
                    "{searchQuery}"

                    <button
                      type="button"
                      onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete('search');
                        setSearchParams(newParams);
                      }}
                      className="
                        ml-1
                        text-primary/60
                        transition-colors
                        hover:text-primary
                      "
                      aria-label="Quitar búsqueda"
                    >
                      <i className="fa-solid fa-xmark text-[9px]" />
                    </button>
                  </span>
                )}

                {selectedCategory && (
                  <span className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-primary/10
                    bg-primary/5
                    px-3 py-1.5
                    text-xs font-medium
                    text-primary
                  ">
                    <i className="fa-solid fa-filter text-[9px]" />
                    {selectedCategory}

                    <button
                      type="button"
                      onClick={() => handleCategoryChange(null)}
                      className="
                        ml-1
                        text-primary/60
                        transition-colors
                        hover:text-primary
                      "
                      aria-label="Quitar categoría"
                    >
                      <i className="fa-solid fa-xmark text-[9px]" />
                    </button>
                  </span>
                )}

              </div>
            )}

            {/* Productos */}
            {filteredItems.length > 0 ? (
              <ShopCart shopItems={filteredItems} />
            ) : (
              <div className="
                flex min-h-[360px]
                flex-col items-center justify-center
                rounded-2xl
                border border-dashed border-black/10
                bg-white/70
                px-6 text-center
              ">
                <div className="
                  mb-5 flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                ">
                  <i className="fa-solid fa-magnifying-glass text-2xl" />
                </div>

                <h3 className="text-lg font-bold text-secondary">
                  No encontramos productos
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  Probá con otro término de búsqueda o eliminá alguno de
                  los filtros activos.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchParams({});
                    setSelectedCategory(null);
                  }}
                  className="
                    mt-5 rounded-xl
                    bg-primary px-5 py-2.5
                    text-sm font-semibold text-white
                    shadow-lg shadow-primary/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                  "
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;