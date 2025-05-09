export type ProductCategory =
  | 'Writing'
  | 'Office Supplies'
  | 'Art Supplies'
  | 'Educational'
  | 'Technology';

export type TStationeryProduct = {
  name: string;
  brand: string;
  price: number;
  category: ProductCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
