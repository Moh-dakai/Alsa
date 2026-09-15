import HeroCarousel from '@/components/home/HeroCarousel'
import AboutSection from '@/components/home/AboutSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import DestinationCards from '@/components/home/DestinationCards'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import StatsBar from '@/components/home/StatsBar'
import CTABanner from '@/components/home/CTABanner'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: "Alsa Travels | Nigeria's #1 Travel & Tours Company",
  description: siteConfig.description,
  openGraph: {
    title: "Alsa Travels | Nigeria's #1 Travel & Tours Company",
    description: siteConfig.description,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero + Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Destination Cards */}
      <DestinationCards />

      {/* CTA Banner */}
      <CTABanner />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Stats Bar */}
      <StatsBar />
    </>
  )
}
