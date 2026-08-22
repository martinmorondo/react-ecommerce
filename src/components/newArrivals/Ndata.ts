import { Product } from '../../types';

// Definimos que Ndata tiene una propiedad arrivalsItems que es un array de Productos
const Ndata: { arrivalsItems: Product[] } = {
  arrivalsItems: [ 
    {
      id: 1,
      cover: "/img/products/sunglass.webp",
      name: "Sunglass",
      price: 150,
    },
    {
      id: 2,
      cover: "/img/products/makeup.png",
      name: "Makeup",
      price: 250,
    },
    {
      id: 3,
      cover: "/img/products/watch.png",
      name: "Smart Watch",
      price: 50,
    },
    {
      id: 4,
      cover: "/img/products/lipstick.png",
      name: "Lipstick",
      price: 15,
    },
    {
      id: 5,
      cover: "/img/products/green-plant.jpg",
      name: "Green Plant",
      price: 10,
    },
    {
      id: 6,
      cover: "/img/products/bonsai-tree.jpg",
      name: "Bonsai tree",
      price: 400,
    },
  ]
};

export default Ndata;