// /src/context/AuthContext.tsx
'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { AuthError, Session, User } from '@supabase/supabase-js'
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

    // Check if session has expired (older than 7 days)
    const checkSessionExpiry = useCallback(async (session: Session | null) => {
        if (session?.user?.created_at) {
            const createdAt = new Date(session.user.created_at).getTime()
            const now = new Date().getTime()
            const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000
            
            if (now - createdAt > sevenDaysInMs) {
                await supabase.auth.signOut() // Automatically sign out if session is older than 7 days
            }
        }
    }, [supabase.auth])

    useEffect(() => {
        // Get initial session
        const getInitialSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setUser(session?.user ?? null)
            await checkSessionExpiry(session)
            setLoading(false)
        }

        getInitialSession()

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null)
                await checkSessionExpiry(session)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [supabase.auth, checkSessionExpiry])

    const sendOtp = async (email: string) => {
        const { error } = await supabase.auth.signInWithOtp({
            email,
        })
        return { error }
    }

    const verifyOtp = async (email: string, token: string) => {
        const { error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: 'email',
        })
        return { error }
    }

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    // Set up interval to check session expiry every hour
    useEffect(() => {
        const interval = setInterval(async () => {
            const { data: { session } } = await supabase.auth.getSession()
            await checkSessionExpiry(session)
        }, 60 * 60 * 1000) // Check every hour

        return () => clearInterval(interval)
    }, [supabase.auth, checkSessionExpiry])

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