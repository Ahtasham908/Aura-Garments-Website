
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 bg-stone-200">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="bg-white/80 backdrop-blur-sm p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-stone-800 font-semibold">{product.name}</h3>
              <p className="text-stone-600">${product.price.toFixed(2)}</p>
            </div>
            <button className="bg-stone-800 text-white px-4 py-2 hover:bg-stone-900 transition-colors text-sm font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Fallback info for non-hover states */}
      <div className="mt-4 text-center group-hover:hidden">
          <h3 className="text-stone-800 font-medium">{product.name}</h3>
          <p className="text-stone-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
