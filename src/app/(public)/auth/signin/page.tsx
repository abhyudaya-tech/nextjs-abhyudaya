'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  
  const { sendOtp, verifyOtp, user } = useAuth()
  const router = useRouter()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (!email) {
        setError('Please enter your email address')
        setIsLoading(false)
        return
      }

      const { error } = await sendOtp(email)

      if (error) {
        setError(error.message || 'Failed to send OTP. Please try again.')
        setIsLoading(false)
      } else {
        setOtpSent(true)
        setIsLoading(false)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      console.error('Send OTP error:', err)
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (!email || !otp) {
        setError('Please enter both email and OTP')
        setIsLoading(false)
        return
      }

      console.log('Verifying OTP for email:', email)
      const { error } = await verifyOtp(email, otp)
      console.log('Verify OTP response - error:', error)

      if (error) {
        const errorMsg = error instanceof Error ? error.message : JSON.stringify(error)
        setError(errorMsg || 'Failed to verify OTP. Please try again.')
        setIsLoading(false)
      } else {
        // Verification successful
        console.log('OTP verified successfully, user:', user)
        
        // Wait a bit for the auth state to update
        let attempts = 0
        const maxAttempts = 20 // Max 4 seconds (200ms * 20)
        
        const waitForAuth = setInterval(() => {
          attempts++
          if (user) {
            clearInterval(waitForAuth)
            console.log('User authenticated, redirecting...')
            router.push('/dashboard')
          } else if (attempts >= maxAttempts) {
            clearInterval(waitForAuth)
            console.warn('Timeout waiting for auth state, redirecting anyway...')
            router.push('/dashboard')
          }
        }, 200)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      console.error('OTP verification error:', err)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/auth-bg.svg")',
          backgroundColor: '#1f2937',
        }}
      />
      
      {/* Subtle overlay for better card visibility */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="w-full max-w-md px-4">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl p-8 border border-white/20">
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Image
                src="/brand/logo_af_square_without_bg.png"
                alt="Abhyudaya Logo"
                width={160}
                height={160}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {otpSent ? 'Verify OTP' : 'Welcome Back'}
            </h1>
            <p className="text-sm text-gray-700">
              {otpSent ? `We sent a code to ${email}` : 'Sign in to access your account'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
            {!otpSent ? (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white/80 transition-all duration-200"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-800 mb-2">
                  Enter OTP Code
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  maxLength={6}
                  className="w-full px-4 py-4 bg-white/50 border border-white/20 rounded-xl text-gray-900 placeholder-gray-600 text-center text-3xl tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white/80 transition-all duration-200"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-500/20 border border-red-300/50 rounded-lg">
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </span>
              ) : (
                otpSent ? 'Verify OTP' : 'Send OTP'
              )}
            </button>

            {otpSent && (
              <button
                type="button"
                onClick={() => {
                  setOtpSent(false)
                  setOtp('')
                  setError('')
                }}
                className="w-full py-3 px-4 bg-white/30 hover:bg-white/50 text-gray-900 font-medium rounded-xl transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                Use Different Email
              </button>
            )}
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-center text-xs text-gray-700">
              By signing in, you agree to our{' '}
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
