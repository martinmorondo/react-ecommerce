import { useEffect } from 'react';
import Home from '../components/main/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import { TopCate } from '../components/top/TopCate';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { Shop } from '../components/shop/Shop';
import Announcement from '../components/announcements/Announcement';
import Wrapper from '../components/wrapper/Wrapper';
import { useProductStore } from '../store/productStore';
import PromoBanner from '../components/promo/PromoBanner';

const Pages = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const hasLoaded = useProductStore((state) => state.hasLoaded);
  const error = useProductStore((state) => state.error);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    if (!hasLoaded && !isLoading) {
      void fetchProducts();
    }
  }, [fetchProducts, hasLoaded, isLoading]);

  /* ---------------------------------- */
  /* Loading inicial */
  /* ---------------------------------- */

  if (isLoading && !hasLoaded) {
    return (
      <main
        className="
          flex min-h-[60vh]
          flex-col items-center justify-center
          bg-background
          px-4
          text-center
        "
        aria-live="polite"
        aria-busy="true"
      >
        <div
          className="
            h-12 w-12
            animate-spin
            rounded-full
            border-4
            border-gray-200
            border-t-primary
          "
          aria-hidden="true"
        />

        <h1 className="mt-5 text-lg font-bold text-secondary">
          Cargando catálogo...
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Estamos preparando los productos para vos.
        </p>
      </main>
    );
  }

  /* ---------------------------------- */
  /* Error */
  /* ---------------------------------- */

  if (error && !hasLoaded) {
    return (
      <main
        className="
          flex min-h-[60vh]
          flex-col items-center justify-center
          bg-background
          px-4
          text-center
        "
        role="alert"
      >
        <div
          className="
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            bg-red-50
            text-red-500
          "
          aria-hidden="true"
        >
          <i className="fa-solid fa-triangle-exclamation text-2xl" />
        </div>

        <h1 className="mt-5 text-xl font-extrabold text-secondary">
          No pudimos cargar la tienda
        </h1>

        <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
          {error}
        </p>

        <button
          type="button"
          onClick={() => void fetchProducts()}
          className="
            mt-6
            inline-flex items-center gap-2
            rounded-xl
            bg-primary
            px-5 py-3
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
          <i
            className="fa-solid fa-rotate-right text-xs"
            aria-hidden="true"
          />

          Reintentar
        </button>
      </main>
    );
  }

  /* ---------------------------------- */
  /* Página principal */
  /* ---------------------------------- */

  return (
    <main className="w-full bg-background">
      <Home />

      <FlashDeals
        productItems={products.flashDeals}
      />

      <TopCate
        topItems={products.topCategories}
      />

      <NewArrivals
        arrivalsItems={products.newArrivals}
      />

      <PromoBanner />

      <Shop
        shopItems={products.shopItems}
      />

      <Announcement />

      <Wrapper />
    </main>
  );
};

export default Pages;