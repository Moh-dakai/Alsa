import type { Review, Destination } from './types'

// ── Customer Reviews (seed data — replace with API call when backend is live) ──
export const reviews: Review[] = [
  {
    id: 1,
    name: 'Mrs. Adaeze O.',
    instagramHandle: '@adaeze_fabrics',
    role: 'Fabric Importer, Lagos',
    reviewText:
      'Alsa handled my China business trip and visa in under two weeks. Smoothest travel experience I\'ve ever had.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Adaeze+O&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 2,
    name: 'Chidi N.',
    instagramHandle: '@chidi_biz',
    role: 'Business Owner, Abuja',
    reviewText:
      "I've done three group trips with them now. Organised, transparent, and they actually answer their phone.",
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Chidi+N&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 3,
    name: 'Funmilayo B.',
    instagramHandle: '@funmi_trader',
    role: 'Trader, Kano',
    reviewText:
      'My China visa was rejected once before with another agency. Alsa got it approved in 10 working days.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Funmilayo+B&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 4,
    name: 'Emeka U.',
    instagramHandle: '@emeka_travels',
    role: 'First-time traveller',
    reviewText:
      'The Dubai group trip was well planned — hotel, tours, everything sorted before we even landed.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Emeka+U&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 5,
    name: 'Hauwa M.',
    instagramHandle: '@hauwa_m',
    role: 'Business Owner',
    reviewText:
      'Professional from the first call to the day we boarded. Already booking my next trip with them.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Hauwa+M&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 6,
    name: 'Mr. Mohammed A.',
    instagramHandle: '@mohammed_imports',
    role: 'Importer, Port Harcourt',
    reviewText:
      'Got my UK visa without stress. The team guided me through every document needed. Very professional.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Mohammed+A&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 7,
    name: 'Ngozi K.',
    instagramHandle: '@ngozi_k_official',
    role: 'Fashion Designer, Lagos',
    reviewText:
      'Turkey group trip was phenomenal. Shopping, sightseeing, everything was perfectly coordinated.',
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Ngozi+K&background=1B2254&color=F5A623&size=80',
  },
  {
    id: 8,
    name: 'Tunde F.',
    instagramHandle: '@tunde_f_ceo',
    role: 'CEO, Ibadan',
    reviewText:
      "Best travel agency in Nigeria, hands down. My entire team traveled to China and back without a single issue.",
    rating: 5,
    avatarUrl: 'https://ui-avatars.com/api/?name=Tunde+F&background=1B2254&color=F5A623&size=80',
  },
]

// ── Destinations ────────────────────────────────────────────────────────────
export const destinations: Destination[] = [
  {
    slug: 'china',
    name: 'China',
    flag: '🇨🇳',
    heroImage:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80',
    description:
      'The world\'s largest trading hub. We handle your visa, flights, hotels, factory visits, and Canton Fair attendance — so you can focus on business.',
    services: ['vacation', 'business_trip', 'group_trip', 'visa_only'],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    flag: '🇦🇪',
    heroImage:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    description:
      'From luxury vacations to business expos, Dubai has it all. Let us plan every detail of your UAE trip.',
    services: ['vacation', 'business_trip', 'group_trip', 'visa_only'],
  },
  {
    slug: 'turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    heroImage:
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80',
    description:
      'Istanbul\'s Grand Bazaar, Cappadocia\'s hot air balloons, and world-class leather markets. Turkey is perfect for business and leisure.',
    services: ['vacation', 'business_trip', 'group_trip', 'visa_only'],
  },
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    heroImage:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80',
    description:
      'We specialize in Canadian visa applications for Nigerian applicants — tourist, business, and student visas.',
    services: ['visa_only'],
    visaOnly: true,
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    heroImage:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
    description:
      'UK Standard Visitor Visa processing with expert document preparation, personal consultation, and high approval rates.',
    services: ['visa_only'],
    visaOnly: true,
  },
]

// ── Hero Carousel Images (Unsplash placeholders — replace with real trip photos) ──
export const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1400&q=80', alt: 'The Great Wall of China' },
  { src: 'https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?w=1400&q=80', alt: 'Shanghai skyline' },
  { src: 'https://images.unsplash.com/photo-1591456983933-0c4fd7e59b33?w=1400&q=80', alt: 'Beijing city' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80', alt: 'Dubai skyline' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=80', alt: 'Dubai Burj Khalifa' },
  { src: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1400&q=80', alt: 'Istanbul Turkey' },
  { src: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80', alt: 'Turkey Grand Bazaar' },
  { src: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=1400&q=80', alt: 'Cappadocia balloons' },
  { src: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1400&q=80', alt: 'Nigeria business travellers' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80', alt: 'Business meeting' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80', alt: 'Group trip celebration' },
  { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&q=80', alt: 'Travel adventure' },
  { src: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1400&q=80', alt: 'Vacation beach' },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80', alt: 'Mountain travel' },
  { src: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=1400&q=80', alt: 'Airport terminal' },
  { src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80', alt: 'Airplane window view' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80', alt: 'Hotel luxury' },
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&q=80', alt: 'Resort hotel' },
  { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=80', alt: 'Dubai night' },
  { src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1400&q=80', alt: 'China market' },
]
