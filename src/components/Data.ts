import type { Product } from '../types';
import Sdata from './shop/Sdata';

const FLASH_DEAL_IDS = [
  'shop-2',
  'shop-7',
  'shop-12',
  'shop-17',
  'shop-22',
  'shop-26',
] as const;

const productItems: Product[] = FLASH_DEAL_IDS.flatMap(
  (productId) => {
    const product = Sdata.shopItems.find(
      (item) => item.id === productId
    );

    return product ? [product] : [];
  }
);

const Data: {
  productItems: Product[];
} = {
  productItems,
};

export default Data;