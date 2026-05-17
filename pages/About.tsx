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
      staggerChildren: 0.15
    }
  }
};

const products = [
  {
    num: "01",
    title: "POP Screeding",
    desc: "Screeding Putty for Smooth Finish",
    tag: "Preparation"
  },
  {
    num: "02",
    title: "Interior Emulsion",
    desc: "Premium Interior/Exterior Formulation",
    tag: "Emulsion"
  },
  {
    num: "03",
    title: "Standard Emulsion",
    desc: "Durable Interior/Exterior Formulation",
    tag: "Emulsion"
  },
  {
    num: "04",
    title: "Matt",
    desc: "Highly Washable Acrylic Matt Finish",
    tag: "Quality Finish"
  },
  {
    num: "05",
    title: "Satin",
    desc: "Highly Washable Semi-Gloss Finish",
    tag: "Quality Finish"
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-block"
        >
          <div className="relative p-2 bg-white rounded-full shadow-2xl border border-gray-100">
            <img 
              src="/assets/logo.jpeg" 
              alt="Gadex Paints Logo" 
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-inner"
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-serif text-gadex-black mb-8 tracking-tight"
        >
          Gadex Paints
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto"
        >
          GADEX PAINTS provide a high quality paint system which includes a full range of products prepared from selected high quality raw materials for use on all interior and exterior surfaces (primers, screeding and quality finishes) that provide a high degree of durability and dries to a uniform finish with advanced stage of leveling and smoothness.
        </motion.p>
      </div>

      {/* Product System Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gadex-gold mb-3">Our Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gadex-black">The Paint System</h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((prod, index) => (
            <motion.div
              key={prod.num}
              variants={fadeInUp}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-bold text-gadex-gold/80 group-hover:text-gadex-gold transition-colors">
                    {prod.num}.
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-gray-50 text-gray-500 rounded-full border border-gray-100 group-hover:border-gadex-gold/30 transition-colors">
                    {prod.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-serif text-gadex-black mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {prod.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {prod.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs font-medium text-gray-400 group-hover:text-gadex-black transition-colors">
                <span>Advanced Leveling & Smoothness</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Note / Aesthetic Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-3xl mx-auto px-6 text-center border-t border-gray-200/60 pt-16 mt-20"
      >
        <p className="font-serif italic text-lg text-gray-500">
          "Formulated for durability. Designed for uniform perfection."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
