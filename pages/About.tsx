import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-gadex-black mb-6"
        >
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-500 font-light leading-relaxed"
        >
          Born in 1985 from a desire to bring artisan quality to the modern home.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-[60vh] bg-gray-200 mb-20 relative overflow-hidden"
      >
        <img 
            src="https://picsum.photos/id/201/1920/800" 
            alt="Paint Mixing" 
            className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-24">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={staggerContainer}
        >
           <motion.h3 variants={fadeInUp} className="text-3xl font-serif mb-6">The Art of Pigment</motion.h3>
           <motion.p variants={fadeInUp} className="text-gray-600 leading-loose mb-6">
             At Gadex, we don't just mix colors; we curate moods. Our founders, a chemist and an interior architect, realized that most mass-market paints lacked depth. They appeared flat, lifeless, and chemical.
           </motion.p>
           <motion.p variants={fadeInUp} className="text-gray-600 leading-loose">
             We spent five years developing our signature "Velvet-Bond" technology. By using finer grind pigments and a higher solid content, our paint interacts with light in a way that creates subtle shifts throughout the day. It's not just blue; it's the Atlantic at dusk.
           </motion.p>
        </motion.div>
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={staggerContainer}
        >
           <motion.h3 variants={fadeInUp} className="text-3xl font-serif mb-6">Sustainability First</motion.h3>
           <motion.p variants={fadeInUp} className="text-gray-600 leading-loose mb-6">
             Beauty shouldn't cost the earth. Our entire production facility is solar-powered, and our water filtration systems return water to the ecosystem cleaner than we found it.
           </motion.p>
           <motion.ul variants={staggerContainer} className="space-y-4 mt-6">
             <motion.li variants={fadeInUp} className="flex items-center gap-4 text-gadex-black border-b border-gray-200 pb-2">
                <span className="font-bold text-lg">01.</span> Zero VOC Formulations
             </motion.li>
             <motion.li variants={fadeInUp} className="flex items-center gap-4 text-gadex-black border-b border-gray-200 pb-2">
                <span className="font-bold text-lg">02.</span> 100% Recycled Packaging
             </motion.li>
             <motion.li variants={fadeInUp} className="flex items-center gap-4 text-gadex-black border-b border-gray-200 pb-2">
                <span className="font-bold text-lg">03.</span> Ethically Sourced Minerals
             </motion.li>
           </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
