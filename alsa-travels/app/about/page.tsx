import type { Metadata } from 'next'
import { CheckCircle2, HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import CTAButton from '@/components/shared/CTAButton'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Alsa Travels | Your Trusted Travel Partner',
  description: 'Meet the travel team helping Nigerians plan confident business trips, vacations, and visa applications.',
}

const values = [
  { icon: ShieldCheck, title: 'Clarity at every step', text: 'We explain requirements, timelines, and the documents your trip needs before you begin.' },
  { icon: HeartHandshake, title: 'Personal support', text: 'Every traveller gets a one-on-one consultation tailored to their destination and purpose.' },
  { icon: Users, title: 'Built for Nigerians', text: 'Our trips and documentation support are designed around the realities of Nigerian travellers.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Travel plans made clearer, calmer, and more rewarding."
        subtitle="Alsa Travels helps Nigerian entrepreneurs, families, and explorers get from first question to confident departure."
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
        badge="About Alsa Travels"
        ctaText="Talk to Our Team"
        ctaHref={whatsappLink('Hello Alsa Travels! I would like to speak with your travel team.')}
        ctaExternal
      />

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">Our mission</p>
            <h2 className="text-navy font-black text-3xl md:text-5xl leading-tight mb-6">Open the world to ambitious Nigerian travellers.</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-5">Whether you are travelling to source products in China, planning a family escape, or preparing a visitor-visa application, international travel involves many moving parts. Alsa Travels brings them together in one thoughtful plan.</p>
            <p className="text-gray-600 leading-relaxed mb-7">We coordinate travel guidance, visa document preparation, accommodation, flights, and on-ground experiences for China, Dubai, Turkey, Canada, and the UK. Our role is to keep the process transparent and help you make informed decisions.</p>
            <CTAButton href={whatsappLink('Hello Alsa Travels! I want a travel consultation.')} external>Book a consultation</CTAButton>
          </div>
          <div className="bg-navy rounded-3xl p-8 md:p-10 text-white">
            <p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">What you can expect</p>
            <div className="space-y-5">
              {['A practical consultation before you commit', 'Clear checklists for your destination and trip type', 'Support from visa documentation to return travel', 'A direct WhatsApp contact when you need answers'].map((item) => (
                <div key={item} className="flex gap-3 items-start"><CheckCircle2 className="text-amber mt-0.5 shrink-0" size={20} /><span className="text-white/90">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-10"><p className="text-amber font-bold text-sm uppercase tracking-widest">Our approach</p><h2 className="text-navy font-black text-3xl md:text-4xl mt-2">Travel support that feels personal</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"><Icon className="text-amber mb-5" size={30} /><h3 className="text-navy font-bold text-xl mb-2">{title}</h3><p className="text-gray-600 leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
