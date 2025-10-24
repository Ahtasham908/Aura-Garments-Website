
import React from 'react';
import type { Page } from '../types';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons/Icons';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-4">Aura</h3>
            <p className="text-stone-600 text-sm">Timeless pieces, ethically crafted for the modern wardrobe.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-stone-500 hover:text-stone-800"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-800"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-800"><TwitterIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => {e.preventDefault(); onNavigate('products')}} className="text-stone-600 hover:text-stone-900">All Products</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-900">New Arrivals</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-900">Best Sellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-stone-800 mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-600 hover:text-stone-900">Our Story</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); onNavigate('contact')}} className="text-stone-600 hover:text-stone-900">Contact Us</a></li>
              <li><a href="#" className="text-stone-600 hover:text-stone-900">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-stone-800 mb-4">Newsletter</h4>
            <p className="text-stone-600 text-sm mb-4">Subscribe for updates and 10% off your first order.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"/>
                <button type="submit" className="bg-stone-800 text-white px-4 py-2 hover:bg-stone-900 transition-colors">
                  &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aura Garments. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
