# Figma Conversion Package

This directory contains everything you need to recreate the ecommerce frontend design in Figma.

## Files

| File | Purpose |
|------|---------|
| `design-tokens.json` | All colors, typography, spacing, layout, and component specs extracted from the CSS |
| `design-specs.md` | Comprehensive page-by-page layout guide with exact measurements for manual Figma recreation |
| `figma-import.ts` | Script that uses Figma REST API to auto-generate the design file programmatically |

## How to Use

### Option 1: Manual Recreation (Recommended)
Open `design-specs.md` and follow along in Figma. It walks through every page, section, and component with exact pixel values, colors, and fonts. Set up your Figma styles first (colors, text, effects), then build components, then assemble pages.

### Option 2: Auto-Import via API
1. Get a Figma Personal Access Token: https://www.figma.com/developers/api#access-tokens
2. `set FIGMA_ACCESS_TOKEN=your_token_here`
3. Install dependencies: `npm install figma-api-structures`
4. Run: `npx ts-node figma/figma-import.ts`
5. Open the returned Figma URL

### Option 3: Design Token Import
If you use a design token plugin (like Specify or Tokens Studio), import `design-tokens.json` directly into Figma.

## Page List (12+ frames to create)

1. Home (with Header, Nav, Hero, Featured Categories, Promo Strip, Product Grid, Footer)
2. About
3. Contact
4. Sign In (2-column auth layout)
5. Sign Up (2-column auth layout)
6. New Arrivals
7. Shop All (+ Load More)
8. Best Sellers
9. Collections
10. Product Details (2-column gallery + info)
11. Payment
12. Receipt
13. Policy Pages (Privacy, Terms, FAQ, Careers, etc.)

## Themes

The design supports 4 themes (Light, Dark, Sepia, Ocean). Create component variants or use theme tokens from `design-tokens.json`.
