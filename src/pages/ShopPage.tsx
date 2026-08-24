import { useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import { Shop } from '../components/shop/Shop';

const ShopPage = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore(
    (state) => state.isLoading
  );
  const error = useProductStore((state) => state.error);
  const hasLoaded = useProductStore(
    (state) => state.hasLoaded
  );
  const fetchProducts = useProductStore(
    (state) => state.fetchProducts
  );

  useEffect(() => {
    if (!hasLoaded && !isLoading) {
      void fetchProducts();
    }
  }, [hasLoaded, isLoading, fetchProducts]);

  /* ---------------------------------- */
  /* Loading inicial */
  /* ---------------------------------- */

  if (isLoading && !hasLoaded) {
    return (
      <main
        className="
          flex min-h-[60vh]
          items-center justify-center
          bg-background
          px-4
        "
        aria-live="polite"
        aria-busy="true"
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              h-10 w-10
              animate-spin
              rounded-full
              border-4
              border-gray-200
              border-t-primary
            "
            aria-hidden="true"
          />

          <p className="mt-4 text-sm font-medium text-gray-500">
            Cargando productos...
          </p>
        </div>
      </main>
    );
  }

  /* ---------------------------------- */
  /* Error inicial */
  /* ---------------------------------- */

  if (error && !hasLoaded) {
    return (
      <main
        className="
          flex min-h-[60vh]
          items-center justify-center
          bg-background
          px-4
        "
        role="alert"
      >
        <div className="text-center">
          <i
            className="fa-solid fa-triangle-exclamation text-4xl text-red-500"
            aria-hidden="true"
          />

          <h1 className="mt-4 text-xl font-bold text-secondary">
            No pudimos cargar la tienda
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {error}
          </p>

          <button
            type="button"
            onClick={() => void fetchProducts()}
            className="
              mt-5
              rounded-xl
              bg-primary
              px-5 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg shadow-primary/20
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-primary/30
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              focus-visible:ring-offset-2
            "
          >
            Reintentar
          </button>
        </div>
      </main>
    );
  }

  return <Shop shopItems={products.shopItems} />;
};

export default ShopPage;