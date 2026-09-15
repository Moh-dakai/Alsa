'use client'

import { useEffect, useRef, useState } from 'react'

// ── Stat definitions ──────────────────────────────────────────────────────────
interface StatItem {
  /** Numeric end value to count up to */
  target: number
  /** Display suffix after the number (e.g. '+', '%') */
  suffix: string
  /** Short label shown below the number */
  label: string
}

const stats: StatItem[] = [
  { target: 1000, suffix: '+', label: 'Visas Processed & Counting' },
  { target: 5,    suffix: '',  label: 'Countries Served' },
  { target: 98,   suffix: '%', label: 'Client Satisfaction' },
]

// ── Custom hook: count-up animation ──────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 2000): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let startTime: number | null = null
    let rafId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [active, target, duration])

  return count
}

// ── StatCounter sub-component ─────────────────────────────────────────────────
function StatCounter({
  stat,
  active,
  isLast,
}: {
  stat: StatItem
  active: boolean
  isLast: boolean
}) {
  const count = useCountUp(stat.target, active)

  return (
    <>
      <div className="flex flex-col items-center gap-1 px-6 py-2 text-center">
        <span className="text-4xl font-extrabold tabular-nums text-navy md:text-5xl">
          {count.toLocaleString()}
          {stat.suffix}
        </span>
        <span className="text-sm font-semibold uppercase tracking-wide text-navy/70 md:text-base">
          {stat.label}
        </span>
      </div>
      {/* Divider — hidden after last item */}
      {!isLast && (
        <div
          className="hidden h-12 w-px bg-navy/20 md:block"
          aria-hidden="true"
        />
      )}
    </>
  )
}

// ── StatsBar component ────────────────────────────────────────────────────────
export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  // Trigger animation once when section enters viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="w-full py-12"
      style={{ backgroundColor: '#F5A623' }}
      aria-label="Key statistics"
    >
      <div className="container-max">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              active={active}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
