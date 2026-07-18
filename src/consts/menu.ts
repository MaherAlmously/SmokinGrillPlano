export const MENU_CATEGORIES = [
  'BBQ',
  'Steaks',
  'Burgers',
  'Sandwiches',
  'Platters',
  'Kids Menu',
  'Desserts',
  'Drinks',
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export interface MenuItem {
  name: string;
  description: string;
  category: MenuCategory;
  /** Leave blank until pricing is finalized - the card shows a tasteful placeholder. */
  price?: string;
  /** Drop the photo in public/images/menu/ and set e.g. '/images/menu/smoked-brisket.jpg'. */
  image?: string;
  featured?: boolean;
  badges?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  // ── BBQ ──────────────────────────────────────────────
  {
    name: 'Smoked Brisket',
    image: '/images/menu/smoked-brisket.jpg',
    description:
      'Hand-slaughtered Zabiha beef brisket, rubbed and smoked low and slow over real wood until it pulls apart at a touch.',
    category: 'BBQ',
    featured: true,
    badges: ['Signature', 'Smoked Low & Slow'],
  },
  {
    name: 'Smoked Chicken',
    image: '/images/menu/smoked-chicken.jpg',
    description:
      'Half chicken brined overnight, then wood-smoked to a deep mahogany with juicy, fall-off-the-bone meat.',
    category: 'BBQ',
    featured: true,
    badges: ['Smoked Low & Slow'],
  },
  {
    name: 'Smoked Turkey',
    image: '/images/menu/smoked-turkey.jpg',
    description:
      'Sliced turkey breast, gently smoked and glazed - lean, tender, and full of wood-fired flavor.',
    category: 'BBQ',
    featured: true,
    badges: ['Smoked Low & Slow'],
  },
  {
    name: 'Grilled Kebabs',
    image: '/images/menu/grilled-kebabs.jpg',
    description:
      'Hand-formed beef seekh kebab, seasoned with our house spice blend, charred over the open grill, and served with rice and salad.',
    category: 'BBQ',
    featured: true,
    badges: ['Off the Grill'],
  },
  {
    name: 'Chicken Seekh Kebab',
    image: '/images/menu/chicken-kebab.jpg',
    description:
      'Juicy chicken seekh kebab off the skewer, grilled over open flame and plated with seasoned rice and fresh salad.',
    category: 'BBQ',
    featured: true,
    badges: ['Off the Grill'],
  },
  {
    name: 'Lahori Fish Fry',
    image: '/images/menu/lahori-fish-fry.jpg',
    description:
      'Crispy Lahori-style fried fish - marinated in ajwain, gram flour, and bold Punjabi spices, fried to a golden crunch.',
    category: 'BBQ',
    featured: true,
    badges: ['House Favorite'],
  },

  // ── Steaks ───────────────────────────────────────────
  {
    name: 'Ribeye Steak',
    image: '/images/menu/ribeye-steak.jpg',
    description:
      'A hand-cut Zabiha ribeye, seared over fire and finished with smoked butter. Rich, marbled, unforgettable.',
    category: 'Steaks',
    featured: true,
    badges: ['Signature'],
  },
  {
    name: 'NY Strip Steak',
    image: '/images/menu/ny-strip.jpg',
    description: 'A classic strip with a bold char crust and a tender center, grilled to your liking.',
    category: 'Steaks',
  },
  {
    name: 'Steak & Shrimp',
    image: '/images/menu/steak-shrimp.jpg',
    description: 'Fire-grilled steak paired with garlic-butter grilled shrimp for the best of both worlds.',
    category: 'Steaks',
  },

  // ── Burgers ──────────────────────────────────────────
  {
    name: 'Boss Burger',
    image: '/images/menu/boss-burger.jpg',
    description:
      'Our double-stacked signature: two smash patties, melted cheese, smoked beef strips, and house Boss sauce on a toasted brioche bun.',
    category: 'Burgers',
    featured: true,
    badges: ['Signature'],
  },
  {
    name: 'Zinger Chicken Burger',
    image: '/images/menu/zinger-burger.jpg',
    description:
      'Crispy, spicy fried chicken breast with cool ranch, lettuce, and pickles - crunch in every bite.',
    category: 'Burgers',
    featured: true,
    badges: ['Spicy'],
  },
  {
    name: 'Grilled Chicken Burger',
    image: '/images/menu/grilled-chicken-burger.jpg',
    description:
      'Flame-grilled marinated chicken breast with lettuce, tomato, and garlic aioli. Lighter, but never plain.',
    category: 'Burgers',
    featured: true,
    badges: ['Off the Grill'],
  },
  {
    name: 'Classic Cheeseburger',
    image: '/images/menu/classic-cheeseburger.jpg',
    description: 'A juicy smash patty, American cheese, lettuce, tomato, onion, and house sauce.',
    category: 'Burgers',
  },

  // ── Sandwiches ───────────────────────────────────────
  {
    name: 'Philly Cheesesteak',
    image: '/images/menu/philly-cheesesteak.jpg',
    description:
      'Thin-sliced ribeye griddled with onions and peppers, smothered in melted cheese on a toasted hoagie roll.',
    category: 'Sandwiches',
    featured: true,
    badges: ['House Favorite'],
  },
  {
    name: 'Smoked Brisket Sandwich',
    image: '/images/menu/brisket-sandwich.jpg',
    description: 'Chopped wood-smoked brisket piled high with pickles, onions, and BBQ sauce.',
    category: 'Sandwiches',
  },
  {
    name: 'Grilled Chicken Wrap',
    image: '/images/menu/chicken-wrap.jpg',
    description: 'Char-grilled chicken, crisp veggies, and creamy garlic sauce wrapped in a warm tortilla.',
    category: 'Sandwiches',
  },

  // ── Platters ─────────────────────────────────────────
  {
    name: 'Pitmaster Platter',
    image: '/images/menu/pitmaster-platter.jpg',
    description:
      'The full smokehouse experience: brisket, smoked chicken, and kebabs with two sides and fresh-baked bread.',
    category: 'Platters',
    badges: ['Feeds 2–3'],
  },
  {
    name: 'BBQ Combo Platter',
    image: '/images/menu/bbq-combo.jpg',
    description: 'Choose any two smoked meats with two sides - the perfect introduction to the pit.',
    category: 'Platters',
  },
  {
    name: 'Family Feast',
    image: '/images/menu/family-feast.jpg',
    description:
      'A generous spread of smoked and grilled favorites built for the whole table. Ask about today’s selection.',
    category: 'Platters',
    badges: ['Feeds 4–6'],
  },

  {
    name: 'Lamb Shank Platter',
    image: '/images/menu/lamb-shank.jpg',
    description:
      'Slow-cooked lamb shank, fall-off-the-bone tender, served over fragrant rice with fresh salad and house white sauce.',
    category: 'Platters',
    featured: true,
    badges: ['House Favorite'],
  },
  {
    name: 'Loaded Chicken Fries',
    image: '/images/menu/loaded-fries.jpg',
    description:
      'Crispy fries piled with fried chicken, slaw, and a drizzle of house sauces. Big, messy, and worth it.',
    category: 'Platters',
    badges: ['House Favorite'],
  },

  // ── Kids Menu ────────────────────────────────────────
  {
    name: 'Kids Chicken Tenders',
    image: '/images/menu/kids-tenders.jpg',
    description: 'Crispy golden tenders with fries and a small drink.',
    category: 'Kids Menu',
    featured: true,
  },
  {
    name: 'Kids Slider & Fries',
    image: '/images/menu/kids-slider.jpg',
    description: 'A mini smash burger made just their size, with fries.',
    category: 'Kids Menu',
  },
  {
    name: 'Kids Grilled Chicken Bites',
    image: '/images/menu/kids-chicken-bites.jpg',
    description: 'Tender grilled chicken bites with rice or fries.',
    category: 'Kids Menu',
  },

  // ── Desserts ─────────────────────────────────────────
  {
    name: 'Smoked Chocolate Brownie',
    image: '/images/menu/brownie.jpg',
    description: 'Warm fudge brownie with a whisper of smoke, served with vanilla ice cream.',
    category: 'Desserts',
    featured: true,
    badges: ['House Favorite'],
  },
  {
    name: 'New York Cheesecake',
    image: '/images/menu/cheesecake.jpg',
    description: 'Rich and creamy classic cheesecake with a buttery graham crust.',
    category: 'Desserts',
  },
  {
    name: 'Kunafa',
    image: '/images/menu/kunafa.jpg',
    description: 'Golden, crispy kunafa layered with sweet cheese and syrup - an old-world finish.',
    category: 'Desserts',
  },

  // ── Drinks ───────────────────────────────────────────
  {
    name: 'Fresh Lemonade',
    image: '/images/menu/lemonade.jpg',
    description: 'Squeezed daily, lightly sweetened, served over ice.',
    category: 'Drinks',
  },
  {
    name: 'Mango Lassi',
    image: '/images/menu/mango-lassi.jpg',
    description: 'Silky yogurt shake blended with ripe mango.',
    category: 'Drinks',
  },
  {
    name: 'Soft Drinks & Iced Tea',
    image: '/images/menu/soft-drinks.jpg',
    description: 'Fountain classics and fresh-brewed iced tea.',
    category: 'Drinks',
  },
];

/** The 12 dishes featured on the homepage, in display order. */
export const FEATURED_ORDER = [
  'Smoked Brisket',
  'Ribeye Steak',
  'Boss Burger',
  'Zinger Chicken Burger',
  'Grilled Chicken Burger',
  'Philly Cheesesteak',
  'Smoked Chicken',
  'Chicken Seekh Kebab',
  'Grilled Kebabs',
  'Lahori Fish Fry',
  'Lamb Shank Platter',
  'Smoked Chocolate Brownie',
];

export const FEATURED_ITEMS: MenuItem[] = FEATURED_ORDER.map(
  (name) => MENU_ITEMS.find((i) => i.name === name)!,
);
