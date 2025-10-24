
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: 'Garment' | 'Bag' | 'Accessory';
}

export interface Review {
  id: number;
  customerName: string;
  avatarUrl: string;
  rating: number;
  text: string;
}

export type Page = 'home' | 'products' | 'contact';
