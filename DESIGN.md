# Gadex Paints - Design System & Theme

## 1. Design Description
The Gadex Paints application utilizes a **Premium Editorial Aesthetic**. The design is tailored to reflect a high-end, sophisticated brand identity that feels modern, atmospheric, and highly intentional. 

Key design characteristics include:
- **High Contrast & Clean Spacing:** Generous use of whitespace (padding and margins) to allow content to breathe, creating a museum-like presentation of the products and colors.
- **Sophisticated Motion Choreography:** Uses `framer-motion` to implement premium micro-animations and page transitions. It relies heavily on custom easing curves (e.g., `cubic-bezier(0.22, 1, 0.36, 1)`) and staggered entrance animations for a fluid, non-generic user experience.
- **Interactive Visualizers:** Uses advanced CSS features like `mix-blend-multiply` to create realistic, dynamic color overlays on room photography (seen in the Color Lab).
- **Subtle Glassmorphism:** Navigation menus and overlays use `backdrop-blur` with slight transparency (`bg-white/90`) to provide depth without overwhelming the background content.

## 2. Typography
The typography system relies on a striking pairing of an elegant serif font for display/headings and a clean, legible sans-serif font for body text. Both are loaded via Google Fonts.

*   **Display / Headings (Serif):** 
    *   **Font Family:** `"Playfair Display", serif`
    *   **Usage:** Used for massive hero text, primary section headings (`h1`, `h2`), and the brand logo. It conveys luxury, tradition, and craftsmanship.
*   **Body / Utility (Sans-Serif):** 
    *   **Font Family:** `"DM Sans", sans-serif`
    *   **Usage:** Used for all body copy, paragraphs, buttons, and navigation links. It offers high legibility, modern clean lines, and a technical feel that perfectly balances the ornate serif.

## 3. Color Palette
The color palette avoids default or generic hex values, opting for tailored, earthy, and sophisticated tones.

*   **Gadex Black** (`#1a1a1a`)
    *   *Usage:* Primary text color, footer background, primary solid buttons. A softer, richer alternative to pure black (`#000000`).
*   **Gadex Charcoal** (`#2d2d2d`)
    *   *Usage:* Secondary dark backgrounds, mobile menu overlays. Provides a slight elevation from the base black.
*   **Gadex Stone** (`#f5f5f0`)
    *   *Usage:* The primary application background color. A warm, organic off-white that reduces eye strain and provides a luxurious canvas for the paint colors to stand out against.
*   **Gadex Gold** (`#c5a059`)
    *   *Usage:* The primary brand accent color. Used for subtle highlights, active states, sub-headings, and hover transitions. Conveys luxury and premium quality.
*   **Gadex Accent** (`#e65100`)
    *   *Usage:* A subtle, highly saturated safety orange/rust used sparingly for critical actions or to provide stark contrast when needed.

## 4. UI Patterns
- **Buttons & Links:** Often styled with `uppercase tracking-widest` to feel editorial and structured.
- **Images:** Usually presented with full bleed or strict aspect ratios (`aspect-[4/3]`, `aspect-square`), combined with slow, subtle zoom-on-hover effects (`transition-transform duration-700 group-hover:scale-105`).
- **Responsive Layout:** A mobile-first approach that scales elegantly to desktop via CSS Grid and Flexbox, utilizing full-screen mobile menu overlays and standard top-bar navigation on larger screens.
