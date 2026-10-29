export const SIZES = ["S", "M", "L"] as const;

export type Size = (typeof SIZES)[number];

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageAlt: string;
  tag?: string;
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}
