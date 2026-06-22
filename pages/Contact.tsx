import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, AlertCircle, Loader2, X, ExternalLink, Navigation } from 'lucide-react';
import { STORES, WEB3FORMS_ACCESS_KEY } from '../constants';
import SEO from '../components/SEO';

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
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedStore, setSelectedStore] = useState<typeof STORES[0] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact GADEX Paints",
    "description": "Get in touch with GADEX Paints' support and sales team in Kano, Nigeria. Inquire about orders, request paint samples, or consult our color experts.",
    "url": "https://gadexpaints.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "GADEX Paints Headquarters",
      "telephone": "+2348025852790",
      "email": "Gadexpaints@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "France Road",
        "addressLocality": "Kano",
        "addressRegion": "Kano State",
        "addressCountry": "NG"
      }
    }
  };

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 bg-white relative"
    >
      <SEO 
        title="Contact Our Paint & Color Experts"
        description="Get in touch with GADEX Paints' support and sales team in Kano, Nigeria. Inquire about orders, request paint samples, or consult our color experts."
        keywords="contact Gadex Paints, paint store Kano, buy paint Kano Nigeria, paint manufacturer phone number, Gadex office"
        canonicalPath="/contact"
        schema={contactSchema}
      />
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
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-4 my-8 shadow-sm"
                >
                  <CheckCircle2 size={48} className="text-green-600" />
                  <h3 className="text-2xl font-serif text-gadex-black font-bold">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                    Thank you for reaching out to Gadex Paints. Your message has been directly sent to our team at <span className="font-semibold text-gadex-black">Gadexpaints@gmail.com</span>. We will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-8 py-3 bg-gadex-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gadex-charcoal transition-colors rounded-full shadow-md hover:shadow-lg"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-8">
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm shadow-sm"
                    >
                      <AlertCircle size={20} className="shrink-0" />
                      <p>{errorMessage}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-2 gap-8">
                      <motion.div variants={itemVariant} className="flex flex-col gap-2">
                          <label className="text-xs uppercase tracking-widest text-gray-400">First Name</label>
                          <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                            className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" 
                            placeholder="Jane" 
                          />
                      </motion.div>
                      <motion.div variants={itemVariant} className="flex flex-col gap-2">
                          <label className="text-xs uppercase tracking-widest text-gray-400">Last Name</label>
                          <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                            className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" 
                            placeholder="Doe" 
                          />
                      </motion.div>
                  </div>
                  <motion.div variants={itemVariant} className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent" 
                        placeholder="jane@example.com" 
                      />
                  </motion.div>
                  <motion.div variants={itemVariant} className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                      <textarea 
                        rows={4} 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="border-b border-gray-300 py-2 focus:outline-none focus:border-gadex-black transition-colors bg-transparent resize-none" 
                        placeholder="Tell us about your space..." 
                      />
                  </motion.div>
                  <motion.div variants={itemVariant}>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="px-10 py-4 bg-gadex-black text-white font-bold uppercase tracking-widest hover:bg-gadex-charcoal transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center gap-3"
                    >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                    </button>
                  </motion.div>
                </form>
              )}
            </AnimatePresence>

            <motion.div variants={itemVariant} className="mt-16 inline-block">
                 <div 
                    onClick={() => window.open('https://wa.me/2348025852790', '_blank')}
                    className="group flex items-center gap-4 border border-gray-200 rounded-full py-2 px-3 pr-6 cursor-pointer hover:border-green-500 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
                 >
                    <div className="p-3 bg-green-100 rounded-full text-green-700 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">WhatsApp Support</p>
                        <p className="font-medium text-gadex-black group-hover:text-green-700 transition-colors">Chat directly with us</p>
                    </div>
                    <div className="ml-4 text-gray-300 group-hover:text-green-500 transition-colors group-hover:translate-x-1 transform duration-300">
                        <ArrowRight size={20} />
                    </div>
                 </div>
            </motion.div>
         </motion.div>

         {/* Store Locator / Info */}
         <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
           className="bg-gadex-stone p-12 rounded-sm flex flex-col justify-between"
         >
            <div>
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
                          <button 
                            onClick={() => setSelectedStore(store)}
                            className="text-xs uppercase tracking-widest border-b border-gadex-black pb-1 hover:text-gadex-gold hover:border-gadex-gold transition-colors flex items-center gap-2 group font-semibold"
                          >
                            Get Directions
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                      </div>
                  ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-white shadow-sm border border-gray-100 rounded-xl">
                <h4 className="font-serif text-lg mb-2">Distributor Network</h4>
                <p className="text-gray-500 text-sm mb-4">Gadex is available at select high-end hardware retailers worldwide.</p>
                <button className="w-full py-3 border border-gadex-black uppercase text-xs tracking-widest hover:bg-gadex-black hover:text-white transition-colors rounded-lg font-semibold">Find Distributor</button>
            </div>
         </motion.div>
      </div>

      {/* Backdrop Blurred Map Modal */}
      <AnimatePresence>
        {selectedStore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={() => setSelectedStore(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Map Column */}
              <div className="w-full md:w-3/5 h-80 md:h-[500px] relative bg-gray-100">
                <iframe
                  title={`Map to ${selectedStore.name}`}
                  src={`https://maps.google.com/maps?q=France+Road,+Kano+State,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Details & Actions Column */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gadex-gold bg-gadex-gold/10 px-3 py-1 rounded-full">
                      Headquarters
                    </span>
                    <button 
                      onClick={() => setSelectedStore(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gadex-black"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-gadex-black mb-3">{selectedStore.name}</h3>
                  
                  <div className="flex items-start gap-3 text-gray-600 mb-6">
                    <MapPin className="text-gadex-gold shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium text-gadex-black">{selectedStore.address}</p>
                      <p className="text-sm text-gray-500 mt-0.5">Kano State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Phone className="text-gadex-gold shrink-0" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Call Showroom</p>
                      <p className="text-sm font-bold text-gadex-black">{selectedStore.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=France+Road,+Kano+State,+Nigeria`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gadex-black text-white font-bold text-xs uppercase tracking-widest hover:bg-gadex-gold transition-colors flex items-center justify-center gap-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                  >
                    <Navigation size={18} />
                    Start Navigation
                    <ExternalLink size={16} className="opacity-70" />
                  </a>

                  <button
                    onClick={() => setSelectedStore(null)}
                    className="w-full py-3 border border-gray-200 text-gadex-black font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-xl"
                  >
                    Close Map
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
