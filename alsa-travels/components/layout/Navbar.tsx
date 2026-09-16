'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { whatsappLink } from '@/lib/config'

type NavDropdownItem = {
  label: string
  href: string
  desc?: string
}

type NavLink = {
  label: string
  href: string
  dropdown?: NavDropdownItem[]
}

const mainLinks: NavLink[] = [
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Our Mission', href: '/about', desc: 'Open the world to ambitious Nigerian travellers' },
      { label: 'Our Approach', href: '/about', desc: 'Travel support that feels personal' },
      { label: 'What to Expect', href: '/about', desc: 'Clear checklists and one-on-one consultations' },
    ],
  },
  {
    label: 'China',
    href: '/china',
    dropdown: [
      { label: 'Business Trip', href: '/individual-business-trip', desc: 'Canton Fair, factory visits & sourcing' },
      { label: 'Group Trip', href: '/group-trip', desc: 'Travel together and save more' },
      { label: 'Vacation', href: '/vacation', desc: 'Great Wall, Shanghai & Li River cruise' },
      { label: 'Visa Processing', href: '/visa-processing', desc: 'Requirements & application help' },
    ],
  },
  {
    label: 'Visa Processing',
    href: '/visa-processing',
    dropdown: [
      { label: 'China Visa', href: '/china', desc: 'Business (M) / Tourist (L) · 5–10 days' },
      { label: 'Dubai Visa', href: '/dubai', desc: 'Tourist / Business · 3–7 days' },
      { label: 'Turkey Visa', href: '/turkey', desc: 'e-Visa · 24–72 hours' },
      { label: 'Canada Visa', href: '/canada', desc: 'Visitor / Business · 4–8 weeks' },
      { label: 'UK Visa', href: '/uk', desc: 'Standard Visitor · 3–8 weeks' },
    ],
  },
  {
    label: 'Group Trip',
    href: '/group-trip',
    dropdown: [
      { label: 'China Canton Fair Tour', href: '/group-trip', desc: 'Sourcing trip with factory visits' },
      { label: 'Dubai Business & Leisure', href: '/group-trip', desc: 'Luxury, desert safari & networking' },
      { label: 'Turkey Shopping & Heritage', href: '/group-trip', desc: 'Bazaar, Bosphorus & Cappadocia' },
      { label: 'Join Next Cohort', href: '/group-trip', desc: 'Departures from Lagos & Abuja' },
    ],
  },
  {
    label: 'Vacation',
    href: '/vacation',
    dropdown: [
      { label: 'Dubai', href: '/dubai', desc: 'Modern elegance & desert escapes' },
      { label: 'Turkey', href: '/turkey', desc: 'Istanbul, Cappadocia & heritage' },
      { label: 'China', href: '/china', desc: 'Great Wall & Shanghai skyline' },
      { label: 'Plan a Getaway', href: '/vacation', desc: 'Custom itineraries & family holidays' },
    ],
  },
  {
    label: 'Individual Business Trip',
    href: '/individual-business-trip',
    dropdown: [
      { label: 'Sourcing & Factory Visits', href: '/individual-business-trip', desc: 'Market days & supplier meetings' },
      { label: 'On-Ground Coordination', href: '/individual-business-trip', desc: 'Interpreters & local logistics' },
      { label: 'Travel Logistics', href: '/individual-business-trip', desc: 'Flights, hotels & airport transfers' },
      { label: 'Start a Consultation', href: '/individual-business-trip', desc: 'One-on-one trip planning' },
    ],
  },
]

