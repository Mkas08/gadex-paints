import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gadex-black text-white py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-4xl font-serif font-bold mb-6">GADEX</h2>
        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
          Crafting the atmosphere of modern living through sustainable, high-pigment paints designed for the discerning eye.
        </p>
        <div className="flex gap-4 text-white/60">
          <a href="https://instagram.com/gadex_paint" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-white cursor-pointer" />
          </a>
          <Facebook className="hover:text-white cursor-pointer" />
          <Twitter className="hover:text-white cursor-pointer" />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm uppercase tracking-widest mb-6 text-gadex-gold">Explore</h4>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/products" className="hover:text-white transition-colors">Collections</Link></li>
          <li><Link to="/colors" className="hover:text-white transition-colors">Color Explorer</Link></li>
          <li><Link to="/inspiration" className="hover:text-white transition-colors">Inspiration Gallery</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-widest mb-6 text-gadex-gold">Support</h4>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/contact" className="hover:text-white transition-colors">Find a Store</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          <li><span className="cursor-pointer hover:text-white transition-colors">Trade Program</span></li>
          <li><span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} GADEX Paints. All rights reserved.
    </div>
  </footer>
);

export default Footer;
