# Component Guidelines

## Buttons

| Variant | Style | Hover |
|---------|-------|-------|
| Primary Hero | bg-primary, text-white, uppercase, 2px spacing, padding 16px 40px | bg-accent, lift 2px |
| Secondary Hero | border-primary, transparent bg, uppercase, 1.6px spacing | border-accent, text-accent |
| Add to Cart | bg-primary, text-white, 6px radius, 8.8px 12.8px padding | bg-accent |
| Product Action | transparent, border-border, 6px radius | border-accent, text-accent |

## Cards

### Product Card
- Border: 1px solid var(--border)
- Border-radius: 14px
- Padding: 15px 15px 18px
- Image aspect ratio: 3/4
- Hover: translateY(-6px), border-accent, shadow-card-hover

### Feature Card
- Border-radius: 14px
- Background overlay: gradient black 60% → 5%
- Text: white
- Hover: translateY(-6px), shadow-feature-hover, image scale 1.06

### Promo Item
- Border: 1px solid var(--border)
- Border-radius: 12px
- Background: var(--bg-soft)
- Hover: translateY(-4px), border-accent

## Forms

### Search Input
- Background: var(--input-bg) (#f5f5f5)
- Border-radius: 4px
- Padding: 10px 15px
- Max-width: 420px
- Focus: bg white, border-accent

### Auth Form
- Input border-radius: 10px
- Padding: 12px
- Border: 1px solid var(--border)
- Focus: 2px outline accent

## Navigation
- Border: top and bottom 1px solid var(--border)
- Links: uppercase, 2px letter-spacing, 700 weight
- Hover: color accent, bottom underline animation (center-expand)

## Cart Panel
- Fixed right, 420px wide
- Full viewport height
- Transition: slide-in 0.3s ease
- Overlay: bg black 40% opacity

## Footer
- Background: #1a1a1a
- 4 columns (auto-fit, min 220px)
- Links: #b0b0b0, hover white + translateX(5px)
- Newsletter: bottom-border form
- Bottom bar: copyright, uppercase, 1.5px spacing
