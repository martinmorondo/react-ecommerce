import type { CategoryId } from '../../config/categories';
import type { Product } from '../../types';

export interface ShopItem extends Product {
  category: CategoryId;
}

export const Sdata: { shopItems: ShopItem[] } = {
  shopItems: [
    /* =====================================================
       CELULARES
       ===================================================== */

    {
      id: 'shop-1',
      cover: '/img/products/iphone-14.jpg',
      name: 'iPhone 14',
      price: 999,
      discount: 10,
      category: 'phone',
    },
    {
      id: 'shop-2',
      cover: '/img/products/iphone-14-pro.webp',
      name: 'iPhone 14 Pro',
      price: 1199,
      discount: 15,
      category: 'phone',
    },
    {
      id: 'shop-3',
      cover: '/img/products/iphone-pro-max.webp',
      name: 'iPhone Pro Max',
      price: 1399,
      discount: 8,
      category: 'phone',
    },
    {
      id: 'shop-4',
      cover: '/img/products/iphones-inicio.jpg',
      name: 'iPhone Collection',
      price: 1099,
      discount: 12,
      category: 'phone',
    },
    {
      id: 'shop-5',
      cover: '/img/products/samsung-s24.webp',
      name: 'Samsung Galaxy S24',
      price: 899,
      discount: 10,
      category: 'phone',
    },
    {
      id: 'shop-6',
      cover: '/img/products/samsung-a55.webp',
      name: 'Samsung Galaxy A55',
      price: 549,
      discount: 5,
      category: 'phone',
    },

    /* =====================================================
       GAMING
       ===================================================== */

    {
      id: 'shop-7',
      cover: '/img/products/play-5.png',
      name: 'PlayStation 5',
      price: 799,
      discount: 20,
      category: 'gaming',
    },
    {
      id: 'shop-8',
      cover: '/img/products/ps5-slim.webp',
      name: 'PlayStation 5 Slim',
      price: 749,
      discount: 15,
      category: 'gaming',
    },
    {
      id: 'shop-9',
      cover: '/img/products/ps5-digital.webp',
      name: 'PlayStation 5 Digital',
      price: 699,
      discount: 12,
      category: 'gaming',
    },
    {
      id: 'shop-10',
      cover: '/img/products/ps5-game-edition.jpg',
      name: 'PS5 Gaming Edition',
      price: 829,
      discount: 10,
      category: 'gaming',
    },
    {
      id: 'shop-11',
      cover: '/img/products/ps5-performance.jpg',
      name: 'PS5 Performance Pack',
      price: 899,
      discount: 8,
      category: 'gaming',
    },

    /* =====================================================
       AUDIO
       ===================================================== */

    {
      id: 'shop-12',
      cover: '/img/products/mapple-earphones.jpg',
      name: 'Mapple Earphones',
      price: 180,
      discount: 25,
      category: 'headphones',
    },
    {
      id: 'shop-13',
      cover: '/img/products/headphone-wireless.jpg',
      name: 'Headphones Wireless',
      price: 120,
      discount: 10,
      category: 'headphones',
    },
    {
      id: 'shop-14',
      cover: '/img/products/Wireless-Earphones-Pro.jpg',
      name: 'Wireless Earphones Pro',
      price: 229,
      discount: 15,
      category: 'headphones',
    },
    {
      id: 'shop-15',
      cover: '/img/products/Noise-Cancelling-Headphones.jpg',
      name: 'Noise Cancelling Headphones',
      price: 279,
      discount: 20,
      category: 'headphones',
    },
    {
      id: 'shop-16',
      cover: '/img/products/Bluetooth-Earbuds.jpg',
      name: 'Bluetooth Earbuds',
      price: 99,
      discount: 10,
      category: 'headphones',
    },

    /* =====================================================
       RELOJES
       ===================================================== */

    {
      id: 'shop-17',
      cover: '/img/products/apple-watch.webp',
      name: 'Apple Watch',
      price: 499,
      discount: 15,
      category: 'watch',
    },
    {
      id: 'shop-18',
      cover: '/img/products/smart-watch-pro.jpg',
      name: 'Smartwatch Pro',
      price: 299,
      discount: 20,
      category: 'watch',
    },
    {
      id: 'shop-19',
      cover: '/img/products/apple-sport.jpg',
      name: 'Apple Watch Sport',
      price: 399,
      discount: 10,
      category: 'watch',
    },
    {
      id: 'shop-20',
      cover: '/img/products/smartwatch-active.jpg',
      name: 'Smartwatch Active',
      price: 199,
      discount: 15,
      category: 'watch',
    },
    {
      id: 'shop-21',
      cover: '/img/products/smartwatch-classic.webp',
      name: 'Smartwatch Classic',
      price: 249,
      discount: 5,
      category: 'watch',
    },

    /* =====================================================
       ANTEOJOS
       ===================================================== */

    {
      id: 'shop-22',
      cover: '/img/products/urban-sunglasses.webp',
      name: 'Urban Sunglasses',
      price: 149,
      discount: 20,
      category: 'glasses',
    },
    {
      id: 'shop-23',
      cover: '/img/products/premium-sunglasses.webp',
      name: 'Premium Sunglasses',
      price: 199,
      discount: 15,
      category: 'glasses',
    },
    {
      id: 'shop-24',
      cover: '/img/products/classic-sunglasses.jpg',
      name: 'Classic Sunglasses',
      price: 129,
      discount: 10,
      category: 'glasses',
    },
    {
      id: 'shop-25',
      cover: '/img/products/black-sunglasses.jpg',
      name: 'Black Edition Glasses',
      price: 179,
      discount: 12,
      category: 'glasses',
    },

    /* =====================================================
       SMART TV
       ===================================================== */

    {
      id: 'shop-26',
      cover: '/img/products/smart-4k.jpg',
      name: 'Smart TV 4K',
      price: 899,
      discount: 20,
      category: 'tv',
    },
    {
      id: 'shop-27',
      cover: '/img/products/smart-4kpro.webp',
      name: 'Smart TV 4K Pro',
      price: 1099,
      discount: 15,
      category: 'tv',
    },
    {
      id: 'shop-28',
      cover: '/img/products/smart-ultrahd.jpg',
      name: 'Smart TV Ultra HD',
      price: 1299,
      discount: 10,
      category: 'tv',
    },
    {
      id: 'shop-29',
      cover: '/img/products/smart-cinema-jpeg',
      name: 'Smart TV Cinema',
      price: 949,
      discount: 12,
      category: 'tv',
    },
    {
      id: 'shop-30',
      cover: '/img/products/smart-home.jpg',
      name: 'Smart TV Home',
      price: 699,
      discount: 8,
      category: 'tv',
    },
  ],
};

export default Sdata;