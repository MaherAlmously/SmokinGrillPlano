export const SITE = {
  name: "Smokin' Grill Plano",
  url: 'https://www.smokingrillplano.com',
  defaultTitle: "Smokin' Grill",
  defaultDescription:
    "Smokin' Grill is Plano's premier 100% Zabiha Halal smokehouse - authentic wood-smoked brisket, steaks, burgers, and grilled favorites. Hand-slaughtered meat only. Family friendly. Dine in, takeout, delivery, and catering.",
  locale: 'en_US',
  twitterHandle: '@smokingrillplano',
  ogImage: '/og-default.jpg',
};

export const RESTAURANT = {
  name: "Smokin' Grill Plano",
  telephone: '+1-469-298-0222',
  phoneDisplay: '469-298-0222',
  phoneHref: 'tel:+14692980222',
  priceRange: '$$',
  cuisine: ['Barbecue', 'Halal', 'American', 'Grill'],
  streetAddress: '3611 14th St Suite 110',
  addressLocality: 'Plano',
  addressRegion: 'TX',
  postalCode: '75074',
  addressCountry: 'US',
  latitude: 33.0176,
  longitude: -96.6631,
  openingHours: ['Mo-Th 11:00-23:00', 'Fr-Sa 11:00-24:00', 'Su 11:00-23:00'],
  sameAs: [],
};

export const ADDRESS_LINE = '3611 14th St Suite 110, Plano, TX 75074';

export const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(`Smokin' Grill, ${ADDRESS_LINE}`);

export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(`Smokin' Grill, ${ADDRESS_LINE}`) +
  '&output=embed';

export const HOURS: { day: string; hours: string }[] = [
  { day: 'Monday', hours: '11:00 AM – 11:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM – 11:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM – 11:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 11:00 PM' },
  { day: 'Friday', hours: '11:00 AM – 12:00 AM' },
  { day: 'Saturday', hours: '11:00 AM – 12:00 AM' },
  { day: 'Sunday', hours: '11:00 AM – 11:00 PM' },
];

export const AMENITIES = [
  'Dine-In',
  'Takeout',
  'Delivery',
  'Reservations',
  'Free Parking',
  'Wheelchair Accessible',
  'Family Friendly',
  'Large Group Friendly',
];
