'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { reviews as seedReviews } from '@/lib/data'
import { submitReview } from '@/lib/api'
import type { Review } from '@/lib/types'

const STORAGE_KEY = 'alsa-user-reviews'

// ── Interactive star selector (used in the review form) ─────────────────────
function StarSelector({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
            className="transition-transform hover:scale-110 focus:outline-none"
          >
            <Star
              className={`h-8 w-8 transition-colors ${
                n <= value ? 'fill-amber text-amber' : 'fill-white/20 text-white/40'
              }`}
              strokeWidth={0}
            />
          </button>
        )
      })}
    </div>
  )
}

// ── Display-only star rating ────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-amber text-amber' : 'fill-gray-200 text-gray-200'
          }`}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

// ── ReviewCard sub-component ────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="card-hover flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <blockquote className="flex-1 text-sm italic leading-relaxed text-gray-700">
        &ldquo;{review.reviewText}&rdquo;
      </blockquote>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        {review.avatarUrl ? (
          <Image
            src={review.avatarUrl}
            alt={review.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-amber">
            {review.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-navy">{review.name}</p>
          {review.role && <p className="text-xs text-gray-500">{review.role}</p>}
        </div>
      </div>
    </article>
  )
}

// ── TestimonialsSection component ───────────────────────────────────────────
export default function TestimonialsSection() {
  // Reviews submitted directly by visitors (persisted in the browser)
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(5)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setUserReviews(JSON.parse(saved))
    } catch {
      /* ignore storage errors */
    }
  }, [])

  const allReviews = useMemo(() => [...userReviews, ...seedReviews].slice(0, 6), [userReviews])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const newReview: Review = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || undefined,
      reviewText: reviewText.trim(),
      rating,
    }

    const updated = [newReview, ...userReviews]
    setUserReviews(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      /* ignore storage errors */
    }

    await submitReview({
      name: newReview.name,
      role: newReview.role,
      reviewText: newReview.reviewText,
      rating: newReview.rating,
    })

    setStatus('submitted')
    setName('')
    setRole('')
    setReviewText('')
    setRating(5)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-amber">
            What Our Travellers Say
          </span>
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl lg:text-5xl">
            Trusted by Traders &amp; Entrepreneurs
          </h2>
        </div>

        {/* Reviews grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Leave a review form */}
        <div className="mt-16 rounded-2xl bg-navy px-6 py-12 shadow-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-amber text-amber"
                  strokeWidth={0}
                />
              ))}
            </div>
            <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
              Loved Your Trip?
            </h2>
            <p className="mb-8 text-white/70 md:text-lg">
              We&apos;d love to hear about your experience. Write a quick review on
              this page and help other travellers choose Alsa Travels with confidence.
            </p>
          </div>

          {status === 'submitted' ? (
            <div className="mx-auto max-w-2xl rounded-xl border border-white/20 bg-white/10 p-8 text-center">
              <div className="mb-3 text-4xl">✅</div>
              <h3 className="mb-2 text-xl font-bold text-white">Thank You for Your Review!</h3>
              <p className="mb-6 text-white/70">
                Your review has been added below and is helping other travellers.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-secondary">
                Write Another Review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-5">
              {/* Name + Role */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-white">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mr. Musa Ibrahim"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-white">
                    Role / Trip Type (optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Importer, China business trip"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">
                  Your Rating *
                </label>
                <StarSelector value={rating} onChange={setRating} />
              </div>

              {/* Review text */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">
                  Your Review *
                </label>
                <textarea
                  required
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}