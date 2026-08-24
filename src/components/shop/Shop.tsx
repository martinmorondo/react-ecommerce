import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Catg from './Catg';
import ShopCart from './ShopCart';
import type { ShopItem } from './Sdata';

import {
  ALL_CATEGORY_VALUE,
  categories,
  getCategoryLabel,
} from '../../config/categories';

import type { CategoryId } from '../../config/categories';

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

/* =========================================================
   CATEGORY HELPERS
   ========================================================= */

const getValidCategory = (
  value: string | null
): CategoryId | null => {
  if (!value || value === ALL_CATEGORY_VALUE) {
    return null;
  }

  return categories.some(
    (category) => category.value === value
  )
    ? (value as CategoryId)
    : null;
};

/* =========================================================
   SHOP
   ========================================================= */

export const Shop = ({
  shopItems,
}: ShopProps) => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const searchQuery =
    searchParams.get('search') ?? '';

  const selectedCategory = getValidCategory(
    searchParams.get('category')
  );

  const [sortBy, setSortBy] =
    useState<SortOption>('default');

  /* =======================================================
     CATEGORY CHANGE
     ======================================================= */

  const handleCategoryChange = (
    category: CategoryId | null
  ) => {
    const params = new URLSearchParams(
      searchParams
    );

    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    setSearchParams(params);
  };

  /* =======================================================
     FILTER + SORT
     ======================================================= */

  const filteredItems = useMemo(() => {
    const query = normalizeText(searchQuery);

    let filtered = [...shopItems];

    /* -----------------------------------------------------
       SEARCH
       ----------------------------------------------------- */

    if (query) {
      const searchWords = query
        .split(/\s+/)
        .filter(Boolean);

      filtered = filtered.filter((item) => {
        const productName = normalizeText(
          item.name
        );

        return searchWords.every((word) =>
          productName.includes(word)
        );
      });
    }

    /* -----------------------------------------------------
       CATEGORY
       ----------------------------------------------------- */

    if (selectedCategory) {
      filtered = filtered.filter(
        (item) =>
          item.category === selectedCategory
      );
    }

    /* -----------------------------------------------------
       SORT
       ----------------------------------------------------- */

    switch (sortBy) {
      case 'price-asc':
        filtered.sort(
          (a, b) => a.price - b.price
        );
        break;

      case 'price-desc':
        filtered.sort(
          (a, b) => b.price - a.price
        );
        break;

      case 'name':
        filtered.sort((a, b) =>
          normalizeText(
            a.name
          ).localeCompare(
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

  /* =======================================================
     FILTER ACTIONS
     ======================================================= */

  const clearSearch = () => {
    const params = new URLSearchParams(
      searchParams
    );

    params.delete('search');

    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(selectedCategory);

  const activeFilterCount = [
    Boolean(searchQuery),
    Boolean(selectedCategory),
  ].filter(Boolean).length;

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <section
      aria-labelledby="shop-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-background
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80 w-80
          rounded-full
          bg-secondary/[0.025]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72 w-72
          rounded-full
          bg-primary/[0.035]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col gap-6
            lg:flex-row lg:items-start
          "
        >
          {/* =================================================
              CATEGORIES
              ================================================= */}

          <div className="w-full lg:w-[250px] lg:shrink-0">
            <Catg
              selectedCategory={
                selectedCategory
              }
              setSelectedCategory={
                handleCategoryChange
              }
            />
          </div>

          {/* =================================================
              CATALOG
              ================================================= */}

          <div className="min-w-0 flex-1">
            {/* =================================================
                HEADER
                ================================================= */}

            <header
              className="
                mb-6
                rounded-[1.5rem]
                border border-black/[0.045]
                bg-white
                p-5
                shadow-[0_5px_20px_rgba(3,0,71,0.035)]
                sm:p-6
              "
            >
              <div
                className="
                  flex flex-col gap-5
                  xl:flex-row
                  xl:items-end
                  xl:justify-between
                "
              >
                {/* Title */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
                      Nuestra colección
                    </p>

                    <span
                      className="
                        h-1 w-1
                        rounded-full
                        bg-primary/40
                      "
                      aria-hidden="true"
                    />

                    <span className="text-[10px] font-semibold text-gray-400">
                      Explorá y elegí
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-end gap-3">
                    <h1
                      id="shop-title"
                      className="
                        text-2xl
                        font-extrabold
                        tracking-tight
                        text-secondary
                        sm:text-3xl
                      "
                    >
                      Tienda
                    </h1>

                    <span
                      className="
                        mb-0.5
                        inline-flex
                        items-center
                        rounded-full
                        bg-background
                        px-2.5 py-1
                        text-[10px]
                        font-bold
                        text-secondary
                      "
                    >
                      {filteredItems.length}{' '}
                      {filteredItems.length === 1
                        ? 'producto'
                        : 'productos'}
                    </span>
                  </div>

                  {searchQuery ? (
                    <p className="mt-2 text-sm text-gray-500">
                      Resultados para{' '}
                      <strong className="font-bold text-secondary">
                        "{searchQuery}"
                      </strong>
                    </p>
                  ) : selectedCategory ? (
                    <p className="mt-2 text-sm text-gray-500">
                      Mostrando productos de la categoría{' '}
                      <strong className="font-bold text-secondary">
                        {getCategoryLabel(
                          selectedCategory
                        )}
                      </strong>
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      Encontrá productos seleccionados para tu
                      día a día.
                    </p>
                  )}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sort-products"
                    className="
                      hidden
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-400
                      sm:block
                    "
                  >
                    Ordenar
                  </label>

                  <div
                    className="
                      relative
                      flex h-11
                      min-w-[190px]
                      items-center
                      rounded-xl
                      border border-black/[0.07]
                      bg-background
                      transition-colors duration-200
                      focus-within:border-primary/30
                      focus-within:bg-white
                    "
                  >
                    <i
                      className="
                        fa-solid fa-arrow-down-wide-short
                        ml-3
                        text-[10px]
                        text-primary
                      "
                      aria-hidden="true"
                    />

                    <select
                      id="sort-products"
                      value={sortBy}
                      onChange={(event) =>
                        setSortBy(
                          event.target.value as SortOption
                        )
                      }
                      className="
                        h-full
                        flex-1
                        cursor-pointer
                        border-0
                        bg-transparent
                        px-2
                        pr-3
                        text-xs
                        font-bold
                        text-secondary
                        outline-none
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
                </div>
              </div>

              {/* =================================================
                  ACTIVE FILTERS
                  ================================================= */}

              {hasActiveFilters && (
                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    border-t
                    border-black/[0.06]
                    pt-4
                  "
                >
                  <div
                    className="
                      mr-1
                      flex items-center gap-2
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    <i
                      className="fa-solid fa-filter text-[9px] text-primary"
                      aria-hidden="true"
                    />

                    Filtros
                  </div>

                  {searchQuery && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border border-primary/10
                        bg-primary/[0.06]
                        px-3 py-1.5
                        text-[10px]
                        font-bold
                        text-primary
                      "
                    >
                      <i
                        className="fa-solid fa-magnifying-glass text-[8px]"
                        aria-hidden="true"
                      />

                      "{searchQuery}"

                      <button
                        type="button"
                        onClick={clearSearch}
                        aria-label="Quitar búsqueda"
                        className="
                          flex h-4 w-4
                          items-center justify-center
                          rounded-full
                          text-primary/60
                          transition-colors
                          hover:bg-primary/10
                          hover:text-primary
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-primary/30
                        "
                      >
                        <i
                          className="fa-solid fa-xmark text-[8px]"
                          aria-hidden="true"
                        />
                      </button>
                    </span>
                  )}

                  {selectedCategory && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border border-secondary/10
                        bg-secondary/[0.05]
                        px-3 py-1.5
                        text-[10px]
                        font-bold
                        text-secondary
                      "
                    >
                      <i
                        className="fa-solid fa-tag text-[8px] text-primary"
                        aria-hidden="true"
                      />

                      {getCategoryLabel(
                        selectedCategory
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          handleCategoryChange(null)
                        }
                        aria-label="Quitar categoría"
                        className="
                          flex h-4 w-4
                          items-center justify-center
                          rounded-full
                          text-secondary/50
                          transition-colors
                          hover:bg-secondary/10
                          hover:text-secondary
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-primary/30
                        "
                      >
                        <i
                          className="fa-solid fa-xmark text-[8px]"
                          aria-hidden="true"
                        />
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="
                      ml-auto
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      px-2 py-1.5
                      text-[10px]
                      font-bold
                      text-gray-400
                      transition-all duration-200
                      hover:bg-primary/[0.05]
                      hover:text-primary
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-primary/30
                    "
                  >
                    Limpiar
                    <i
                      className="fa-solid fa-rotate-left text-[8px]"
                      aria-hidden="true"
                    />
                  </button>

                  <span
                    className="
                      hidden
                      rounded-full
                      bg-gray-100
                      px-2
                      py-1
                      text-[9px]
                      font-bold
                      text-gray-400
                      sm:inline-flex
                    "
                  >
                    {activeFilterCount}{' '}
                    {activeFilterCount === 1
                      ? 'filtro'
                      : 'filtros'}
                  </span>
                </div>
              )}
            </header>

            {/* =================================================
                PRODUCTS
                ================================================= */}

            {filteredItems.length > 0 ? (
              <ShopCart
                shopItems={filteredItems}
              />
            ) : (
              <div
                className="
                  flex min-h-[390px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[1.5rem]
                  border border-dashed border-black/10
                  bg-white/70
                  px-6
                  py-12
                  text-center
                "
                role="status"
              >
                <div
                  className="
                    relative
                    mb-5
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-primary/[0.08]
                    text-primary
                  "
                  aria-hidden="true"
                >
                  <span
                    className="
                      absolute
                      inset-2
                      rounded-xl
                      border
                      border-primary/10
                    "
                  />

                  <i className="fa-solid fa-magnifying-glass relative z-10 text-xl" />
                </div>

                <h2 className="text-lg font-extrabold text-secondary">
                  No encontramos productos
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  No encontramos productos que coincidan
                  con los filtros actuales. Probá con otra
                  búsqueda o explorá toda la colección.
                </p>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-5 py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_24px_rgba(233,69,96,0.20)]
                    transition-all duration-200

                    hover:-translate-y-0.5
                    hover:bg-primary-dark
                    hover:shadow-[0_14px_28px_rgba(233,69,96,0.26)]

                    active:scale-[0.98]

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary/40
                    focus-visible:ring-offset-2
                  "
                >
                  Ver todos los productos

                  <i
                    className="fa-solid fa-arrow-right text-[10px]"
                    aria-hidden="true"
                  />
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