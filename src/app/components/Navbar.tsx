'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Changemakers', href: '/changemakers' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Donate', href: '/donate' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 py-1">
          <Image src="/brand/logo_af_without_bg.png" alt="Logo" width={160} height={80} />
          {/* <span className="text-lg font-bold text-white tracking-wide">Abhyudaya Foundation</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
