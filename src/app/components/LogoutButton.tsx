'use client'

import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const { signOut } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push('/auth/signin')
  }

  return (
    <button
      onClick={handleLogout}
      className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
    >
      Logout
    </button>
  )
}