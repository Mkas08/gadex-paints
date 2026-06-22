import { Color, Product, InspirationItem, HeroSlide, StoreLocation } from './types';

// Web3Forms Access Key for Gadexpaints@gmail.com
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a295d286-0529-4915-a97e-30d68460b7af";

export const COLORS: Color[] = [
  { id: '1', name: 'Alabaster Dream', hex: '#F2F0E6', category: 'Neutral', mood: 'Calm', usage: 'Universal', description: 'A soft, warm off-white that brings serenity to any space.' },
  { id: '2', name: 'Midnight Velvet', hex: '#2C3E50', category: 'Cool', mood: 'Luxury', usage: 'Interior', description: 'Deep, dramatic blue-grey for statement walls.' },
  { id: '3', name: 'Terracotta Soul', hex: '#C07C64', category: 'Warm', mood: 'Vibrant', usage: 'Universal', description: 'Earthy red-brown inspired by Tuscan pottery.' },
  { id: '4', name: 'Sage Wisdom', hex: '#8FA395', category: 'Cool', mood: 'Calm', usage: 'Interior', description: 'A restorative green connecting your home to nature.' },
  { id: '5', name: 'Charcoal Sketch', hex: '#363636', category: 'Neutral', mood: 'Luxury', usage: 'Exterior', description: 'Strong, defining dark grey for modern facades.' },
  { id: '6', name: 'Golden Hour', hex: '#D4AF37', category: 'Warm', mood: 'Luxury', usage: 'Interior', description: 'Opulent metallic gold for accents and details.' },
  { id: '7', name: 'Cloud Grey', hex: '#D1D5DB', category: 'Neutral', mood: 'Calm', usage: 'Universal', description: 'The perfect backdrop for minimalist interiors.' },
  { id: '8', name: 'Deep Forest', hex: '#1B3224', category: 'Cool', mood: 'Luxury', usage: 'Universal', description: 'Rich, dark green that commands respect.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Standard Quality Emulsion',
    category: 'Interior',
    description: 'European standard quality emulsion paint designed for a smooth, matte finish with excellent coverage.',
    features: ['High Coverage', 'Eco-Friendly', 'Quick Drying'],
    image: '/assets/IMG-20260511-WA0000.jpg',
    price: '',
    finishes: ['Matte']
  },
  {
    id: 'p2',
    name: 'Premium Satin Finish',
    category: 'Interior/Exterior',
    description: 'Improved satin paint that brings life to your walls with a subtle, elegant sheen and superior durability.',
    features: ['Washable', 'Stain Resistant', 'Silk Texture'],
    image: '/assets/IMG-20260511-WA0001.jpg',
    price: '',
    finishes: ['Satin']
  },
  {
    id: 'p3',
    name: 'Gloss & Shine Enamel',
    category: 'Trim & Metal',
    description: 'High-gloss protective finish for wood and metal surfaces, offering long-lasting brilliance.',
    features: ['Rust Inhibitor', 'High Gloss', 'Weather Proof'],
    image: '/assets/IMG-20260511-WA0002.jpg',
    price: '',
    finishes: ['Gloss']
  },
];

export const INSPIRATION: InspirationItem[] = [
  { id: 'i1', title: 'Modern Living', image: '/assets/IMG-20260511-WA0003.jpg', colorIds: ['1', '7'] },
  { id: 'i2', title: 'Elegant Dining', image: '/assets/IMG-20260511-WA0005.jpg', colorIds: ['2'] },
  { id: 'i3', title: 'Vibrant Accents', image: '/assets/IMG-20260511-WA0006.jpg', colorIds: ['3', '1'] },
  { id: 'i4', title: 'Serene Bedroom', image: '/assets/IMG-20260511-WA0007.jpg', colorIds: ['4'] },
  { id: 'i5', title: 'Luxury Suite', image: '/assets/IMG-20260511-WA0008.jpg', colorIds: ['8'] },
  { id: 'i6', title: 'Modern Facade', image: '/assets/IMG-20260511-WA0009.jpg', colorIds: ['5'] },
  { id: 'i7', title: 'Architectural Detail', image: '/assets/IMG-20260511-WA0010.jpg', colorIds: ['7'] },
  { id: 'i8', title: 'Studio Space', image: '/assets/IMG-20260511-WA0011.jpg', colorIds: ['2'] },
  { id: 'i9', title: 'Minimalist Hallway', image: '/assets/IMG-20260511-WA0015.jpg', colorIds: ['1'] },
  { id: 'i10', title: 'Creative Workspace', image: '/assets/IMG-20260511-WA0016.jpg', colorIds: ['6'] },
];

export const HERO_SLIDES: HeroSlide[] = [
  // Clean editorial photography (generated — these are the strongest)
  {
    src: '/assets/hero/hero-terracotta-living.png',
    objectPosition: 'center center',
    alt: 'A luxury living room with a deep terracotta accent wall and elegant minimalist decor',
  },
  // Gadex flyer — red living room (crop to the sofa/room area)
  {
    src: '/assets/hero/desktop/IMG-20260511-WA0001.jpg',
    objectPosition: 'center 40%',
    alt: 'Gadex Paints bringing life to walls — a beautifully painted living room',
  },
  // Clean editorial photography
  {
    src: '/assets/hero/hero-navy-bedroom.png',
    objectPosition: 'center center',
    alt: 'A serene modern bedroom with a deep navy blue feature wall',
  },
  // Gadex flyer — blue textured room (crop to the textured wall/chair)
  {
    src: '/assets/hero/desktop/IMG-20260511-WA0010.jpg',
    objectPosition: 'center 45%',
    alt: 'Gadex Paints — a stylishly painted room with rich textured walls',
  },
  // Clean editorial photography
  {
    src: '/assets/hero/hero-sage-dining.png',
    objectPosition: 'center center',
    alt: 'An elegant sage green painted dining room with natural light',
  },
  // Gadex flyer — green interior (crop to vases/wall)
  {
    src: '/assets/hero/desktop/IMG-20260511-WA0006.jpg',
    objectPosition: '40% center',
    alt: 'Gadex Paints — a fresh green interior with modern decor',
  },
];

export const STORES: StoreLocation[] = [
  { id: 's1', name: 'GADEX Headquarters', address: 'France Road, Kano State', phone: '+234 802 585 2790', lat: 12.0022, lng: 8.5920 },
];

