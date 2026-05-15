# E-Commerce Frontend → Figma Design Specs

## Overview

Convert the existing HTML/CSS ecommerce design to Figma. Below are the exact specs for each component, page, and layout so you can recreate every frame 1:1.

---

## 1. Design System Foundation

### 1.1 Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#1a1a1a` | Brand text, body headings, primary buttons |
| `--accent` | `#c5a059` | CTAs, prices, hover states, section underlines |
| `--accent-hover` | `#e0bc7a` | Button hover |
| `--bg-white` | `#ffffff` | Main canvas |
| `--bg-soft` | `#fcfcfc` | Section backgrounds |
| `--text-dark` | `#222222` | Body prose |
| `--text-muted` | `#777777` | Secondary text, labels |
| `--border` | `#eeeeee` | Cards, dividers, inputs |
| `--card-bg` | `#f9f9f9` | Product image placeholder |
| `--input-bg` | `#f5f5f5` | Search, form inputs |
| `--footer-bg` | `#1a1a1a` | Footer |
| `--footer-text` | `#b0b0b0` | Footer links |
| `--footer-divider` | `#2a2a2a` | Footer horizontal rule |

**4 Themes** (Light default, Dark, Sepia, Ocean) — see `design-tokens.json` for all color overrides.

### 1.2 Typography

| Style | Font | Size | Weight | Letter Spacing | Line Height |
|-------|------|------|--------|----------------|-------------|
| **Hero H1** | Playfair Display | 64px | 900 | 0.2px | 1.12 |
| **Section H2** | Playfair Display | 32px | 900 | 0.2px | 1.12 |
| **Card H3** | Playfair Display | 20px | 900 | 0.2px | 1.12 |
| **Body** | Plus Jakarta Sans | 14.7px | 400 | normal | 1.7 |
| **Lead** | Plus Jakarta Sans | 16.8px | 400 | normal | 1.7 |
| **Micro** | Plus Jakarta Sans | 12.5px | 400 | normal | 1.7 |
| **Nav Link** | Plus Jakarta Sans | 12.5px | 700 | 2px uppercase | 1.32 |
| **Button** | Plus Jakarta Sans | 12.8px | 700 | 2px uppercase | 1 |
| **Product Title** | Playfair Display | 14.4px | 700 | 1px uppercase | 1.32 |

### 1.3 Spacing Grid

- **Page max-width**: 1240px, centered
- **Gutter**: 32px (left/right padding)
- **Section padding**: 80px top/bottom
- **Grid gaps**: Product grid 30px, Feature grid 20px, Nav links 42px

---

## 2. Figma Frame Structure (Recommended)

### Frame Hierarchy

```
📁 Ecommerce Store
  📄 Home
  📄 New Arrivals
  📄 Shop All
  📄 Best Sellers
  📄 Collections
  📄 About
  📄 Contact
  📄 Sign In
  📄 Sign Up
  📄 Product Details
  📄 Payment
  📄 Receipt
  📁 Policy Pages
    📄 Privacy Policy
    📄 Terms of Service
    📄 FAQ
    📄 Careers
    📄 Shipping Policy
  📁 Components
    📁 Header
    📁 Footer
    📁 Navigation
    📁 Cards
    📁 Buttons
    📁 Forms
    📁 Cart Panel
```

### Frame Sizes

| Frame | Width | Height | Notes |
|-------|-------|--------|-------|
| Desktop | 1440px | 1080px+ | Main artboard size |
| Cart Panel | 420px | 1080px | Slide-in overlay |
| Receipt Modal | 760px | auto | Centered overlay |

---

## 3. Page-by-Page Layout Specs

### 3.1 Home (index.html)

