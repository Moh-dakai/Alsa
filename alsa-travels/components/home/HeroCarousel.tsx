'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselImages } from '@/lib/data'
import ReviewOverlay from './ReviewOverlay'
import VisaCounter from './VisaCounter'
import { whatsappLink } from '@/lib/config'

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const total = carouselImages.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Carousel images */}
      {carouselImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/65" />

      {/* Left / Right Arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-amber/80 flex items-center justify-center text-white transition-colors duration-200"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-amber/80 flex items-center justify-center text-white transition-colors duration-200"
      >
        <ChevronRight size={22} />
      </button>

      {/* Hero text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-block bg-amber text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            🇳🇬 Trusted by Nigerian Traders &amp; Entrepreneurs
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Number 1 Travel &amp; Tour Agency for Curated{' '}
            <span className="text-amber">China Business Trips</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
            Group trips, vacations, business trips, and visa processing for Nigerians
            — handled start to finish.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#packages"
              className="bg-amber hover:bg-amber-dark text-navy-dark font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Packages
            </Link>
            <Link
              href="/visa-processing"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy-dark transition-all duration-200"
            >
              Start Your Visa
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-6 h-2 bg-amber'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Review overlay — bottom right */}
      <div className="absolute bottom-16 right-4 sm:right-8 z-20 max-w-xs hidden sm:block">
        <ReviewOverlay />
      </div>

      {/* Visa counter — bottom left */}
      <div className="absolute bottom-16 left-4 sm:left-8 z-20">
        <VisaCounter />
      </div>
    </section>
  )
}
