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
import logo from '../../assets/img/phone-logo.png';

const categories = [
  { label: 'Todas', value: 'all' },
  { label: 'Phones', value: 'phone' },
  { label: 'PlayStation', value: 'playstation' },
  { label: 'Xbox', value: 'xbox' },
  { label: 'Watch', value: 'watch' },
  { label: 'Glasses', value: 'glasses' },
  { label: 'Headphones', value: 'headphones' },
] as const;

const Search = () => {
  const getTotalItems = useCartStore(
    (state) => state.getTotalItems
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlSearchQuery = searchParams.get('search') ?? '';
  const urlCategory =
    searchParams.get('category') ?? 'all';

  const [searchValue, setSearchValue] =
    useState(urlSearchQuery);

  const [isSearchFocused, setIsSearchFocused] =
    useState(false);

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  const totalCartItems = getTotalItems();

  /*
   * Mantiene el input sincronizado con la URL.
   * Esto permite que /shop?search=iphone
   * también muestre "iphone" en el buscador.
   */
  useEffect(() => {
    setSearchValue(urlSearchQuery);
  }, [urlSearchQuery]);

  /*
   * Atajos de teclado globales.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable;

      if (event.key === '/' && !isTyping) {
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

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query = searchValue.trim();

    /*
     * Si no hay búsqueda ni categoría,
     * volvemos simplemente a la tienda.
     */
    if (!query && urlCategory === 'all') {
      navigate('/shop');
      searchInputRef.current?.blur();
      setIsSearchFocused(false);
      return;
    }

    const params = new URLSearchParams();

    if (query) {
      params.set('search', query);
    }

    if (urlCategory !== 'all') {
      params.set('category', urlCategory);
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

  const handleCategoryChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;

    const params = new URLSearchParams();

    const query = searchValue.trim();

    if (query) {
      params.set('search', query);
    }

    if (category !== 'all') {
      params.set('category', category);
    }

    const queryString = params.toString();

    navigate(
      queryString
        ? `/shop?${queryString}`
        : '/shop'
    );
  };

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
        py-4
        sm:py-5
      "
    >
      <div
        className="
          mx-auto
          flex max-w-7xl items-center gap-3
          px-4
          sm:gap-4 sm:px-6
          lg:gap-6 lg:px-8
        "
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="Store - Inicio"
          className="
            group
            flex shrink-0 items-center gap-2.5
            rounded-lg
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/40
          "
        >
          <span
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              bg-background
              transition-all duration-300
              group-hover:bg-primary/10
            "
          >
            <img
              src={logo}
              alt="Store"
              className="
                h-8 w-8
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </span>

          <span
            className="
              hidden
              text-2xl font-black
              tracking-[-0.04em]
              text-secondary
              md:block
            "
          >
            Store<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="min-w-0 flex-1"
          role="search"
        >
          <div
            className={`
              flex h-12 items-center
              overflow-hidden
              rounded-2xl
              border
              bg-background
              transition-all duration-300

              ${
                isSearchFocused
                  ? 'border-primary/50 bg-white shadow-[0_0_0_4px_rgba(233,69,96,0.08)]'
                  : 'border-black/10'
              }
            `}
          >
            {/* Search icon */}
            <span
              className="
                flex h-full shrink-0
                items-center pl-4
                text-gray-400
              "
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
                setSearchValue(event.target.value)
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
                h-full min-w-0 flex-1
                border-0
                bg-transparent
                px-3
                text-sm text-secondary
                outline-none
                ring-0
                placeholder:text-gray-400
                focus:border-0
                focus:outline-none
                focus:ring-0
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
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  text-gray-400
                  transition-all duration-200
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
                  mr-2 hidden
                  rounded-md
                  border border-black/10
                  bg-white
                  px-2 py-1
                  text-[9px] font-semibold
                  text-gray-400
                  sm:inline-flex
                "
                aria-hidden="true"
              >
                /
              </span>
            )}

            {/* Category */}
            <div className="hidden h-full lg:flex">
              <label
                htmlFor="search-category"
                className="sr-only"
              >
                Seleccionar categoría
              </label>

              <select
                id="search-category"
                value={urlCategory}
                onChange={handleCategoryChange}
                className="
                  h-full
                  border-l border-black/10
                  bg-white
                  px-4
                  text-xs font-semibold
                  text-secondary
                  outline-none
                  focus:outline-none
                  focus:ring-0
                "
              >
                {categories.map((category) => (
                  <option
                    key={category.value}
                    value={category.value}
                  >
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search button */}
            <button
              type="submit"
              aria-label="Buscar productos"
              className="
                mr-1
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-primary
                text-white
                shadow-md
                shadow-primary/20
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#d93652]
                hover:shadow-primary/30
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

        {/* Actions */}
        <div
          className="
            flex shrink-0
            items-center
            gap-2
            sm:gap-3
          "
        >
          {/* Usuario */}
          <div
            className="
              hidden h-11 w-11
              items-center justify-center
              rounded-xl
              border border-black/[0.06]
              bg-background
              text-secondary
              md:flex
            "
            aria-label="Perfil de usuario"
          >
            <i
              className="fa-solid fa-user text-sm"
              aria-hidden="true"
            />
          </div>

          {/* Carrito */}
          <Link
            to="/cart"
            aria-label={`Ir al carrito. ${totalCartItems} ${
              totalCartItems === 1
                ? 'producto'
                : 'productos'
            }`}
            className="
              group relative
              rounded-xl
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
            "
          >
            <span
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                border border-black/[0.06]
                bg-background
                text-secondary
                transition-all duration-300
                group-hover:border-primary/20
                group-hover:bg-primary/10
                group-hover:text-primary
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
                  absolute -right-1.5 -top-1.5
                  flex h-5 min-w-5
                  items-center justify-center
                  rounded-full
                  bg-primary
                  px-1.5
                  text-[10px] font-bold
                  text-white
                  shadow-md
                  shadow-primary/20
                  ring-2 ring-white
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