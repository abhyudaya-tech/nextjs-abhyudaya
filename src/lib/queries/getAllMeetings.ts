import { supabase } from '@/lib/supabase'

export async function getAllMeetings() {
  const { data, error } = await supabase
    .from('meeting_minutes')
    .select('*')
    .order('datetime', { ascending: false })

  if (error) throw error

  // Collect unique creator IDs
  const creatorIds = [...new Set(data.map((m) => m.created_by).filter(Boolean))]

  // Fetch creator names
  const { data: users } = await supabase
    .from('users')
    .select('id, full_name')
    .in('id', creatorIds)

  const userMap = Object.fromEntries((users || []).map((u) => [u.id, u.full_name]))

  // Add signed URL and creator name
  const meetingsWithExtras = await Promise.all(
    data.map(async (meeting) => {
      const cleanId = meeting.id.trim().replaceAll('/', '_') + '.pdf'
      let signedUrl = null

      const { data: signed, error: signedError } = await supabase.storage
        .from('meeting-pdfs')
        .createSignedUrl(cleanId, 60 * 5)

      if (signedError) {
        console.error('Signed URL error:', signedError.message)
      } else {
        signedUrl = signed?.signedUrl
      }

      return {
        ...meeting,
        pdf_url: signedUrl,
        created_by_name: userMap[meeting.created_by] || 'Unknown',
      }
    })
  )

  return meetingsWithExtras
}
