// Shared TypeScript types for Alsa Travels

export interface Review {
  id: number
  name: string
  instagramHandle?: string
  avatarUrl?: string
  reviewText: string
  rating: number
  role?: string
}

export interface Destination {
  slug: string
  name: string
  flag: string
  heroImage: string
  description: string
  services: ('vacation' | 'business_trip' | 'group_trip' | 'visa_only')[]
  visaOnly?: boolean
}

export interface TripPackage {
  id: string
  destinationSlug: string
  type: 'vacation' | 'business_trip' | 'group_trip'
  title: string
  description: string
  duration?: string
  highlights?: string[]
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}
