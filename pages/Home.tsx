import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { COLORS } from '../constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/id/1031/1920/1080" 
            alt="Hero Interior" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Redefine Your <br/> <span className="text-gadex-stone italic">Sanctuary</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Premium, eco-conscious paints formulated for depth, durability, and the way light hits your life.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/colors" className="px-8 py-4 bg-white text-gadex-black hover:bg-gadex-stone transition-all duration-300 font-medium tracking-widest uppercase text-sm">
              Explore Colors
            </Link>
            <Link to="/products" className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-widest uppercase text-sm backdrop-blur-sm">
              View Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span variants={fadeInUp} className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-4 block">The Gadex Philosophy</motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-gadex-black leading-snug mb-8">
            "We believe paint isn't just color. It's the skin of your home. It should breathe, last, and inspire."
          </motion.h2>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <motion.div variants={fadeInUp} className="p-6 border-l border-gray-200 text-left md:text-center">
              <h3 className="font-serif text-xl mb-3">Eco-Pure Formula</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Zero VOCs and water-based solvents ensure your home stays safe and odorless.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border-l border-gray-200 text-left md:text-center">
              <h3 className="font-serif text-xl mb-3">Rich Pigmentation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our proprietary grind creates colors with 30% more depth than standard paints.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 border-l border-gray-200 text-left md:text-center">
              <h3 className="font-serif text-xl mb-3">Lifetime Finish</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Washable, scrubbable, and fade-resistant. Designed for real life.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Colors Scroll */}
      <section className="py-20 bg-gadex-stone overflow-hidden">
        <div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, x: -30 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <h3 className="text-3xl font-serif text-gadex-black mb-2">Trending Palettes</h3>
             <p className="text-gray-500">Curated shades for the modern season.</p>
           </motion.div>
           <Link to="/colors" className="text-gadex-black underline decoration-1 underline-offset-4 hover:text-gadex-gold transition-colors flex items-center gap-2">View All <ArrowRight size={16}/></Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex gap-6 overflow-x-auto px-6 pb-8 no-scrollbar snap-x snap-mandatory"
        >
           {COLORS.slice(0, 5).map((color, idx) => (
             <motion.div 
               key={color.id}
               whileHover={{ y: -10 }}
               className="min-w-[280px] md:min-w-[350px] h-[450px] bg-white shadow-xl relative group cursor-pointer snap-center"
             >
                <div className="h-4/5 w-full" style={{ backgroundColor: color.hex }}></div>
                <div className="h-1/5 p-6 flex flex-col justify-center bg-white">
                   <h4 className="font-serif text-lg">{color.name}</h4>
                   <p className="text-xs text-gray-400 uppercase tracking-wide">{color.mood}</p>
                </div>
                {/* Hover Reveal */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Link to="/colors" className="px-6 py-3 border border-white text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">Visualize</Link>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </section>

      {/* Real Spaces Parallax-ish */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1 relative"
            >
                <img 
                  src="https://picsum.photos/id/106/800/1000" 
                  alt="Living Room" 
                  className="w-full h-auto object-cover shadow-2xl"
                />
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-10 -right-10 bg-gadex-charcoal text-white p-8 max-w-xs shadow-xl hidden md:block"
                >
                    <p className="font-serif italic text-lg mb-4">"Gadex paints completely transformed the light in our studio. The texture is unmatched."</p>
                    <div className="flex gap-1 text-gadex-gold">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2"
            >
                <span className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-4 block">Inspiration</span>
                <h2 className="text-4xl md:text-5xl font-serif text-gadex-black mb-6">See the Difference</h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                    From calm minimalist bedrooms to vibrant, energetic workspaces, see how our community uses Gadex to shape their environments.
                </p>
                <Link to="/inspiration" className="inline-block px-8 py-4 bg-gadex-black text-white hover:bg-gadex-charcoal transition-all uppercase text-sm tracking-widest">
                    Browse Gallery
                </Link>
            </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gadex-black text-white text-center px-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to start your project?</h2>
              <p className="text-gray-400 mb-10 text-lg">Order 5 free color swatches today and find the perfect match for your home.</p>
              <Link to="/contact" className="px-10 py-5 bg-white text-gadex-black font-bold uppercase tracking-widest hover:bg-gadex-gold hover:text-white transition-all duration-300">
                  Find a Retailer
              </Link>
            </motion.div>
         </div>
      </section>
    </motion.div>
  );
};

export default Home;
