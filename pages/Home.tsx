import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { COLORS, HERO_SLIDES } from '../constants';
import SEO from '../components/SEO';

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
