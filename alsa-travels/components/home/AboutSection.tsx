import Link from 'next/link'

const featureCards = [
  {
    icon: '🌍',
    title: 'Group Trips',
    description: 'Curated group trips departing from Lagos and Abuja',
  },
  {
    icon: '💼',
    title: 'Business Trips',
    description: 'Canton Fair, trade expos, factory visits',
  },
  {
    icon: '🏖️',
    title: 'Vacations',
    description: 'Leisure packages for families and individuals',
  },
  {
    icon: '📋',
    title: 'Visa Processing',
    description: 'Expert document prep and high approval rates',
  },
]

const pills = ['✓ End-to-end handling', '✓ 1,000+ visas processed', '✓ 5 destinations']

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-amber font-bold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h2 className="text-navy font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Nigeria&apos;s Trusted Bridge to China, Dubai, Turkey, Canada &amp; the UK
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Alsa Travels plans and manages group tours, business trips, vacations and visa
              processing to China, Dubai, Turkey, Canada and the UK for Nigerians travelling
              abroad. From your first inquiry to your return flight, we handle logistics,
              documentation and support so you can focus on the trip itself.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 bg-amber/10 text-amber-dark border border-amber/30 rounded-full px-4 py-1.5 text-sm font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-navy text-white font-bold px-8 py-3.5 rounded-lg hover:bg-navy-light transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right — feature cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-amber/30 transition-all duration-200"
              >
                <span className="text-3xl mb-3 block" role="img" aria-label={card.title}>
                  {card.icon}
                </span>
                <h3 className="text-navy font-bold text-base mb-1">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
