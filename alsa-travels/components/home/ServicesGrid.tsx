import Link from 'next/link'
import { Users, Sun, FileCheck, Briefcase, ArrowRight } from 'lucide-react'

// ── Service card data ────────────────────────────────────────────────────────
const services = [
  {
    icon: Users,
    title: 'Group Trips',
    description:
      '8 people minimum per group. Inclusive pricing covers flights, hotel, transport, and guided tours. Next group: China & Dubai.',
    href: '/group-trip',
    bg: 'bg-navy',
    textColor: 'text-white',
    iconBg: 'bg-white/10',
    iconColor: 'text-amber',
    linkColor: 'text-amber hover:text-amber-light',
    dividerColor: 'border-white/20',
  },
  {
    icon: Sun,
    title: 'Vacations',
    description:
      'Family and individual leisure packages to China, Dubai, and Turkey. Fully customized to your budget and preferences.',
    href: '/vacation',
    bg: 'bg-white',
    textColor: 'text-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    linkColor: 'text-navy hover:text-navy-dark',
    dividerColor: 'border-navy/10',
  },
  {
    icon: FileCheck,
    title: 'Visa Processing',
    description:
      'Expert visa applications for China, Dubai, Turkey, Canada, and the UK. We prepare all documents and guide you through every step.',
    href: '/visa-processing',
    bg: 'bg-amber',
    textColor: 'text-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    linkColor: 'text-navy hover:text-navy-dark',
    dividerColor: 'border-navy/10',
  },
  {
    icon: Briefcase,
    title: 'Individual Business Trip',
    description:
      'Solo or small-team business travel. Canton Fair support, factory visit coordination, trade expo registration.',
    href: '/individual-business-trip',
    bg: 'bg-navy',
    textColor: 'text-white',
    iconBg: 'bg-white/10',
    iconColor: 'text-amber',
    linkColor: 'text-amber hover:text-amber-light',
    dividerColor: 'border-white/20',
  },
]

// ── ServicesGrid component ────────────────────────────────────────────────────
export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-amber">
            Our Services
          </span>
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
            What We Offer
          </h2>
        </div>

        {/* 2x2 grid — seamless tiles with shared rounded container */}
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl shadow-2xl md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.href}
                className={`card-hover flex flex-col gap-5 p-8 ${service.bg} lg:p-10`}
              >
                {/* Icon badge */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg}`}
                >
                  <Icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Title + divider + description */}
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className={`text-xl font-extrabold ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <hr className={`border-t ${service.dividerColor}`} />
                  <p className={`flex-1 text-sm leading-relaxed ${service.textColor} opacity-80`}>
                    {service.description}
                  </p>
                </div>

                {/* Learn More link */}
                <Link
                  href={service.href}
                  className={`group inline-flex items-center gap-1.5 text-sm font-semibold ${service.linkColor} transition-colors duration-200`}
                >
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
