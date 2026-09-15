'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { reviews } from '@/lib/data'

export default function ReviewOverlay() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % reviews.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const review = reviews[currentIdx]

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl p-4 w-72 transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      aria-live="polite"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-amber text-sm">★</span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-xs leading-relaxed line-clamp-3 italic mb-3">
        &ldquo;{review.reviewText}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-2.5 border-t border-gray-100 pt-3">
        {review.avatarUrl && (
          <Image
            src={review.avatarUrl}
            alt={review.name}
            width={36}
            height={36}
            className="rounded-full flex-shrink-0"
            unoptimized
          />
        )}
        <div className="min-w-0">
          <p className="text-xs font-bold text-navy truncate">{review.name}</p>
          {review.instagramHandle && (
            <p className="text-xs text-amber truncate">{review.instagramHandle}</p>
          )}
          {review.role && (
            <p className="text-xs text-gray-500 truncate">{review.role}</p>
          )}
        </div>
      </div>
    </div>
  )
}
