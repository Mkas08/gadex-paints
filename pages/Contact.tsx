import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { STORES } from '../constants';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Contact = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
         {/* Contact Form */}
         <motion.div
           initial="hidden"
           animate="visible"
           variants={container}
         >
            <motion.span variants={itemVariant} className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-4 block">Get in Touch</motion.span>
            <motion.h1 variants={itemVariant} className="text-4xl md:text-5xl font-serif mb-8">Let's discuss your project.</motion.h1>
            <motion.p variants={itemVariant} className="text-gray-500 mb-12">Whether you're an architect, designer, or homeowner, our color experts are here to help.</motion.p>
            
            <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                    <motion.div variants={itemVariant} className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400">First Name</label>
                        <input type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" placeholder="Jane" />
                    </motion.div>
                    <motion.div variants={itemVariant} className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400">Last Name</label>
                        <input type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" placeholder="Doe" />
                    </motion.div>
                </div>
                <motion.div variants={itemVariant} className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" placeholder="jane@example.com" />
                </motion.div>
                <motion.div variants={itemVariant} className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent resize-none" placeholder="Tell us about your space..." />
                </motion.div>
                <motion.div variants={itemVariant}>
                  <button type="submit" className="px-10 py-4 bg-gadex-black text-white font-bold uppercase tracking-widest hover:bg-gadex-charcoal transition-colors">
                      Send Message
                  </button>
                </motion.div>
            </form>

            <motion.div variants={itemVariant} className="mt-16 flex gap-6 items-center">
                 <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-full text-green-700">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase">WhatsApp Support</p>
                        <p className="font-medium">+1 555 012 3456</p>
                    </div>
                 </div>
            </motion.div>
         </motion.div>

         {/* Store Locator / Info */}
         <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
           className="bg-gadex-stone p-12 rounded-sm"
         >
            <h2 className="text-3xl font-serif mb-8">Visit a Showroom</h2>
            <div className="space-y-10">
                {STORES.map(store => (
                    <div key={store.id} className="border-b border-gray-300 pb-8 last:border-0">
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-medium">{store.name}</h3>
                            <MapPin className="text-gadex-gold" size={20} />
                        </div>
                        <p className="text-gray-500 mb-2 w-2/3">{store.address}</p>
                        <p className="text-gadex-black text-sm font-bold mb-4">{store.phone}</p>
                        <button className="text-xs uppercase tracking-widest border-b border-gadex-black pb-1 hover:text-gadex-gold hover:border-gadex-gold transition-colors">Get Directions</button>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-white shadow-sm">
                <h4 className="font-serif text-lg mb-2">Distributor Network</h4>
                <p className="text-gray-500 text-sm mb-4">Gadex is available at select high-end hardware retailers worldwide.</p>
                <button className="w-full py-3 border border-gadex-black uppercase text-xs tracking-widest hover:bg-gadex-black hover:text-white transition-colors">Find Distributor</button>
            </div>
         </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
