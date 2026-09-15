'use client'

import { useEffect, useRef, useState } from 'react'

const TARGET = 1000
const DURATION_MS = 1800

export default function VisaCounter() {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * TARGET))
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
    }
    const timeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate)
    }, 300)
    return () => {
      clearTimeout(timeout)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="bg-navy rounded-xl shadow-lg p-3 border-l-4 border-amber w-[180px]">
      <p className="text-base leading-none mb-1.5 tracking-wide">🇨🇳 🇦🇪 🇹🇷 🇨🇦 🇬🇧</p>
      <p className="text-amber font-black text-3xl leading-none tabular-nums">
        {count.toLocaleString()}+
      </p>
      <p className="text-white/80 text-xs font-medium mt-1 leading-tight">
        Visa Assistance Done
      </p>
    </div>
  )
}
