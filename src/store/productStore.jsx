import { create } from 'zustand';
import Data from '../components/Data';
import Sdata from '../components/shop/Sdata';
import Tdata from '../components/top/Tdata';
import Ndata from '../components/newArrivals/Ndata';

export const useProductStore = create((set) => ({
  products: {
    flashDeals: [],
    shopItems: [],
    topCategories: [],
    newArrivals: []
  },
  isLoading: true, // Empieza en true porque asumimos que buscará datos al inicio
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      // Simulamos latencia de red (1.5 segundos)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      set({
        products: {
          flashDeals: Data.productItems,
          shopItems: Sdata.shopItems,
          topCategories: Tdata.topItems,
          newArrivals: Ndata.arrivalsItems,
        },
        isLoading: false,
      });
    } catch (error) {
      set({ error: 'Hubo un problema de conexión al cargar el catálogo.', isLoading: false });
    }
  },
}));