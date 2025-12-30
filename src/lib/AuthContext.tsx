// /src/context/AuthContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { AuthError, User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase-client'

interface AuthContextType {
    user: User | null
    loading: boolean
    sendOtp: (email: string) => Promise<{ error: AuthError | null }>
    verifyOtp: (email: string, token: string) => Promise<{ error: AuthError | null }>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        // Get initial session
        const getInitialSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession()
                setUser(session?.user ?? null)
                setLoading(false)
            } catch (error) {
                console.error('Error getting initial session:', error)
                setLoading(false)
            }
        }

        getInitialSession()

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                console.log('Auth state changed:', event, session?.user?.email)
                setUser(session?.user ?? null)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [supabase.auth])

    const sendOtp = async (email: string) => {
        const { error } = await supabase.auth.signInWithOtp({
            email,
        })
        return { error }
    }

    const verifyOtp = async (email: string, token: string) => {
        try {
            console.log('Starting OTP verification for:', email)
            const { data, error } = await supabase.auth.verifyOtp({
                email,
                token,
                type: 'email',
            })
            console.log('OTP verification response:', { data, error })
            return { error }
        } catch (err) {
            console.error('OTP verification exception:', err)
            return { error: err as AuthError | null }
        }
    }

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ user, loading, sendOtp, verifyOtp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}