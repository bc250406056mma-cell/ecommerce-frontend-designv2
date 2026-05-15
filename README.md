# E-Commerce Frontend Design v2

A modern, themeable e-commerce store built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **4 Themes** — Light, Dark, Sepia, Ocean with smooth switching
- **Shopping Cart** — Slide-in panel with add/remove/clear
- **Responsive Grids** — Product grid, feature grid, promo strip
- **Design System** — Full design tokens in CSS and JSON
- **Figma Ready** — Conversion package in `/figma/`

## Stack

React 19 + TypeScript + Vite 6 + Tailwind CSS 4 + shadcn/ui

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
├── figma/                  # Figma conversion (design tokens, specs, API script)
├── guidelines/             # Brand, component, and layout guidelines
├── src/
│   ├── components/
│   │   ├── cart/           # Cart panel
│   │   ├── layout/         # Header, Footer
│   │   └── pages/          # Page components
│   └── lib/                # Theme, cart, utility
├── default_shadcn_theme.css
├── ATTRIBUTIONS.md
└── package.json
```
