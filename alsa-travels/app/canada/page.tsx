import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Canadian Visa Processing for Nigerians | Alsa Travels',
  description:
    'Expert Canadian Visitor Visa processing for Nigerians. Document preparation, application submission, and follow-up — with Alsa Travels.',
}

// ── Static data ─────────────────────────────────────────────────────────────

const visaRequirements = [
  'Valid Nigerian passport (must be valid for the entire intended stay)',
  'Two recent passport photographs (white background)',
  'Completed IMM5257 visa application form',
  'Proof of funds — minimum CAD 10,000 equivalent (approx. ₦10M+) in bank',
  'Bank statements — last 6 months',
  'Employment letter with salary details, leave approval, and return guarantee',
  'Pay slips (last 3 months)',
  'Business registration certificate (if self-employed or business owner)',
  'Property ownership documents or tenancy/lease agreement',
  'Invitation letter (if visiting family or friends in Canada)',
  'Copies of previous visas/travel history',
  'Travel insurance covering the entire trip duration',
  'Visa processing fee — CAD 100 (approx. ₦100,000+)',
]

const processSteps = [
  {
    step: '01',
    title: 'Book a Consultation',
    detail:
      'Message us on WhatsApp. We assess your profile, travel history, and financial standing to give you an honest evaluation before you invest any money.',
  },
  {
    step: '02',
    title: 'Document Review',
    detail:
      'We go through your documents one by one against IRCC requirements. We flag gaps and advise on how to strengthen your application before submission.',
  },
  {
    step: '03',
    title: 'Application Preparation',
    detail:
      'Our team completes and reviews the IMM5257 form, prepares your cover letter, and organises your complete document package professionally.',
  },
  {
    step: '04',
    title: 'Submission',
    detail:
      'We submit your application to the Immigration, Refugees and Citizenship Canada (IRCC) portal on your behalf, including all biometric requirements.',
  },
  {
    step: '05',
    title: 'Follow-up & Tracking',
    detail:
      'We monitor your application status and communicate updates promptly. If IRCC requests additional documents, we handle the response immediately.',
  },
]

// ── Page component ───────────────────────────────────────────────────────────

export default function CanadaPage() {
  const waLink = whatsappLink(
    "Hello Alsa Travels! I'm interested in Canadian visa processing. Please send me more information."
  )

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80"
        badge="VISA PROCESSING — CANADA"
        title="Canadian Visa Processing for Nigerians"
        subtitle="Expert document preparation, professional submission, and full follow-up — no guesswork."
      />

      {/* 2. Visa-Only Notice */}
      <div className="bg-[#F5A623] px-4 md:px-8 lg:px-16 xl:px-24 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-3 text-[#1B2254]">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            <span className="font-extrabold text-sm uppercase tracking-wider">Visa Processing Only — </span>
            <span className="text-sm font-medium">
              Alsa Travels offers expert visa processing for Canada. We do not currently offer travel
              packages (flights/hotels) for Canada. Our focus is ensuring your application is
              prepared and submitted to the highest standard.
            </span>
          </div>
        </div>
      </div>

      {/* 3. Intro */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-3">
                About the Canadian Visitor Visa
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-5 leading-tight">
                A Rigorous Process — Done Right
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The Canadian Visitor Visa (Temporary Resident Visa) is one of the most scrutinised
                visas for Nigerian applicants. IRCC officers look at your ties to Nigeria, your
                financial standing, travel history, and your stated purpose of travel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The difference between a successful application and a refusal often comes down to
                how well your documents are organised and how convincingly your profile is presented.
                That's where Alsa Travels adds real value.
              </p>
              <div className="bg-[#1B2254]/5 border-l-4 border-[#1B2254] rounded-r-xl p-4 mt-4">
                <p className="text-[#1B2254] font-semibold text-sm leading-relaxed">
                  "Alsa does not guarantee visa approval — we guarantee expert preparation and
                  submission. The decision rests with IRCC."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '🇨🇦', label: 'Canada Visitor Visa (TRV)' },
                { value: '4–8', label: 'Weeks processing time' },
                { value: 'CAD 100', label: 'Government application fee' },
                { value: '6 mths', label: 'Bank statements required' },
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

      {/* 4. Process Steps */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F5A623] font-bold text-sm tracking-widest uppercase mb-2">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254]">
              How We Process Your Canadian Visa
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#F5A623]/30 z-0" />
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5A623] text-[#1B2254] font-extrabold text-xl flex items-center justify-center mb-4 shadow-md border-4 border-white">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-[#1B2254] text-sm mb-2">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
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
              Canadian Visitor Visa Requirements
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              A complete checklist of documents needed for your Canadian Visitor Visa (IMM5257) application.
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

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Processing Time', value: '4–8 weeks (IRCC timeline)' },
              { label: 'Government Fee', value: 'CAD 100 per applicant' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5A623] rounded-xl p-5 text-center">
                <div className="text-[#1B2254] font-extrabold text-lg">{item.value}</div>
                <div className="text-[#1B2254]/70 text-sm font-medium mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-white/60 text-sm text-center leading-relaxed">
            <strong className="text-white/80">Note:</strong> Alsa Travels does not guarantee visa
            approval — visa decisions are made solely by Immigration, Refugees and Citizenship
            Canada (IRCC). We guarantee expert, professional preparation and timely submission.
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-4">
            Start Your Canadian Visa Application
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Give your Canada visa application the best possible chance. Alsa Travels provides
            professional document preparation, honest assessment, and full submission support.
            Message us today to book your consultation.
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
            Book a Consultation — WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-5">
            Consultations are conducted via WhatsApp. We typically respond within minutes.
          </p>
        </div>
      </section>
    </main>
  )
}
