import { supabase } from '@/lib/supabase'

export async function getAllTeams() {
  const { data, error } = await supabase
    .from('team_with_members_and_leads')
    .select('*')

  if (error) throw error
  return data
}