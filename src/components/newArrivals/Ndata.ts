import type { Product } from '../../types';
import Sdata from '../shop/Sdata';

const NEW_ARRIVAL_IDS = [
  'shop-6',
  'shop-10',
  'shop-15',
  'shop-21',
  'shop-25',
  'shop-30',
] as const;

const arrivalsItems: Product[] =
  NEW_ARRIVAL_IDS.flatMap((productId) => {
    const product = Sdata.shopItems.find(
      (item) => item.id === productId
    );

    return product ? [product] : [];
  });

const Ndata: {
  arrivalsItems: Product[];
} = {
  arrivalsItems,
};

export default Ndata;