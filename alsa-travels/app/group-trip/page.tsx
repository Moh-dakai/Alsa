import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { whatsappLink } from '@/lib/config'
import { CheckCircle, Calendar, Users, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Curated Group Trips | Alsa Travels',
  description: 'Join curated group trips to China, Dubai, and Turkey departing from Lagos and Abuja. Flights, accommodation, visa, and tours included.',
}

const upcomingTrips = [
  {
    destination: 'China Canton Fair & Sourcing Tour',
    dates: 'April 2027 (Phase 1 & 2)',
    flag: '🇨🇳',
    priceNote: 'All-inclusive package',
    spots: '8 Spots Left',
    highlights: ['Guangzhou & Canton Fair', 'Yiwu Wholesale Market', 'Factory visits with interpreter', '4-Star Hotel + Daily Breakfast'],
  },
  {
    destination: 'Dubai Luxury & Business Group Tour',
    dates: 'November 2026',
    flag: '🇦🇪',
    priceNote: 'All-inclusive package',
    spots: '5 Spots Left',
    highlights: ['Burj Khalifa & Desert Safari', 'Dubai Expo & Business Networking', 'Luxury Marina Dhow Cruise', 'Airport Transfers + Visa'],
  },
  {
    destination: 'Turkey Shopping & Heritage Experience',
    dates: 'September 2026',
    flag: '🇹🇷',
    priceNote: 'All-inclusive package',
    spots: '6 Spots Left',
    highlights: ['Grand Bazaar & Textile Hubs', 'Bosphorus Yacht Cruise', 'Cappadocia Cave Hotel & Balloon Tour', 'Turkish e-Visa Assistance'],
  },
]

const steps = [
  { step: '01', title: 'Consultation & Inquiry', desc: 'Reach out via WhatsApp or submit your interest for the upcoming group cohort.' },
  { step: '02', title: 'Reserve Your Seat', desc: 'Lock in your slot with an initial commitment deposit and receive your onboarding kit.' },
  { step: '03', title: 'Documentation & Visa', desc: 'Our dedicated visa desk handles all paperwork, bookings, and embassy submissions.' },
  { step: '04', title: 'Pre-Departure Briefing', desc: 'Meet your fellow Nigerian travelers, review the itinerary, and receive travel essentials.' },
  { step: '05', title: 'Depart Together', desc: 'Board your flight from Lagos or Abuja and enjoy a seamless, fully-guided international journey.' },
]

export default function GroupTripPage() {
  return (
    <>
      <PageHero
        title="Curated Group Trips for Nigerian Business & Leisure"
        subtitle="Travel together, save more, and build lasting business networks across China, Dubai, and Turkey."
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
        badge="Group Departures 👥"
        ctaText="Join Next Cohort"
        ctaHref={whatsappLink('Hello! I would like to join an upcoming Alsa Travels group trip.')}
        ctaExternal
      />

      {/* Upcoming Trips */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Scheduled Departures</span>
            <h2 className="text-navy font-black text-3xl md:text-4xl mt-2">Upcoming Group Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">
              Carefully scheduled around major international trade fairs and peak tourism seasons for maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTrips.map((trip) => (
              <div key={trip.destination} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="bg-navy p-6 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl">{trip.flag}</span>
                    <span className="bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded-full">{trip.spots}</span>
                  </div>
                  <h3 className="text-xl font-bold">{trip.destination}</h3>
                  <p className="text-amber text-sm font-semibold mt-1 flex items-center gap-1.5">
                    <Calendar size={15} /> {trip.dates}
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 mb-6">
                    {trip.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-amber flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hi Alsa Travels, I want to book a spot on the ${trip.destination}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center w-full"
                  >
                    Reserve on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Group Trips Work */}
      <section className="section-padding bg-navy text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Simple & Transparent</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber text-navy-dark font-black text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h4 className="font-bold text-base mb-2">{s.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber font-bold text-sm uppercase tracking-widest">Reserve Your Spot</span>
              <h2 className="text-navy font-black text-3xl md:text-4xl mt-2 mb-4">
                Travel With Other Ambitious Nigerians
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you are traveling to stock your boutique from China, tour Dubai with peace of mind, or source textiles in Turkey, our group trips are tailored for success.
              </p>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-amber" size={20} />
                  <span>Licensed and verified Nigerian travel coordinators</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-amber" size={20} />
                  <span>Network with high-growth business owners and importers</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4">Join an Upcoming Group</h3>
              <ContactForm defaultTripType="group_trip" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
