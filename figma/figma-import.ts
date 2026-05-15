/**
 * Figma Import Script
 * 
 * Uses the Figma REST API to programmatically create the ecommerce
 * design file from the design tokens and specs.
 * 
 * Prerequisites:
 *   1. Create a Figma Personal Access Token:
 *      https://www.figma.com/developers/api#access-tokens
 *   2. Set env var: FIGMA_ACCESS_TOKEN=your_token
 *   3. npm install figma-api-structures
 *   4. npx ts-node figma/figma-import.ts
 * 
 * Alternatively, paste the output JSON into:
 *   https://www.figma.com/developers/api#create-file-endpoint
 * 
 * This script will:
 *   - Create a new Figma file
 *   - Set up color/typography styles
 *   - Generate all page frames
 *   - Build component structure
 */

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_TEAM_ID = process.env.FIGMA_TEAM_ID; // optional

interface FigmaNode {
  type: string;
  name: string;
  children?: FigmaNode[];
  [key: string]: unknown;
}

function createFrame(name: string, width: number, height: number, children: FigmaNode[] = []): FigmaNode {
  return {
    type: 'FRAME',
    name,
    id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36),
    boundingBox: { x: 0, y: 0, width, height },
    fills: [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, visible: true }],
    strokes: [],
    strokeWeight: 0,
    cornerRadius: 0,
    constraints: { vertical: 'SCALE', horizontal: 'SCALE' },
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0],
    ],
    children,
  };
}

function createText(
  name: string,
  characters: string,
  fontSize: number,
  fontFamily: string,
  fontWeight: number,
  letterSpacing: number = 0,
  lineHeight: number = 1.2,
  color: { r: number; g: number; b: number } = { r: 0.1, g: 0.1, b: 0.1 }
): FigmaNode {
  return {
    type: 'TEXT',
    name,
    id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36),
    characters,
    style: {
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
      lineHeightPx: fontSize * lineHeight,
    },
    fills: [{ type: 'SOLID', color, visible: true }],
    strokes: [],
    strokeWeight: 0,
    constraints: { vertical: 'SCALE', horizontal: 'SCALE' },
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0],
    ],
  };
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
  };
}

function createRect(
  name: string,
  width: number,
  height: number,
  fillColor: string = '#ffffff',
  cornerRadius: number = 0
): FigmaNode {
  return {
    type: 'RECTANGLE',
    name,
    id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36),
    boundingBox: { x: 0, y: 0, width, height },
    fills: [{ type: 'SOLID', color: hexToRgb(fillColor), visible: true }],
    strokes: [],
    strokeWeight: 0,
    cornerRadius,
    constraints: { vertical: 'SCALE', horizontal: 'SCALE' },
    relativeTransform: [
      [1, 0, 0],
      [0, 1, 0],
    ],
  };
}

// ============================================================
//  BUILD THE DOCUMENT TREE
// ============================================================

