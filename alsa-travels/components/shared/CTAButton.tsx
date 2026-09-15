'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  external?: boolean
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: CTAButtonProps) {
  const variantClasses = {
    primary: 'bg-amber text-navy-dark font-bold hover:bg-amber-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-navy text-white font-semibold hover:bg-navy-light',
    outline: 'bg-transparent text-navy font-semibold border-2 border-navy hover:bg-navy hover:text-white',
  }

  const base = `inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variantClasses[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  )
}
