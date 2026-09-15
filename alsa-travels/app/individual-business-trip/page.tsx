import type { Metadata } from 'next'
import { BriefcaseBusiness, CheckCircle2, Factory, Languages, MapPinned } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Individual Business Trips | Alsa Travels',
  description: 'Plan a focused China sourcing, trade fair, factory visit, or executive business trip with Alsa Travels.',
}

const inclusions = [
  { icon: BriefcaseBusiness, title: 'Business-first planning', text: 'A focused itinerary built around your trade goals, meeting dates, and travel schedule.' },
  { icon: Factory, title: 'Sourcing & factory visits', text: 'Plan market days, supplier meetings, and factory visits in the cities that matter to your business.' },
  { icon: Languages, title: 'On-ground coordination', text: 'Arrange interpreters and local logistics so conversations and appointments run smoothly.' },
  { icon: MapPinned, title: 'Travel logistics', text: 'Get support with flights, hotels, airport transfers, and visa document preparation.' },
]

export default function IndividualBusinessTripPage() {
  return (
    <>
      <PageHero
        title="Your business trip, planned around the deal."
        subtitle="Travel to China and key trade destinations with a practical plan for sourcing, meetings, documentation, and logistics."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
        badge="Individual Business Trips"
        ctaText="Plan My Business Trip"
        ctaHref={whatsappLink('Hello Alsa Travels! I want to plan an individual business trip.')}
        ctaExternal
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-12"><p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">Made for focused travel</p><h2 className="text-navy font-black text-3xl md:text-5xl">Spend your time growing your business, not coordinating a trip.</h2><p className="text-gray-600 text-lg leading-relaxed mt-5">From a first-time sourcing visit to an executive trip for an established importer, we help you build a clear travel plan around your commercial priorities.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inclusions.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"><Icon className="text-amber mb-5" size={28} /><h3 className="font-bold text-navy text-lg mb-2">{title}</h3><p className="text-sm text-gray-600 leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div><p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">A simple process</p><h2 className="text-3xl md:text-4xl font-black mb-6">Start with a one-on-one consultation.</h2><ol className="space-y-4">{['Tell us your destination, dates, and business goals.', 'Receive a tailored travel and documentation checklist.', 'Confirm your itinerary, bookings, and on-ground support.', 'Travel with a single point of contact for coordination.'].map((step, index) => <li key={step} className="flex gap-4"><span className="shrink-0 h-7 w-7 rounded-full bg-amber text-navy-dark font-black text-sm flex items-center justify-center">{index + 1}</span><span className="text-white/85 pt-0.5">{step}</span></li>)}</ol></div>
          <div className="bg-white rounded-2xl p-7 md:p-8 text-navy"><h3 className="font-bold text-2xl mb-2">Tell us about your trip</h3><p className="text-gray-600 mb-5">We will use this to prepare for your consultation.</p><ContactForm defaultTripType="business_trip" /></div>
        </div>
      </section>
    </>
  )
}
