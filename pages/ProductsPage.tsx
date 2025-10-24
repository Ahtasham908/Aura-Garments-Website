
import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Our Collection</h1>
          <p className="mt-4 text-lg text-stone-600">Explore our curated selection of high-quality garments and accessories.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
