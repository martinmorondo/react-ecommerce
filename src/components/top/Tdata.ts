import Sdata from '../shop/Sdata';

export interface TopItem {
  id: number;
  cover: string;
  para: string;
  desc: string;
  price: number;
}

const TOP_PRODUCT_IDS = [
  'shop-12',
  'shop-7',
  'shop-2',
  'shop-17',
  'shop-26',
] as const;

const TOP_DESCRIPTIONS = [
  'Favorito de la semana',
  'Destacado en gaming',
  'Uno de los más buscados',
  'Tendencia en wearables',
  'Ideal para tu hogar',
] as const;

const topItems: TopItem[] = TOP_PRODUCT_IDS.flatMap(
  (productId, index) => {
    const product = Sdata.shopItems.find(
      (item) => item.id === productId
    );

    if (!product) {
      return [];
    }

    return [
      {
        id: index + 1,
        cover: product.cover,
        para: product.name,
        desc: TOP_DESCRIPTIONS[index],
        price: product.price,
      },
    ];
  }
);

export const Tdata = {
  topItems,
};

export default Tdata;