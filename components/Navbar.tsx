import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

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

export default Navbar;
