import { create } from 'zustand';
import Data from '../components/Data';
import Sdata from '../components/shop/Sdata';
import Tdata from '../components/top/Tdata';
import Ndata from '../components/newArrivals/Ndata';

export const useProductStore = create((set) => ({
  // Estados iniciales
  products: {
    productItems: [],
    shopItems: [],
    topItems: [],
    arrivalsItems: []
  },
  isLoading: true, // Empieza cargando
  error: null,

  // Acción para simular el fetch a una API
  fetchProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      // Simulamos la latencia de una red (1.5 segundos)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulamos que la respuesta del backend fue exitosa
      set({
        products: {
          productItems: Data.productItems,
          shopItems: Sdata.shopItems,
          topItems: Tdata.topItems,
          arrivalsItems: Ndata.arrivalsItems,
        },
        isLoading: false,
      });
    } catch (error) {
      set({ error: 'Hubo un error al cargar los productos', isLoading: false });
    }
  },
}));