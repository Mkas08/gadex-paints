import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white"
    >
       <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 border-b border-gray-100 pb-8"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-gadex-black mb-4">Collections</h1>
            <p className="text-gray-500 max-w-2xl">Premium finishes for every surface. From ultra-matte interiors to weather-resistant exteriors.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-20">
             {PRODUCTS.map((product, index) => (
               <motion.div 
                 key={product.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                 className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
               >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-1/2 aspect-[4/3] bg-gray-100 relative overflow-hidden group"
                  >
                     <img 
                       src={product.image} 
                       alt={product.name} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                  </motion.div>
                  <div className="w-full md:w-1/2 md:p-10">
                     <motion.div
                       initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                     >
                        <span className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-2 block">{product.category}</span>
                        <h2 className="text-4xl font-serif mb-6">{product.name}</h2>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="font-bold text-sm uppercase mb-2">Features</h4>
                            <ul className="text-gray-500 text-sm space-y-1">
                              {product.features.map(f => <li key={f}>• {f}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm uppercase mb-2">Finishes</h4>
                            <p className="text-gray-500 text-sm">{product.finishes.join(', ')}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <span className="font-serif text-xl">{product.price}</span>
                            <button className="flex items-center gap-2 text-gadex-black hover:text-gadex-accent transition-colors uppercase text-sm font-bold tracking-widest">
                              View Specs <ArrowUpRight size={18} />
                            </button>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </motion.div>
  );
};

export default Products;
