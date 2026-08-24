export interface TopItem {
  id: number;
  cover: string;
  para: string;
  desc: string;
  price: number;
}

export const Tdata: { topItems: TopItem[] } = {
  topItems: [
    {
      id: 1,
      cover: '/img/products/headphone.jpg',
      para: 'headphone',
      desc: '3k orders this week',
      price: 180,
    },
    {
      id: 2,
      cover: '/img/products/apple-watch.webp',
      para: 'watch',
      desc: '4k orders this week',
      price: 180,
    },
    {
      id: 3,
      cover: '/img/products/sunglasses-1.webp',
      para: 'sunglass',
      desc: '6k orders this week',
      price: 180,
    },
    {
      id: 4,
      cover: '/img/products/headphone-wireless.jpg',
      para: 'headphone',
      desc: '4k orders this week',
      price: 180,
    },
    {
      id: 5,
      cover: '/img/products/sunglasses-2.jpg',
      para: 'sunglass',
      desc: '6k orders this week',
      price: 180,
    },
  ],
};

export default Tdata;