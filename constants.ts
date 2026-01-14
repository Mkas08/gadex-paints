import { Color, Product, InspirationItem, StoreLocation } from './types';

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
    name: 'GADEX Matte Absolute',
    category: 'Interior',
    description: 'Our flattest finish with exceptional hide and depth of color.',
    features: ['Zero VOC', 'Scrubbable', 'Velvet Touch'],
    image: 'https://picsum.photos/id/1080/600/800',
    price: '$65 / Gallon',
    finishes: ['Matte', 'Eggshell']
  },
  {
    id: 'p2',
    name: 'GADEX WeatherGuard',
    category: 'Exterior',
    description: 'Engineered to withstand the elements while maintaining vibrant color.',
    features: ['UV Resistant', 'Mold Resistant', 'Flexible Bond'],
    image: 'https://picsum.photos/id/164/600/800',
    price: '$78 / Gallon',
    finishes: ['Satin', 'Semi-Gloss']
  },
  {
    id: 'p3',
    name: 'GADEX Venetian Plaster',
    category: 'Special Finishes',
    description: 'Old world charm meets modern durability for texture lovers.',
    features: ['Hand Troweled Look', 'Breathable', 'Natural Pigments'],
    image: 'https://picsum.photos/id/355/600/800',
    price: '$95 / Gallon',
    finishes: ['Textured']
  },
];

export const INSPIRATION: InspirationItem[] = [
  { id: 'i1', title: 'Modern Living', image: 'https://picsum.photos/id/15/800/600', colorIds: ['1', '7'] },
  { id: 'i2', title: 'Moody Office', image: 'https://picsum.photos/id/106/800/1000', colorIds: ['2'] },
  { id: 'i3', title: 'Boho Bedroom', image: 'https://picsum.photos/id/449/800/800', colorIds: ['3', '1'] },
  { id: 'i4', title: 'Exterior Facade', image: 'https://picsum.photos/id/230/800/600', colorIds: ['5'] },
];

export const STORES: StoreLocation[] = [
  { id: 's1', name: 'GADEX Flagship NY', address: '128 Prince St, New York, NY', phone: '+1 212 555 0199', lat: 40.7, lng: -74.0 },
  { id: 's2', name: 'GADEX Studio LA', address: '8400 Melrose Ave, Los Angeles, CA', phone: '+1 310 555 0199', lat: 34.0, lng: -118.2 },
];