const destinations = [
  { label: 'Canada', href: '/canada' },
  { label: 'UK', href: '/uk' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Turkey', href: '/turkey' },
]

// ── Individual dropdown item (supports internal + external links) ───────────
function DropdownItem({ item, onSelect }: { item: NavDropdownItem; onSelect: () => void }) {
  const external = item.href.startsWith('http')
  const cls =
    'group block w-full text-left px-4 py-2.5 hover:bg-amber/15 transition-colors duration-150'
  return (
    <li>
      {external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onSelect} className={cls}>
          <span className="block text-sm text-white/85 group-hover:text-amber">{item.label}</span>
          {item.desc && (
            <span className="mt-0.5 block text-xs text-white/45 group-hover:text-white/60">
              {item.desc}
            </span>
          )}
        </a>
      ) : (
        <Link href={item.href} onClick={onSelect} className={cls}>
          <span className="block text-sm text-white/85 group-hover:text-amber">{item.label}</span>
          {item.desc && (
            <span className="mt-0.5 block text-xs text-white/45 group-hover:text-white/60">
              {item.desc}
            </span>
          )}
        </Link>
      )}
    </li>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const hamburgerDropdownRef = useRef<HTMLDivElement>(null)
  const hamburgerCloseTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
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
    setMobileDropdown(null)
  }

  const desktopLink = 'text-white/90 hover:text-amber text-sm font-medium transition-colors duration-200 whitespace-nowrap'
  const dropdownPanel =
    'absolute top-full mt-2 left-0 rounded-xl bg-navy border border-white/10 shadow-2xl overflow-hidden transition-all duration-200 origin-top'

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo — switches to the white variant once the navbar turns navy on scroll */}
            <Link href="/" className="flex-shrink-0" onClick={closeDrawer}>
              <Image
                src={scrolled ? '/logo/alsa-white.png' : '/logo/alsa-main.png'}
                alt="Alsa Travels"
                width={120}
                height={50}
                priority
                className={`object-contain ${
                  scrolled ? '' : 'drop-shadow-[0_1px_5px_rgba(13,17,56,0.45)]'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-3 xl:gap-5">
              {mainLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`${desktopLink} flex items-center gap-1`}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`mt-px transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`${dropdownPanel} w-64 ${
                        openDropdown === link.label
                          ? 'opacity-100 scale-y-100 pointer-events-auto'
                          : 'opacity-0 scale-y-95 pointer-events-none'
                      }`}
                    >
                      <ul className="py-1">
                        {link.dropdown.map((item) => (
                          <DropdownItem
                            key={item.label}
                            item={item}
                            onSelect={() => setOpenDropdown(null)}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className={desktopLink}>
                    {link.label}
                  </Link>
                )
              )}

              {/* Destinations dropdown */}
              <div className="relative">
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
                  className={`${dropdownPanel} w-44 ${
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

            {/* Hamburger — hover dropdown on desktop, slide-in drawer on mobile */}
            <div
              className="relative lg:ml-4 xl:ml-6 ml-auto"
              ref={hamburgerDropdownRef}
              onMouseEnter={() => {
                clearTimeout(hamburgerCloseTimer.current)
                setHamburgerOpen(true)
              }}
              onMouseLeave={() => {
                hamburgerCloseTimer.current = window.setTimeout(() => setHamburgerOpen(false), 120)
              }}
            >
              {/* Hamburger button */}
              <button
                onClick={() => {
                  const isDesktop = window.matchMedia('(min-width: 1024px)').matches
                  if (isDesktop) {
                    setHamburgerOpen((p) => !p)
                  } else {
                    setDrawerOpen((p) => !p)
                  }
                }}
                className="text-white hover:text-amber transition-colors duration-200 p-1"
                aria-label="Toggle menu"
              >
                <Menu size={26} />
              </button>

              {/* Desktop hover dropdown */}
              <div
                className={`hidden lg:block absolute top-full right-0 mt-2 w-64 rounded-xl bg-navy border border-white/10 shadow-2xl overflow-hidden transition-all duration-200 origin-top ${
                  hamburgerOpen
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setHamburgerOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/85 hover:bg-amber/15 hover:text-amber transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Destinations submenu */}
                <div className="border-t border-white/10 mt-1 pt-1">
                  <span className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/40">
                    Destinations
                  </span>
                  {destinations.map((dest) => (
                    <Link
                      key={dest.href}
                      href={dest.href}
                      onClick={() => setHamburgerOpen(false)}
                      className="block px-4 py-2 text-sm text-white/85 hover:bg-amber/15 hover:text-amber transition-colors duration-150"
                    >
                      {dest.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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

      {/* Slide-in Drawer — mobile */}
      <aside
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-navy shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" onClick={closeDrawer}>
            <Image
              src="/logo/alsa-white.png"
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
          {mainLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="border-b border-white/5 pb-1">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-white/90 hover:text-amber hover:bg-white/5 text-base font-medium transition-colors duration-150"
                  aria-expanded={mobileDropdown === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === link.label ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pb-1 flex flex-col gap-0.5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDrawer}
                        className="block px-3 py-2.5 rounded-lg text-white/70 hover:text-amber hover:bg-white/5 text-sm font-medium transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className="block px-3 py-3 rounded-lg text-white/90 hover:text-amber hover:bg-white/5 text-base font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Destinations accordion */}
          <div className="border-b border-white/5 pb-1">
            <button
              onClick={() => setMobileDropdown(mobileDropdown === 'Destinations' ? null : 'Destinations')}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-white/90 hover:text-amber hover:bg-white/5 text-base font-medium transition-colors duration-150"
              aria-expanded={mobileDropdown === 'Destinations'}
            >
              Destinations
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileDropdown === 'Destinations' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === 'Destinations' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
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