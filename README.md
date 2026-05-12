# GADEX Paints - Technical Documentation

## Overview
GADEX Paints is a premium, high-fidelity web application built for a modern paint and interior aesthetics brand. The application prioritizes an editorial design aesthetic, smooth motion choreography, and production-grade performance, delivering a sophisticated user experience.

## Tech Stack
- **Framework:** React 19 / Vite 6
- **Routing:** React Router DOM (HashRouter)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Architecture & Directory Structure
The codebase follows a modular, single-responsibility architecture designed for maintainability and scalability.

- **`App.tsx`**: The main application wrapper. It orchestrates the `HashRouter`, manages global layout components (`Navbar`, `Footer`), and implements `<Suspense>` boundaries for lazy-loaded routes.
- **`components/`**: Reusable UI elements.
  - `Navbar.tsx`: Responsive top navigation with scroll-aware styling and `framer-motion` mobile menu overlays.
  - `Footer.tsx`: Standardized site footer.
- **`pages/`**: Primary route views, code-split for performance.
  - `Home.tsx`: Features a dynamic hero section with high-priority imagery and brand philosophy.
  - `Products.tsx`: Detailed collections showcasing items with scroll-triggered (whileInView) animations.
  - `ColorExplorer.tsx`: An interactive color visualizer utilizing CSS `mix-blend-multiply` to simulate paint on room photography.
  - `About.tsx`, `Inspiration.tsx`, `Contact.tsx`: Additional core pages.
- **`constants.ts`**: Serves as the mock data layer, storing product arrays, color palettes, and gallery items.
- **`types.ts`**: Centralized TypeScript definitions for strict typing across the application.

## Performance Optimizations
The application has been audited and optimized to meet high performance standards:
- **Route-Based Code Splitting:** Pages are dynamically imported (`React.lazy`) in `App.tsx`, drastically reducing the initial JavaScript bundle size.
- **LCP Optimization:** The hero image in the home page is prioritized via `fetchPriority="high"` to optimize the Largest Contentful Paint metric.
- **Asset Lazy Loading:** Secondary and below-the-fold imagery utilize native `loading="lazy"` attributes to preserve bandwidth and improve initial load times.

## Design System & Aesthetics
- **Color Palette:** Gadex Gold, Charcoal, Stone, and True White.
- **Typography:** Elegant serif headers for high impact, paired with clean, highly readable sans-serif fonts for body copy.
- **Motion Choreography:** Leverages `framer-motion` with custom spring transitions and easing curves (`[0.22, 1, 0.36, 1]`) to create fluid, non-generic micro-animations.

## Setup & Local Development

### Prerequisites
Ensure you have Node.js and npm installed.

### Installation
1. Install project dependencies:
   ```bash
   npm install
   ```

2. Run the Development Server:
   ```bash
   npm run dev
   ```
   *The Vite server is configured to run on `http://localhost:3000`.*

## Deployment
To build the application for production:
```bash
npm run build
```
The optimized static assets will be output to the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or AWS S3.
