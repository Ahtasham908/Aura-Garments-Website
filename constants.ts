
import type { Product, Review, Page } from './types';

export const NAV_LINKS: { name: string; page: Page }[] = [
  { name: 'Home', page: 'home' },
  { name: 'Products', page: 'products' },
  { name: 'Contact', page: 'contact' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Linen Blend Shirt', price: 79.99, imageUrl: 'https://picsum.photos/seed/garment1/600/800', category: 'Garment' },
  { id: 2, name: 'Classic Leather Tote', price: 149.50, imageUrl: 'https://picsum.photos/seed/bag1/600/800', category: 'Bag' },
  { id: 3, name: 'High-Waist Trousers', price: 110.00, imageUrl: 'https://picsum.photos/seed/garment2/600/800', category: 'Garment' },
  { id: 4, name: 'Silk Scarf', price: 45.00, imageUrl: 'https://picsum.photos/seed/accessory1/600/800', category: 'Accessory' },
  { id: 5, name: 'Suede Crossbody Bag', price: 125.00, imageUrl: 'https://picsum.photos/seed/bag2/600/800', category: 'Bag' },
  { id: 6, name: 'Cashmere Sweater', price: 250.00, imageUrl: 'https://picsum.photos/seed/garment3/600/800', category: 'Garment' },
  { id: 7, name: 'Minimalist Backpack', price: 95.00, imageUrl: 'https://picsum.photos/seed/bag3/600/800', category: 'Bag' },
  { id: 8, name: 'Tailored Blazer', price: 199.99, imageUrl: 'https://picsum.photos/seed/garment4/600/800', category: 'Garment' },
];

export const REVIEWS: Review[] = [
  { id: 1, customerName: 'Emily R.', avatarUrl: 'https://picsum.photos/seed/avatar1/100/100', rating: 5, text: "Absolutely stunning quality. The fabric feels amazing and the fit is perfect. I've received so many compliments!" },
  { id: 2, customerName: 'James T.', avatarUrl: 'https://picsum.photos/seed/avatar2/100/100', rating: 5, text: "The leather tote is my new everyday bag. It's spacious, durable, and incredibly stylish. Worth every penny." },
  { id: 3, customerName: 'Sophia L.', avatarUrl: 'https://picsum.photos/seed/avatar3/100/100', rating: 4, text: "Beautiful design and fast shipping. The color was slightly different than online, but I still love it. Will shop here again." },
];
