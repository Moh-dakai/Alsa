'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { whatsappLink } from '@/lib/config'

const mainLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'China', href: '/china' },
  { label: 'Visa Processing', href: '/visa-processing' },
  { label: 'Group Trip', href: '/group-trip' },
  { label: 'Vacation', href: '/vacation' },
  { label: 'Individual Business Trip', href: '/individual-business-trip' },
]

const destinations = [
  { label: 'Canada', href: '/canada' },
  { label: 'UK', href: '/uk' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Turkey', href: '/turkey' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDestOpen, setMobileDestOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const closeDrawer = () => {
    setDrawerOpen(false)
    setMobileDestOpen(false)
  }

  const desktopLink = 'text-white/90 hover:text-amber text-sm font-medium transition-colors duration-200 whitespace-nowrap'

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={closeDrawer}>
              <Image
                src="/logo/alsa-main.png"
                alt="Alsa Travels"
                width={120}
                height={50}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              {mainLinks.map((link) => (
                <Link key={link.href} href={link.href} className={desktopLink}>
                  {link.label}
                </Link>
              ))}

              {/* Destinations dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((p) => !p)}
                  className={`${desktopLink} flex items-center gap-1`}
                  aria-expanded={dropdownOpen}
                >
                  Destinations
                  <ChevronDown
                    size={14}
                    className={`mt-px transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full mt-2 left-0 w-44 rounded-xl bg-navy border border-white/10 shadow-2xl overflow-hidden transition-all duration-200 origin-top ${
                    dropdownOpen
                      ? 'opacity-100 scale-y-100 pointer-events-auto'
                      : 'opacity-0 scale-y-95 pointer-events-none'
                  }`}
                >
                  {destinations.map((dest) => (
                    <Link
                      key={dest.href}
                      href={dest.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/85 hover:bg-amber/15 hover:text-amber transition-colors duration-150"
                    >
                      {dest.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 shadow-md whitespace-nowrap"
              >
                Contact Us
              </a>
            </nav>

            {/* Hamburger — always visible, right side */}
            <button
              onClick={() => setDrawerOpen((p) => !p)}
              className="text-white hover:text-amber transition-colors duration-200 p-1 ml-4 lg:ml-6"
              aria-label="Toggle menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Drawer */}
      <aside
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-navy shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" onClick={closeDrawer}>
            <Image
              src="/logo/alsa-main.png"
              alt="Alsa Travels"
              width={100}
              height={42}
              className="object-contain"
            />
          </Link>
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-0.5">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="block px-3 py-3 rounded-lg text-white/90 hover:text-amber hover:bg-white/5 text-base font-medium transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}

          {/* Destinations accordion */}
          <div>
            <button
              onClick={() => setMobileDestOpen((p) => !p)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-white/90 hover:text-amber hover:bg-white/5 text-base font-medium transition-colors duration-150"
            >
              Destinations
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileDestOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDestOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 pb-1 flex flex-col gap-0.5">
                {destinations.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    onClick={closeDrawer}
                    className="block px-3 py-2.5 rounded-lg text-white/70 hover:text-amber hover:bg-white/5 text-sm font-medium transition-colors duration-150"
                  >
                    {dest.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 py-6 border-t border-white/10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="flex items-center justify-center w-full bg-amber hover:bg-amber-dark text-navy-dark font-bold text-base px-5 py-3 rounded-full transition-colors duration-200 shadow-md"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </aside>
    </>
  )
}
