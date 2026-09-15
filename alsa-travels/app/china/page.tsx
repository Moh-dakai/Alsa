import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { whatsappLink } from '@/lib/config'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'China Travel & Business Trips | Alsa Travels',
  description:
    'Visa processing, Canton Fair, factory visits, group trips and vacations to China for Nigerian traders and entrepreneurs.',
}

const visaRequirements = [
  'Valid Nigerian passport (minimum 6 months validity beyond travel date)',
  'Recent passport photograph (white background, 35mm x 45mm)',
  'Completed Chinese visa application form',
  'Hotel booking confirmation for entire stay',
  'Return flight itinerary',
  'Bank statement (last 3 months, minimum ₦500,000 average balance)',
  'Company invitation letter (for Business/M Visa)',
  'Employment letter or Certificate of Incorporation',
  'Visa processing fee (paid at embassy)',
]

const tripHighlights = [
  { icon: '🏭', title: 'Canton Fair', desc: 'Alsa handles your Canton Fair registration, badge collection, and Guangzhou hotel near the fairground.' },
  { icon: '🔍', title: 'Factory Visits', desc: 'We coordinate factory visits in Yiwu, Guangzhou, and Shenzhen with an interpreter provided.' },
  { icon: '✈️', title: 'Flights & Hotels', desc: 'Return airfare from Lagos or Abuja, business hotels in key trading cities.' },
  { icon: '🗺️', title: 'In-Country Support', desc: '24/7 WhatsApp support and a dedicated China contact for the duration of your trip.' },
]

export default function ChinaPage() {
  return (
    <>
      <PageHero
        title="Travel to China with Alsa Travels"
        subtitle="Visas, flights, hotels, Canton Fair, factory tours — handled end to end for Nigerian traders and entrepreneurs."
        imageSrc="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80"
        badge="Full Service — China 🇨🇳"
        ctaText="Start Your China Trip"
        ctaHref={whatsappLink('Hello! I want to plan a China trip with Alsa Travels.')}
        ctaExternal
      />

      {/* Trip Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-navy font-black text-3xl md:text-4xl mt-2">China Trip Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Business Trip', icon: '💼', desc: 'Solo or small-team business travel. Canton Fair, factory visits, trade sourcing — fully managed.' },
              { title: 'Group Trip', icon: '👥', desc: 'Join one of our scheduled group departures. Min. 8 people. Inclusive pricing for flights, hotel, visa, and guide.' },
              { title: 'Vacation', icon: '🏯', desc: 'Explore the Great Wall, Shanghai Bund, and Li River cruise on a leisure package tailored to you.' },
              { title: 'Visa Processing Only', icon: '📄', desc: 'Already have your travel plans sorted? We handle just the visa application and document preparation.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-amber/30 hover:shadow-md transition-all duration-200">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-navy font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Highlights */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">What&apos;s Included</span>
            <h2 className="text-white font-black text-3xl md:text-4xl mt-2">Our China Package Highlights</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripHighlights.map((h) => (
              <div key={h.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200">
                <span className="text-3xl mb-3 block">{h.icon}</span>
                <h3 className="text-amber font-bold text-base mb-2">{h.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-amber font-bold text-sm uppercase tracking-widest">Visa Information</span>
              <h2 className="text-navy font-black text-3xl md:text-4xl mt-2 mb-6">
                Chinese Visa Requirements for Nigerians
              </h2>

              {/* Visa types */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
                  <p className="text-navy font-bold text-sm mb-1">Business Visa (M)</p>
                  <p className="text-gray-500 text-xs">For traders, importers, Canton Fair attendees</p>
                </div>
                <div className="bg-amber/10 rounded-xl p-4 border border-amber/20">
                  <p className="text-navy font-bold text-sm mb-1">Tourist Visa (L)</p>
                  <p className="text-gray-500 text-xs">For leisure travel and sightseeing</p>
                </div>
              </div>

              {/* Requirements list */}
              <ul className="space-y-3">
                {visaRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-amber flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>

              {/* Processing time */}
              <div className="mt-6 flex items-center gap-3 bg-amber/10 border border-amber/20 rounded-xl p-4">
                <Clock className="text-amber flex-shrink-0" size={20} />
                <div>
                  <p className="text-navy font-bold text-sm">Processing Time: 5–10 working days</p>
                  <p className="text-gray-500 text-xs">Single or double entry | 30–90 day validity</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-blue-700 text-xs leading-relaxed">
                  Alsa Travels prepares and submits your application with the highest level of care. Visa approval decisions rest with the Chinese Embassy.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-navy font-black text-xl mb-2">Ready to Travel to China?</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in your details and our team will be in touch within 24 hours.
              </p>
              <ContactForm defaultDestination="China" defaultTripType="business_trip" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-amber">
        <div className="container-max text-center">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-4">
            Let&apos;s Plan Your China Trip Today
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Over 1,000 Nigerian traders have trusted Alsa Travels. Join them.
          </p>
          <a
            href={whatsappLink('Hello! I want to plan a China business trip with Alsa Travels.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-navy-dark transition-colors duration-200 shadow-lg text-lg"
          >
            Start on WhatsApp →
          </a>
        </div>
      </section>
    </>
  )
}
