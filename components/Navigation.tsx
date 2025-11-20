import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-4 bg-stone-50/90 backdrop-blur-md border-b border-stone-200' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-6">
            <button className="text-stone-800 hover:text-stone-500 transition-colors">
                <Menu strokeWidth={1} size={24} />
            </button>
            <div className="hidden md:flex items-center gap-6 text-sm font-sans tracking-widest uppercase text-stone-500">
                <a href="#" className="hover:text-stone-900 transition-colors">Watches</a>
                <a href="#" className="hover:text-stone-900 transition-colors">Maison</a>
                <a href="#" className="hover:text-stone-900 transition-colors text-stone-900 border-b border-stone-900">Story</a>
            </div>
        </div>

        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-serif font-semibold tracking-wide text-stone-900 transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            AETERNA
        </div>

        <div className="flex items-center gap-6">
            <button className="text-stone-800 hover:text-stone-500 transition-colors">
                <Search strokeWidth={1} size={24} />
            </button>
            <button className="text-stone-800 hover:text-stone-500 transition-colors">
                <ShoppingBag strokeWidth={1} size={24} />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;