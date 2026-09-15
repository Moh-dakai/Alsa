import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { reviews } from '@/lib/data'
import { siteConfig } from '@/lib/config'
import type { Review } from '@/lib/types'

// ── StarRating sub-component ──────────────────────────────────────────────────
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

// ── ReviewCard sub-component ──────────────────────────────────────────────────
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

// ── TestimonialsSection component ─────────────────────────────────────────────
export default function TestimonialsSection() {
  // Show first 6 reviews
  const featured = reviews.slice(0, 6)

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
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
