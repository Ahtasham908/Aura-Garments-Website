
import React, { useState } from 'react';
import type { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { ShoppingCartIcon, UserIcon, MenuIcon, XIcon } from './icons/Icons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-stone-50/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-3xl font-bold font-serif text-stone-900 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            Aura
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.page}
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                className={`text-stone-600 hover:text-stone-900 transition-colors duration-300 relative ${currentPage === link.page ? 'text-stone-900 font-medium' : ''}`}
              >
                {link.name}
                {currentPage === link.page && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-stone-800 rounded-full"></span>}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-stone-600 hover:text-stone-900 transition-colors duration-300">
              <UserIcon className="w-6 h-6" />
            </button>
            <button className="text-stone-600 hover:text-stone-900 transition-colors duration-300">
              <ShoppingCartIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-50 absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.page}
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                className={`text-xl ${currentPage === link.page ? 'text-stone-900 font-semibold' : 'text-stone-600'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4">
                <button className="text-stone-600 hover:text-stone-900 transition-colors duration-300">
                    <UserIcon className="w-7 h-7" />
                </button>
                <button className="text-stone-600 hover:text-stone-900 transition-colors duration-300">
                    <ShoppingCartIcon className="w-7 h-7" />
                </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
