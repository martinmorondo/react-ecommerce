import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartState {
  cartItem: CartItem[];
  wishlist: Product[];

  addToCart: (product: Product) => void;
  decreaseQty: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;

  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  clearWishlist: () => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const STORAGE_KEY = 'ecommerce-cart-storage';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItem: [],
      wishlist: [],

      // ==============================
      // CART
      // ==============================

      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cartItem.find(
            (item) => item.id === product.id
          );

          if (!existingItem) {
            return {
              cartItem: [
                ...state.cartItem,
                {
                  ...product,
                  qty: 1,
                },
              ],
            };
          }

          return {
            cartItem: state.cartItem.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                  }
                : item
            ),
          };
        });
      },

      decreaseQty: (product) => {
        set((state) => {
          const existingItem = state.cartItem.find(
            (item) => item.id === product.id
          );

          if (!existingItem) {
            return state;
          }

          if (existingItem.qty <= 1) {
            return {
              cartItem: state.cartItem.filter(
                (item) => item.id !== product.id
              ),
            };
          }

          return {
            cartItem: state.cartItem.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    qty: item.qty - 1,
                  }
                : item
            ),
          };
        });
      },

      removeFromCart: (product) => {
        set((state) => ({
          cartItem: state.cartItem.filter(
            (item) => item.id !== product.id
          ),
        }));
      },

      clearCart: () => {
        set({
          cartItem: [],
        });
      },

      // ==============================
      // WISHLIST
      // ==============================

      toggleWishlist: (product) => {
        set((state) => {
          const exists = state.wishlist.some(
            (item) => item.id === product.id
          );

          if (exists) {
            return {
              wishlist: state.wishlist.filter(
                (item) => item.id !== product.id
              ),
            };
          }

          return {
            wishlist: [...state.wishlist, product],
          };
        });
      },

      removeFromWishlist: (product) => {
        set((state) => ({
          wishlist: state.wishlist.filter(
            (item) => item.id !== product.id
          ),
        }));
      },

      clearWishlist: () => {
        set({
          wishlist: [],
        });
      },

      // ==============================
      // DERIVED VALUES
      // ==============================

      getTotalItems: () => {
        return get().cartItem.reduce(
          (total, item) => total + item.qty,
          0
        );
      },

      getTotalPrice: () => {
        return get().cartItem.reduce(
          (total, item) => total + item.price * item.qty,
          0
        );
      },
    }),
    {
      name: STORAGE_KEY,

      partialize: (state) => ({
        cartItem: state.cartItem,
        wishlist: state.wishlist,
      }),
    }
  )
);