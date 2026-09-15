import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/shared/WhatsAppFAB'
import { siteConfig } from '@/lib/config'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Alsa Travels | Nigeria's #1 Travel & Tours Company",
  description: siteConfig.description,
  openGraph: {
    title: "Alsa Travels | Nigeria's #1 Travel & Tours Company",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_NG',
    type: 'website',
  },
}

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  )
}
