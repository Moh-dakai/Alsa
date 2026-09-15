'use client'

import { useState } from 'react'
import { submitInquiry } from '@/lib/api'
import { whatsappLink } from '@/lib/config'

const destinations = ['China', 'Dubai', 'Turkey', 'Canada', 'UK']
const tripTypes = [
  { value: 'group_trip',      label: 'Group Trip' },
  { value: 'vacation',        label: 'Vacation' },
  { value: 'business_trip',   label: 'Individual Business Trip' },
  { value: 'visa_only',       label: 'Visa Processing Only' },
  { value: 'other',           label: 'Other / Not sure yet' },
]

interface Props {
  defaultDestination?: string
  defaultTripType?: string
}

export default function ContactForm({ defaultDestination, defaultTripType }: Props) {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    destination: defaultDestination ?? '',
    trip_type: (defaultTripType ?? 'other') as 'group_trip' | 'vacation' | 'business_trip' | 'visa_only' | 'other',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const result = await submitInquiry(form)

    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-navy mb-2">Inquiry Received!</h3>
        <p className="text-gray-600 mb-4">
          Our travel desk will reach out to you shortly. For faster response, chat with us on WhatsApp.
        </p>
        <a
          href={whatsappLink(`Hello! I just submitted an inquiry for a ${form.destination || 'trip'}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Continue on WhatsApp →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Full Name *</label>
          <input
            type="text"
            name="full_name"
            required
            value={form.full_name}
            onChange={handleChange}
            placeholder="e.g. Mr. Mohammed Aliyu"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Email (optional)</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
        />
      </div>

      {/* Destination + Trip Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Destination</label>
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber bg-white"
          >
            <option value="">Select destination</option>
            {destinations.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Trip Type</label>
          <select
            name="trip_type"
            value={form.trip_type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber bg-white"
          >
            {tripTypes.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Message (optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about your travel plans, dates, group size, etc."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {errorMsg}{' '}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            Try WhatsApp instead →
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry →'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Prefer to talk directly?{' '}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber font-semibold underline"
        >
          WhatsApp us now
        </a>
      </p>
    </form>
  )
}
