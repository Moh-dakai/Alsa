import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { whatsappLink } from '@/lib/config'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Visa Processing Services | Alsa Travels',
  description: 'Expert visa processing for Nigerians travelling to China, Dubai, Turkey, Canada, and the UK. 1,000+ visas processed.',
}

const visaDestinations = [
  {
    flag: '🇨🇳', name: 'China', href: '/china',
    type: 'Business (M) / Tourist (L)',
    time: '5–10 working days',
    fee: 'Embassy fee applies',
    full: true,
  },
  {
    flag: '🇦🇪', name: 'Dubai (UAE)', href: '/dubai',
    type: 'Tourist / Business',
    time: '3–7 working days',
    fee: 'Embassy fee applies',
    full: true,
  },
  {
    flag: '🇹🇷', name: 'Turkey', href: '/turkey',
    type: 'e-Visa (online)',
    time: '24–72 hours',
    fee: 'Online fee applies',
    full: true,
  },
  {
    flag: '🇨🇦', name: 'Canada', href: '/canada',
    type: 'Visitor / Business',
    time: '4–8 weeks',
    fee: 'CAD 100',
    full: false,
  },
  {
    flag: '🇬🇧', name: 'United Kingdom', href: '/uk',
    type: 'Standard Visitor',
    time: '3–8 weeks',
    fee: '£115',
    full: false,
  },
]

const processSteps = [
  { n: '01', title: 'Free Consultation', desc: 'WhatsApp us to discuss your destination, travel dates, and purpose of travel.' },
  { n: '02', title: 'Document Checklist', desc: 'We send you a personalised checklist of everything needed for your specific visa.' },
  { n: '03', title: 'Application Preparation', desc: 'We complete forms, review documents, and prepare your full submission package.' },
  { n: '04', title: 'Submission', desc: 'We submit your application to the embassy or online portal on your behalf.' },
  { n: '05', title: 'Updates & Collection', desc: 'We keep you informed throughout and guide you through passport collection.' },
]

const whyUs = [
  { icon: '✅', stat: '1,000+', label: 'Visas Processed' },
  { icon: '🌍', stat: '5', label: 'Destinations Covered' },
  { icon: '📞', stat: '24/7', label: 'Support Available' },
  { icon: '⚡', stat: '98%', label: 'Client Satisfaction' },
]

export default function VisaProcessingPage() {
  return (
    <>
      <PageHero
        title="Expert Visa Processing for Nigerians"
        subtitle="We prepare, review, and submit your visa application — so you focus on packing."
        imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
        badge="Visa Services 📄"
        ctaText="Start My Visa Application"
        ctaHref={whatsappLink('Hello! I need help with visa processing.')}
        ctaExternal
      />

      {/* Destinations grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Destinations</span>
            <h2 className="text-navy font-black text-3xl md:text-4xl mt-2">Visa Services by Country</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaDestinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-amber/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{dest.flag}</span>
                  {!dest.full && (
                    <span className="bg-amber text-white text-xs font-bold px-3 py-1 rounded-full">
                      Visa Only
                    </span>
                  )}
                </div>
                <h3 className="text-navy font-black text-lg mb-3">{dest.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-navy w-20 flex-shrink-0">Type:</span>
                    <span>{dest.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-amber flex-shrink-0" />
                    <span>{dest.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-navy w-20 flex-shrink-0">Fee:</span>
                    <span>{dest.fee}</span>
                  </div>
                </div>
                <p className="text-amber font-semibold text-sm mt-4 group-hover:underline">
                  View Requirements →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Our Process</span>
            <h2 className="text-white font-black text-3xl md:text-4xl mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber flex items-center justify-center text-navy font-black text-xl mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-amber font-bold text-sm uppercase tracking-widest">Why Us</span>
            <h2 className="text-navy font-black text-3xl md:text-4xl mt-2">Why Choose Alsa Travels?</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyUs.map((item) => (
              <div key={item.label} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-navy font-black text-3xl mb-1">{item.stat}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-4 bg-amber/10 border border-amber/30 rounded-xl p-6">
            <AlertCircle className="text-amber flex-shrink-0 mt-0.5" size={22} />
            <div>
              <p className="text-navy font-bold text-sm mb-1">Important Notice</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alsa Travels prepares and submits your application with the highest level of care and
                expertise. We do <strong>not guarantee visa approval</strong> — that decision rests
                solely with the respective embassy or consulate. We guarantee expert preparation,
                transparent communication, and complete support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + WhatsApp CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-navy font-black text-3xl mb-4">Start Your Visa Today</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Book a one-on-one consultation with our visa experts. We&apos;ll walk you through
                the exact documents you need and guide you through every step.
              </p>
              <a
                href={whatsappLink('Hello Alsa Travels! I want to start my visa application.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 mb-4 w-full sm:w-auto justify-center"
              >
                WhatsApp Us Now →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-navy font-bold text-xl mb-6">Send an Inquiry</h3>
              <ContactForm defaultTripType="visa_only" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
