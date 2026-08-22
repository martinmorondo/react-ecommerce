import { create } from 'zustand';
import Data from '../components/Data';
import Sdata from '../components/shop/Sdata';
import Tdata from '../components/top/Tdata';
import Ndata from '../components/newArrivals/Ndata';
import { Product } from '../types';
import { TopItem } from '../components/top/Tdata';

interface CatalogProducts {
  flashDeals: Product[];
  shopItems: Product[];
  topCategories: TopItem[];
  newArrivals: Product[];
}

interface ProductState {
  products: CatalogProducts;
  isLoading: boolean;
  hasLoaded: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  refreshProducts: () => Promise<void>;
  clearProducts: () => void;
}

const initialProducts: CatalogProducts = {
  flashDeals: [],
  shopItems: [],
  topCategories: [],
  newArrivals: [],
};

export const useProductStore = create<ProductState>((set) => ({
  products: initialProducts,
  isLoading: false,
  hasLoaded: false,
  error: null,

  /* =====================================================
     CARGAR PRODUCTOS
     ===================================================== */

  fetchProducts: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      /*
       * Simulación temporal de una petición.
       * Cuando conectes una API real, reemplazá este bloque
       * por fetch / axios.
       */
      await new Promise((resolve) => setTimeout(resolve, 800));

      const products: CatalogProducts = {
        flashDeals: Data.productItems ?? [],
        shopItems: Sdata.shopItems ?? [],
        topCategories: Tdata.topItems ?? [],
        newArrivals: Ndata.arrivalsItems ?? [],
      };

      set({
        products,
        isLoading: false,
        hasLoaded: true,
        error: null,
      });
    } catch (_error) {
      set({
        isLoading: false,
        hasLoaded: false,
        error:
          'No pudimos cargar el catálogo. Intentá nuevamente.',
      });
    }
  },

  /* =====================================================
     ACTUALIZAR PRODUCTOS
     ===================================================== */

  refreshProducts: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      /*
       * Acá también iría la petición real a la API.
       */
      await new Promise((resolve) => setTimeout(resolve, 800));

      const products: CatalogProducts = {
        flashDeals: Data.productItems ?? [],
        shopItems: Sdata.shopItems ?? [],
        topCategories: Tdata.topItems ?? [],
        newArrivals: Ndata.arrivalsItems ?? [],
      };

      set({
        products,
        isLoading: false,
        hasLoaded: true,
        error: null,
      });
    } catch (_error) {
      set({
        isLoading: false,
        error:
          'No pudimos actualizar el catálogo.',
      });
    }
  },

  /* =====================================================
     LIMPIAR
     ===================================================== */

  clearProducts: () => {
    set({
      products: initialProducts,
      hasLoaded: false,
      error: null,
    });
  },
}));