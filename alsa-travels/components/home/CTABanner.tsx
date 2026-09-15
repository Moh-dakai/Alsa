import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig, whatsappLink } from '@/lib/config'

// ── CTABanner component ───────────────────────────────────────────────────────
export default function CTABanner() {
  return (
    <section className="w-full bg-navy py-16 md:py-20">
      <div className="container-max section-padding py-0">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left — heading & subtitle */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Ready to plan your trip?
            </h2>
            <p className="mt-3 text-base text-white/70 md:text-lg">
              Speak with our travel desk — vacations, business trips, group tours and visas.
            </p>
          </div>

          {/* Right — CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* WhatsApp */}
            <Link
              href={whatsappLink('Hello! I want to plan a trip with Alsa Travels')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
              WhatsApp Us
            </Link>

            {/* Call Now */}
            <Link
              href={`tel:${siteConfig.phoneNumber}`}
              className="btn-secondary"
            >
              <Phone className="h-5 w-5" strokeWidth={1.8} />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
