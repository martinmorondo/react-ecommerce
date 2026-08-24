import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Catg from './Catg';
import ShopCart from './ShopCart';
import { ShopItem } from './Sdata';

interface ShopProps {
  shopItems: ShopItem[];
}

type SortOption =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'name';

const normalizeText = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
};

export const Shop = ({ shopItems }: ShopProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') ?? '';
  const selectedCategory =
    searchParams.get('category') ?? null;

  const [sortBy, setSortBy] = useState<SortOption>('default');

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    setSearchParams(params);
  };

  const filteredItems = useMemo(() => {
    const query = normalizeText(searchQuery);

    let filtered = [...shopItems];

    // ==============================
    // SEARCH
    // ==============================

    if (query) {
      const searchWords = query
        .split(/\s+/)
        .filter(Boolean);

      filtered = filtered.filter((item) => {
        const productName = normalizeText(item.name);

        return searchWords.every((word) =>
          productName.includes(word)
        );
      });
    }

    // ==============================
    // CATEGORY
    // ==============================

    if (selectedCategory) {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    // ==============================
    // SORT
    // ==============================

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;

      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;

      case 'name':
        filtered.sort((a, b) =>
          normalizeText(a.name).localeCompare(
            normalizeText(b.name),
            'es'
          )
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [
    shopItems,
    searchQuery,
    selectedCategory,
    sortBy,
  ]);

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('search');

    setSearchParams(params);
  };

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('search');
    params.delete('category');

    setSearchParams(params);
  };

  return (
    <section
      aria-labelledby="shop-title"
      className="w-full bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Categories */}
          <aside className="w-full lg:w-[250px] lg:shrink-0">
            <Catg
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
            />
          </aside>

          {/* Products */}
          <div className="min-w-0 flex-1">
            {/* Header */}
            <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Nuestra colección
                </p>

                <h1
                  id="shop-title"
                  className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl"
                >
                  Tienda
                </h1>

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

              {/* Sort */}
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
                      event.target.value as SortOption
                    )
                  }
                  className="
                    h-11 min-w-[175px]
                    rounded-xl
                    border border-black/10
                    bg-white
                    px-3
                    text-sm font-medium text-secondary
                    outline-none
                    transition-colors
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                >
                  <option value="default">
                    Más recientes
                  </option>

                  <option value="price-asc">
                    Precio: menor a mayor
                  </option>

                  <option value="price-desc">
                    Precio: mayor a menor
                  </option>

                  <option value="name">
                    Nombre: A-Z
                  </option>
                </select>
              </div>
            </header>

            {/* Active filters */}
            {(searchQuery || selectedCategory) && (
              <div
                className="mb-5 flex flex-wrap items-center gap-2"
                aria-label="Filtros activos"
              >
                {searchQuery && (
                  <span
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-primary/10
                      bg-primary/5
                      px-3 py-1.5
                      text-xs font-medium
                      text-primary
                    "
                  >
                    <i
                      className="fa-solid fa-magnifying-glass text-[9px]"
                      aria-hidden="true"
                    />

                    "{searchQuery}"

                    <button
                      type="button"
                      onClick={clearSearch}
                      aria-label="Quitar búsqueda"
                      className="
                        ml-1 text-primary/60
                        transition-colors
                        hover:text-primary
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary/30
                      "
                    >
                      <i
                        className="fa-solid fa-xmark text-[9px]"
                        aria-hidden="true"
                      />
                    </button>
                  </span>
                )}

                {selectedCategory && (
                  <span
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-primary/10
                      bg-primary/5
                      px-3 py-1.5
                      text-xs font-medium
                      text-primary
                    "
                  >
                    <i
                      className="fa-solid fa-filter text-[9px]"
                      aria-hidden="true"
                    />

                    {selectedCategory}

                    <button
                      type="button"
                      onClick={() =>
                        handleCategoryChange(null)
                      }
                      aria-label="Quitar categoría"
                      className="
                        ml-1 text-primary/60
                        transition-colors
                        hover:text-primary
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary/30
                      "
                    >
                      <i
                        className="fa-solid fa-xmark text-[9px]"
                        aria-hidden="true"
                      />
                    </button>
                  </span>
                )}

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="
                    text-xs font-semibold
                    text-gray-400
                    transition-colors
                    hover:text-primary
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/30
                    focus-visible:ring-offset-2
                    rounded-sm
                  "
                >
                  Limpiar todo
                </button>
              </div>
            )}

            {/* Products */}
            {filteredItems.length > 0 ? (
              <ShopCart shopItems={filteredItems} />
            ) : (
              <div
                className="
                  flex min-h-[360px]
                  flex-col items-center justify-center
                  rounded-2xl
                  border border-dashed border-black/10
                  bg-white/70
                  px-6
                  text-center
                "
                role="status"
              >
                <div
                  className="
                    mb-5 flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-magnifying-glass text-2xl" />
                </div>

                <h2 className="text-lg font-bold text-secondary">
                  No encontramos productos
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  No encontramos productos que coincidan con
                  tu búsqueda. Probá utilizando otras palabras.
                </p>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="
                    mt-5 rounded-xl
                    bg-primary
                    px-5 py-2.5
                    text-sm font-semibold
                    text-white
                    shadow-lg shadow-primary/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/40
                    focus-visible:ring-offset-2
                  "
                >
                  Ver todos los productos
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