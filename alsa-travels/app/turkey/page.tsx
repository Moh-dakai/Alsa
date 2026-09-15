import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Turkey Travel Packages | Alsa Travels',
  description:
    'Turkey travel packages for Nigerians — Grand Bazaar shopping, Cappadocia, Bosphorus cruise, leather markets, and e-Visa processing. Alsa Travels handles it all.',
}

// ── Static data ─────────────────────────────────────────────────────────────

const highlights = [
  {
    icon: '🛍️',
    title: 'Grand Bazaar & Markets',
    description:
      "Istanbul's Grand Bazaar is one of the world's oldest covered markets — thousands of shops selling leather goods, textiles, ceramics, gold, and spices. Perfect for bulk buyers and fashion traders.",
  },
  {
    icon: '🎈',
    title: 'Cappadocia',
    description:
      'Fairy chimneys, cave hotels, and breathtaking hot air balloon rides over a surreal landscape at sunrise. One of the most photographed destinations in the world.',
  },
  {
    icon: '⛴️',
    title: 'Bosphorus Cruise',
    description:
      'A scenic cruise across the strait that bridges Europe and Asia. Enjoy stunning views of Ottoman palaces, mosques, and the Istanbul skyline from the water.',
  },
  {
    icon: '👜',
    title: 'Leather & Textile Sourcing',
    description:
      "Turkey is a global leader in leather goods and textiles. We connect business travellers with wholesale markets in Istanbul's Laleli and Osmanbey districts.",
  },
  {
    icon: '🕌',
    title: 'Historical Istanbul',
    description:
      "Blue Mosque, Hagia Sophia, Topkapi Palace, and Dolmabahçe Palace — Istanbul's historic peninsula is a UNESCO-recognized treasure trove of architecture and culture.",
  },
  {
    icon: '🌊',
    title: 'Pamukkale & Ephesus',
    description:
      'Cotton-white thermal terraces at Pamukkale and the ancient Roman city of Ephesus are unmissable for culture-lovers making the most of their Turkey trip.',
  },
]

const eVisaInfo = [
  { label: 'Application Method', value: 'Online via evisa.gov.tr' },
  { label: 'Processing Time', value: '24–72 hours' },
  { label: 'Cost', value: 'Varies by nationality' },
  { label: 'Who applies', value: 'Alsa handles it for you' },
]

const visaRequirements = [
  'Valid Nigerian passport (minimum 6 months validity beyond travel dates)',
  'Valid email address to receive e-Visa',
  'Credit or debit card for online payment (Visa/Mastercard)',
  'Confirmed hotel booking or invitation letter',
  'Return flight itinerary',
  'Bank statement (last 3 months) showing sufficient funds',
]

// ── Page component ───────────────────────────────────────────────────────────

export default function TurkeyPage() {
  const waLink = whatsappLink(
    "Hello Alsa Travels! I'm interested in a Turkey travel package. Please send me more details."
  )

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80"
        badge="FULL SERVICE — TURKEY"
        title="Turkey Travel Packages"
        subtitle="Grand Bazaar shopping, Cappadocia sunrise balloons, Bosphorus cruises, and leather markets — we plan every detail."
      />

      {/* 2. Intro */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-3">
                Why Turkey?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-5 leading-tight">
                Where East Meets West — A Traveller's Paradise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Turkey is one of the world's most visited countries, offering an extraordinary blend
                of ancient history, modern cities, natural wonders, and some of the best wholesale
                markets in the world. For Nigerian traders and tourists alike, it's a destination
                that delivers every time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Best of all — Nigerians can obtain a Turkish e-Visa online in as little as 24 hours.
                Alsa Travels handles the application so you don't have to navigate the process alone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '🇹🇷', label: 'Turkey — bridging Europe & Asia' },
                { value: '24–72h', label: 'e-Visa processing time' },
                { value: '90', label: 'Days stay permitted' },
                { value: '100%', label: 'Online application — no embassy queue' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1B2254] rounded-2xl p-6 text-center shadow-md"
                >
                  <div className="text-2xl font-extrabold text-[#F5A623] mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. e-Visa Banner */}
      <section className="bg-[#F5A623]/10 border-y border-[#F5A623]/30 py-10 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-[#F5A623] rounded-2xl w-20 h-20 flex items-center justify-center text-4xl shadow-md">
              ⚡
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-[#1B2254] mb-2">
                Turkey e-Visa — Fast, Online, Hassle-Free
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike many countries that require an embassy visit, Turkey's e-Visa is applied for
                entirely online at{' '}
                <span className="font-semibold text-[#1B2254]">evisa.gov.tr</span>. Alsa Travels
                manages the full application on your behalf — from filling the form to confirming
                your approved visa. No queues, no embassy visits.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {eVisaInfo.map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 border border-[#F5A623]/40 text-center min-w-[130px]">
                  <div className="text-[#1B2254] font-bold text-sm">{item.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trip Highlights */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-2">
              Trip Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254]">
              What Awaits You in Turkey
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#F5A623]/40 hover:bg-[#F5A623]/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1B2254] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Visa Requirements */}
      <section className="bg-[#1B2254] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#F5A623] text-[#1B2254] font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Visa Requirements
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Turkish e-Visa Requirements for Nigerians
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              The Turkish e-Visa is straightforward. Here's what you'll need to provide — Alsa handles the rest.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-10 mb-8">
            <ul className="space-y-4">
              {visaRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5A623] text-[#1B2254] font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-white/90 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Application', value: 'Online (evisa.gov.tr)' },
              { label: 'Processing Time', value: '24–72 hours' },
              { label: 'Maximum Stay', value: 'Up to 90 days' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5A623] rounded-xl p-5 text-center">
                <div className="text-[#1B2254] font-extrabold text-lg">{item.value}</div>
                <div className="text-[#1B2254]/70 text-sm font-medium mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-4">
            Ready to Explore Turkey?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From your e-Visa to the Grand Bazaar — Alsa Travels plans every step of your Turkey
            experience. Message us on WhatsApp to get started.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F5A623] text-[#1B2254] font-extrabold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#d4891a] hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Us on WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-5">
            We typically reply within minutes during business hours.
          </p>
        </div>
      </section>
    </main>
  )
}
