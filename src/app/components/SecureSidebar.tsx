'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { User } from '@supabase/supabase-js'
import { FaClipboardList, FaUsers, FaUser, FaChartBar, FaUserFriends, FaRupeeSign } from 'react-icons/fa'
import LogoutButton from './LogoutButton'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <FaChartBar /> },
  { name: 'Minutes of Meeting', href: '/dashboard/minutes-of-meeting', icon: <FaClipboardList /> },
  { name: 'Team Members', href: '/dashboard/members', icon: <FaUserFriends /> },
  { name: 'Teams', href: '/dashboard/teams', icon: <FaUsers /> },
  { name: 'FinBook', href: '/dashboard/finbook', icon: <FaRupeeSign /> },
]

export default function SecureSidebar(user: User) {
  const pathname = usePathname()
  const userEmail = user?.email || ''

  // Get allowed emails from environment variable
  const allowedEmails = (process.env.NEXT_PUBLIC_RESTRICTED_FEATURE_EMAILS || '')
    .split(',')
    .map(email => email.trim().toLowerCase())

  // Filter out restricted items if user not authorized
  const visibleItems = navItems.filter(item => {
    if (item.href === '/dashboard/finbook') {
      return allowedEmails.includes(userEmail.toLowerCase())
    }
    return true
  })

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-800 min-h-screen px-3 py-6 border-r shadow-sm">
      <div className="mb-3 border-b border-gray-400">
        <Link href="/dashboard" className="flex justify-center mb-4">
          <Image
            src="/brand/logo_af_square_without_bg.png"
            alt="Logo"
            width={160}
            height={160}
          />
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 text-white text-sm font-medium">
          {visibleItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${pathname === item.href
                  ? 'bg-orange-100 text-orange-700'
                  : 'hover:bg-orange-200 hover:text-orange-700'
                  }`}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-gray-600 space-y-3">
        <Link href="/dashboard/profile" className="flex items-center px-3 py-2 text-white text-sm font-medium hover:bg-orange-200 hover:text-orange-700 rounded-lg transition-colors">
          <FaUser className="mr-3 text-lg" />
          My Profile
        </Link>
        <LogoutButton />
      </div>
    </aside>
  )
}
