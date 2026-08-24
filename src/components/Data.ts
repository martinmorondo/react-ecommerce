import { Product } from '../types';

interface DataStructure {
  productItems: Product[];
}

const Data: DataStructure = {
  productItems: [
    {
      id: 'flash-1',
      discount: 50,
      cover: '/img/products/nike-air.png',
      name: 'Shoes',
      price: 100,
    },
    {
      id: 'flash-2',
      discount: 40,
      cover: '/img/products/watch.png',
      name: 'Watch',
      price: 20,
    },
    {
      id: 'flash-3',
      discount: 40,
      cover: '/img/products/tv-smart.png',
      name: 'Smart TV',
      price: 200,
    },
    {
      id: 'flash-4',
      discount: 40,
      cover: '/img/products/nike-air.png',
      name: 'Tshirt Nike',
      price: 50,
    },
    {
      id: 'flash-5',
      discount: 50,
      cover: '/img/products/jordan-shoes.webp',
      name: 'Jordan Shoes',
      price: 140,
    },
    {
      id: 'flash-6',
      discount: 50,
      cover: '/img/products/puma-shoes.jpg',
      name: 'Puma Shoes',
      price: 100,
    },
  ],
};

export default Data;