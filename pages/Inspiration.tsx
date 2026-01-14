import React from 'react';
import { motion } from 'framer-motion';
import { INSPIRATION } from '../constants';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Inspiration = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-serif mb-6">Inspiration Gallery</h1>
        <p className="text-gray-500">Real homes. Real light. Real life.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="columns-1 md:columns-2 gap-8 space-y-8"
      >
        {INSPIRATION.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariant}
            className="break-inside-avoid relative group overflow-hidden cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
               <h3 className="text-white font-serif text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
               <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                 Featuring Colors: {item.colorIds.join(', ')}
               </p>
            </div>
          </motion.div>
        ))}
        {/* Fillers for Masonry Effect */}
        <motion.div 
            variants={itemVariant}
            className="break-inside-avoid bg-gadex-stone p-12 flex flex-col justify-center items-center text-center aspect-square"
        >
            <h3 className="font-serif text-3xl mb-4">Share Your Space</h3>
            <p className="text-gray-500 mb-6">Tag @GadexPaints to be featured in our monthly curation.</p>
            <button className="border-b border-gadex-black text-gadex-black uppercase tracking-widest text-xs py-2">Upload Photo</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inspiration;
