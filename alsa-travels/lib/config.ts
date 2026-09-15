// ============================================================
// SITE-WIDE CONFIGURATION
// Update these values to match your business details
// ============================================================

export const siteConfig = {
  name: 'Alsa Travels',
  tagline: "Nigeria's #1 Travel & Tours Company",
  description:
    'Nigeria\'s trusted travel and tours company for China, Dubai, Turkey, Canada and the UK. Group trips, vacations, business trips, and visa processing — handled start to finish.',

  // ── Contact ────────────────────────────────────────────────
  // Replace with your real WhatsApp number (international format, no + or spaces)
  whatsappNumber: '2348000000000',
  phoneNumber: '+234 800 000 0000',
  email: 'hello@alsatravels.com',
  address: 'Lagos, Nigeria',

  // ── Social ─────────────────────────────────────────────────
  instagramHandle: '@alsatravels',
  instagramUrl: 'https://instagram.com/alsatravels',

  // ── Stats (update as numbers grow) ─────────────────────────
  stats: {
    visasProcessed: 1000,
    countriesServed: 5,
    satisfactionRate: 98,
    yearsActive: 5,
  },
} as const

// Helper: generates a WhatsApp deep link with an optional pre-filled message
export function whatsappLink(message?: string): string {
  const encoded = encodeURIComponent(
    message ?? "Hello Alsa Travels! I'd like to enquire about a trip."
  )
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}
