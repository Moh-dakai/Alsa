import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Dubai Trips & Visa Processing | Alsa Travels',
  description:
    'Dubai vacation packages, shopping tours, business expo trips, and UAE visa processing for Nigerians. Alsa Travels handles everything.',
}

// ── Static data ─────────────────────────────────────────────────────────────

const packages = [
  {
    icon: '🛍️',
    title: 'Shopping Tours',
    description:
      "Dubai is a shopper's paradise. We arrange guided tours to the iconic Gold Souk, Deira spice markets, Mall of the Emirates, Dubai Mall, and fashion wholesale districts.",
    highlights: [
      'Gold Souk & Deira Markets',
      'Mall of the Emirates & Dubai Mall',
      'Dragon Mart sourcing tour',
      'Perfume Souk visit',
      'Shopping transport & guide',
    ],
  },
  {
    icon: '🏙️',
    title: 'City Highlights',
    description:
      'See the best of Dubai in style — the iconic Burj Khalifa observation deck, desert safari, Dubai Creek dhow cruise, and the Palm Jumeirah.',
    highlights: [
      'Burj Khalifa (124th floor)',
      'Desert Safari & BBQ dinner',
      'Dubai Frame & Creek cruise',
      'Palm Jumeirah & Atlantis',
      'Museum of the Future',
    ],
  },
  {
    icon: '💼',
    title: 'Business & Expos',
    description:
      "Dubai hosts some of the world's biggest trade shows at Expo City and Dubai World Trade Centre. We handle your trip so you can focus entirely on business.",
    highlights: [
      'Dubai Expo City attendance',
      'GITEX, Big5, Gulfood & more',
      'Business visa processing',
      'Hotel near DWTC',
      'Airport executive transfers',
    ],
  },
  {
    icon: '👥',
    title: 'Group Travel',
    description:
      'Planning a group vacation, church retreat, or corporate outing to Dubai? Alsa organises everything from group visas to shared accommodation and itinerary.',
    highlights: [
      'Group visa coordination',
      'Group hotel rates',
      'Private group transport',
      'Tailored group itinerary',
      'Dedicated group coordinator',
    ],
  },
]

const visaRequirements = [
  'Valid Nigerian passport (minimum 6 months validity)',
  'Coloured passport photograph (white background)',
  'Completed UAE visa application form',
  'Confirmed return flight booking/itinerary',
  'Hotel reservation for duration of stay',
  'Bank statement — last 3 months, minimum ₦300,000 balance',
  'Employment letter (stating position and leave approval) or business registration certificate',
]

// ── Page component ───────────────────────────────────────────────────────────

export default function DubaiPage() {
  const waLink = whatsappLink(
    "Hello Alsa Travels! I'm interested in a Dubai trip or UAE visa. Please send me more information."
  )

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
        badge="FULL SERVICE — DUBAI"
        title="Dubai Trips & Visa Processing"
        subtitle="Shopping, sightseeing, business expos, and group travel — all handled from Lagos to Dubai."
      />

      {/* 2. Intro */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-3">
                Why Dubai?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-5 leading-tight">
                The Middle East's Most Spectacular City — Effortlessly Accessible
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dubai is within 6–7 hours of Lagos and offers Nigerians an unmatched mix of world-class
                shopping, luxury resorts, and mega business events. With a favourable visa process
                and direct flights available, now is the perfect time to visit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Alsa Travels manages your UAE visa, accommodation, airport transfers, guided tours,
                and local support so your Dubai experience is completely stress-free.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '🇦🇪', label: 'United Arab Emirates' },
                { value: '3–7', label: 'Working days for UAE visa' },
                { value: '30', label: 'Days visa validity (extendable)' },
                { value: '24/7', label: 'On-trip support' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1B2254] rounded-2xl p-6 text-center shadow-md"
                >
                  <div className="text-3xl font-extrabold text-[#F5A623] mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Packages */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-2">
              Our Dubai Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254]">
              What We Offer for Dubai
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-xl font-bold text-[#1B2254] mb-2">{pkg.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.description}</p>
                <ul className="mt-auto space-y-2">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-2">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-10">
            Your Dubai Trip in 4 Easy Steps
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Contact Us', detail: 'Message us on WhatsApp with your travel dates and goals.' },
              { step: '02', title: 'Package Selection', detail: 'We recommend the right package and handle your UAE visa.' },
              { step: '03', title: 'Preparation', detail: 'Flights, hotel, and itinerary confirmed before you depart.' },
                    { step: '04', title: 'Enjoy Dubai', detail: "Land, explore, shop, and do business — we've got your back." },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="w-14 h-14 rounded-full bg-[#F5A623] text-[#1B2254] font-extrabold text-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  {s.step}
                </div>
                <h4 className="font-bold text-[#1B2254] mb-1">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.detail}</p>
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
              UAE Visa Requirements for Nigerians
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Alsa processes your UAE Tourist or Business visa quickly and correctly. Here's what you'll need:
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
              { label: 'Processing Time', value: '3–7 working days' },
              { label: 'Visa Validity', value: '30 days' },
              { label: 'Extendable', value: 'Yes — in-country' },
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
            Book Your Dubai Trip Today
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From visa to boarding gate and back home — Alsa Travels takes care of every detail.
            Start your Dubai journey with a simple WhatsApp message.
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
