import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  imageSrc?: string
  badge?: string
  ctaText?: string
  ctaHref?: string
  ctaExternal?: boolean
  /** Tailwind bg class used when no image is provided */
  bgClass?: string
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  badge,
  ctaText,
  ctaHref,
  ctaExternal,
  bgClass = 'bg-navy',
}: PageHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image or solid color */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className={`absolute inset-0 ${bgClass}`} />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        {badge && (
          <span className="inline-block bg-amber text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              {ctaText} →
            </a>
          ) : (
            <Link href={ctaHref} className="btn-primary text-base px-8 py-4">
              {ctaText} →
            </Link>
          )
        )}
      </div>
    </section>
  )
}
