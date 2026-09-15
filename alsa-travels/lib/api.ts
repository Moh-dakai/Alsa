// ============================================================
// Frontend API helpers for Alsa Travels
// Update BACKEND_URL to your deployed PHP backend URL
// ============================================================

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost/alsa-travels/backend/api'

export interface ContactPayload {
  full_name: string
  phone: string
  email?: string
  destination?: string
  trip_type: 'group_trip' | 'vacation' | 'business_trip' | 'visa_only' | 'other'
  message?: string
}

// ── Fetch reviews from PHP backend ─────────────────────────
export async function fetchReviews() {
  try {
    const res = await fetch(`${BACKEND_URL}/reviews.php`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })
    if (!res.ok) throw new Error('Failed to fetch reviews')
    const json = await res.json()
    return json.data ?? []
  } catch {
    // Fall back to local data if backend is unavailable
    return null
  }
}

// ── Fetch stats from PHP backend ────────────────────────────
export async function fetchStats() {
  try {
    const res = await fetch(`${BACKEND_URL}/stats.php`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('Failed to fetch stats')
    const json = await res.json()
    return json.data ?? null
  } catch {
    return null
  }
}

// ── Submit contact inquiry ───────────────────────────────────
export async function submitInquiry(payload: ContactPayload): Promise<{
  success: boolean
  message?: string
  error?: string
}> {
  try {
    const res = await fetch(`${BACKEND_URL}/contact.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const json = await res.json()
    if (!res.ok) return { success: false, error: json.error ?? 'Submission failed.' }
    return { success: true, message: json.message }
  } catch {
    return { success: false, error: 'Network error. Please try WhatsApp instead.' }
  }
}