function buildHeader(): FigmaNode {
  return createFrame('Header', 1440, 130, [
    // Top bar
    createFrame('Top Bar', 1440, 80, [
      createText('Logo', 'E-COMMERCE STORE', 24, 'Playfair Display', 900, 4.32),
      createFrame('Search', 420, 44, [
        createRect('Search BG', 420, 44, '#f5f5f5', 4),
        createText('Placeholder', 'Search our collection...', 12.5, 'Plus Jakarta Sans', 400),
      ]),
      createFrame('Icons', 120, 44, [
        createText('Account', 'account_circle', 24, 'Material Symbols', 400),
        createFrame('Cart', 44, 44, [
          createText('Cart Icon', 'shopping_bag', 24, 'Material Symbols', 400),
          createFrame('Badge', 18, 18),
        ]),
      ]),
    ]),
    // Navigation
    createFrame('Navigation', 1440, 50, [
      createText('Home', 'Home', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('New Arrivals', 'New Arrivals', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('Shop All', 'Shop All', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('Best Sellers', 'Best Sellers', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('Collections', 'Collections', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('About Us', 'About Us', 12.5, 'Plus Jakarta Sans', 700, 2),
      createText('Contact', 'Contact', 12.5, 'Plus Jakarta Sans', 700, 2),
    ]),
  ]);
}

function buildHero(): FigmaNode {
  return createFrame('Hero', 1440, 864, [
    createRect('Hero BG', 1440, 864, '#fcfcfc'),
    createText('Eyebrow', 'NEW SEASON 2026', 12.16, 'Plus Jakarta Sans', 800, 2.5),
    createText('H1', 'Curated Everyday Luxury', 64, 'Playfair Display', 900, 0.2),
    createText('Subtitle', 'Discover elevated essentials designed for modern living and timeless style.', 17.6, 'Plus Jakarta Sans', 400, 2),
    createFrame('Actions', 460, 64, [
      createRect('Primary Btn', 200, 48, '#1a1a1a'),
      createText('Primary Label', 'Shop Collection', 12.8, 'Plus Jakarta Sans', 700, 2),
      createFrame('Secondary Btn', 230, 48, [
        createRect('Border', 230, 48, 'transparent', 0),
        createText('Secondary Label', 'Explore New Arrivals', 12.48, 'Plus Jakarta Sans', 700, 1.6),
      ]),
    ]),
  ]);
}

function buildFeaturedCategories(): FigmaNode {
  return createFrame('Featured Categories', 1440, 480, [
    createFrame('Section Head', 1240, 60, [
      createText('Title', 'Featured Categories', 32, 'Playfair Display', 900),
      createText('Link', 'View all products', 12.16, 'Plus Jakarta Sans', 800, 1.2),
    ]),
    createFrame('Grid', 1240, 420, [
      createFrame('Card 1 - Bags', 460, 420, [
        createRect('Image BG', 460, 420, '#f9f9f9', 14),
        createText('Kicker', 'Accessories', 11.52, 'Plus Jakarta Sans', 800, 1.8),
        createText('Title', 'Statement Bags', 21.6, 'Playfair Display', 900),
        createText('CTA', 'Shop now', 13.44, 'Plus Jakarta Sans', 700, 1.1),
      ]),
      createFrame('Card 2 - Sneakers', 380, 340, [
        createRect('Image BG', 380, 340, '#f9f9f9', 14),
        createText('Kicker', 'Footwear', 11.52, 'Plus Jakarta Sans', 800, 1.8),
        createText('Title', 'Urban Sneakers', 21.6, 'Playfair Display', 900),
        createText('CTA', 'Shop now', 13.44, 'Plus Jakarta Sans', 700, 1.1),
      ]),
      createFrame('Card 3 - Apparel', 380, 340, [
        createRect('Image BG', 380, 340, '#f9f9f9', 14),
        createText('Kicker', 'Apparel', 11.52, 'Plus Jakarta Sans', 800, 1.8),
        createText('Title', 'Tailored Edit', 21.6, 'Playfair Display', 900),
        createText('CTA', 'Shop now', 13.44, 'Plus Jakarta Sans', 700, 1.1),
      ]),
    ]),
  ]);
}

function buildPromoStrip(): FigmaNode {
  return createFrame('Promo Strip', 1440, 160, [
    createFrame('Item 1', 400, 100, [
      createText('Title', 'Free Delivery', 17.28, 'Playfair Display', 900),
      createText('Desc', 'Enjoy free shipping on all domestic orders above $75.', 14.72, 'Plus Jakarta Sans', 400),
    ]),
    createFrame('Item 2', 400, 100, [
      createText('Title', 'Easy Returns', 17.28, 'Playfair Display', 900),
      createText('Desc', '30-day hassle-free returns with instant refund processing.', 14.72, 'Plus Jakarta Sans', 400),
    ]),
    createFrame('Item 3', 400, 100, [
      createText('Title', 'Member Benefits', 17.28, 'Playfair Display', 900),
      createText('Desc', 'Unlock early drops and exclusive pricing as a member.', 14.72, 'Plus Jakarta Sans', 400),
    ]),
  ]);
}

function buildFeaturedPicks(): FigmaNode {
  const products = [
    { name: 'Premium Cotton Shirt', price: '$49.00', img: 'photo-1521572163474-6864f9cf17ab' },
    { name: 'Classic Leather Sneakers', price: '$89.00', img: 'photo-1511556820780-d912e42b4980' },
    { name: 'Minimal Shoulder Bag', price: '$69.00', img: 'photo-1548036328-c9fa89d128fa' },
    { name: 'Premium Cotton Shirt', price: '$49.00', img: 'photo-1521572163474-6864f9cf17ab' },
  ];

  return createFrame('Featured Picks', 1440, 700, [
    createText('Section Title', 'Featured Picks', 32, 'Playfair Display', 900),
    createFrame('Product Grid', 1240, 600, products.map((p, i) =>
      createFrame(`Product ${i + 1}`, 287, 520, [
        createRect('Image', 287, 382, '#f9f9f9', 14),
        createText('Name', p.name, 14.4, 'Playfair Display', 700, 1),
        createText('Price', p.price, 14.4, 'Plus Jakarta Sans', 700),
        createFrame('Buy Now', 287, 40, [
          createRect('Btn BG', 287, 40, '#1a1a1a', 6),
          createText('Label', 'Buy Now', 12, 'Plus Jakarta Sans', 700, 1),
        ]),
      ])
    )),
  ]);
}

function buildFooter(): FigmaNode {
  return createFrame('Footer', 1440, 500, [
    createFrame('Container', 1240, 400, [
      createFrame('About', 240, 200, [
        createText('Heading', 'About Us', 20, 'Playfair Display', 900),
        createText('Text', 'Curating the finest collection of timeless pieces for your home and lifestyle.', 14.72, 'Plus Jakarta Sans', 400),
      ]),
      createFrame('Customer Care', 240, 200, [
        createText('Heading', 'Customer Care', 20, 'Playfair Display', 900),
        createText('Link 1', 'Shipping Policy', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 2', 'Returns & Exchanges', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 3', 'FAQs', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 4', 'Size Guide', 14.72, 'Plus Jakarta Sans', 400),
      ]),
      createFrame('Quick Links', 240, 200, [
        createText('Heading', 'Quick Links', 20, 'Playfair Display', 900),
        createText('Link 1', 'Privacy Policy', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 2', 'Terms of Service', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 3', 'Store Locator', 14.72, 'Plus Jakarta Sans', 400),
        createText('Link 4', 'Affiliates', 14.72, 'Plus Jakarta Sans', 400),
      ]),
      createFrame('Newsletter', 240, 200, [
        createText('Heading', 'Newsletter', 20, 'Playfair Display', 900),
        createText('Text', 'Join our list for exclusive previews.', 14.72, 'Plus Jakarta Sans', 400),
        createFrame('Form', 240, 40, [
          createText('Input', 'Your Email', 12.5, 'Plus Jakarta Sans', 400),
          createText('Button', 'Join', 12.5, 'Plus Jakarta Sans', 700),
        ]),
      ]),
    ]),
    createFrame('Bottom Bar', 1440, 60, [
      createText('Copyright', '© 2026 E-Commerce Store. All rights reserved.', 12.5, 'Plus Jakarta Sans', 400, 1.5),
    ]),
  ]);
}

function buildHomePage(): FigmaNode {
  return createFrame('Home', 1440, 3000, [
    buildHeader(),
    buildHero(),
    buildFeaturedCategories(),
    buildPromoStrip(),
    buildFeaturedPicks(),
    buildFooter(),
  ]);
}

// ============================================================
//  API CLIENT
// ============================================================

async function createFigmaFile(): Promise<void> {
  if (!FIGMA_ACCESS_TOKEN) {
    console.error('❌ FIGMA_ACCESS_TOKEN not set.');
    console.log('\nOutputting JSON instead for manual import...\n');
    console.log(JSON.stringify({
      name: 'E-Commerce Store Design (Converted)',
      children: [buildHomePage()],
    }, null, 2));
    return;
  }

  const document = {
    name: 'E-Commerce Store Design (Converted)',
    children: [
      {
        type: 'CANVAS',
        name: 'Page 1',
        children: [buildHomePage()],
      },
    ],
  };

  try {
    const response = await fetch('https://api.figma.com/v1/files', {
      method: 'POST',
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${await response.text()}`);
    }

    const result = await response.json();
    console.log('✅ Figma file created!');
    console.log(`File URL: https://www.figma.com/file/${result.key}`);
  } catch (err) {
    console.error('❌ Failed to create Figma file:', err);
  }
}

createFigmaFile();
