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
  // WhatsApp numbers in international format, without + or spaces
  whatsappNumbers: {
    visa: '2348080458235',
    travel: '2348083519864',
  },
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

// Helper: generates a WhatsApp deep link for the relevant service desk
export function whatsappLink(message?: string, department: 'visa' | 'travel' = 'travel'): string {
  const encoded = encodeURIComponent(
    message ?? "Hello Alsa Travels! I'd like to enquire about a trip."
  )
  return `https://wa.me/${siteConfig.whatsappNumbers[department]}?text=${encoded}`
}
