import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, whatsappLink } from '@/lib/config'
import { Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

const destinationLinks = [
  { label: 'China', href: '/china' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Turkey', href: '/turkey' },
  { label: 'Canada', href: '/canada' },
  { label: 'UK', href: '/uk' },
]

const serviceLinks = [
  { label: 'Vacations', href: '/vacation' },
  { label: 'Business Trips', href: '/individual-business-trip' },
  { label: 'Group Trips', href: '/group-trip' },
  { label: 'Visa Processing', href: '/visa-processing' },
]

const footerStats = [
  { value: `${siteConfig.stats.visasProcessed.toLocaleString()}+`, label: 'Visas Processed' },
  { value: `${siteConfig.stats.countriesServed}`, label: 'Countries Served' },
  { value: `${siteConfig.stats.satisfactionRate}%`, label: 'Client Satisfaction' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* Mini stats bar */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {footerStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-amber">{stat.value}</span>
                <span className="text-sm text-white/70 leading-tight">{stat.label}</span>
                {idx < footerStats.length - 1 && (
                  <span className="hidden sm:block text-white/20 text-xl ml-3 sm:ml-6">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/alsa-main.png"
                alt="Alsa Travels"
                width={120}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline} — Your trusted partner for seamless travel to China, Dubai,
              Turkey, Canada, and the UK.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber/20 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={17} className="text-amber" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber/20 flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle size={17} className="text-amber" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-amber font-semibold text-sm uppercase tracking-wider mb-5">
              Destinations
            </h3>
            <ul className="flex flex-col gap-3">
              {destinationLinks.map((dest) => (
                <li key={dest.href}>
                  <Link
                    href={dest.href}
                    className="text-white/65 hover:text-amber text-sm transition-colors duration-150"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-white/65 hover:text-amber text-sm transition-colors duration-150"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/65 hover:text-amber text-sm transition-colors duration-150"
                >
                  <MessageCircle size={15} className="mt-0.5 flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="flex items-start gap-2.5 text-white/65 hover:text-amber text-sm transition-colors duration-150"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.phoneNumber}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/65 text-sm">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.address}
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-white/65 hover:text-amber text-sm transition-colors duration-150"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-amber font-medium text-xs">
            Nigeria&apos;s #1 Travel &amp; Tours Company
          </p>
        </div>
      </div>
    </footer>
  )
}
