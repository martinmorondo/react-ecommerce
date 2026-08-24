import { Product } from '../../types';

export interface ShopItem extends Product {
  category: string;
}

export const Sdata: { shopItems: ShopItem[] } = {
  shopItems: [
    {
      id: 'shop-1',
      cover: '/img/products/headphone.jpg',
      name: 'Mapple Earphones',
      price: 180,
      discount: 25,
      category: 'earphones',
    },
    {
      id: 'shop-2',
      cover: '/img/products/iphone-14.jpg',
      name: 'Samsung Galaxy S8',
      price: 120,
      discount: 10,
      category: 'phone',
    },
    {
      id: 'shop-3',
      cover: '/img/products/sony-ps5.jpg',
      name: 'Sony PS5',
      price: 20,
      discount: 50,
      category: 'playstation',
    },
    {
      id: 'shop-4',
      cover: '/img/products/iphone-14.jpg',
      name: 'Iphone 14 PRO',
      price: 999,
      discount: 10,
      category: 'phone',
    },
    {
      id: 'shop-5',
      cover: '/img/products/apple-watch.webp',
      name: 'Smartwatch',
      price: 80,
      discount: 20,
      category: 'watch',
    },
    {
      id: 'shop-6',
      cover: '/img/products/headphone-wireless.jpg',
      name: 'Headphones Wireless',
      price: 120,
      discount: 10,
      category: 'headphones',
    },
  ],
};

export default Sdata;