import { useEffect, useRef, useState } from 'react';
import type {
  ChangeEvent,
  FormEvent,
} from 'react';
import {
  Link,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { useCartStore } from '../../store/cartStore';
import { siteConfig } from '../../config/site';
import {
  ALL_CATEGORY_VALUE,
  categories,
} from '../../config/categories';

const Search = () => {
  const getTotalItems = useCartStore(
    (state) => state.getTotalItems
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlSearchQuery =
    searchParams.get('search') ?? '';

  const rawCategory =
    searchParams.get('category') ??
    ALL_CATEGORY_VALUE;

  /*
   * Nos aseguramos de que la categoría de la URL
   * exista realmente en nuestra configuración central.
   */
  const isValidCategory =
    rawCategory === ALL_CATEGORY_VALUE ||
    categories.some(
      (category) => category.value === rawCategory
    );

  const urlCategory = isValidCategory
    ? rawCategory
    : ALL_CATEGORY_VALUE;

  const [searchValue, setSearchValue] =
    useState(urlSearchQuery);

  const [isSearchFocused, setIsSearchFocused] =
    useState(false);

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  const totalCartItems = getTotalItems();

  /* =====================================================
     SYNC URL → INPUT
     ===================================================== */

  useEffect(() => {
    setSearchValue(urlSearchQuery);
  }, [urlSearchQuery]);

  /* =====================================================
     KEYBOARD SHORTCUTS
     ===================================================== */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const target =
        event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable;

      if (
        event.key === '/' &&
        !isTyping
      ) {
        event.preventDefault();

        searchInputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        searchInputRef.current?.blur();

        setIsSearchFocused(false);
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  /* =====================================================
     SUBMIT SEARCH
     ===================================================== */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query = searchValue.trim();

    /*
     * Sin búsqueda ni categoría:
     * volvemos simplemente al catálogo.
     */
    if (
      !query &&
      urlCategory === ALL_CATEGORY_VALUE
    ) {
      navigate('/shop');

      searchInputRef.current?.blur();
      setIsSearchFocused(false);

      return;
    }

    const params = new URLSearchParams();

    if (query) {
      params.set('search', query);
    }

    if (
      urlCategory !== ALL_CATEGORY_VALUE
    ) {
      params.set(
        'category',
        urlCategory
      );
    }

    const queryString = params.toString();

    navigate(
      queryString
        ? `/shop?${queryString}`
        : '/shop'
    );

    searchInputRef.current?.blur();
    setIsSearchFocused(false);
  };

  /* =====================================================
     CATEGORY CHANGE
     ===================================================== */

  const handleCategoryChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;

    const params = new URLSearchParams();

    const query = searchValue.trim();

    /*
     * Conservamos la búsqueda mientras
     * cambiamos de categoría.
     */
    if (query) {
      params.set('search', query);
    }

    if (
      category !== ALL_CATEGORY_VALUE
    ) {
      params.set(
        'category',
        category
      );
    }

    const queryString = params.toString();

    navigate(
      queryString
        ? `/shop?${queryString}`
        : '/shop'
    );
  };

  /* =====================================================
     CLEAR SEARCH
     ===================================================== */

  const clearSearch = () => {
    setSearchValue('');

    searchInputRef.current?.focus();
  };

  return (
    <section
      aria-label="Búsqueda y navegación"
      className="
        relative
        w-full
        border-b border-black/[0.06]
        bg-white
      "
    >
      {/* Bottom accent */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-primary/15
          to-transparent
        "
        aria-hidden="true"
      />

      <div
        className="
          relative
          mx-auto
          flex max-w-7xl
          items-center
          gap-3
          px-4 py-3.5

          sm:gap-4
          sm:px-6
          sm:py-4

          lg:gap-6
          lg:px-8
        "
      >
        {/* ===================================================
            LOGO
            =================================================== */}

        <Link
          to="/"
          aria-label={`${siteConfig.name} - Inicio`}
          className="
            group
            shrink-0
            rounded-2xl
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/40
            focus-visible:ring-offset-2
          "
        >
          <span
            className="
              flex
              items-center
              gap-2.5
              rounded-2xl
              border
              border-black/[0.05]
              bg-background
              px-2.5 py-2
              shadow-[0_4px_16px_rgba(3,0,71,0.04)]
              transition-all
              duration-300

              group-hover:border-primary/15
              group-hover:bg-primary/[0.04]
              group-hover:shadow-[0_8px_22px_rgba(3,0,71,0.07)]
            "
          >
            <span
              className="
                flex
                h-9 w-9
                items-center
                justify-center
                rounded-xl
                bg-white
                shadow-sm
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <img
                src="/img/logo/phone-logo.png"
                alt={siteConfig.name}
                className="
                  h-7 w-7
                  object-contain
                "
              />
            </span>

            <span
              className="
                hidden
                text-xl
                font-black
                tracking-[-0.045em]
                text-secondary
                md:block
              "
            >
              {siteConfig.name}
              <span className="text-primary">
                .
              </span>
            </span>
          </span>
        </Link>

        {/* ===================================================
            SEARCH
            =================================================== */}

        <form
          onSubmit={handleSubmit}
          className="min-w-0 flex-1"
          role="search"
        >
          <div
            className={`
              group/search
              flex
              min-h-12
              items-center
              overflow-hidden
              rounded-2xl
              border
              bg-background
              transition-all
              duration-300

              ${
                isSearchFocused
                  ? `
                    border-primary/40
                    bg-white
                    shadow-[0_0_0_4px_rgba(233,69,96,0.07),0_8px_25px_rgba(3,0,71,0.06)]
                  `
                  : `
                    border-black/[0.07]
                    shadow-[0_3px_14px_rgba(3,0,71,0.025)]
                    hover:border-black/10
                    hover:bg-white
                  `
              }
            `}
          >
            {/* Search icon */}
            <span
              className={`
                flex
                h-full
                shrink-0
                items-center
                pl-4
                transition-colors
                duration-300

                ${
                  isSearchFocused
                    ? 'text-primary'
                    : 'text-gray-400 group-hover/search:text-gray-500'
                }
              `}
              aria-hidden="true"
            >
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </span>

            {/* Input */}
            <input
              ref={searchInputRef}
              type="search"
              value={searchValue}
              onChange={(event) =>
                setSearchValue(
                  event.target.value
                )
              }
              onFocus={() =>
                setIsSearchFocused(true)
              }
              onBlur={() =>
                setIsSearchFocused(false)
              }
              placeholder="¿Qué estás buscando?"
              autoComplete="off"
              spellCheck={false}
              aria-label="Buscar productos"
              className="
                search-input
                h-12
                min-w-0
                flex-1
                border-0
                bg-transparent
                px-3
                text-sm
                font-medium
                text-secondary
                outline-none
                placeholder:text-gray-400
                sm:text-[15px]
              "
            />

            {/* Clear */}
            {searchValue && (
              <button
                type="button"
                onMouseDown={(event) =>
                  event.preventDefault()
                }
                onClick={clearSearch}
                aria-label="Limpiar búsqueda"
                className="
                  mr-1
                  flex
                  h-9 w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  text-gray-400
                  transition-all
                  duration-200

                  hover:bg-gray-100
                  hover:text-secondary

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                "
              >
                <i
                  className="fa-solid fa-xmark text-xs"
                  aria-hidden="true"
                />
              </button>
            )}

            {/* Keyboard shortcut */}
            {!searchValue && (
              <span
                className="
                  mr-2
                  hidden
                  items-center
                  gap-1
                  rounded-lg
                  border
                  border-black/[0.07]
                  bg-white
                  px-2 py-1
                  text-[9px]
                  font-bold
                  text-gray-400
                  shadow-sm
                  sm:inline-flex
                "
                aria-hidden="true"
              >
                <span>Presioná</span>

                <kbd className="font-black text-secondary">
                  /
                </kbd>
              </span>
            )}

            {/* Category */}
            <div
              className="
                hidden
                h-full
                items-center
                lg:flex
              "
            >
              <label
                htmlFor="search-category"
                className="sr-only"
              >
                Seleccionar categoría
              </label>

              <div
                className="
                  flex
                  h-8
                  items-center
                  border-l
                  border-black/[0.07]
                  pl-3
                "
              >
                <select
                  id="search-category"
                  value={urlCategory}
                  onChange={handleCategoryChange}
                  className="
                    h-full
                    cursor-pointer
                    border-0
                    bg-transparent
                    px-3
                    text-xs
                    font-bold
                    text-secondary
                    outline-none
                    focus:outline-none
                  "
                >
                  <option
                    value={
                      ALL_CATEGORY_VALUE
                    }
                  >
                    Todas
                  </option>

                  {categories.map(
                    (category) => (
                      <option
                        key={category.value}
                        value={category.value}
                      >
                        {category.label}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* Search button */}
            <button
              type="submit"
              aria-label="Buscar productos"
              className="
                mr-1
                flex
                h-10 w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-white
                shadow-[0_6px_16px_rgba(233,69,96,0.22)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-primary-dark
                hover:shadow-[0_9px_20px_rgba(233,69,96,0.28)]

                active:translate-y-0
                active:scale-95

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40
                focus-visible:ring-offset-2
              "
            >
              <i
                className="fa-solid fa-magnifying-glass text-xs"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>

        {/* ===================================================
            ACTIONS
            =================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
            sm:gap-3
          "
        >
          {/* User */}
          <div
            className="
              hidden
              h-11 w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-black/[0.06]
              bg-background
              text-secondary
              shadow-sm
              transition-all
              duration-300
              md:flex
            "
            aria-label="Perfil de usuario"
          >
            <i
              className="fa-solid fa-user text-sm"
              aria-hidden="true"
            />
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label={`Ir al carrito. ${totalCartItems} ${
              totalCartItems === 1
                ? 'producto'
                : 'productos'
            }`}
            className="
              group
              relative
              rounded-2xl
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
            "
          >
            <span
              className="
                flex
                h-11 w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-black/[0.06]
                bg-background
                text-secondary
                shadow-sm
                transition-all
                duration-300

                group-hover:border-primary/20
                group-hover:bg-primary/[0.06]
                group-hover:text-primary
                group-hover:shadow-[0_8px_20px_rgba(3,0,71,0.07)]
              "
            >
              <i
                className="fa-solid fa-cart-shopping text-sm"
                aria-hidden="true"
              />
            </span>

            {totalCartItems > 0 && (
              <span
                className="
                  absolute
                  -right-1.5
                  -top-1.5
                  flex
                  h-5 min-w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-1.5
                  text-[10px]
                  font-extrabold
                  text-white
                  shadow-[0_4px_10px_rgba(233,69,96,0.25)]
                  ring-2 ring-white
                  transition-transform
                  duration-200

                  group-hover:scale-110
                "
                aria-hidden="true"
              >
                {totalCartItems > 99
                  ? '99+'
                  : totalCartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Search;