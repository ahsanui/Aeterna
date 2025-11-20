import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-3xl text-stone-50 mb-6">AETERNA</h2>
          <p className="font-sans text-sm leading-relaxed max-w-sm mb-8">
            Defining the moments that matter. A legacy of Swiss craftsmanship, dedicated to the pursuit of perfection in every second.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-stone-50 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-50 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-50 transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-stone-50 font-sans text-xs uppercase tracking-widest mb-6">Collections</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li><a href="#" className="hover:text-white transition-colors">The Chronograph</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Diver</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Straps & Accessories</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-50 font-sans text-xs uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Aeterna Watches S.A. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed in Geneva.</p>
      </div>
    </footer>
  );
};

export default Footer;