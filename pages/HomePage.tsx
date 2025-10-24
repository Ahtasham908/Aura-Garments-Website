
import React from 'react';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import { PRODUCTS, REVIEWS } from '../constants';
import type { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1800/1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">Effortless Elegance,</h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif">Consciously Crafted.</h2>
          <p className="mt-6 max-w-lg text-lg text-stone-200">
            Discover our collection of timeless garments and accessories, designed for the modern individual.
          </p>
          <button 
            onClick={() => onNavigate('products')}
            className="mt-8 px-8 py-3 bg-white text-stone-900 font-semibold hover:bg-stone-200 transition-colors duration-300"
          >
            Shop Collection
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Featured Collection</h2>
          <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">Handpicked styles from our latest collection, perfect for any occasion.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
