import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Restricted URLs that require feature access check
const RESTRICTED_URLS = ['/dashboard/finbook']

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )
  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  // If trying to access private routes without authentication
  if (request.nextUrl.pathname.startsWith('/dashboard') && !user) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // If authenticated user tries to access login page, redirect to private area
  if (request.nextUrl.pathname === '/auth/signin' && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Check if accessing restricted URL
  const isRestrictedUrl = RESTRICTED_URLS.some(url => request.nextUrl.pathname.startsWith(url))
  
  if (isRestrictedUrl) {
    // Get allowed emails from environment variable
    const allowedEmails = process.env.NEXT_PUBLIC_RESTRICTED_FEATURE_EMAILS?.split(',').map(email => email.trim().toLowerCase()) || []
    
    if (!user?.email || !allowedEmails.includes(user.email.toLowerCase())) {
      return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url))
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}