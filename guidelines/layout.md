# Layout Grid Specifications

## Page Structure
- All pages use a centered layout with max-width 1240px
- Outer padding: 32px (--gutter)
- Flex column layout: header → main (flex-1) → footer

## Home Page Layout

### Section 1: Header
- Top bar height: ~80px with logo, search, icons
- Navigation: ~50px with 7 centered links

### Section 2: Hero
- Height: 80vh
- Centered content with CTA buttons
- Background: image with linear-gradient overlay

### Section 3: Featured Categories
- 3-column grid: 1.2fr 1fr 1fr
- Column gap: 20px
- Cards: min-height 340px (large card: 420px)

### Section 4: Promo Strip
- 3 equal columns
- Gap: 18px

### Section 5: Featured Picks
- 4-column product grid
- Gap: 30px

## Auth Pages
- 2-column grid: 1.1fr 0.9fr
- Left: hero text, Right: auth card
- Max-width container: 1100px
- Breakpoint at 920px: single column

## Product Details
- 2-column grid: 1.05fr 0.95fr
- Left: product gallery (aspect 4/5)
- Right: product info (title, price, description, size, actions)
- Detail panels below: 2-column grid

## Payment Page
- Centered card: max-width 540px
- Payment method chips: 3-column grid

## Receipt
- Centered card: max-width 760px
- Meta grid: 2 columns
- Full-width item table

## Policy Pages
- Centered content: max-width 920px
- Accordion-style sections with border cards

## Breakpoints
- 900px: collapse multi-column grids to single
- 600px: product grid 1 column, footer 1 column
