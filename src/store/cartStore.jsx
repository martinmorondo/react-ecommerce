import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  // Estado inicial
  cartItem: [],

  // Acciones (Lógica de negocio)
  addToCart: (product) => {
    const currentCart = get().cartItem;
    const productExist = currentCart.find((item) => item.id === product.id);

    if (productExist) {
      set({
        cartItem: currentCart.map((item) =>
          item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item
        ),
      });
    } else {
      set({ cartItem: [...currentCart, { ...product, qty: 1 }] });
    }
  },

  decreaseQty: (product) => {
    const currentCart = get().cartItem;
    const productExist = currentCart.find((item) => item.id === product.id);

    if (productExist.qty === 1) {
      set({ cartItem: currentCart.filter((item) => item.id !== product.id) });
    } else {
      set({
        cartItem: currentCart.map((item) =>
          item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
        ),
      });
    }
  },

  removeFromCart: (product) => {
    set({ cartItem: get().cartItem.filter((item) => item.id !== product.id) });
  }
}));