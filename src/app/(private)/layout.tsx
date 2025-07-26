// /src/app/(private)/layout.tsx
import { redirect } from 'next/navigation'
import { CreateServerClient } from '@/lib/supabase-server'
import SecureSidebar from '../components/SecureSidebar'

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  const supabase = await CreateServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/signin')

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="w-64 flex-shrink-0 h-screen sticky top-0">
        <SecureSidebar {...user} />
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 py-8 bg-gray-100">
        {children}
      </main>
    </div>
  )
}
