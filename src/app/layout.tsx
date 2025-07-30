// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/AuthContext'
import GoogleAnalytics from '@/app/utils/google-analytics'
import JsonLd from './utils/json-ld'

export const metadata: Metadata = {
  metadataBase: new URL('https://abhyudayafoundation.in'),
  title: 'Abhyudaya Foundation - where passion meets purpose',
  description: 'Abhyudaya Foundation is a Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact. "Abhyudaya" means "rising" or "upliftment" - reflecting our mission to awaken self‑awareness and shared responsibility among India\'s youth.',
  keywords: ['abhyudaya', 'foundation', 'charity', 'seva', 'samskruthi', 'trust', 'bharat', 'culture', 'techforgood', 'youth', 'empowerment', 'nationalism', 'heritage'],
  icons: {
    icon: '/assets/images/brand/logo_af_square_without_bg.png',
  },
  openGraph: {
    title: 'Abhyudaya Foundation',
    description: 'Abhyudaya Foundation is a Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact. "Abhyudaya" means "rising" or "upliftment" - reflecting our mission to awaken self‑awareness and shared responsibility among India\'s youth.',
    url: 'https://abhyudayafoundation.in/',
    siteName: 'Abhyudaya Foundation',
    images: [
      {
        url: '/assets/images/brand/logo_af_without_bg.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhyudaya Foundation',
    description: 'Abhyudaya Foundation is a Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact. "Abhyudaya" means "rising" or "upliftment" - reflecting our mission to awaken self‑awareness and shared responsibility among India\'s youth.',
    images: ['/assets/images/brand/logo_af_without_bg.png'],
  },
  alternates: {
    canonical: 'https://abhyudayafoundation.in/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <JsonLd />
      <body className="bg-white text-gray-800">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
