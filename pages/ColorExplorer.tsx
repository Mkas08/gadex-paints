import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../constants';
import { Check, Info, Filter } from 'lucide-react';
import { Color } from '../types';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

const ColorExplorer = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(COLORS[0]);
  const [filter, setFilter] = useState<'All' | 'Warm' | 'Cool' | 'Neutral'>('All');
  const [showInfo, setShowInfo] = useState(false);

  const filteredColors = filter === 'All' 
    ? COLORS 
    : COLORS.filter(c => c.category === filter);

  // Background style for the visualizer
  // We use mix-blend-multiply to simulate paint on a wall
  const roomImage = "https://picsum.photos/id/1078/1600/900"; // A nice living room

  return (
    <div className="pt-20 h-screen flex flex-col md:flex-row overflow-hidden bg-gadex-stone">
      
      {/* Visualizer Area (Right/Top) */}
      <div className="relative w-full md:w-2/3 h-[50vh] md:h-full bg-gray-200 order-1 md:order-2">
         {/* Base grayscale room image */}
         <img 
           src={roomImage} 
           alt="Room Visualizer" 
           className="absolute inset-0 w-full h-full object-cover grayscale"
         />
         
         {/* Color Overlay with Mix Blend Mode */}
         <motion.div 
           initial={false}
           animate={{ backgroundColor: selectedColor.hex }}
           transition={{ duration: 0.5 }}
           className="absolute inset-0 w-full h-full mix-blend-multiply opacity-90"
         />

         {/* Info Overlay */}
         <div className="absolute top-6 left-6 z-10">
            <motion.div 
              key={selectedColor.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white/90 backdrop-blur-md p-6 max-w-sm shadow-lg rounded-sm"
            >
               <h2 className="text-3xl font-serif mb-1">{selectedColor.name}</h2>
               <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">{selectedColor.hex} • {selectedColor.category}</p>
               <p className="text-gray-700 leading-relaxed mb-4 text-sm">{selectedColor.description}</p>
               <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-gadex-black text-white text-xs uppercase tracking-widest hover:bg-gadex-charcoal transition-colors">
                    Order Sample
                  </button>
                  <button className="p-2 border border-gray-300 hover:bg-gray-100">
                    <Info size={18} />
                  </button>
               </div>
            </motion.div>
         </div>
      </div>

      {/* Controls & Palette (Left/Bottom) */}
      <div className="w-full md:w-1/3 h-[50vh] md:h-full bg-white flex flex-col order-2 md:order-1 border-r border-gray-200 z-20 shadow-2xl">
         <div className="p-8 border-b border-gray-100">
           <h1 className="text-3xl font-serif mb-2">Color Explorer</h1>
           <p className="text-gray-400 text-sm mb-6">Select a shade to visualize it in the room.</p>
           
           {/* Filters */}
           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
             {['All', 'Warm', 'Cool', 'Neutral'].map((f) => (
               <button 
                 key={f}
                 onClick={() => setFilter(f as any)}
                 className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full border transition-all ${
                   filter === f 
                     ? 'bg-gadex-black text-white border-gadex-black' 
                     : 'bg-white text-gray-500 border-gray-200 hover:border-gadex-black'
                 }`}
               >
                 {f}
               </button>
             ))}
           </div>
         </div>

         <motion.div 
            className="flex-1 overflow-y-auto p-8"
            variants={container}
            initial="hidden"
            animate="visible"
         >
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
               {filteredColors.map(color => (
                 <motion.button
                   key={color.id}
                   variants={itemVariant}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => setSelectedColor(color)}
                   className="group relative aspect-square rounded-full shadow-sm hover:shadow-md transition-shadow focus:outline-none"
                   style={{ backgroundColor: color.hex }}
                 >
                   {/* Selection Ring */}
                   {selectedColor.id === color.id && (
                     <div className="absolute inset-0 border-4 border-white rounded-full shadow-sm flex items-center justify-center">
                        <Check className="text-white drop-shadow-md" size={24} />
                     </div>
                   )}
                   {/* Tooltip Name */}
                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gadex-black text-white text-[10px] px-2 py-1 whitespace-nowrap z-50 pointer-events-none">
                     {color.name}
                   </div>
                 </motion.button>
               ))}
            </motion.div>
         </motion.div>
      </div>
    </div>
  );
};

export default ColorExplorer;
