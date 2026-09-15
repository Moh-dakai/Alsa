import Image from 'next/image'
import Link from 'next/link'
import { destinations } from '@/lib/data'
import { whatsappLink } from '@/lib/config'

const SERVICE_LABELS: Record<string, string> = {
  vacation: 'Vacation',
  business_trip: 'Business Trip',
  group_trip: 'Group Trip',
  visa_only: 'Visa Only',
}

export default function DestinationCards() {
  return (
    <section id="packages" className="bg-[#F8F9FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">
            Destinations
          </p>
          <h2 className="text-navy font-black text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Packages
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Pick a destination to see vacation, business, group trip and visa options.
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/${destination.slug}`}
              className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              {/* Background image */}
              <Image
                src={destination.heroImage}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Visa Only badge */}
              {destination.visaOnly && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-amber text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
                    Visa Only
                  </span>
                </div>
              )}

              {/* Destination info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl leading-none" role="img" aria-label={destination.name}>
                    {destination.flag}
                  </span>
                  <span className="text-white font-black text-xl drop-shadow-sm">
                    {destination.name}
                  </span>
                </div>

                {/* Service tags */}
                <div className="flex flex-wrap gap-1.5">
                  {destination.services
                    .filter((s) => s !== 'visa_only')
                    .map((service) => (
                      <span
                        key={service}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded-full border border-white/30"
                      >
                        {SERVICE_LABELS[service]}
                      </span>
                    ))}
                  {destination.services.includes('visa_only') && (
                    <span className="bg-amber text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      Visa Processing
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}

          {/* "Not sure" card */}
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border-2 border-dashed border-amber/40 bg-amber/5 p-8 aspect-[4/3]">
            <span className="text-4xl mb-4" role="img" aria-label="thinking">
              🤔
            </span>
            <h3 className="text-navy font-black text-lg mb-2 leading-snug">
              Not sure which trip fits you?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Our team will help you find the perfect package.
            </p>
            <a
              href={whatsappLink(
                "Hello Alsa Travels! I'm not sure which trip fits me. Can you help?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber text-white font-bold px-6 py-2.5 rounded-lg hover:bg-amber-dark transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
