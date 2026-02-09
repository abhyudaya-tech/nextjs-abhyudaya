// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/AuthContext'
import GoogleAnalytics from '@/app/utils/google-analytics'
import JsonLd from './utils/json-ld'

export const metadata: Metadata = {
  metadataBase: new URL('https://abhyudayafoundation.in'),
  title: 'Abhyudaya Foundation - where passion meets purpose',
  description: 'Abhyudaya Foundation is a Bengaluru-based, values-driven social institution committed to nation-building through civic leadership, cultural rootedness, and structured social action. Rooted in Bharatiya civilizational values, the Foundation serves as a platform for designing, governing, and enabling long-term initiatives that strengthen citizenship, community responsibility, and ethical leadership across India. The word Abhyudaya means rising or upliftment — reflecting our belief that national transformation begins with individual consciousness, collective responsibility, and disciplined action.',
  keywords: ['abhyudaya', 'foundation', 'charity', 'seva', 'samskruthi', 'trust', 'bharat', 'culture', 'techforgood', 'youth', 'empowerment', 'nationalism', 'heritage'],
  icons: {
    icon: '/brand/logo_af_square_without_bg.png',
  },
  openGraph: {
    title: 'Abhyudaya Foundation',
    description: 'Abhyudaya Foundation is a Bengaluru-based, values-driven social institution committed to nation-building through civic leadership, cultural rootedness, and structured social action. Rooted in Bharatiya civilizational values, the Foundation serves as a platform for designing, governing, and enabling long-term initiatives that strengthen citizenship, community responsibility, and ethical leadership across India. The word Abhyudaya means rising or upliftment — reflecting our belief that national transformation begins with individual consciousness, collective responsibility, and disciplined action.',
    url: 'https://abhyudayafoundation.in/',
    siteName: 'Abhyudaya Foundation',
    images: [
      {
        url: '/brand/logo_af_without_bg.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhyudaya Foundation',
    description: 'Abhyudaya Foundation is a Bengaluru-based, values-driven social institution committed to nation-building through civic leadership, cultural rootedness, and structured social action. Rooted in Bharatiya civilizational values, the Foundation serves as a platform for designing, governing, and enabling long-term initiatives that strengthen citizenship, community responsibility, and ethical leadership across India. The word Abhyudaya means rising or upliftment — reflecting our belief that national transformation begins with individual consciousness, collective responsibility, and disciplined action.',
    images: ['/brand/logo_af_without_bg.png'],
  },
  alternates: {
    canonical: 'https://abhyudayafoundation.in/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-800">
        <JsonLd />
        <GoogleAnalytics />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
