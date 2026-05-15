# E-Commerce Store

A full-featured e-commerce frontend built with React, TypeScript, and Vite. Features 20+ pages, 4 themes, a complete shopping cart → payment → receipt flow, and a Figma design token export.

## Pages

| Area | Pages |
|------|-------|
| **Home** | Landing page with hero, featured products |
| **Products** | New Arrivals, Best Sellers, Shop All (with Load More), Collections, Product Details |
| **Auth** | Sign In, Sign Up |
| **Info** | About, Contact, FAQ |
| **Policies** | Privacy Policy, Terms of Service, Shipping Policy, Returns & Exchanges, Size Guide, Store Locator, Affiliates |
| **Checkout** | Payment (12 methods), Receipt (printable) |

## Features

- **4 Themes** — Light, Dark, Sepia, Ocean with smooth CSS transitions and localStorage persistence
- **Shopping Cart** — Slide-in panel with add/remove/clear, Pay Now → Payment → Receipt flow
- **Client-side Routing** — SPA navigation with pushState
- **Product Grids** — 4-column card layouts with Buy Now buttons
- **Payment System** — 12 methods (Pakistan + International) with dynamic form fields
- **Print Support** — A4-optimized receipt printing
- **Figma Export** — Design tokens and specs in `/figma/`

## Stack

React 19 + TypeScript + Vite 6 + Plain CSS (custom design system)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
├── figma/                  # Figma design token export & API script
├── guidelines/             # Brand, component, and layout guidelines
├── src/
│   ├── components/
│   │   ├── cart/           # Slide-in shopping cart
│   │   ├── layout/         # Header, Footer
│   │   └── pages/          # All page components (20+)
│   ├── lib/                # Theme context, cart context, utilities
│   ├── index.css           # Complete design system CSS
│   ├── App.tsx             # Root app with router
│   └── main.tsx            # Entry point
├── ATTRIBUTIONS.md         # Image/icon/font credits
├── default_shadcn_theme.css
└── package.json
```
