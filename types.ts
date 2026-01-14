export interface Color {
  id: string;
  name: string;
  hex: string;
  category: 'Warm' | 'Cool' | 'Neutral';
  mood: 'Calm' | 'Luxury' | 'Vibrant';
  usage: 'Interior' | 'Exterior' | 'Universal';
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  finishes: string[];
}

export interface InspirationItem {
  id: string;
  title: string;
  image: string;
  colorIds: string[];
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}
