# HS Fabrics

Premium hoodies & sweatshirts e-commerce site — Next.js App Router + Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — pages (App Router): home, men, women, shop, products/[slug], cart, checkout,
  wishlist, custom, contact, account
- `components/` — Header, Footer, ProductCard, CartContext, BannerSlider, ScrollReveal
- `data/products.ts` — single source of truth for all product data + contact info

## Important: add real product photos

Product images are referenced from `public/products/`. Add your actual photos there using
the exact filenames listed in `data/products.ts` (hoodie photos), and swap the Unsplash stock
photo URLs used for sweatshirts with your own product photography once you have it.

## What changed in this pass

See the summary message from Claude for the full list of fixes and new architecture.
