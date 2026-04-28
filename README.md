# 🌍 WanderList — Travel Bucket List App

> A curated bucket list of the world's most extraordinary destinations, built with Next.js 14.

**Live Demo:** [[url.vercel.app](https://trialproject-gamma.vercel.app/)]  
**GitHub:** [[github.com/your-username/travel-bucket-list](https://github.com/Kalopsia22/Trial_Project/)]

---

## What I Built

WanderList is a travel bucket list app that lets users browse, filter, and explore 6 handpicked dream destinations across 5 continents. Every destination has a rich detail page with highlights, fun facts, budget guides, and best travel seasons.

Instead of generic placeholder data, I wrote real, researched content for each destination — because the app should be worth actually using.

---

## Features

- **Home page** — grid of destination cards with continent + category filters
- **Detail pages** — full description, must-see highlights, quick facts sidebar, fun fact callout
- **About page** — project story and tech overview
- **Client-side filtering** — filter by continent and tag with instant results
- **Responsive design** — mobile-first layout, works on all screen sizes
- **Static generation** — all pages pre-rendered at build time (fast & SEO-friendly)

---

## Tech Stack

| Technology | Usage |
|---|---|
| **Next.js 14** | App Router, server components, SSG with `generateStaticParams` |
| **React 18** | Client components, `useState` for filter state |
| **Tailwind CSS** | Responsive utility-first styling |
| **Lucide React** | Icon library |
| **Vercel** | Deployment |

---

## Project Structure

```
travel-bucket-list/
├── app/
│   ├── layout.js          # Root layout with Navbar + Footer
│   ├── page.js            # Home page (server component)
│   ├── not-found.js       # 404 page
│   ├── about/
│   │   └── page.js        # About page
│   └── destination/
│       └── [id]/
│           └── page.js    # Dynamic detail page
├── components/
│   ├── Navbar.js          # Sticky navbar with scroll behaviour
│   ├── Footer.js
│   ├── DestinationCard.js # Individual card component
│   ├── DestinationsGrid.js # Client wrapper with filter logic
│   └── FilterBar.js       # Filter UI (continent + tags)
├── lib/
│   └── destinations.js    # All destination data
└── app/globals.css        # Global styles + Google Fonts
```

---

## Next.js Concepts Demonstrated

- **App Router** with nested layouts
- **Server Components** (default) vs **Client Components** (`'use client'`)
- **Dynamic routes** (`/destination/[id]`)
- **`generateStaticParams`** for static generation of dynamic routes
- **`generateMetadata`** for per-page SEO
- **`next/image`** with remote image optimisation
- **`next/link`** for client-side navigation

---

## Running Locally

```bash
git clone https://github.com/your-username/travel-bucket-list.git
cd travel-bucket-list
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed to Vercel — connected directly to the GitHub repo. Any push to `main` triggers a new deployment automatically.

```bash
npm run build   # verify build before deploying
```

---

## Design Decisions

- **Playfair Display** (serif) for headings — editorial, travel-magazine feel
- **DM Sans** for body — clean and readable
- **Sand/terracotta palette** — warm, earthy tones that evoke travel and adventure
- **Grain overlay** — subtle texture that elevates the background
- Kept animations CSS-based and performant (no layout thrash)

---

*Built as a Next.js screening project — but designed to be something worth exploring.*
