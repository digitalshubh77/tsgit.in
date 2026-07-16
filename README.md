# TSGIT Website

Professional website for **TSGIT (The Saptagiri Institute of Technology)** — complete rooftop solar solutions across Vidarbha.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS 4 · React Router

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/subsidy` | Solar Subsidy |
| `/process` | Installation Process |
| `/products` | Products & Brands |
| `/faq` | FAQ |
| `/contact` | Contact + quote form |

## Structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, Layout
│   └── ui/         # Button, PageChrome
├── data/site.ts    # All business content
├── hooks/
├── pages/
├── lib/
└── types/
```

Site content (phones, subsidy amounts, services, etc.) lives in `src/data/site.ts`.
