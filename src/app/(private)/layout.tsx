// /src/app/(private)/layout.tsx
import { redirect } from 'next/navigation'
import { CreateServerClient } from '@/lib/supabase-server'
import SecureSidebar from '../components/SecureSidebar'

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  const supabase = await CreateServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/signin')

  return (
    <div className="flex">
      <SecureSidebar {...user} />
      <main className="flex-1 px-6 py-8 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  )
}

