# Maison Brun · Luxury Home Decor

A high-end, single-page React storefront for a premium home decor brand.
Monochromatic brown palette (ebony → sand), Playfair Display + Montserrat,
built mobile-first with Tailwind CSS and Lucide icons.

## Features

- Editorial hero with slow-zoom imagery and fade-in animations
- Filterable product catalog (Curtains, Furniture, LED Lights, Chandeliers,
  Vases, Lounge Chairs, Sculptures)
- Product detail view with two prominent **Enquire Now** buttons:
  - **WhatsApp** &mdash; pre-filled `https://wa.me/233559056144?text=...`
  - **SMS** &mdash; pre-filled `sms:+233559056144?body=...`
- Bespoke / atelier section, testimonials, newsletter, full footer
- Fully responsive — magazine on desktop, boutique app on mobile

## Stack

- React 18 + Vite
- Tailwind CSS 3 (custom brown palette in `tailwind.config.js`)
- lucide-react for thin-stroke icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (usually http://localhost:5173).

## Configuration

The inquiry phone number is defined once in `src/App.jsx`:

```js
const PHONE = '233559056144';
```

Change it to your own international number (no `+`, no spaces) and every
WhatsApp / SMS link in the app updates automatically.

## Build

```bash
npm run build
npm run preview
```

## File Map

- `src/App.jsx` &mdash; the entire single-page application
- `src/index.css` &mdash; Tailwind layers + body styling
- `tailwind.config.js` &mdash; custom brown palette, typography, animations
- `index.html` &mdash; loads Playfair Display + Montserrat from Google Fonts
