import { create } from 'zustand';

import Data from '../components/Data';
import Sdata from '../components/shop/Sdata';
import Tdata from '../components/top/Tdata';

import type { TopItem } from '../components/top/Tdata';
import type { ShopItem } from '../components/shop/Sdata';

import Ndata from '../components/newArrivals/Ndata';

import type { Product } from '../types';

interface CatalogProducts {
  flashDeals: Product[];
  shopItems: ShopItem[];
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

const buildCatalog = (): CatalogProducts => ({
  flashDeals: Data.productItems,
  shopItems: Sdata.shopItems,
  topCategories: Tdata.topItems,
  newArrivals: Ndata.arrivalsItems,
});

const simulateRequest = async (): Promise<CatalogProducts> => {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 800);
  });

  return buildCatalog();
};

export const useProductStore = create<ProductState>((set) => ({
  products: initialProducts,

  isLoading: false,
  hasLoaded: false,
  error: null,

  // ==============================
  // LOAD PRODUCTS
  // ==============================

  fetchProducts: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      const products = await simulateRequest();

      set({
        products,
        isLoading: false,
        hasLoaded: true,
        error: null,
      });
    } catch {
      set({
        isLoading: false,
        hasLoaded: false,
        error:
          'No pudimos cargar el catálogo. Intentá nuevamente.',
      });
    }
  },

  // ==============================
  // REFRESH PRODUCTS
  // ==============================

  refreshProducts: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      const products = await simulateRequest();

      set({
        products,
        isLoading: false,
        hasLoaded: true,
        error: null,
      });
    } catch {
      set({
        isLoading: false,
        error: 'No pudimos actualizar el catálogo.',
      });
    }
  },

  // ==============================
  // CLEAR
  // ==============================

  clearProducts: () => {
    set({
      products: initialProducts,
      hasLoaded: false,
      error: null,
    });
  },
}));