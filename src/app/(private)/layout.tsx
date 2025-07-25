// /src/app/(private)/layout.tsx
import { redirect } from 'next/navigation'
import { CreateServerClient } from '@/lib/supabase-server'
import LogoutButton from '../components/LogoutButton'

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await CreateServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1>Private Area</h1>
          <div>
            Welcome, {user.email}
            <LogoutButton />
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
