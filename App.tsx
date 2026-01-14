import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, ChevronRight, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

// Components
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ColorExplorer from './pages/ColorExplorer';
import Inspiration from './pages/Inspiration';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  // If not home, always solid. If home, solid on scroll.
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ease-in-out ${
    !isHome || scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
  }`;
  
  const linkClasses = `text-sm font-medium uppercase tracking-widest hover:text-gadex-gold transition-colors ${
    (!isHome || scrolled) ? 'text-gadex-black' : 'text-white'
  }`;

  const mobileMenuBg = "fixed inset-0 bg-gadex-charcoal z-40 flex flex-col justify-center items-center gap-8";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter z-50 relative ${(!isHome || scrolled) ? 'text-gadex-black' : 'text-white'}`}>
          GADEX
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/products" className={linkClasses}>Collections</Link>
          <Link to="/colors" className={linkClasses}>Color Lab</Link>
          <Link to="/inspiration" className={linkClasses}>Gallery</Link>
          <Link to="/about" className={linkClasses}>Our Story</Link>
          <Link to="/contact" className={linkClasses}>Contact</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex gap-4 items-center">
             <button className={`${(!isHome || scrolled) ? 'text-gadex-black' : 'text-white'} hover:opacity-70`}>
                <Search size={20} />
             </button>
             <button className={`${(!isHome || scrolled) ? 'text-gadex-black' : 'text-white'} hover:opacity-70`}>
                <ShoppingBag size={20} />
             </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 relative">
          <button onClick={() => setIsOpen(!isOpen)} className={(!isHome || scrolled || isOpen) ? 'text-gadex-black' : 'text-white'}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={mobileMenuBg}
            >
              {['Home', 'Products', 'Colors', 'Inspiration', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl font-serif hover:text-gadex-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gadex-black text-white py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-4xl font-serif font-bold mb-6">GADEX</h2>
        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
          Crafting the atmosphere of modern living through sustainable, high-pigment paints designed for the discerning eye.
        </p>
        <div className="flex gap-4 text-white/60">
          <Instagram className="hover:text-white cursor-pointer" />
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

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gadex-stone selection:bg-gadex-gold selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/colors" element={<ColorExplorer />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
