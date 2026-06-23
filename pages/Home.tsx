import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sun, Droplet, Shield, Sparkles, Plus, Check, Trash2, Briefcase, Sliders, Layers } from 'lucide-react';
import { COLORS, HERO_SLIDES } from '../constants';
import SEO from '../components/SEO';
import { Color } from '../types';

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

const KENBURNS_CLASSES = [
  'hero-kenburns-center',
  'hero-kenburns-top-left',
  'hero-kenburns-bottom-right',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideCount = HERO_SLIDES.length;

  // Premium SEO Feature States
  const [selectedSwatches, setSelectedSwatches] = useState<Color[]>([]);
  const [selectedFinish, setSelectedFinish] = useState<'matte' | 'satin' | 'gloss'>('matte');

  const toggleSwatch = (color: Color) => {
    if (selectedSwatches.some((s) => s.id === color.id)) {
      setSelectedSwatches(selectedSwatches.filter((s) => s.id !== color.id));
    } else {
      if (selectedSwatches.length >= 4) {
        return; // Caps at 4 swatches
      }
      setSelectedSwatches([...selectedSwatches, color]);
    }
  };

  const getWhatsAppSwatchLink = () => {
    const colorNames = selectedSwatches.map((s) => s.name).join(", ");
    const text = `Hi GADEX, I'm visiting your website and would like to order a premium sample box with the following swatches: ${colorNames}.`;
    return `https://wa.me/2348025852790?text=${encodeURIComponent(text)}`;
  };

  // Auto-advance slides every 8 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 8000);
    return () => clearInterval(timer);
  }, [slideCount]);

  // Preload the next image for seamless transitions
  React.useEffect(() => {
    const nextIndex = (currentSlide + 1) % slideCount;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].src;
  }, [currentSlide, slideCount]);

  const currentSlideData = HERO_SLIDES[currentSlide];
  const kenburnsClass = KENBURNS_CLASSES[currentSlide % KENBURNS_CLASSES.length];

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gadexpaints.com/#organization",
        "name": "GADEX Paints",
        "url": "https://gadexpaints.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://gadexpaints.com/#logo",
          "url": "https://gadexpaints.com/assets/logo.jpeg",
          "caption": "GADEX Paints Logo"
        },
        "image": {
          "@id": "https://gadexpaints.com/#logo"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://gadexpaints.com/#localbusiness",
        "name": "GADEX Paints Headquarters",
        "image": "https://gadexpaints.com/assets/logo.jpeg",
        "url": "https://gadexpaints.com",
        "telephone": "+2348025852790",
        "email": "Gadexpaints@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "France Road",
          "addressLocality": "Kano",
          "addressRegion": "Kano State",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.0022,
          "longitude": 8.5920
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white"
    >
      <SEO 
        title="Premium Paints, Coatings & Screeding Putty in Nigeria"
        description="Discover GADEX Paints, Nigeria's premier manufacturer of high-quality emulsion, washable satin finish, gloss enamel, and POP screeding putty. Crafted for durability and premium aesthetics."
        keywords="premium paint Nigeria, best paint brand Lagos Kano, luxury home painting Nigeria, emulsion paint, satin wall paint, gloss enamel, POP screeding putty Kano, Gadex Paints"
        canonicalPath="/"
        schema={homeSchema}
      />
      {/* ============================================================
          CINEMATIC FULL-BLEED HERO — Ken Burns Treatment
          ============================================================ */}
      <section 
        className="relative w-full h-[85vh] md:h-screen bg-gadex-black overflow-hidden"
        aria-label="Hero slideshow"
      >
        {/* Active Slide with Ken Burns Animation */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The Hero Image — full bleed, cinematic cover, Ken Burns zoom */}
            <img 
              src={currentSlideData.src}
              alt={currentSlideData.alt}
              className={`absolute inset-0 w-full h-full object-cover ${kenburnsClass}`}
              style={{ objectPosition: currentSlideData.objectPosition }}
              fetchPriority={currentSlide === 0 ? 'high' : undefined}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Gradient Overlay — suppresses baked-in flyer text */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
        
        {/* Subtle film grain texture for premium feel */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        />

        {/* Hero Content — editorial, confident */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-gadex-gold uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-6 md:mb-8"
              >
                Premium Paint Solutions
              </motion.span>

              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-5 md:mb-6 leading-[0.95] tracking-tight"
              >
                Color Your<br/>
                <span className="text-gadex-stone/90 italic font-light">World</span>
              </motion.h1>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                className="text-sm md:text-base lg:text-lg text-white/75 mb-8 md:mb-10 max-w-lg font-light tracking-wide leading-relaxed"
              >
                Paints crafted for depth, durability, and the way light transforms your space.
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/colors" 
                  className="group px-8 py-3.5 md:px-10 md:py-4 bg-white text-gadex-black hover:bg-gadex-gold hover:text-white transition-all duration-500 font-medium tracking-widest uppercase text-[11px] md:text-xs inline-flex items-center gap-3"
                >
                  Explore Colors
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/products" 
                  className="px-8 py-3.5 md:px-10 md:py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 font-medium tracking-widest uppercase text-[11px] md:text-xs backdrop-blur-sm"
                >
                  View Collections
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Indicators + Progress Bar — bottom of hero */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-30 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto flex items-center gap-6">
            {/* Slide indicator dots */}
            <div className="flex gap-2.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full ${
                    idx === currentSlide 
                      ? 'w-8 h-2 bg-gadex-gold' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            
            {/* Progress bar for current slide */}
            <div className="hidden md:block flex-1 max-w-[200px] h-[1px] bg-white/15 overflow-hidden">
              <div 
                key={currentSlide}
                className="h-full bg-white/50 hero-progress-bar" 
              />
            </div>

            {/* Slide counter */}
            <span className="hidden md:block text-white/40 text-[11px] tracking-widest font-light tabular-nums">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
            </span>
          </div>
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

      {/* ============================================================
          CLIMATE ENGINEERING SECTION — "Formulated for the Tropics"
          ============================================================ */}
      <section className="py-24 px-6 bg-gadex-stone border-y border-gray-200/60">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.span variants={fadeInUp} className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-4 block">Premium Protection</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-gadex-black">Formulated for the Tropics</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
              Nigeria’s unique climate demands more than standard paint. GADEX is engineered from premium raw materials to withstand high humidity, intense heat, and dust.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-orange-50 text-gadex-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-gadex-gold group-hover:text-white transition-colors duration-300">
                <Sun size={24} />
              </div>
              <h3 className="font-serif text-2xl text-gadex-black mb-3">UV Fade-Resistance</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Proprietary light-stable pigments reflect harsh solar rays, maintaining absolute color richness without chalking or fading under the Nigerian sun.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-gadex-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-gadex-gold group-hover:text-white transition-colors duration-300">
                <Droplet size={24} />
              </div>
              <h3 className="font-serif text-2xl text-gadex-black mb-3">Tropical Humidity Shield</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Advanced biocide additives repel moisture penetration, completely preventing mold, mildew, and damp patches on coastal or humid walls.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-50 text-gadex-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-gadex-gold group-hover:text-white transition-colors duration-300">
                <Shield size={24} />
              </div>
              <h3 className="font-serif text-2xl text-gadex-black mb-3">Elastic Cohesion</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Formulated to stretch and contract during thermal shifts, preventing microscopic hairline cracks on exterior screeds and POP surfaces.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-50 text-gadex-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-gadex-gold group-hover:text-white transition-colors duration-300">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif text-2xl text-gadex-black mb-3">Eco-Pure Formula</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Zero VOCs (Volatile Organic Compounds) water-based blend ensures your spaces are fully odorless, safe for families, and ready to occupy immediately.
              </p>
            </motion.div>
          </div>
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
            {COLORS.slice(0, 5).map((color, idx) => {
              const isSelected = selectedSwatches.some(s => s.id === color.id);
              return (
                <motion.div 
                  key={color.id}
                  whileHover={{ y: -10 }}
                  className={`min-w-[280px] md:min-w-[350px] h-[450px] bg-white shadow-xl relative group cursor-pointer snap-center border-2 ${
                    isSelected ? 'border-gadex-gold' : 'border-transparent'
                  } transition-all duration-300`}
                >
                  <div className="h-4/5 w-full relative" style={{ backgroundColor: color.hex }}>
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-gadex-gold text-white p-2 rounded-full shadow-md flex items-center justify-center">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                  <div className="h-1/5 p-6 flex items-center justify-between bg-white">
                     <div>
                        <h4 className="font-serif text-lg">{color.name}</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{color.mood}</p>
                     </div>
                     <button 
                       onClick={(e) => { e.stopPropagation(); toggleSwatch(color); }}
                       className={`p-2 rounded-full border transition-all ${
                         isSelected 
                           ? 'bg-gadex-gold/10 border-gadex-gold text-gadex-gold' 
                           : 'border-gray-200 text-gray-400 hover:border-gadex-black hover:text-gadex-black'
                       }`}
                     >
                       {isSelected ? <Check size={16} /> : <Plus size={16} />}
                     </button>
                  </div>
                  {/* Hover Reveal */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 items-center justify-center">
                     <Link to="/colors" className="w-[180px] py-3 text-center border border-white text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors font-medium">
                       Visualize Room
                     </Link>
                     <button 
                       onClick={(e) => { e.stopPropagation(); toggleSwatch(color); }}
                       className="w-[180px] py-3 text-center border border-white bg-white text-gadex-black hover:bg-gadex-gold hover:text-white hover:border-gadex-gold uppercase text-xs tracking-widest transition-colors font-medium"
                     >
                       {isSelected ? "Remove Swatch" : "Select Swatch"}
                     </button>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </section>

      {/* ============================================================
          ARCHITECTURAL FINISH SELECTOR SECTION
          ============================================================ */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gadex-gold uppercase tracking-widest text-xs font-bold mb-4 block">Reflectivity & Sheen</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gadex-black">Architectural Finishes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
              The finish determines how light interacts with color. Select a finish below to explore its reflection profile and recommended placement.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side: Interactive Selector & Info */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-4">
                <button
                  onClick={() => setSelectedFinish('matte')}
                  className={`py-3 px-6 text-left border-l-2 transition-all ${
                    selectedFinish === 'matte'
                      ? 'border-gadex-gold bg-gadex-stone text-gadex-black font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gadex-black'
                  }`}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-gadex-gold">Flat & Velvet</span>
                  <span className="font-serif text-lg">01. Premium Acrylic Matte</span>
                </button>

                <button
                  onClick={() => setSelectedFinish('satin')}
                  className={`py-3 px-6 text-left border-l-2 transition-all ${
                    selectedFinish === 'satin'
                      ? 'border-gadex-gold bg-gadex-stone text-gadex-black font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gadex-black'
                  }`}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-gadex-gold">Silk & Luster</span>
                  <span className="font-serif text-lg">02. Premium Washable Satin</span>
                </button>

                <button
                  onClick={() => setSelectedFinish('gloss')}
                  className={`py-3 px-6 text-left border-l-2 transition-all ${
                    selectedFinish === 'gloss'
                      ? 'border-gadex-gold bg-gadex-stone text-gadex-black font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gadex-black'
                  }`}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-gadex-gold">Mirror & Protection</span>
                  <span className="font-serif text-lg">03. Gloss & Shine Enamel</span>
                </button>
              </div>

              {/* Dynamic content card based on state */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFinish}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {selectedFinish === 'matte' && (
                    <>
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-serif text-gadex-gold font-bold">2%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Sheen Level (Ultra Flat)</span>
                      </div>
                      <h3 className="font-serif text-3xl text-gadex-black">Ultra-Matte Velvet Elegance</h3>
                      <p className="text-gray-500 leading-relaxed font-light">
                        Our Matte finish completely absorbs incoming light, minimizing reflections to conceal minor wall irregularities. It delivers an incredibly rich, deep, velvet-like color representation that gives living areas a luxurious editorial look.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Recommended For</h4>
                          <p className="text-gray-500 text-xs">Formal living rooms, primary suites, ceilings, and luxury feature walls.</p>
                        </div>
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Key Performance</h4>
                          <p className="text-gray-500 text-xs">Maximum color depth, zero glare, excellent hiding power, easy touch-ups.</p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedFinish === 'satin' && (
                    <>
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-serif text-gadex-gold font-bold">25%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Sheen Level (Semi-Gloss)</span>
                      </div>
                      <h3 className="font-serif text-3xl text-gadex-black">Washable Silk Luster</h3>
                      <p className="text-gray-500 leading-relaxed font-light">
                        Our Satin finish offers a beautiful, pearl-like luster that gently reflects ambient light. It features superior scrubbability and stain resistance, making it the perfect choice for high-traffic zones that need constant cleaning.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Recommended For</h4>
                          <p className="text-gray-500 text-xs">Hallways, children’s rooms, kitchens, bathrooms, and busy family spaces.</p>
                        </div>
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Key Performance</h4>
                          <p className="text-gray-500 text-xs">Highly scrubbable, moisture repellent, stain-resistant, smooth silk texture.</p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedFinish === 'gloss' && (
                    <>
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-serif text-gadex-gold font-bold">80%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Sheen Level (High Gloss)</span>
                      </div>
                      <h3 className="font-serif text-3xl text-gadex-black">Mirror Finish Wood & Metal Enamel</h3>
                      <p className="text-gray-500 leading-relaxed font-light">
                        Our Enamel Gloss is designed for high reflectivity and ultimate durability. It shields wood trims, cabinetry, and metal structures with a hard, mirror-like protective shell that resists chipping, rust, and moisture.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Recommended For</h4>
                          <p className="text-gray-500 text-xs">Skirting boards, doors, window frames, metal railings, and custom cabinetry.</p>
                        </div>
                        <div className="p-4 bg-gadex-stone rounded-lg">
                          <h4 className="font-semibold text-gadex-black mb-1">Key Performance</h4>
                          <p className="text-gray-500 text-xs">Rust preventative, impact-resistant, high-shine reflectivity, weatherproof.</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Visual Sheen simulation */}
            <div className="w-full lg:w-1/2 aspect-video bg-gadex-charcoal rounded-2xl overflow-hidden relative shadow-2xl flex items-center justify-center p-8 group">
              {/* Grayscale Room Mockup */}
              <img 
                src="https://picsum.photos/id/1078/800/450" 
                alt="Finishing demonstration" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity transition-all duration-700 group-hover:scale-105"
              />

              {/* Dynamic sheen overlay reflecting selected finish light simulation */}
              <motion.div 
                className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay transition-opacity duration-500"
                style={{
                  background: selectedFinish === 'matte' 
                    ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 80%)'
                    : selectedFinish === 'satin'
                    ? 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 100%)'
                }}
              />

              {/* Visual gloss card overlay */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl max-w-sm text-center text-white space-y-4">
                <Sliders className="mx-auto text-gadex-gold" size={32} />
                <h4 className="font-serif text-xl uppercase tracking-wider">Interactive Light Demo</h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {selectedFinish === 'matte' && "Notice how matte absorbs incoming glare, distributing ambient warmth evenly across the room."}
                  {selectedFinish === 'satin' && "Notice how satin adds a soft, silky reflection highlight in areas where light sources hit directly."}
                  {selectedFinish === 'gloss' && "Notice how high gloss reflects distinct light shapes, creating architectural depth and high-contrast gloss lines."}
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  src="/assets/IMG-20260511-WA0003.jpg" 
                  alt="Living Room" 
                  loading="lazy"
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

      {/* ============================================================
          TRADE CONCIERGE SECTION — "Designed for Professionals"
          ============================================================ */}
      <section className="py-24 bg-gadex-charcoal text-white px-6 border-b border-gadex-gold/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gadex-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-gadex-gold uppercase tracking-widest text-xs font-bold block">Gadex Trade Program</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Architectural & Trade Concierge</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Formulated to meet rigorous commercial standards and architectural sheens. We partner with interior designers, architects, and estate developers in Lagos, Kano, and Abuja to offer bespoke color matching, volume-scaled pricing, and priority shipping schedules.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-sm font-light">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gadex-gold/10 text-gadex-gold flex items-center justify-center shrink-0">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Fan Decks & Color Books</h4>
                  <p className="text-gray-400 text-xs">Request free GADEX fan decks, material sample boards, and architectural color guides.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gadex-gold/10 text-gadex-gold flex items-center justify-center shrink-0">
                  <Layers size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Custom Pigment Matching</h4>
                  <p className="text-gray-400 text-xs">Our chemical laboratory custom grinds and matches color coordinates to target exact spec sheets.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gadex-gold text-white hover:bg-white hover:text-gadex-black transition-all duration-300 font-bold uppercase text-xs tracking-widest rounded-sm shadow-md"
              >
                Inquire For Trade
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] bg-gadex-black/40 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-gadex-gold bg-gadex-gold/10 px-3 py-1 rounded-full border border-gadex-gold/20 font-bold inline-block">Professional Specs</span>
              <h3 className="font-serif text-2xl text-white">Technical Index</h3>
            </div>
            <div className="space-y-4 border-y border-white/10 py-6 my-6 font-light text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">VOC Content</span>
                <span className="text-white font-mono">&lt; 1g/L (VOC-Free)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Opacity / Contrast Ratio</span>
                <span className="text-white font-mono">Class 1 (&gt; 99.5% coverage)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Wet Scrub Resistance</span>
                <span className="text-white font-mono">Class 1 (EN 13300 Washable)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Curing Profile</span>
                <span className="text-white font-mono">Dry to touch: 2 hrs | Recoat: 4 hrs</span>
              </div>
            </div>
            <span className="text-xs text-gray-500 italic text-left">GADEX Chemical Laboratory — Premium European Standards</span>
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

      {/* ============================================================
          FLOATING SWATCH BOX CURATOR DRAWER
          ============================================================ */}
      <AnimatePresence>
        {selectedSwatches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-2xl p-6 rounded-2xl z-50 flex flex-col gap-4 text-gadex-black"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-serif text-lg font-bold">Your Swatch Box</h4>
                <p className="text-xs text-gray-500">{selectedSwatches.length} of 4 colors selected</p>
              </div>
              <button 
                onClick={() => setSelectedSwatches([])}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest font-semibold"
              >
                Clear All
              </button>
            </div>

            {/* List of circular colors */}
            <div className="flex gap-4 overflow-x-auto py-2 no-scrollbar">
              {selectedSwatches.map((color) => (
                <div key={color.id} className="relative group shrink-0">
                  <div 
                    className="w-12 h-12 rounded-full border border-gray-100 shadow-inner cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                  <button
                    onClick={() => toggleSwatch(color)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              ))}
              
              {/* Placeholders for remaining slots */}
              {Array.from({ length: 4 - selectedSwatches.length }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300"
                >
                  <Plus size={16} />
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppSwatchLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gadex-gold text-white hover:bg-gadex-black transition-all duration-300 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 rounded-xl shadow-md hover:shadow-lg"
              >
                Order Free Samples
                <ArrowRight size={14} />
              </a>
              <p className="text-[10px] text-gray-400 text-center mt-2 font-light">Delivered to Lagos, Kano, Abuja & nationwide.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
