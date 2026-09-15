import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { whatsappLink } from '@/lib/config'
import { Heart, Compass, Palmtree, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury & Family Vacations | Alsa Travels',
  description: 'Handcrafted leisure vacations to Dubai, Turkey, and China for Nigerian families, couples, and individuals.',
}

const vacationDestinations = [
  {
    country: 'Dubai, UAE',
    flag: '🇦🇪',
    tagline: 'Modern Elegance & High-Octane Luxury',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=80',
    slug: '/dubai',
    experiences: [
      'Private desert safari with Arabian dining',
      'Burj Khalifa observatory & VIP lounge',
      'Aquaventure waterpark at Atlantis Palm',
      'World-class shopping at Dubai Mall & Souks',
    ],
  },
  {
    country: 'Turkey (Istanbul & Cappadocia)',
    flag: '🇹🇷',
    tagline: 'Timeless History & Natural Wonders',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&q=80',
    slug: '/turkey',
    experiences: [
      'Sunrise hot air balloon ride over Cappadocia',
      'Bosphorus sunset yacht cruise',
      'Historic tours of Hagia Sophia & Blue Mosque',
      'Pamukkale thermal pools and antique ruins',
    ],
  },
  {
    country: 'China (Beijing & Shanghai)',
    flag: '🇨🇳',
    tagline: 'Imperial Heritage & Futurist Skylines',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1000&q=80',
    slug: '/china',
    experiences: [
      'Walk the Great Wall of China with scenic cable car',
      'Forbidden City and Temple of Heaven exploration',
      'Shanghai Bund skyline & Huangpu river cruise',
      'High-speed bullet train travel between megacities',
    ],
  },
]

export default function VacationPage() {
  return (
    <>
      <PageHero
        title="Unforgettable Vacations, Flawlessly Managed"
        subtitle="Experience world-class leisure in Dubai, Turkey, and China without the stress of visa delays or booking headaches."
        imageSrc="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1400&q=80"
        badge="Curated Leisure 🏖️"
        ctaText="Plan My Getaway"
        ctaHref={whatsappLink('Hello Alsa Travels! I want to plan a vacation package.')}
        ctaExternal
      />

      {/* Featured Vacation Havens */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Handpicked Destinations</span>
            <h2 className="text-navy font-black text-3xl md:text-5xl mt-2">Where Will You Reconnect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">
              Every vacation package is customized for Nigerian passport holders, featuring visa handling, handpicked boutique hotels, and authentic private tours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vacationDestinations.map((dest) => (
              <div key={dest.country} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-white">
                <div className="h-56 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dest.image} alt={dest.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-2xl mr-2">{dest.flag}</span>
                    <span className="font-black text-xl">{dest.country}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-amber-dark font-semibold text-xs tracking-wider uppercase mb-3">{dest.tagline}</p>
                    <ul className="space-y-2 mb-6">
                      {dest.experiences.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Sparkles size={15} className="text-amber flex-shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <Link href={dest.slug} className="btn-outline-navy w-full justify-center text-sm py-2.5">
                      Explore Country Page
                    </Link>
                    <a
                      href={whatsappLink(`Hi Alsa Travels! I'm interested in a vacation to ${dest.country}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-sm py-2.5"
                    >
                      WhatsApp Travel Desk
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Inquiry Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber font-bold text-sm uppercase tracking-widest">Custom Itineraries</span>
              <h2 className="text-navy font-black text-3xl md:text-4xl mt-2 mb-4">
                Designed Around Your Budget & Schedule
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Traveling as a solo adventurer, honeymooning couple, or a family group? We tailor daily activities, kid-friendly excursions, and executive transfers to match your desires.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <Heart className="text-amber mb-2" size={24} />
                  <h4 className="font-bold text-navy text-sm">Honeymoons</h4>
                  <p className="text-gray-500 text-xs mt-1">Romantic stays & sunset experiences</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <Palmtree className="text-amber mb-2" size={24} />
                  <h4 className="font-bold text-navy text-sm">Family Holidays</h4>
                  <p className="text-gray-500 text-xs mt-1">Stress-free transfers & kids entry</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4">Request a Vacation Quote</h3>
              <ContactForm defaultTripType="vacation" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
