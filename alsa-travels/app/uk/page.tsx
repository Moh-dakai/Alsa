import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { whatsappLink } from '@/lib/config'

export const metadata: Metadata = {
  title: 'UK Visa Processing for Nigerians | Alsa Travels',
  description:
    'UK Standard Visitor Visa processing for Nigerians — expert document preparation, biometrics support, online application, and full submission with Alsa Travels.',
}

// ── Static data ─────────────────────────────────────────────────────────────

const visaRequirements = [
  'Valid Nigerian passport (minimum 6 months validity beyond travel dates)',
  'UK visa application form — completed online via gov.uk/apply-uk-visa',
  'Biometric appointment at VFS Global Lagos or Abuja',
  'Two recent passport photographs (35mm x 45mm, white background)',
  'Bank statements — last 6 months, minimum ₦2,000,000 average monthly balance',
  'Employment letter confirming position, salary, and leave approval from employer',
  'Payslips (last 3–6 months)',
  "Business registration certificate + 2 years of company accounts (if self-employed)",
  'Hotel booking confirmation or invitation letter from UK host',
  "UK sponsor's address and proof of status (if hosted)",
  'Confirmed return flight itinerary',
  'Travel insurance covering the full trip duration',
  'Visa fee — £115 per applicant (paid online)',
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    detail:
      'We review your travel profile, financial history, and reason for travel. We give you an honest assessment of your application strength before you pay anything.',
  },
  {
    step: '02',
    title: 'Document Checklist',
    detail:
      'We provide a personalised, comprehensive checklist and advise on how to present bank statements, employment letters, and supporting documents for the best outcome.',
  },
  {
    step: '03',
    title: 'Online Application',
    detail:
      'We complete your UK visa application form on gov.uk accurately and professionally, upload your documents, and pay the visa fee on your behalf.',
  },
  {
    step: '04',
    title: 'Biometrics Appointment',
    detail:
      'We book your biometrics appointment at VFS Global (Lagos or Abuja) and guide you on exactly what to bring and what to expect on the day.',
  },
  {
    step: '05',
    title: 'Submission & Tracking',
    detail:
      'Once submitted, we monitor your application and communicate every update from UKVI. If additional documents are requested, we respond immediately.',
  },
]

const ukHighlights = [
  { icon: '🏰', label: 'London, Edinburgh & Manchester' },
  { icon: '🎓', label: 'Visiting students at UK universities' },
  { icon: '👪', label: 'Family & friend visits' },
  { icon: '💼', label: 'Business meetings & conferences' },
  { icon: '⚽', label: 'Premier League & sports events' },
  { icon: '🛍️', label: 'Oxford Street & Westfield shopping' },
]

// ── Page component ───────────────────────────────────────────────────────────

export default function UKPage() {
  const waLink = whatsappLink(
    "Hello Alsa Travels! I'm interested in UK visa processing. Please send me more information.",
    'visa'
  )

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
        badge="VISA PROCESSING — UK"
        title="UK Visa Processing for Nigerians"
        subtitle="Expert preparation, biometrics support, and professional submission for your UK Standard Visitor Visa."
      />

      {/* 2. Visa-Only Notice */}
      <div className="bg-[#F5A623] px-4 md:px-8 lg:px-16 xl:px-24 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-3 text-[#1B2254]">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            <span className="font-extrabold text-sm uppercase tracking-wider">Visa Processing Only — </span>
            <span className="text-sm font-medium">
              Alsa Travels offers UK Standard Visitor Visa processing. We do not currently offer
              travel packages (flights/hotels) to the UK. Our expertise is in professional application
              preparation that maximises your approval chances.
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
                About the UK Visitor Visa
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-5 leading-tight">
                The UK Visa Is Achievable — With the Right Preparation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The UK Standard Visitor Visa is one of the most desired but also one of the most
                carefully scrutinised visas for Nigerians. The UKVI (UK Visas and Immigration) assesses
                your ties to Nigeria, your financial stability, your accommodation plans, and your
                purpose of travel — all in great detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Getting rejected can impact future visa applications. That's why professional
                preparation — from a precisely worded cover letter to a well-organised document
                bundle — makes a significant difference.
              </p>
              <div className="bg-[#1B2254]/5 border-l-4 border-[#1B2254] rounded-r-xl p-4">
                <p className="text-[#1B2254] font-semibold text-sm leading-relaxed">
                  "Alsa does not guarantee visa approval — we guarantee expert preparation and
                  professional submission. The decision rests with UKVI."
                </p>
              </div>
            </div>

            {/* UK Highlights */}
            <div>
              <h3 className="font-bold text-[#1B2254] mb-5 text-lg">Popular reasons to visit the UK:</h3>
              <div className="grid grid-cols-2 gap-3">
                {ukHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-[#1B2254]">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-5">
                {[
                  { value: '£115', label: 'Visa fee' },
                  { value: '3–8 wks', label: 'Processing time' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1B2254] rounded-2xl p-5 text-center shadow-md"
                  >
                    <div className="text-2xl font-extrabold text-[#F5A623] mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
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
              How We Process Your UK Visa Application
            </h2>
          </div>

          <div className="space-y-4">
            {processSteps.map((s, idx) => (
              <div
                key={s.step}
                className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#F5A623]/40 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F5A623] text-[#1B2254] font-extrabold text-lg flex items-center justify-center shadow-md">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1B2254] text-lg mb-1">{s.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{s.detail}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:flex flex-shrink-0 items-center text-[#F5A623] text-2xl self-center">
                    →
                  </div>
                )}
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
              UK Standard Visitor Visa Requirements
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Every item on this list must be correctly prepared. Missing or weak documents are
              the most common reason for refusals — we make sure yours are complete and compelling.
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
              { label: 'Application Portal', value: 'gov.uk (online)' },
              { label: 'Biometrics', value: 'VFS Global Lagos/Abuja' },
              { label: 'Processing Time', value: '3–8 weeks' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F5A623] rounded-xl p-5 text-center">
                <div className="text-[#1B2254] font-extrabold text-lg">{item.value}</div>
                <div className="text-[#1B2254]/70 text-sm font-medium mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-white/60 text-sm text-center leading-relaxed">
            <strong className="text-white/80">Note:</strong> Alsa Travels does not guarantee visa
            approval — visa decisions are made solely by UK Visas and Immigration (UKVI). We
            guarantee expert, professional preparation and timely submission.
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2254] mb-4">
            Book Your UK Visa Consultation
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Don't leave your UK visa application to chance. Let Alsa Travels give it the professional
            treatment it deserves — detailed, thorough, and expertly presented. Message us today.
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
