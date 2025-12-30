'use client'

import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export default function LogoutButton() {
  const { signOut } = useAuth()
  const router = useRouter()
  const [showConfirm, setShowConfirm] = useState(false)

  const handleLogout = async () => {
    await signOut()
    router.push('/auth/signin')
  }

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
      >
        <FaSignOutAlt className="text-lg" />
        Logout
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full">
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-900">Confirm Logout</h3>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaXmark className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600">Are you sure you want to logout? You&apos;ll need to sign in again to access your account.</p>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowConfirm(false)
                    handleLogout()
                  }}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}