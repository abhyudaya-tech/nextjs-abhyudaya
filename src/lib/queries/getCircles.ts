import { supabase } from '@/lib/supabase'

// Define types for the team and its members
export interface Member {
    id: string;
    user_id: string;
    full_name: string;
    phone: string;
    email: string;
    role: string;
    joined_at: string;
}

export interface Circle {
    id: string;
    name: string;
    description: string;
    type: string;
}

interface CircleMemberRow {
    id: string;
    user_id: string;
    circle_id: string;
    role: string;
    joined_at: string;
    is_active: boolean;
}

interface UserRow {
    id: string;
    full_name: string;
    phone: string;
    email: string;
}

export async function getAllCircles() {
  const { data, error } = await supabase
    .from('ycm_circles')
    .select('*')

  if (error) throw error
  return data
}

export async function getCircleDetails(id: string) {
  const { data, error } = await supabase
    .from('ycm_circles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error

  // Fetch members of the circle
  const { data: circleMembers, error: membersError } = await supabase
    .from('ycm_circle_members')
    .select('*')
    .eq('circle_id', id)
    .eq('is_active', true)
    .order('joined_at', { ascending: true })

  if (membersError) throw membersError

  // Batch fetch user details for all member user_ids to avoid N requests
  const userIds = (circleMembers || []).map((r: CircleMemberRow) => r.user_id).filter(Boolean)

  let usersMap: Record<string, UserRow> = {}
  if (userIds.length) {
    const { data: users, error: usersError } = await supabase
      .from('ycm_users')
      .select('id, full_name, phone, email')
      .in('id', userIds)

    if (usersError) throw usersError

    usersMap = (users || []).reduce((acc: Record<string, UserRow>, u: UserRow) => {
      acc[u.id] = u
      return acc
    }, {})
  }
  // Build flattened members array with user info
  const membersWithUser = (circleMembers || []).map((r: CircleMemberRow): Member => {
    const user = usersMap[r.user_id]
    return {
      id: r.id,
      user_id: r.user_id,
      full_name: user?.full_name ?? null,
      email: user?.email ?? null,
      phone: user?.phone ?? null,
      role: r.role,
      joined_at: r.joined_at,
    }
  })

  // Sort by role priority, then by joined_at (oldest first), then by name
  const rolePriority = ['lead_changemaker', 'circle_coordinator', 'core_changemaker', 'changemaker']

  membersWithUser.sort((a: Member, b: Member) => {
    const aRole = (a.role || '').toLowerCase()
    const bRole = (b.role || '').toLowerCase()
    const aIndex = rolePriority.indexOf(aRole)
    const bIndex = rolePriority.indexOf(bRole)
    const aPos = aIndex === -1 ? rolePriority.length : aIndex
    const bPos = bIndex === -1 ? rolePriority.length : bIndex

    if (aPos !== bPos) return aPos - bPos

    // same role: sort by joined_at (oldest first) if available
    if (a.joined_at && b.joined_at) {
      const aTime = new Date(a.joined_at).getTime()
      const bTime = new Date(b.joined_at).getTime()
      if (!Number.isNaN(aTime) && !Number.isNaN(bTime) && aTime !== bTime) return aTime - bTime
    }

    // fallback: alphabetical by full_name
    return (a.full_name || '').localeCompare(b.full_name || '')
  })

  return {
    ...data,
    members: membersWithUser,
  }
}