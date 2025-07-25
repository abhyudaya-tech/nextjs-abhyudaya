// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/AuthContext'

export const metadata: Metadata = {
  title: 'Abhyudaya Foundation',
  description: 'where passion meets purpose',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