**Section 1 — Top Bar + Header**
- Height: ~80px
- Left: Logo "E-Commerce Store" (Playfair Display, 900 weight, 0.18em letter-spacing, uppercase)
- Right: Search bar (max-width 420px, pill with #f5f5f5 bg) + icons (account, cart with badge)
- Cart badge: 18x18px circle, #c5a059 bg, white text, -10px offset from top-right

**Section 2 — Navigation**
- Height: ~50px
- Border-top/bottom: 1px solid #eeeeee
- 7 links centered: Home | New Arrivals | Shop All | Best Sellers | Collections | About Us | Contact
- Hover: underline effect (1px, centered, gold)

**Section 3 — Hero**
- Height: 80vh (864px at 1080p)
- Background: linear-gradient overlay over [unsplash retail photo](https://images.unsplash.com/photo-1441986300917-64674bd600d8)
- Eyebrow: "New Season 2026" (12px, uppercase, muted)
- H1: "Curated Everyday Luxury" (64px Playfair Display)
- Subtitle: "Discover elevated essentials..."
- 2 CTA buttons: "Shop Collection" (primary black) + "Explore New Arrivals" (outline)

**Section 4 — Featured Categories**
- 3-column grid: 1.2fr 1fr 1fr
- Card 1 (large): Statement Bags — unsplash handbag photo
- Card 2: Urban Sneakers — unsplash sneakers photo  
- Card 3: Tailored Edit — unsplash formalwear photo
- Cards: 14px border-radius, gradient overlay (black to transparent), white text, hover lift 6px

**Section 5 — Promo Strip**
- 3 equal columns
- Items: Free Delivery, Easy Returns, Member Benefits
- Border cards with #fcfcfc bg, hover lift 4px + gold border

**Section 6 — Featured Picks**
- Section title with gold underline (50px wide, 2px)
- 4-column product grid
- Product card: border, 14px radius, image aspect 3/4, title, price ($49/$89/$69), "Buy Now" button
- Hover: lift 6px, image scale 1.05

### 3.2 Sign In (pages/sign-in.html)

- 2-column auth-wrap: 1.1fr (hero text) + 0.9fr (form card)
- Left: "Welcome Back" + descriptive text
- Right: Card with form (email, password), "Sign In" + "Create Account" buttons
- Google Sign-In divider with icon
- Max-width container: 1100px

### 3.3 Sign Up (pages/sign-up.html)

- Same layout as Sign In but fields for name, email, password, confirm password

### 3.4 About (pages/about.html)

- Standard header + content section + footer
- Content area with company description

### 3.5 Contact (pages/contact.html)

- Header + contact form + footer
- Form fields: name, email, message, submit

### 3.6 Product Details

- 2-column layout: 1.05fr (gallery) + 0.95fr (details)
- Gallery: 4/5 aspect ratio image, 16px border-radius
- Details: Product title (Playfair Display), rating, price (#c5a059, 24px, bold), description, size selector, "Add to Cart" + "Save" buttons
- Below: 2-column detail panels (Shipping & Returns, Care Guide) with border cards

### 3.7 Payment (payments/payment_methods.html)

- Centered card (max-width 540px)
- Order total line, payment method chips (3-column grid: Card, PayPal, Apple Pay, etc.)
- Dynamic fields that swap based on method selection
- "Pay Now" CTA

### 3.8 Receipt

- Centered card (max-width 760px)
- Header: checkmark icon (green), brand name, receipt #, date
- 2-column meta grid (Order ID, Date, Payment, Total)
- Full item table with headers: Item, Qty, Price, Total
- Grand total line
- "Download PDF" + "Print" actions
- A4 print optimization included

### 3.9 Policy Pages (Privacy, Terms, FAQ, Careers, etc.)

- Centered content (max-width 920px)
- Policy header with eyebrow + title
- Accordion-style sections (border cards with 12px radius, #fcfcfc bg)
- Each section: h2 title + paragraph(s)

---

## 4. Component Specs

### 4.1 Cart Panel (Slide-in)
- Fixed right, 420px wide, full height
- Header: "Your Cart" + Close button
- Scrollable items list with image (62x62, 6px radius), name, price, remove button
- Footer: total line + "Clear Cart" + "Pay Now" buttons
- Overlay: black 40% opacity behind

### 4.2 Profile Dropdown
- Positioned below profile icon
- 240px min-width, 12px border-radius, box-shadow
- Items: Sign In, My Orders, Settings divider
- Theme switcher inside settings section (5 options: System, Light, Dark, Sepia, Ocean)

### 4.3 Buttons
| Variant | Padding | Border | BG | Hover |
|---------|---------|--------|----|-------|
| Primary (hero) | 16px 40px | none | #1a1a1a → #c5a059 | lift 2px |
| Secondary | 16px 32px | 1px solid #1a1a1a | transparent | gold border |
| Product Action | 8.8px 12.8px | 1px solid #eee | transparent | gold |
| Add to Cart | 8.8px 12.8px | 1px solid #1a1a1a | #1a1a1a → #c5a059 | white text |
| Icon Button | icon only | none | transparent | gold |
| Close/Remove | small | 1px solid #eee | transparent | — |

### 4.4 Footer
- Background: #1a1a1a
- 4-column grid (220px min each, 50px gap)
- Column 1: About brand description
- Column 2: Customer Care links
- Column 3: Quick Links
- Column 4: Newsletter (inline form with underline input)
- Bottom bar: © 2026 E-Commerce Store. All rights reserved.
- Hover: links shift 5px right + white

---

## 5. Image Assets (Unsplash)

| Section | Photo URL | Subject |
|---------|-----------|---------|
| Hero BG | photo-1441986300917-64674bd600d8 | Retail store interior |
| Feature 1 (bags) | photo-1548036328-c9fa89d128fa | Handbags |
| Feature 2 (sneakers) | photo-1511556820780-d912e42b4980 | Sneakers |
| Feature 3 (apparel) | photo-1542272604-787c3835535d | Formalwear |
| Product 1 | photo-1521572163474-6864f9cf17ab | Cotton shirt |
| Product 2 | photo-1511556820780-d912e42b4980 | Leather sneakers |
| Product 3 | photo-1548036328-c9fa89d128fa | Shoulder bag |

Base URL: `https://images.unsplash.com/` with `auto=format&fit=crop&w=` suffixed (1200 for feature, 900 for products).

---

## 6. Figma Auto-Layout Structure

Use Auto Layout throughout for responsive resizing:

```
Header (horizontal, space-between)
  ├── Logo (fixed)
  ├── Spacer (fill)
  ├── Search (hug, max-width 420px)  
  └── Icons (hug, gap 18px)

Nav (horizontal, center, gap 42px)
  └── link × 7

Hero (vertical, center, fill)
  ├── Eyebrow (hug)
  ├── H1 (hug)
  ├── Subtitle (hug)
  └── Actions (horizontal, gap 14.4px)

Feature Grid (horizontal, 1.2:1:1)
  └── Card (fill, min-height 340px)

Product Grid (wrap, 4 columns, gap 30px)
  └── Card (fill, vertical)
      ├── Image (fill, aspect 3:4)
      ├── Title (hug)
      ├── Price (hug)
      └── Button (fill)

Footer (horizontal wrap, gap 50px)
  └── Column × 4 (min 220px, vertical)
```

---

## 7. Export Checklist

- [ ] Create 8 font styles (Playfair Display 64/32/20px, Jakarta Sans 16.8/14.7/12.5px)
- [ ] Set up 25+ color styles (light theme + 3 theme overrides)
- [ ] Create 4 effect styles (card, hover, header, dropdown shadows)
- [ ] Build component set for buttons (4 variants × states)
- [ ] Build card components (feature, product, promo)
- [ ] Create header + footer master components
- [ ] Build cart panel component with overlay
- [ ] Create auth form component
- [ ] Build product details page template
- [ ] Create receipt card component
- [ ] Build policy page template
- [ ] Assemble all 12+ page frames
- [ ] Set up component variants for 4 themes
