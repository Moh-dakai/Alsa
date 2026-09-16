import { Star } from 'lucide-react'
import { whatsappLink, siteConfig } from '@/lib/config'

export default function LeaveReviewSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="rounded-2xl bg-navy px-6 py-16 text-center md:px-12 md:py-20 shadow-xl">
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-amber text-amber"
                strokeWidth={0}
              />
            ))}
          </div>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl mb-4">
            Loved Your Trip?
          </h2>
          <p className="text-base text-white/70 md:text-lg max-w-xl mx-auto mb-10">
            We&apos;d love to hear about your experience! Share a quick review and
            help other travellers choose Alsa Travels with confidence.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Review Us on Instagram
            </a>
            <a
              href={whatsappLink('Hi! I\'d like to leave a review about my trip with Alsa Travels.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Send via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
